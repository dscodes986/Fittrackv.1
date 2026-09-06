# FitTrack Backend API

Production-quality REST API for FitTrack workout tracking application.

## Tech Stack

- **Node.js** + **TypeScript**
- **NestJS** - Backend framework
- **PostgreSQL** - Database
- **Prisma** - ORM
- **JWT** - Authentication

## Prerequisites

- Node.js 18+ 
- PostgreSQL 14+
- npm or yarn

## Installation

### 1. Install Dependencies

```powershell
cd fittrack-backend
npm install
```

### 2. Setup Environment Variables

Copy `.env.example` to `.env`:

```powershell
Copy-Item .env.example .env
```

Edit `.env` and configure:

```env
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/fittrack?schema=public"
JWT_SECRET="your-super-secret-jwt-key-change-in-production"
JWT_REFRESH_SECRET="your-super-secret-refresh-key-change-in-production"
```

### 3. Setup PostgreSQL Database

**Option A: Local PostgreSQL Installation**

1. Install PostgreSQL from https://www.postgresql.org/download/windows/
2. During installation, set a password for the `postgres` user
3. Create the database:

```powershell
# Open psql (PostgreSQL command line)
psql -U postgres

# In psql:
CREATE DATABASE fittrack;
\q
```

**Option B: Docker (if you have Docker Desktop)**

```powershell
docker run --name fittrack-postgres -e POSTGRES_PASSWORD=password -e POSTGRES_DB=fittrack -p 5432:5432 -d postgres:14
```

### 4. Run Database Migrations

```powershell
npx prisma migrate dev --name init
```

This will:
- Create all tables
- Generate Prisma Client

### 5. Seed Database

```powershell
npx prisma db seed
```

This adds 21 default exercises (Bench Press, Squat, Deadlift, etc.)

## Development

### Start the Server

```powershell
npm run dev
```

The API will be available at: **http://localhost:3000/api**

### View Database (Prisma Studio)

```powershell
npx prisma studio
```

Opens a visual database browser at http://localhost:5555

## API Endpoints

### Authentication

```
POST /api/auth/register
POST /api/auth/login
POST /api/auth/refresh
```

### Users

```
GET    /api/users/me
PATCH  /api/users/me
GET    /api/users/me/settings
PATCH  /api/users/me/settings
DELETE /api/users/me
```

## Testing the API

### Register a User

```powershell
curl -X POST http://localhost:3000/api/auth/register `
  -H "Content-Type: application/json" `
  -d '{
    "email": "test@example.com",
    "password": "password123",
    "name": "Test User"
  }'
```

### Login

```powershell
curl -X POST http://localhost:3000/api/auth/login `
  -H "Content-Type: application/json" `
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

### Get User Profile (with JWT token)

```powershell
curl http://localhost:3000/api/users/me `
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

## Project Structure

```
fittrack-backend/
├── prisma/
│   ├── schema.prisma       # Database schema
│   ├── seed.ts             # Seed data
│   └── migrations/         # Migration history
├── src/
│   ├── auth/               # Authentication
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   ├── auth.module.ts
│   │   ├── strategies/
│   │   ├── guards/
│   │   └── dto/
│   ├── users/              # User management
│   │   ├── users.controller.ts
│   │   ├── users.service.ts
│   │   └── users.module.ts
│   ├── prisma/             # Database service
│   │   ├── prisma.service.ts
│   │   └── prisma.module.ts
│   ├── app.module.ts       # Root module
│   └── main.ts             # Entry point
├── .env                    # Environment variables
├── package.json
└── tsconfig.json
```

## Troubleshooting

### Database Connection Error

1. Verify PostgreSQL is running:
   ```powershell
   # Check if process is running
   Get-Process -Name postgres
   ```

2. Test connection:
   ```powershell
   psql -U postgres -d fittrack
   ```

3. Verify DATABASE_URL in `.env` matches your setup

### Port Already in Use

```powershell
# Find process on port 3000
netstat -ano | findstr :3000

# Kill process
taskkill /PID <PID> /F
```

### Prisma Client Not Generated

```powershell
npx prisma generate
```

## Next Steps - Phase 2

After the backend is running and tested, we'll build:

1. Mobile app (React Native + Expo)
2. Exercise library UI
3. Workout templates
4. Active workout tracking
5. Progress charts

---

**Status:** ✅ Phase 1 Complete - Backend Foundation
