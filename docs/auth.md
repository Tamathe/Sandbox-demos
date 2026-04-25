# Authentication

## How it works

The Sandbox uses HTTP-only JWT cookies for authentication. When a user logs in at `the-sandbox.uky.edu`, the server sets a `uky-session` cookie that is automatically sent with every subsequent request to the same domain.

**Token format:** HS256 JWT
**Cookie name:** `uky-session`
**Payload:** `{ email, sub (userId), iat, exp }`

## Login flow

```http
POST https://the-sandbox.uky.edu/api/auth/login
Content-Type: application/json

{ "email": "user@uky.edu", "password": "..." }
```

On success, the response sets `uky-session` as an HTTP-only cookie. All subsequent API calls to the same domain will be authenticated automatically.

```http
POST https://the-sandbox.uky.edu/api/auth/signup
Content-Type: application/json

{ "email": "user@uky.edu", "password": "...", "name": "...", "college": "..." }
```

## Auth by build type

### Standalone site
CORS restricts browser-to-Sandbox API calls to `the-sandbox.uky.edu` and `localhost:3000`. If your standalone site is hosted elsewhere:

- **Public API only** — no auth needed, works from any origin
- **Authenticated data** — you need a server-side proxy that holds the session and forwards requests to the Sandbox API on behalf of the user

A direct "log in with Sandbox" OAuth flow does not exist yet. For authenticated standalone sites, contact tsthe2@uky.edu to discuss scoped server-side access.

### Mini-app
Mini-apps run inside the Sandbox domain, so the `uky-session` cookie is already present. You can call any authenticated API endpoint directly from the browser.

### API integration
Server-side integrations use a service account session. Request a dedicated `@uky.edu` service account from tsthe2@uky.edu.

## Checking the current session

```http
GET https://the-sandbox.uky.edu/api/auth/me
```

Returns the current user object or `null` if not authenticated.

## Rate limits

| Endpoint | Limit |
|----------|-------|
| `POST /api/auth/login` | 5 requests/min per IP |
| `POST /api/auth/signup` | 3 requests/min per IP |
| `GET /api/public/v1/*` | Shared IP-based limit |
