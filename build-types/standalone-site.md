# Build Type: Standalone Site

A site you build and host yourself that uses Sandbox data or AI.

**Best for:** Tools with their own UI/brand, projects that exist outside the Sandbox ecosystem, apps that might serve non-UK audiences too.

---

## What you can access

| Data | How |
|------|-----|
| Public courses, tools, departments, events | Public API — no auth, works from any origin |
| Sandy AI chat | Requires session cookie — needs a backend proxy if hosted elsewhere |
| User-specific data | Requires session — needs a backend proxy |

For most student projects, the public API is enough. If you need authenticated data, you'll need a simple backend proxy (see below).

---

## Quickstart (public API only)

No auth needed. Works from any domain.

```typescript
const res = await fetch('https://the-sandbox.uky.edu/api/public/v1/courses')
const { courses } = await res.json()
```

See the [standalone-nextjs example](../examples/standalone-nextjs/) for a full working starter.

---

## Adding Sandy (proxy pattern)

Because CORS restricts the Sandy API to `the-sandbox.uky.edu`, you need a thin backend route that proxies the request. Your backend holds the session, your frontend talks to your backend.

```
User → Your frontend → Your /api/sandy route → Sandbox /api/sandy/chat/stream
```

Contact tsthe2@uky.edu to get a service account session for your proxy.

---

## Hosting

Any host works: Vercel, Netlify, GitHub Pages, your own server. Your URL is what gets listed in `/explore`.

---

## Checklist before submitting

- [ ] App is live at a stable URL
- [ ] Works on a UK network (not behind a VPN or local-only)
- [ ] Description is under 120 chars and leads with a verb
- [ ] Screenshot ready for the submission issue
