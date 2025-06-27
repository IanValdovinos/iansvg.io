# iansvg.io Backend

## Backend Localhost Bootup

Define and run application that works with production database:

`docker compose --profile dev up`

`docker compose --profile dev up --abort-on-container-exit --remove-orphans && \
docker compose --profile dev down --rmi all --volumes --remove-orphans`

To create new Docker image from a Dockerfile:

`docker build -t fastapi-app .`

To run Docker container from created image:

`docker run --rm --env-file [ENV_FILE_TO_USE] -p 8080:8080 fastapi-app`

## Backend Deployment to Google Cloud

Project ID: iansvg

Download and authenticate to Google Cloud CLI:

`gcloud auth login`

Build the production Docker image locally:

`docker buildx build --platform linux/amd64 -t gcr.io/iansvg/fastapi-prod .`

Push image to Google Cloud Container Registry:

`docker push gcr.io/iansvg/fastapi-prod`

(Optional) Enable Cloud Run (if not already):

`gcloud services enable run.googleapis.com`

Deploy:

`gcloud run deploy iansvg \
  --image gcr.io/iansvg/fastapi-prod \
  --platform managed \
  --add-cloudsql-instances iansvg:us-central1:iansvg \
  --region us-central1 \
  --allow-unauthenticated \
  --port 8080 \
  --env-vars-file .env.yaml`

## Alembic Table Enhancement

1. Edit Your SQLAlchemy Models

2. Move (cd) to the app/ directory

3. Generate a new migration script:

`alembic revision --autogenerate -m "Enhance table <table_name>: add/remove/update <column>"`

4. Review and edit the migration script (alembic/versions/)

5. Apply the migrations:

`alembic upgrade head`

If you get an error message that says "Target databse is not up to date", then upgrade your database to the latest migration:

`alembic upgrade head`

If you get error messages indicating that a column already exists, then you have to mark the migration as applied:

`alembic stamp head`

The run the `alembic upgrade head` command again.

## Package Installations

All these packages are automatically installed when using Docker (through requirements.txt).

### Basic

`pip install fastapi`

`pip install "uvicorn[standard]"`

`pip install python-multipart`

### Database

`pip install sqlalchemy`

`brew install sqlite`

`pip install psycopg2-binary`

`pip install alembic`

### Encryption

`pip install passlib`

`pip install bcrypt==4.0.1`

### JWT

`pip install "python-jose[cryptography]"`

### Google Cloud

`pip install google-cloud`

`pip install google-clou-storage`
