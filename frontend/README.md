# The Rupee Routine Frontend

A React 18 + TypeScript + Vite frontend application for The Rupee Routine financial education platform.

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Forms**: React Hook Form
- **State Management**: React Query
- **Routing**: React Router v6

## Getting Started

### Prerequisites
- Node.js 16+ & npm (or bun)
- Clone the parent repository

### Installation

```sh
# Install dependencies
npm install

# Or using bun
bun install
```

### Configuration

1. Copy `.env.example` to `.env.local`:
```sh
cp .env.example .env.local
```

2. Update `.env.local` with your API endpoints:
```
VITE_API_URL=http://localhost:8001/api
```

### Development

```sh
# Start the development server
npm run dev

# The app will be available at http://localhost:8000
```

### Building

```sh
# Build for production
npm run build

# Build for development (with source maps)
npm run build:dev

# Preview production build
npm run preview
```

### Linting

```sh
npm run lint
```

## Project Structure

```
src/
├── api/                  # API client functions
├── components/          # React components
│   ├── ui/             # Shadcn/ui components
│   ├── BlogCard.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ...
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Page components
├── App.tsx             # Root component
├── main.tsx            # Entry point
└── index.css           # Global styles

public/                 # Static assets
```

## Deployment

The project is configured for deployment to GitHub Pages:

```sh
npm run deploy
```

Or from the root directory:

```sh
npm run deploy
```

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API base URL | `http://localhost:8001/api` |

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build with development settings
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## Notes

- The app uses Vite for fast development and optimized production builds
- Tailwind CSS is configured with custom configuration in `tailwind.config.ts`
- All UI components are typed with TypeScript
- The app uses React Router for client-side routing
- API calls are managed through the `api/` directory with proper typing

## Contributing

When adding new features:
1. Create components in `components/`
2. Add API functions in `api/`
3. Create custom hooks in `hooks/`
4. Use TypeScript for all new code
5. Follow the existing code style

