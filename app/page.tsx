import Link from 'next/link';

export default function Home() {
  return (
    <div className="justify-between max-w-7xl mx-auto py-24 sm:px-2 lg:py-12 lg:px-4 space-y-24">
      <hgroup className="px-4 mx-auto max-w-3xl text-center space-y-4">
        <h1 className="text-3xl lg:text-5xl font-semibold">Use Cases</h1>
        <p className="text-sm md:text-base text-indigo-200">
          Inngest provides you all the tools that you need to build powerful applications within
          your existing codebase. Explore and try out our demo functions to see how you can use
          Inngest to power your apps.
        </p>
      </hgroup>
      <div className="px-4 grid gap-4 grid-cols-1 max-w-md xl:grid-cols-3 xl:max-w-none w-full mx-auto">
        <UseCaseCategoryCard
          name="Background Jobs"
          description="Run reliable background jobs without deploying any new infrastructure."
          illustration={<></>}
          slug="background-jobs"
        />
        <UseCaseCategoryCard
          name="Workflows"
          description="Build complex workflows in minutes without file configurations."
          illustration={<></>}
          slug="workflows"
        />
        <UseCaseCategoryCard
          name="Scheduled Functions"
          description="Run functions on a schedule that automatically retries on failure."
          illustration={<></>}
          slug="scheduled-functions"
        />
      </div>
    </div>
  );
}

function UseCaseCategoryCard({
  name,
  description,
  illustration,
  slug,
}: {
  name: string;
  description: string;
  illustration: React.ReactNode;
  slug: string;
}) {
  return (
    <Link
      href={`/${slug}`}
      className="flex flex-col w-full h-[380px] p-6 overflow-hidden border hover:bg-gradient-to-b hover:from-[#050911] hover:from-70% hover:to-slate-950 hover:to-100% rounded-xl bg-[#050911] border-zinc-800 transition-colors duration-150 hover:border-slate-700"
    >
      <div className="h-full">{illustration}</div>
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-sm text-zinc-500">{description}</p>
    </Link>
  );
}
