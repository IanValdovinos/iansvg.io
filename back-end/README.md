# iansvg.io Backend

## Backend Localhost Bootup

Define and run application that works with development (localhost) database:

`docker compose --profile dev up`

Define and run application that works with production (Google Cloud SQL) database:

`docker compose --profile prod up`

To create new Docker image from a Dockerfile:

`docker build -t fastapi-app .`

To run Docker container from created image:

`docker run --rm --env-file [ENV_FILE_TO_USE] -p 8080:8080 fastapi-app`

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
