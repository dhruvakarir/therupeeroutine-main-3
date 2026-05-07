## Django Backend for The Rupee Routine

### Local setup

- Ensure Docker is installed.
- From the project root, start Postgres:
  - `docker compose up -d postgres`
- Create and activate a Python virtualenv in `backend/`, install deps, run migrations, and start Django:
  - `cd backend`
  - `python -m venv .venv && source .venv/bin/activate` (Windows: `.venv\\Scripts\\activate`)
  - `pip install -r requirements.txt`
  - `cp .env.example .env` and adjust values if needed
  - `python manage.py migrate`
  - `python manage.py createsuperuser` (optional, for admin)
  - `python manage.py runserver 0.0.0.0:8000`

The API will be available at `http://localhost:8000/api/`.

### Frontend integration

- In the Vite frontend, set `VITE_API_BASE_URL` in your `.env` (for dev):
  - `VITE_API_BASE_URL=http://localhost:8000`

### AWS deployment (high level)

- Build the backend container using the `backend/Dockerfile` and push it to a registry (e.g. ECR).
- Provision an RDS PostgreSQL instance and note its host, database, user, and password.
- Run the container on EC2 or Elastic Beanstalk, passing environment variables:
  - `SECRET_KEY`, `DEBUG=False`, `ALLOWED_HOSTS`, `DB_NAME`, `DB_USER`, `DB_PASSWORD`, `DB_HOST`, `DB_PORT`, `FRONTEND_ORIGINS`.
- Put Nginx or a load balancer (ALB) in front of the container to terminate HTTPS and forward traffic to port 8000.
- Point your frontend `VITE_API_BASE_URL` at the backend domain (for example, `https://api.therupeeroutine.com`).

