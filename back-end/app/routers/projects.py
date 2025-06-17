from fastapi import APIRouter, Depends, HTTPException, Path
from pydantic import BaseModel, Field
from starlette import status
from typing import Annotated
from datetime import datetime
from .auth import get_current_user

from database import SessionLocal
from models import Projects
from sqlalchemy.orm import Session

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session, Depends(get_db)]
user_dependency = Annotated[dict, Depends(get_current_user)]

class ProjectRequest(BaseModel):
    title: str = Field(min_length=1, max_length=30)
    description: str= Field(min_length=1, max_length=200)

    model_config = {
        "json_schema_extra": {
            "example": {
                "title": "PROJECT_TITLE",
                "description": "PROJECT_DESCRIPTION"
            }
        }
    }

@router.get("/projects", status_code=status.HTTP_200_OK)
async def get_all_projects(db: db_dependency):
    return db.query(Projects).all()

@router.get("/project/{project_id}", status_code=status.HTTP_200_OK)
async def get_project_by_id(db: db_dependency, project_id: int = Path(gt=0)):
    todo_model = db.query(Projects).filter(Projects.id == project_id).first()
    if todo_model is not None:
        return todo_model

    raise HTTPException(status_code=404, detail="Project not found.")

@router.post("/project", status_code=status.HTTP_201_CREATED)
async def create_project(user: user_dependency, db: db_dependency, project_request: ProjectRequest):
    if user is None:
        raise HTTPException(status_code=401, detail="Authentication failed.")
    
    project_request = Projects(**project_request.model_dump(), owner_id=user.get("id"))

    db.add(project_request)
    db.commit()

@router.put("/project/{project_id}", status_code=status.HTTP_204_NO_CONTENT)
async def update_project(user: user_dependency, db: db_dependency, project_request: ProjectRequest, project_id: int = Path(gt=0)):
    if user is None:
        raise HTTPException(status_code=401, detail="Authentication failed.")
    
    project_model = db.query(Projects).filter(Projects.id == project_id).filter(Projects.owner_id == user.get('id')).first()
    if project_model is None:
        raise HTTPException(status_code=404, detail="Project not found.")

    project_model.title = project_request.title
    project_model.description = project_request.description

    db.add(project_model)
    db.commit()

@router.delete("/project/{project_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_project(user: user_dependency, db: db_dependency, project_id: int = Path(gt=0)):
    if user is None:
        raise HTTPException(status_code=401, detail="Authentication failed.")
    
    project_model = db.query(Projects).filter(Projects.id == project_id).filter(Projects.owner_id == user.get('id')).first()
    if project_model is None:
        raise HTTPException(status_code=404, detail="Project not found.")

    db.query(Projects).filter(Projects.id == project_id).filter(Projects.owner_id == user.get('id')).delete()
    db.commit()