import CategoryLayout from '@/app/(use-cases)/CategoryLayout';
import Example from '@/app/(use-cases)/Example';
import useCases from '@/app/useCases';

export default function ScheduledFunctionsPage() {
  const scheduledFunctions = useCases.find((useCase) => useCase.slug === 'scheduled-functions');

  if (!scheduledFunctions) {
    throw new Error('Schedule functions use case not found.');
  }

  return (
    <CategoryLayout title={scheduledFunctions.name}>
      {scheduledFunctions.examples?.map((example) => <Example key={example.slug} {...example} />)}
    </CategoryLayout>
  );
}
