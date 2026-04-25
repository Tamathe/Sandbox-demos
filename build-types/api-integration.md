# Build Type: API Integration

A backend tool, bot, or data pipeline that uses Sandbox data without a frontend UI of its own (or with a minimal one).

**Best for:** Discord/Slack bots, data dashboards, automated pipelines, notification services, research tools that pull campus data.

---

## What you can access

| Data | How |
|------|-----|
| Public courses, tools, departments, events | Public API — no auth required |
| Authenticated data (user-specific) | Service account session — request from tsthe2@uky.edu |

---

## Public API usage (server-side)

No rate limit concerns from a single server IP under normal load. Use cursor-based pagination for bulk pulls.

```typescript
async function fetchAllCourses() {
  const courses = []
  let cursor: string | null = null

  do {
    const url = new URL('https://the-sandbox.uky.edu/api/public/v1/courses')
    if (cursor) url.searchParams.set('cursor', cursor)

    const res = await fetch(url.toString())
    const data = await res.json()

    courses.push(...data.courses)
    cursor = data.nextCursor
  } while (cursor)

  return courses
}
```

See the [api-client example](../examples/api-client/) for a full typed client.

---

## Authenticated server-side access

If your integration needs user-scoped data, contact tsthe2@uky.edu. We'll set up a service account and provide a scoped session token for your server.

Do not share service account credentials or commit them to a public repo.

---

## Listing in /explore

API integrations can still appear in `/explore`. Your listing card links to:
- A landing page explaining what your integration does
- Or a GitHub repo if there's no hosted UI

---

## Checklist before submitting

- [ ] Integration is live and stable (or clearly marked as beta)
- [ ] No credentials committed to your repository
- [ ] A landing page or README explains what the integration does
- [ ] Description is under 120 chars and leads with a verb
