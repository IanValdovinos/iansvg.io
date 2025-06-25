from fastapi import FastAPI
from starlette import status
from datetime import datetime

import models
from database import engine

from routers import projects
from routers import auth

from dotenv import load_dotenv

load_dotenv() # Load environment variables

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