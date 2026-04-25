# Getting Started

## Prerequisites

- A `@uky.edu` email address
- Node.js 18+ (for JavaScript/TypeScript projects)
- Basic familiarity with REST APIs or Next.js

## Step 1 — Pick your build type

| If you want to… | Use |
|-----------------|-----|
| Build a standalone site with your own hosting | [Standalone site](../build-types/standalone-site.md) |
| Build a page that lives inside the Sandbox | [Mini-app](../build-types/mini-app.md) |
| Build a backend tool, bot, or data pipeline | [API integration](../build-types/api-integration.md) |

## Step 2 — Understand the API

The Sandbox exposes two tiers of API access:

**Public API** — no auth required, rate-limited by IP
```
Base: https://the-sandbox.uky.edu/api/public/v1
```
Available to any client from any origin.

**Authenticated API** — requires a valid session cookie
```
Base: https://the-sandbox.uky.edu/api
```
The session cookie (`uky-session`) is set when a user logs in at `the-sandbox.uky.edu`. Authenticated endpoints are only callable from the Sandbox domain or `localhost:3000` due to CORS restrictions — see [auth docs](auth.md) for how to work with this.

## Step 3 — Request developer access (optional)

If your integration needs access beyond the public API (e.g., a mini-app or scoped server-side integration), email tsthe2@uky.edu with:

- What you're building
- Which API endpoints you need
- Your `@uky.edu` email

## Step 4 — Build locally

Clone a starter:
```bash
# Next.js standalone site starter
git clone https://github.com/Tamathe/Sandbox-demos
cd examples/standalone-nextjs
npm install
npm run dev
```

Or start from scratch — the Sandbox API is standard REST/JSON with SSE for streaming.

## Step 5 — Submit for listing

When your app is ready: [submit-app issue →](https://github.com/Tamathe/Sandbox-demos/issues/new?template=submit-app.yml)
