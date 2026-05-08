# Development Guide

## Project Structure

This is a monorepo with separate frontend and backend applications:

```
therupeeroutine-main-3/
├── frontend/                    # React/Vite frontend
│   ├── src/                    # Source code
│   ├── public/                 # Static assets
│   ├── package.json
│   ├── vite.config.ts
│   ├── tailwind.config.ts
│   ├── README.md               # Frontend documentation
│   └── .env.example            # Environment variables template
├── backend/                     # Django REST API
│   ├── manage.py
│   ├── requirements.txt
│   ├── config/                 # Django settings
│   ├── blog/                   # Blog app
│   ├── newsletter/             # Newsletter app
│   └── README.md               # Backend documentation
├── scripts/                     # Utility scripts
├── docker-compose.yml          # Database configuration
├── package.json                # Root package.json with workspace scripts
└── README.md                   # Project overview
```

## Getting Started

### Quick Start (Full Stack)

```sh
# From root directory
npm run install:all

# Start frontend development server
npm run dev

# In another terminal, start backend
cd backend
python manage.py runserver
```

### Frontend Development

```sh
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Set up environment
cp .env.example .env.local

# Start development server
npm run dev
```

See `frontend/README.md` for detailed frontend documentation.

### Backend Development

```sh
# Navigate to backend directory
cd backend

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Start development server
python manage.py runserver
```

See `backend/README.md` for detailed backend documentation.

## Available Scripts

### From Root Directory

- `npm run dev` - Start frontend development server
- `npm run build` - Build frontend for production
- `npm run build:dev` - Build frontend for development
- `npm run preview` - Preview production build
- `npm run lint` - Lint frontend code
- `npm run deploy` - Deploy frontend to GitHub Pages
- `npm run install:all` - Install all dependencies (frontend + backend)

### Frontend Scripts (from `frontend/` directory)

- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run preview` - Preview build
- `npm run lint` - ESLint
- `npm run deploy` - GitHub Pages deployment

### Backend Scripts (from `backend/` directory)

- `python manage.py runserver` - Development server
- `python manage.py migrate` - Run database migrations
- `python manage.py createsuperuser` - Create admin user
- `python manage.py test` - Run tests

## Docker Deployment

Start the PostgreSQL database with Docker Compose:

```sh
docker-compose up -d
```

This starts a PostgreSQL 16 container at `localhost:5432`.

## Environment Configuration

### Frontend (frontend/.env.local)

```env
VITE_API_URL=http://localhost:8001/api
```

### Backend (backend/.env)

Configure Django settings and database connection.

## Development Workflow

1. **Feature Branch**: Create a feature branch from main
   ```sh
   git checkout -b feature/feature-name
   ```

2. **Frontend Changes**: Make changes in `frontend/src/`
   - Components go in `src/components/`
   - API calls go in `src/api/`
   - Custom hooks go in `src/hooks/`

3. **Backend Changes**: Make changes in `backend/`
   - Models in app `models.py`
   - Serializers in app `serializers.py`
   - Views in app `views.py`
   - URLs in app `urls.py`

4. **Testing**: Run tests for both frontend and backend
   ```sh
   # Frontend
   cd frontend && npm run lint
   
   # Backend
   cd backend && python manage.py test
   ```

5. **Commit & Push**: Commit changes and push to GitHub
   ```sh
   git add .
   git commit -m "feat: describe your changes"
   git push origin feature/feature-name
   ```

6. **Pull Request**: Create a PR from your branch to main

## Database

The project uses PostgreSQL with Docker. Default credentials:
- Host: `localhost:5432`
- Database: `therupeeroutine`
- User: `postgres`
- Password: `postgres`

> **Note**: Change these credentials in production!

## Useful Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn/ui Components](https://ui.shadcn.com/)
- [Django Documentation](https://docs.djangoproject.com/)
- [Django REST Framework](https://www.django-rest-framework.org/)

## Troubleshooting

### Frontend won't start
```sh
# Clear node_modules and reinstall
cd frontend
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Backend database issues
```sh
# Reset database
python manage.py flush
python manage.py migrate
python manage.py loaddata blog/fixtures/articles.json
```

### Port conflicts
- Frontend: Change port 8000 in `frontend/vite.config.ts`
- Backend: Change port 8001 in `backend/manage.py runserver 0.0.0.0:8001`

