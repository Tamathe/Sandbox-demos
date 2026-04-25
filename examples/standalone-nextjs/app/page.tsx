const SANDBOX_API = 'https://the-sandbox.uky.edu/api'

interface Course {
  id: string
  name: string
  code: string
  department: string
}

async function getCourses(): Promise<Course[]> {
  const res = await fetch(`${SANDBOX_API}/public/v1/courses?limit=20`, {
    next: { revalidate: 3600 },
  })
  if (!res.ok) return []
  const { courses } = await res.json()
  return courses
}

export default async function Page() {
  const courses = await getCourses()

  return (
    <main style={{ maxWidth: 720, margin: '0 auto', padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>UK Courses</h1>
      <p style={{ color: '#666' }}>Live from the Sandbox public API — no auth required.</p>

      {courses.length === 0 && <p>No courses found.</p>}

      <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '0.75rem' }}>
        {courses.map((course) => (
          <li
            key={course.id}
            style={{
              border: '1px solid #e5e7eb',
              borderRadius: 8,
              padding: '0.75rem 1rem',
            }}
          >
            <strong>{course.code}</strong> — {course.name}
            <div style={{ fontSize: 13, color: '#6b7280', marginTop: 2 }}>{course.department}</div>
          </li>
        ))}
      </ul>
    </main>
  )
}
