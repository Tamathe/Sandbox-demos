# Sandy Integration

Sandy is the Sandbox AI assistant. You can embed Sandy's chat capability in your app using the streaming chat endpoint.

## Requirements

- Authenticated session (`uky-session` cookie)
- CORS: browser calls only work from `the-sandbox.uky.edu` or `localhost:3000`. External standalone sites must proxy through a backend.

## Streaming chat

```
POST /api/sandy/chat/stream
Content-Type: application/json
```

Request body:
```json
{
  "message": "What classes should I take next semester?"
}
```

The response is a **Server-Sent Events (SSE)** stream. Each event is a JSON chunk:

```
data: {"type":"chunk","text":"Based on"}
data: {"type":"chunk","text":" your schedule..."}
data: {"type":"done"}
```

### Reading the stream in JavaScript

```typescript
const response = await fetch('https://the-sandbox.uky.edu/api/sandy/chat/stream', {
  method: 'POST',
  credentials: 'include', // sends the uky-session cookie
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message: userMessage }),
})

const reader = response.body!.getReader()
const decoder = new TextDecoder()

while (true) {
  const { done, value } = await reader.read()
  if (done) break

  const lines = decoder.decode(value).split('\n')
  for (const line of lines) {
    if (!line.startsWith('data: ')) continue
    const data = JSON.parse(line.slice(6))
    if (data.type === 'chunk') appendText(data.text)
    if (data.type === 'done') break
  }
}
```

## Mini-app usage

Inside a mini-app, `credentials: 'include'` works automatically since you're on the same domain.

## External site usage

You need a backend proxy:

```
User browser → Your server → Sandbox /api/sandy/chat/stream
```

Your server forwards the SSE stream back to the user. It holds the service account session. Contact tsthe2@uky.edu to set this up.

## Rate limits

Sandy chat is budget-capped per user per day. Design your UI so users understand it's an AI with limits, not a traditional chat service.
