# API Reference

Base URL: `https://the-sandbox.uky.edu/api`

All responses are JSON. Authenticated endpoints require the `uky-session` cookie (see [auth.md](auth.md)).

---

## Public endpoints

No authentication required. Rate-limited by IP.

### Courses
```
GET /public/v1/courses
```
Returns a paginated list of public courses.

Query params: `cursor` (string), `limit` (number, max 50)

Response:
```json
{
  "courses": [{ "id": "...", "name": "...", "code": "...", "department": "..." }],
  "nextCursor": "..." | null
}
```

### Tools
```
GET /public/v1/tools
```
Returns published tools/kits available in the Sandbox.

Query params: `cursor`, `limit`

Response:
```json
{
  "tools": [{ "id": "...", "name": "...", "description": "...", "shape": "..." }],
  "nextCursor": "..." | null
}
```

### Departments
```
GET /public/v1/departments
```
Returns all UK departments.

### Events
```
GET /public/v1/events
```
Returns public campus events.

---

## Authenticated endpoints

Require a valid `uky-session` cookie. These are accessible from the Sandbox domain or `localhost:3000`. For server-side use, see [auth.md](auth.md).

### Current user
```
GET /auth/me
```
Returns the authenticated user or `null`.

### Sandy AI — chat stream
```
POST /sandy/chat/stream
Content-Type: application/json

{ "message": "string", "context": {} }
```
Returns an SSE stream. See [sandy.md](sandy.md) for the full streaming protocol.

### Sandy — suggestions
```
GET /sandy/suggestions
```
Returns contextual AI suggestions for the current user.

### Sandy — preferences
```
GET  /sandy/preferences
PUT  /sandy/preferences
```
Get or update the user's Sandy settings.

---

## Error format

All errors follow the same shape:
```json
{ "error": "Human-readable message" }
```

| Status | Meaning |
|--------|---------|
| 400 | Bad request / validation error |
| 401 | Not authenticated |
| 403 | Authenticated but not authorized |
| 429 | Rate limit exceeded |
| 500 | Server error |
