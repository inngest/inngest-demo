"use client";


export default function BackgroundJobsPage() {

  async function triggerFileUpload() {
    await fetch('/use-cases/background-jobs/csv-file', { method: 'PUT' });
  }

  return (
    <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4 space-y-24">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h1 className="text-4xl font-bold">Background Jobs</h1>
      </div>
      <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <h2 className="text-2xl font-bold">
              CSV File Import
            </h2>
            <p className="text-zinc-500">
              This example demonstrate a CSV import functionality that allows the user to import a
              list of contacts. The CSV file is uploaded and then processed in the background by an
              Inngest function. By using an Inngest function, you don’t have to worry about
              timeouts or rate limits when saving the contacts. Inngest will automatically retry
              failed requests for you.
            </p>
            <div className="flex gap-2">
              <a
                href="https://www.inngest.com/docs/guides/background-jobs"
                className="rounded-lg bg-slate-700 px-3 py-1 text-sm font-medium text-slate-100 no-underline hover:bg-slate-500 hover:text-white">
                Docs
              </a>
              <a href="https://github.com/inngest/inngest-demo/blob/main/src/app/use-cases/background-jobs/csv-file/processCSVFile.ts"
                 className="rounded-lg bg-slate-700 px-3 py-1 text-sm font-medium text-slate-100 no-underline hover:bg-slate-500 hover:text-white">
                  Code
              </a>
            </div>
          </div>
          <div
            className="lg:col-span-3 overflow-auto min-h-full flex items-center rounded-lg p-6 border border-dashed border-zinc-800 bg-[#050911]">
            {/* Illustration */}
            <button
              type="button"
              className="relative block rounded-lg bg-zinc-900/80 p-4 text-center group hover:border-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={triggerFileUpload}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-auto h-10 w-10 group-hover:text-slate-400 text-slate-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
              </svg>
              <span className="mt-2 block text-sm font-semibold text-slate-100">File Upload</span>
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
