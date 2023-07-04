import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between max-w-7xl mx-auto px-6 py-20 gap-12">
      <h2 className="text-2xl font-bold">Use Cases</h2>
      <div className="grid gap-4 grid-cols-3 grid-rows-2 w-full">
        <Link href="/use-cases/background-jobs" className="flex flex-col w-full h-[380px] p-6 overflow-hidden border hover:bg-gradient-to-b hover:from-black hover:from-70% hover:to-neutral-900 hover:to-100% rounded-xl bg-black border-zinc-800 transition-colors duration-150 hover:border-neutral-700">
          <div className="h-full">
            {/* Illustration */}
          </div>
          <h2 className="text-xl font-semibold">Background Jobs</h2>
          <p className="text-sm text-zinc-500">Run background jobs with ease</p>
        </Link>
        <Link href="/use-cases/workflows" className="flex flex-col w-full h-[380px] p-6 overflow-hidden border hover:bg-gradient-to-b hover:from-black hover:from-70% hover:to-neutral-900 hover:to-100% rounded-xl bg-black border-zinc-800 transition-colors duration-150 hover:border-neutral-700">
          <div className="h-full">
            {/* Illustration */}
          </div>
          <h2 className="text-xl font-semibold">Workflows</h2>
          <p className="text-sm text-zinc-500">Build complex workflows in minutes</p>
        </Link>
        <Link href="/use-cases/scheduled-functions" className="flex flex-col w-full h-[380px] p-6 overflow-hidden border hover:bg-gradient-to-b hover:from-black hover:from-70% hover:to-neutral-900 hover:to-100% rounded-xl bg-black border-zinc-800 transition-colors duration-150 hover:border-neutral-700">
          <div className="h-full">
            {/* Illustration */}
          </div>
          <h2 className="text-xl font-semibold">Scheduled Functions</h2>
          <p className="text-sm text-zinc-500">Run functions on a schedule</p>
        </Link>
      </div>
    </main>
  )
}
