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
              CSV File Processing
            </h2>
            <p className="text-zinc-500">
              This example shows how to process a CSV file in the background. The file is uploaded
              to the server and then processed in the background. The user is notified when the
              processing is complete.
            </p>
            <div className="flex gap-2">
              <a
                href="https://www.inngest.com/docs/guides/background-jobs"
                className="rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium text-gray-100 no-underline hover:bg-gray-500 hover:text-white">
                Docs
              </a>
              <a href="https://github.com/inngest/inngest-demo/blob/main/src/app/use-cases/background-jobs/csv-file/processCSVFile.ts"
                 className="rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium text-gray-100 no-underline hover:bg-gray-500 hover:text-white">
                  Code
              </a>
            </div>
          </div>
          <div
            className="lg:col-span-3 overflow-auto min-h-full rounded-lg p-6 border border-dashed border-zinc-800 bg-[#050911]">
            {/* Illustration */}
            <button onClick={triggerFileUpload}>Trigger File Upload</button>
          </div>
        </div>
      </div>
    </div>
  );
}
