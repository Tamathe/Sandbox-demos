# Example: Standalone Next.js Site

A minimal Next.js 15 app that fetches public courses from the Sandbox API and displays them.

## Run it

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## What it shows

- Fetching from `GET /api/public/v1/courses` (no auth required)
- Cursor-based pagination
- Basic error handling

## Extend it

- Add more public endpoints (`/departments`, `/events`, `/tools`)
- Add a backend proxy route (`app/api/sandy/route.ts`) to forward Sandy chat requests
- Deploy to Vercel: `vercel deploy`

## Notes

This example uses the public API only. No `@uky.edu` account needed to run it.
For authenticated data, see [auth.md](../../docs/auth.md).
