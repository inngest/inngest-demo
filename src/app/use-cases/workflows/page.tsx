"use client";


import inngest from '@/app/api/inngest/client';

export default function WorkflowsPage() {

  async function triggerUserSignUp() {
    await inngest.send({
      name: 'app/user.signed.up',
      data: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'doej@example.com',
      }
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
            <h2 className="text-2xl font-bold">
              Customer Onboarding
            </h2>
            <p className="text-indigo-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
            </p>
            <div className="flex gap-2">
              <a
                href="https://www.inngest.com/docs/functions/multi-step"
                className="rounded-lg bg-slate-700 px-3 py-1 text-sm font-medium text-slate-100 no-underline hover:bg-slate-500 hover:text-white">
                Docs
              </a>
              <a href="https://github.com/inngest/inngest-demo/blob/main/src/app/use-cases/workflows/onboarding/customerOnboarding.ts"
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
              onClick={triggerUserSignUp}
            >
              <span className="mt-2 block text-sm font-semibold text-slate-100">User Sign Up</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
