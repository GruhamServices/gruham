export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Gruham</h1>
        <p className="text-gray-600 mb-8">
          Next.js + Prisma + Supabase
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="/api/test"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Test API
          </a>
        </div>
      </div>
    </main>
  )
}
