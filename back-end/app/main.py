from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from starlette import status
from pydantic import BaseModel, Field
from datetime import datetime

import smtplib
from email.mime.text import MIMEText

import models
from database import engine

from routers import projects
from routers import auth

from dotenv import load_dotenv
import os

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

SMPT_SENDER = os.getenv("SMPT_SENDER")
SMTP_PASSWORD = os.getenv("SMTP_SENDER_PASSWORD")
IANSVG_CONTACT_EMAIL = os.getenv("IANSVG_CONTACT_EMAIL")

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
# ################### PYDANTIC MODELS #################
# #####################################################
class EmailRequest(BaseModel):
    name: str = Field(min_length=1, max_length=40)
    email: str= Field(min_length=1, max_length=40)
    message: str= Field(min_length=1, max_length=1000)

    model_config = {
        "json_schema_extra": {
            "example": {
                "name": "SENDER_NAME",
                "email": "SENDER_EMAIL",
                "message": "EMAIL_MESSAGE"
            }
        }
    }

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

@app.post("/send-email", status_code=status.HTTP_200_OK)
async def send_email(email_request: EmailRequest):
    recipients = [IANSVG_CONTACT_EMAIL]
    message  = f"""
New contact form submission from {email_request.name} ({email_request.email}):

{email_request.message}
    """
    
    try:
        msg = MIMEText(message)
        msg['Subject'] = f"Contact Form Submission from {email_request.name}"
        msg['From'] = email_request.email
        msg['To'] = IANSVG_CONTACT_EMAIL
        with smtplib.SMTP('smtp.gmail.com', 587) as server:
            server.starttls()
            server.login(SMPT_SENDER, SMTP_PASSWORD)
            server.sendmail(SMPT_SENDER, recipients, msg.as_string())

        return {"status": "Email sent successfully"}
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to send email: {str(e)}"
        )