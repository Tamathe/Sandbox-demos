# UK Sandbox Developer Kit

Build apps and integrations on top of the [UK Sandbox](https://the-sandbox.uky.edu) — the AI-powered campus OS for the University of Kentucky.

When your app is approved, it gets listed in [/explore](https://the-sandbox.uky.edu/explore) for the entire UK community to find.

---

## What you can build

| Type | Description | Hosting |
|------|-------------|---------|
| [Standalone site](build-types/standalone-site.md) | Your own site (any stack) using Sandbox public APIs | Anywhere |
| [Mini-app](build-types/mini-app.md) | A page that lives inside the Sandbox at a dedicated route | Sandbox |
| [API integration](build-types/api-integration.md) | A backend tool, bot, or data pipeline using Sandbox data | Anywhere |

---

## Get listed in /explore

1. **Build** — pick a type above and follow its guide
2. **Submit** — [open an issue](https://github.com/Tamathe/Sandbox-demos/issues/new?template=submit-app.yml) with your app details
3. **Review** — a maintainer reviews your submission (usually within a week)
4. **Live** — on approval, your app card appears in `/explore`

---

## Quick links

- [Getting started](docs/getting-started.md)
- [Authentication](docs/auth.md)
- [API reference](docs/api-reference.md)
- [Sandy integration](docs/sandy.md)
- [Explore listing requirements](docs/explore-listing.md)

## Examples

- [`examples/standalone-nextjs/`](examples/standalone-nextjs/) — Next.js site using the public API
- [`examples/api-client/`](examples/api-client/) — bare TypeScript fetch client

---

## Requirements

- University of Kentucky email address (`@uky.edu`)
- Apps must serve UK students, faculty, or staff
- No scraping, credential harvesting, or automated account creation

Questions? Open an issue or email tsthe2@uky.edu.
