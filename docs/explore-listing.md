# Explore Listing

When your app is approved, it appears as a card in the [/explore](https://the-sandbox.uky.edu/explore) Community section.

## What the card shows

| Field | Source | Notes |
|-------|--------|-------|
| Name | `name` in registry | Max ~40 chars before truncation |
| Description | `description` in registry | 3-line clamp (~120 chars) |
| Type badge | `type` in registry | "Site", "Mini-app", or "Integration" |
| Author | `authorName` in registry | Shown as "by [name]" |
| Link | `url` in registry | Opens in new tab for standalone/integration; internal nav for mini-apps |

## Registry entry format

When a maintainer approves your app, this entry is added to `registry/community-apps.json` in the Sandbox repo:

```json
{
  "id": "my-app-slug",
  "name": "My App",
  "description": "A one-sentence description of what this does for UK students.",
  "type": "standalone-site",
  "url": "https://myapp.example.com",
  "authorName": "Jane Smith",
  "authorEmail": "jsmith@uky.edu",
  "approvedAt": "2026-04-25",
  "tags": ["productivity", "courses"]
}
```

**`type` values:** `standalone-site` | `mini-app` | `api-integration`

**`tags`** (optional, used for future filtering):
`productivity`, `courses`, `research`, `health`, `events`, `housing`, `social`, `tools`

## Writing a good description

The description is the most important field — it's all the user sees before clicking through.

Good: `"Find open study rooms across campus in real time."`
Bad: `"This app helps students find rooms on campus using data from the Sandbox API."`

Keep it under 120 characters. No "This app…" or "A tool that…" — lead with the verb.

## After your listing goes live

You're responsible for keeping your app functional. If your URL goes down or the app breaks, the listing may be removed. Submit an update issue when you make significant changes.
