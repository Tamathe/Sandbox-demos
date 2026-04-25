# Contributing

## Submitting your app

Use the [submit app issue template](https://github.com/Tamathe/Sandbox-demos/issues/new?template=submit-app.yml). Fill out every field — incomplete submissions are closed without review.

**Required:**
- App name and description (used verbatim on the /explore card)
- Build type: `standalone-site`, `mini-app`, or `api-integration`
- Live URL or repository link
- Your `@uky.edu` email
- Screenshot or screen recording

## Review criteria

| Criterion | What we check |
|-----------|--------------|
| UK relevance | Serves UK students, faculty, or staff in a meaningful way |
| Functionality | The app works at the submitted URL |
| Auth safety | No credential harvesting, no impersonation of Sandbox UI |
| Data use | Public API only, or approved scoped access |
| UX baseline | Readable, accessible, no broken layouts |

Mini-apps (which live inside the Sandbox) also require a code review of the submitted PR.

## After approval

A maintainer will:
1. Add your entry to `registry/community-apps.json` in the Sandbox repo
2. Close the issue with a link to your live listing
3. Your card appears in `/explore` on the next deploy (usually same day)

## Updating your listing

Open a new issue referencing your original submission. Include what changed and why.

## Removing your listing

Open an issue titled `Remove: [app name]`. We'll remove it within 48 hours.
