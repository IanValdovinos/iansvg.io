# iansvg.io

## Backend Localhost Bootup

Create instance that works with development (localhost) database

`docker compose --profile dev up`

Create instance that works with production (Google Cloud SQL) database

`docker compose --profile prod up`

To create new container:

`docker build -t fastapi-app .`

To run container:

`docker run --rm --env-file .env -p 8080:8080 fastapi-app`

## Frontend Localhost Bootup

`npm run dev`

## Package Installations

All these packages are automatically installed when using Docker.

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
