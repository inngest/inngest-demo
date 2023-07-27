import CategoryLayout from '@/app/(use-cases)/CategoryLayout';
import Example from '@/app/(use-cases)/Example';
import useCases from '@/app/useCases';

export default function WorkflowsPage() {
  const workflows = useCases.find((useCase) => useCase.slug === 'workflows');

  if (!workflows) {
    throw new Error('Workflows use case not found.');
  }

  return (
    <CategoryLayout title={workflows.name}>
      {workflows.examples?.map((example) => <Example key={example.slug} {...example} />)}
    </CategoryLayout>
  );
}
