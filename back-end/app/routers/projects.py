from fastapi import APIRouter, Depends, HTTPException, Path, File, UploadFile, Form
from pydantic import BaseModel, Field
from google.cloud import storage
from starlette import status
from typing import Annotated
from datetime import datetime
from .auth import get_current_user

from database import SessionLocal
from models import Projects
from sqlalchemy.orm import Session

import os
import logging

router = APIRouter(
    prefix="/projects",
    tags=["projects"]
)

# Load bucket name and GCP credentials path from env
GCS_BUCKET_NAME = os.getenv("GCS_BUCKET_NAME")
GOOGLE_CREDENTIALS_FILE = os.getenv("GOOGLE_APPLICATION_CREDENTIALS")

# Init GCS client
storage_client = storage.Client.from_service_account_json(GOOGLE_CREDENTIALS_FILE)
bucket = storage_client.bucket(GCS_BUCKET_NAME)

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

@router.get("/", status_code=status.HTTP_200_OK)
async def get_all_projects(db: db_dependency):
    return db.query(Projects).all()

@router.get("/project/{project_id}", status_code=status.HTTP_200_OK)
async def get_project_by_id(db: db_dependency, project_id: int = Path(gt=0)):
    todo_model = db.query(Projects).filter(Projects.id == project_id).first()
    if todo_model is not None:
        return todo_model

    raise HTTPException(status_code=404, detail="Project not found.")

@router.post("/project", status_code=status.HTTP_201_CREATED)
async def create_project(
    user: user_dependency,
    db: db_dependency,
    project_image_cover: UploadFile = File(...),
    title: str = Form(...),
    description: str = Form(...)
):
    if user is None:
        raise HTTPException(status_code=401, detail="Authentication failed.")

    if not project_image_cover.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="File must be an image.")

    # First, create and commit the project record without the image URL
    new_project = Projects(
        title=title,
        description=description,
        owner_id=user.get("id"),
        cover_image_url=None
    )
    db.add(new_project)
    db.commit()
    db.refresh(new_project)  # Get the generated ID

    # Use the project ID in the blob path
    blob_path = f"project_covers/project_{new_project.id}_{project_image_cover.filename}"
    blob = bucket.blob(blob_path)
    blob.upload_from_file(project_image_cover.file, content_type=project_image_cover.content_type)

    # Update the project with the image URL
    new_project.cover_image_url = blob.public_url
    db.add(new_project)
    db.commit()

    return {"image_url": blob.public_url}

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

    # Delete the image from Google Cloud Storage if it exists
    if project_model.cover_image_url:
        # Extract the blob path from the public URL
        # Assuming the public_url is in the format: https://storage.googleapis.com/{bucket_name}/{blob_path}
        try:
            blob_path = project_model.cover_image_url.split(f"/{GCS_BUCKET_NAME}/", 1)[1]
            blob = bucket.blob(blob_path)
            blob.delete()
        except Exception as e:
            logging.exception(f"Failed to delete image from GCS for project {project_id}: {e}")

    db.query(Projects).filter(Projects.id == project_id).filter(Projects.owner_id == user.get('id')).delete()
    db.commit()