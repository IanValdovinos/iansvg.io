from fastapi import FastAPI, Depends, HTTPException, Path
from pydantic import BaseModel, Field
from starlette import status
from typing import Annotated
from datetime import datetime

import models
from models import Projects
from database import engine, SessionLocal
from sqlalchemy.orm import Session

app = FastAPI()

# ######################################################
# ################### DATABASE SETUP ###################
# ######################################################

models.Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session, Depends(get_db)]

# #######################################################
# ################### PYDANTIC MODELS ###################
# #######################################################

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

# #########################################################
# ################### FASTAPI ENDPOINTS ###################
# #########################################################
@app.get("/author", status_code=status.HTTP_200_OK)
async def get_author():
    return {"author": "Ian Samuel Valdovinos Granados"}

@app.get("/day", status_code=status.HTTP_200_OK)
async def get_week_day():
    return {"day": datetime.today().strftime('%A')}

@app.get("/projects", status_code=status.HTTP_200_OK)
async def get_all_projects(db: db_dependency):
    return db.query(Projects).all()

@app.get("/project/{project_id}", status_code=status.HTTP_200_OK)
async def get_project_by_id(db: db_dependency, project_id: int = Path(gt=0)):
    todo_model = db.query(Projects).filter(Projects.id == project_id).first()
    if todo_model is not None:
        return todo_model

    raise HTTPException(status_code=404, detail="Project not found.")

@app.post("/project", status_code=status.HTTP_201_CREATED)
async def create_project(db: db_dependency, project_request: ProjectRequest):
    project_request = Projects(**project_request.model_dump())

    db.add(project_request)
    db.commit()

@app.put("/project/{project_id}", status_code=status.HTTP_204_NO_CONTENT)
async def update_project(db: db_dependency, project_request: ProjectRequest, project_id: int = Path(gt=0)):
    project_model = db.query(Projects).filter(Projects.id == project_id).first()
    if project_model is None:
        raise HTTPException(status_code=404, detail="Project not found.")

    project_model.title = project_request.title
    project_model.description = project_request.description

    db.add(project_model)
    db.commit()

@app.delete("/project/{project_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_project(db: db_dependency, project_id: int = Path(gt=0)):
    project_model = db.query(Projects).filter(Projects.id == project_id).first()
    if project_model is None:
        raise HTTPException(status_code=404, detail="Project not found.")

    db.delete(project_model)
    db.commit()