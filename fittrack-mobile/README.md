# FitTrack Mobile App

Production-quality React Native + Expo workout tracking application.

## Tech Stack

- **React Native** + **Expo** - Cross-platform mobile development
- **TypeScript** - Type safety
- **Expo Router** - File-based navigation
- **TanStack Query** - Server state management
- **Zustand** - Client state management
- **React Hook Form** + **Zod** - Form handling & validation

## Prerequisites

- Node.js 18+
- npm or yarn
- Expo CLI
- **Android Studio** (for Android emulator) OR **Physical Android device** with Expo Go app
- **Xcode** (for iOS development on macOS)

## Installation

### 1. Install Dependencies

```powershell
cd fittrack-mobile
npm install
```

### 2. Setup Environment Variables

Copy `.env.example` to `.env`:

```powershell
Copy-Item .env.example .env
```

The default configuration points to `http://localhost:3000/api` (backend).

**Important for physical devices:** Change the API URL to your computer's local IP address:

```env
EXPO_PUBLIC_API_URL=http://192.168.1.100:3000/api
```

Find your IP with:
```powershell
ipconfig
```

### 3. Start the Development Server

```powershell
npm start
```

This will open the Expo DevTools in your browser.

### 4. Run on Device/Emulator

**Option A: Physical Device (Recommended)**
1. Install **Expo Go** from Play Store (Android) or App Store (iOS)
2. Scan the QR code shown in terminal/browser
3. App will load on your device

**Option B: Android Emulator**
1. Open Android Studio
2. Start an AVD (Android Virtual Device)
3. Press `a` in terminal or click "Run on Android" in Expo DevTools

**Option C: iOS Simulator (macOS only)**
1. Press `i` in terminal or click "Run on iOS" in Expo DevTools

## Project Structure

```
fittrack-mobile/
├── app/                      # Expo Router screens
│   ├── (auth)/               # Auth stack (login, register)
│   │   ├── _layout.tsx
│   │   ├── login.tsx
│   │   └── register.tsx
│   ├── (tabs)/               # Main tab navigation
│   │   ├── _layout.tsx
│   │   ├── index.tsx         # Home
│   │   ├── workouts.tsx
│   │   ├── start.tsx
│   │   ├── progress.tsx
│   │   └── profile.tsx
│   └── _layout.tsx           # Root layout
├── components/
│   └── ui/                   # Reusable UI components
│       ├── Button.tsx
│       ├── Input.tsx
│       └── Card.tsx
├── constants/
│   └── theme.ts              # Colors, spacing, typography
├── hooks/                    # Custom React hooks
├── services/
│   └── api.ts                # API client with interceptors
├── store/
│   └── authStore.ts          # Zustand auth state
├── types/                    # TypeScript types
└── utils/                    # Utility functions
```

## Features (Phase 1)

### Authentication
- ✅ User registration
- ✅ Email/password login
- ✅ Secure token storage
- ✅ Auto token refresh
- ✅ Logout

### Navigation
- ✅ Tab-based navigation (5 tabs)
- ✅ Auth flow (login → register)
- ✅ Protected routes

### Screens
- ✅ Login
- ✅ Register
- ✅ Home (dashboard)
- ✅ Workouts (templates list)
- ✅ Start workout
- ✅ Progress (charts placeholder)
- ✅ Profile

## Testing Authentication

### 1. Start Backend

```powershell
cd fittrack-backend
npm run dev
```

Backend runs at: http://localhost:3000/api

### 2. Register New User

1. Open the app
2. Tap "Sign up"
3. Enter email, name, and password (min 8 chars)
4. Tap "Create Account"
5. You'll be redirected to the home screen

### 3. Login

1. Tap "Login"
2. Enter your email and password
3. Tap "Login"
4. You'll be redirected to the home screen

## Development Commands

```powershell
# Start development server
npm start

# Start with cache cleared
npx expo start --clear

# Run on Android
npm run android

# Run on iOS
npm run ios

# Run linter
npm run lint

# Format code
npm run format
```

## Troubleshooting

### "Network request failed"

1. Ensure backend is running on port 3000
2. Check `EXPO_PUBLIC_API_URL` in `.env`
3. For physical device: Use your computer's IP address, not `localhost`

### "Unable to resolve module"

```powershell
# Clear cache and reinstall
Remove-Item -Recurse -Force node_modules
npm install
npx expo start --clear
```

### Metro bundler issues

```powershell
# Reset Metro bundler cache
npx expo start --clear
```

### iOS Simulator not opening (macOS)

```powershell
# Open iOS Simulator first
open -a Simulator
npm run ios
```

### Android Emulator not connecting

1. Open Android Studio
2. Tools → Device Manager
3. Start an AVD
4. Wait for emulator to fully boot
5. Run `npm run android`

## Next Steps - Phase 2

After authentication is working:

1. **Exercise Library**
   - Display exercises from backend
   - Search & filter
   - Exercise details

2. **Workout Templates**
   - Create/edit/delete templates
   - Add exercises to templates

3. **Active Workout**
   - Start workout from template
   - Track sets, reps, weight
   - Rest timer

4. **Offline Support**
   - Local data persistence
   - Background sync

---

**Status:** ✅ Phase 1 Complete - Mobile Foundation

**Current Version:** 1.0.0
