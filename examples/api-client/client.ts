const BASE = 'https://the-sandbox.uky.edu/api/public/v1'

interface Course {
  id: string
  name: string
  code: string
  department: string
}

interface Tool {
  id: string
  name: string
  description: string
  shape: string
}

interface PaginatedResponse<T> {
  [key: string]: T[] | string | null
  nextCursor: string | null
}

async function get<T>(path: string, params?: Record<string, string>): Promise<T> {
  const url = new URL(`${BASE}${path}`)
  if (params) Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v))

  const res = await fetch(url.toString())
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} — ${path}`)
  return res.json() as Promise<T>
}

async function fetchAllPages<T>(
  path: string,
  key: string,
  limit = 50,
): Promise<T[]> {
  const results: T[] = []
  let cursor: string | undefined

  do {
    const params: Record<string, string> = { limit: String(limit) }
    if (cursor) params.cursor = cursor

    const data = await get<PaginatedResponse<T>>(path, params)
    results.push(...(data[key] as T[]))
    cursor = data.nextCursor ?? undefined
  } while (cursor)

  return results
}

async function main() {
  console.log('Fetching all courses...')
  const courses = await fetchAllPages<Course>('/courses', 'courses')
  console.log(`  ${courses.length} courses`)
  console.log(' ', courses[0])

  console.log('Fetching tools...')
  const tools = await fetchAllPages<Tool>('/tools', 'tools')
  console.log(`  ${tools.length} tools`)
  console.log(' ', tools[0])
}

main().catch(console.error)
