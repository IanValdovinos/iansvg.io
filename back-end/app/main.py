from fastapi import FastAPI, Depends, HTTPException, Path
from starlette import status
from typing import Annotated

import models
from models import Projects
from database import engine, SessionLocal
from sqlalchemy.orm import Session

app = FastAPI()

models.Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session, Depends(get_db)]

@app.get("/author", status_code=status.HTTP_200_OK)
async def get_author():
    return {"author": "Ian Samuel Valdovinos Granados"}

@app.get("/projects", status_code=status.HTTP_200_OK)
async def get_all_projects(db: db_dependency):
    return db.query(Projects).all()

@app.get("/project/{project_id}", status_code=status.HTTP_200_OK)
async def get_project_by_id(db: db_dependency, project_id: int = Path(gt=0)):
    todo_model = db.query(Projects).filter(Projects.id == project_id).first()
    if todo_model is not None:
        return todo_model

    raise HTTPException(status_code=404, detail="Project not found.")