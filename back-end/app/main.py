from fastapi import FastAPI, Depends, HTTPException, Path
from pydantic import BaseModel, Field
from starlette import status
from typing import Annotated
from datetime import datetime

import models
from models import Projects
from database import engine, SessionLocal
from sqlalchemy.orm import Session

from routers import projects
from routers import auth

app = FastAPI()

# ######################################################
# ################### DATABASE SETUP ###################
# ######################################################

models.Base.metadata.create_all(bind=engine)



# #####################################################
# ################### IMPORT ROUTER ###################
# #####################################################
app.include_router(projects.router)
app.include_router(auth.router)

# #####################################################
# ################### DEFAULT ROUTES ##################
# #####################################################
@app.get("/author", status_code=status.HTTP_200_OK)
async def get_author():
    return {"author": "Ian Samuel Valdovinos Granados"}

@app.get("/day", status_code=status.HTTP_200_OK)
async def get_week_day():
    return {"day": datetime.today().strftime('%A')}