# Build Type: Mini-App

A page that lives inside the Sandbox at a dedicated route (`/sandbox-apps/[your-slug]`).

**Best for:** Deep integrations that need the full Sandbox auth context, apps that should feel like a native part of the platform, tools built for the Sandbox community specifically.

---

## What you get

- Full access to authenticated APIs (session cookie is already set — same domain)
- Sandy chat without any proxy setup
- Access to the user's courses, role, and context
- Listed in `/explore` as a native app (no external link — opens in-app)

---

## Stack requirements

Mini-apps are Next.js pages inside the Sandbox codebase. You'll need to be comfortable with:

- Next.js 15 App Router
- TypeScript (strict mode)
- Tailwind CSS v4
- The Sandbox auth pattern (`requireAuthenticatedUser` / `requireUser`)

---

## Route convention

Your page lives at:
```
app/sandbox-apps/[your-slug]/page.tsx
```

Use the existing `withErrorHandling` and auth guard patterns. See the [API reference](../docs/api-reference.md) for how internal routes are called.

---

## Submission process

Mini-apps require a code review. In your [submit-app issue](https://github.com/Tamathe/Sandbox-demos/issues/new?template=submit-app.yml):

1. Link your fork or branch of the Sandbox repo
2. Describe what your page does and which APIs it calls
3. Include a screenshot from `localhost:3000`

A maintainer will review your code, request changes if needed, and merge it into the Sandbox repo.

---

## Checklist before submitting

- [ ] Page renders at `/sandbox-apps/[your-slug]` in local dev
- [ ] Auth guard in place — unauthenticated users get redirected
- [ ] No hardcoded secrets or environment-specific values
- [ ] TypeScript compiles clean (`pnpm typecheck`)
- [ ] Screenshot from local dev ready
