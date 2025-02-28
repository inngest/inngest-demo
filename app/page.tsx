import useCases from '@/app/useCases';
import Link from 'next/link';

export default function Home() {
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
        {useCases.map((category, index) => (
          <UseCaseCategoryCard
            key={category.name}
            name={category.name}
            summary={category.summary}
            illustration={category.illustration}
            slug={category.slug}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

function UseCaseCategoryCard({
  name,
  slug,
  summary,
  illustration,
  index,
}: {
  name: string;
  slug: string;
  summary: string;
  illustration: React.ReactNode;
  index: number;
}) {

  const gradientClasses = [
    'from-[#7AE4B2] via-[#5BACC6] to-[#5C77BC]',
    'from-[#609DF9] via-[#5B72C6] to-[#8C5CBC]',
    'from-[#795FE1] via-[#A359BD] to-[#A64F73]',
  ];

  return (
    <Link
      href={`/${slug}`}
      className={`relative flex flex-col w-full h-[380px] p-11 overflow-hidden bg-linear-to-br ${gradientClasses[index % gradientClasses.length]} rounded-xl transition-transform hover:scale-[1.02]`}
    >
      <div className="flex-1 flex items-center justify-center">{illustration}</div>
      <div className="space-y-2.5">
        <h2 className="text-center text-white text-xl font-semibold">{name}</h2>
        <p className="opacity-90 text-center text-white text-sm font-medium leading-snug tracking-wide">
          {summary}
        </p>
      </div>
      <div className="absolute inset-0 hover:bg-white/5 transition-colors" />
    </Link>
  );
}
