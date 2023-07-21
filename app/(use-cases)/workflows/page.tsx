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
          'With Inngest, you can easily build reliable and complex workflows that involve multiple steps and services. You can delay and schedule steps to run at a specific time. Each step is automatically retried if it fails.',
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
