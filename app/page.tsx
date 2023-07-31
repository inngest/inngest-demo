import useCases from '@/app/useCases';
import Link from 'next/link';

export default function Home() {
  const backgroundJobs = useCases.find((useCase) => useCase.slug === 'background-jobs');
  const workflows = useCases.find((useCase) => useCase.slug === 'workflows');
  const scheduledFunctions = useCases.find((useCase) => useCase.slug === 'scheduled-functions');

  if (!backgroundJobs || !workflows || !scheduledFunctions) {
    throw new Error('Use case categories not found.');
  }

  return (
    <div className="justify-between max-w-7xl mx-auto py-24 sm:px-2 lg:py-32 lg:px-4 space-y-24">
      <hgroup className="px-4 mx-auto max-w-3xl text-center space-y-4">
        <h1 className="text-3xl lg:text-5xl font-semibold">Use Cases</h1>
        <p className="text-sm md:text-base text-indigo-200">
          Inngest provides you all the tools that you need to build powerful applications within
          your existing codebase. Explore and try out our demo functions to see how you can use
          Inngest to power your apps.
        </p>
      </hgroup>
      <div className="px-4 grid gap-4 grid-cols-1 max-w-md xl:grid-cols-3 xl:max-w-none w-full mx-auto">
        <Link
          href={`/${backgroundJobs.slug}`}
          className="relative flex flex-col w-full h-[380px] p-11 overflow-hidden bg-gradient-to-br from-[#7AE4B2] via-[#5BACC6] to-[#5C77BC] rounded-xl transition-transform hover:scale-[1.02]"
        >
          <div className="flex-1 flex items-center justify-center">
            {backgroundJobs.illustration}
          </div>
          <div className="space-y-2.5">
            <h2 className="text-center text-white text-xl font-semibold">{backgroundJobs.name}</h2>
            <p className="opacity-90 text-center text-white text-sm font-medium leading-snug tracking-wide">
              {backgroundJobs.summary}
            </p>
          </div>
          <div className="absolute inset-0 hover:bg-white/5 transition-colors" />
        </Link>
        <Link
          href={`/${workflows.slug}`}
          className="relative flex flex-col w-full h-[380px] p-11 overflow-hidden bg-gradient-to-br from-[#609DF9] via-[#5B72C6] to-[#8C5CBC] rounded-xl transition-transform hover:scale-[1.02]"
        >
          <div className="flex-1 flex items-center justify-center">{workflows.illustration}</div>
          <div className="space-y-2.5">
            <h2 className="text-center text-white text-xl font-semibold">{workflows.name}</h2>
            <p className="opacity-90 text-center text-white text-sm font-medium leading-snug tracking-wide">
              {workflows.summary}
            </p>
          </div>
          <div className="absolute inset-0 hover:bg-white/5 transition-colors" />
        </Link>
        <Link
          href={`/${scheduledFunctions.slug}`}
          className="relative flex flex-col w-full h-[380px] p-11 overflow-hidden bg-gradient-to-br from-[#795FE1] via-[#A359BD] to-[#A64F73] rounded-xl transition-transform hover:scale-[1.02]"
        >
          <div className="flex-1 flex items-center justify-center">
            {scheduledFunctions.illustration}
          </div>
          <div className="space-y-2.5">
            <h2 className="text-center text-white text-xl font-semibold">
              {scheduledFunctions.name}
            </h2>
            <p className="opacity-90 text-center text-white text-sm font-medium leading-snug tracking-wide">
              {scheduledFunctions.summary}
            </p>
          </div>
          <div className="absolute inset-0 hover:bg-white/5 transition-colors" />
        </Link>
        {/*{useCases.map((category) => (*/}
        {/*  <UseCaseCategoryCard*/}
        {/*    key={category.name}*/}
        {/*    name={category.name}*/}
        {/*    description={category.summary}*/}
        {/*    illustration={category.illustration}*/}
        {/*    slug={category.slug}*/}
        {/*  />*/}
        {/*))}*/}
      </div>
    </div>
  );
}

// function UseCaseCategoryCard({
//   name,
//   description,
//   illustration,
//   slug,
// }: {
//   name: string;
//   description: string;
//   illustration: React.ReactNode;
//   slug: string;
// }) {
//   return (
//     <Link
//       href={`/${slug}`}
//       className="flex flex-col w-full h-[380px] p-6 overflow-hidden border hover:bg-gradient-to-b hover:from-[#050911] hover:from-70% hover:to-slate-950 hover:to-100% rounded-xl bg-[#050911] border-zinc-800 transition-colors duration-150 hover:border-slate-700"
//     >
//       <div className="flex-1 flex items-center justify-center">{illustration}</div>
//       <h2 className="text-xl font-semibold">{name}</h2>
//       <p className="text-sm text-zinc-500">{description}</p>
//     </Link>
//   );
// }
