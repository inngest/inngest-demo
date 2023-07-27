import CategoryLayout from '@/app/(use-cases)/CategoryLayout';
import Example from '@/app/(use-cases)/Example';
import useCases from '@/app/useCases';

export default async function BackgroundJobsPage() {
  const backgroundJobs = useCases.find((useCase) => useCase.slug === 'background-jobs');

  if (!backgroundJobs) {
    throw new Error('Background jobs use case not found.');
  }

  return (
    <CategoryLayout title={backgroundJobs.name}>
      {backgroundJobs.examples?.map((example) => <Example key={example.slug} {...example} />)}
    </CategoryLayout>
  );
}
