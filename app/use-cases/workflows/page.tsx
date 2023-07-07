'use client';

import inngest from '../../api/inngest/client';

export default function WorkflowsPage() {
  async function triggerUserSignUp() {
    await inngest.send({
      name: 'app/user.signed.up',
      data: {
        userId: '123',
        firstName: 'John',
        lastName: 'Doe',
        email: 'doej@example.com',
      },
    });
  }

  return (
    <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4 space-y-24">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h1 className="text-4xl font-bold">Workflows</h1>
      </div>
      <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <h2 className="text-2xl font-bold">Customer Onboarding</h2>
            <div className="space-y-2">
              <p>
                This example demonstrate a CSV import functionality that allows the user to import a
                list of contacts. The CSV file is uploaded and then processed in the background by
                an Inngest function.
              </p>
              <p>
                By using an Inngest function, you don’t have to worry about timeouts or rate limits
                when saving the contacts. Inngest will automatically retry failed requests for you.
              </p>
            </div>
            <div className="flex gap-2">
              <a
                href="https://www.inngest.com/docs/functions/multi-step"
                className="text-slate-200 font-medium bg-slate-800 hover:bg-slate-700 transition-colors rounded text-sm px-4 py-2 inline-flex items-center"
              >
                Docs
              </a>
              <a
                href="https://github.com/inngest/inngest-demo/blob/main/app/use-cases/workflows/customer-onboarding/customerOnboarding.ts"
                className="text-slate-200 font-medium bg-slate-800 hover:bg-slate-700 transition-colors rounded text-sm px-4 py-2 inline-flex items-center"
              >
                Code
              </a>
            </div>
          </div>
          <div className="lg:col-span-3 overflow-auto min-h-full flex items-center rounded-lg p-6 border border-dashed border-zinc-800 bg-[#050911]">
            {/* Illustration */}
            <button
              type="button"
              className="bg-slate-900 hover:bg-slate-800 transition-colors rounded-lg p-4 text-center"
              onClick={triggerUserSignUp}
            >
              User Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
