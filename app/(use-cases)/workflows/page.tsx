import CategoryLayout from '@/app/(use-cases)/CategoryLayout';
import Example from '@/app/(use-cases)/Example';
import Illustration from '@/app/(use-cases)/workflows/customer-onboarding/Illustration';
import path from 'node:path';

export default function WorkflowsPage() {
  return (
    <CategoryLayout title="Workflows">
      <Example
        name="Customer Onboarding"
        description="
              This is an example of a typical onboarding workflow that is triggered when a new user
              signs up. The workflow sends a welcome email and follows up other ones to keep the
              user engaged.
            "
        benefits={[
          {
            name: 'Custom delays',
            description: 'Pause for an amount of time or until a specified time.',
          },
          {
            name: 'Wait for an event',
            description: 'Pause execution and wait for an event matching rules before continuing.',
          },
          {
            name: 'Auto-retries',
            description: 'Each step is automatically retried if it fails without re-running the entire workflow.'
          }
        ]}
        docsHref="https://www.inngest.com/docs/functions/multi-step"
        codeHref="https://github.com/inngest/inngest-demo/blob/main/app/workflows/customer-onboarding/inngest.ts"
        illustration={<Illustration />}
        codeFilePath={path.join(
          process.cwd(),
          'app/(use-cases)/workflows/customer-onboarding/inngest.ts',
        )}
      />
    </CategoryLayout>
  );
}
