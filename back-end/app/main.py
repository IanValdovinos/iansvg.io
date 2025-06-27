from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from starlette import status
from datetime import datetime

import models
from database import engine

from routers import projects
from routers import auth

from dotenv import load_dotenv

load_dotenv() # Load environment variables

app = FastAPI()

origins = [
    "http://localhost:5173",  # Vite development server
    "https://iansvg-edc0a.web.app", # Firebase hosting URL
    "https://iansvg-edc0a.firebaseapp.com", # Firebase hosting URL
    "https://iansvg.io", # Custom domain for the project
    "https://iansvg.com" # Custom domain for the project
]

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,            # Allow specific origins
    allow_credentials=True,
    allow_methods=["*"],              # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],              # Allow all headers
)

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

@app.get("/date", status_code=status.HTTP_200_OK)
async def get_date():
    now = datetime.now()
    return {
        "day": now.day,
        "month": now.month,
        "year": now.year,
        "time": now.strftime('%H:%M:%S'),
        "weekday": now.strftime('%A')
    }