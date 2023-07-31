import Example from '@/app/[categorySlug]/Example';
import useCases from '@/app/useCases';
import { notFound } from 'next/navigation';

export default async function CategoryPage({ params }: { params: { categorySlug: string } }) {
  const category = useCases.find((category) => category.slug === params.categorySlug);

  if (!category) notFound();

  return (
    <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4 space-y-24">
      <div className="mx-auto max-w-2xl px-4 lg:text-center">
        <h1 className="text-4xl font-bold">{category.name}</h1>
      </div>
      <div className="mx-auto max-w-2xl px-4 lg:max-w-none space-y-28">
        {category.examples.map((example) => (
          <Example key={example.slug} {...example} />
        ))}
      </div>
    </div>
  );
}
