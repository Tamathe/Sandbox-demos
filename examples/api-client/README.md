# Example: API Client

A minimal TypeScript fetch client for the Sandbox public API. No framework required.

## Run it

```bash
npx tsx client.ts
```

Or compile and run:
```bash
tsc client.ts && node client.js
```

## What it shows

- Typed fetch wrapper with error handling
- Paginating through all courses using cursors
- Fetching tools, departments, and events

## Notes

This uses the public API only — no auth, no cookies. Works from any Node.js environment.
