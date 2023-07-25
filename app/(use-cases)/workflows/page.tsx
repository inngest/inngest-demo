import CategoryLayout from '@/app/(use-cases)/CategoryLayout';
import Example from '@/app/(use-cases)/Example';
import Illustration from '@/app/(use-cases)/workflows/customer-onboarding/Illustration';
import inngest from '@/app/api/inngest/client';

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
            description:
              'Each step is automatically retried if it fails without re-running the entire workflow.',
          },
        ]}
        docsHref="https://www.inngest.com/docs/functions/multi-step"
        githubHref="https://github.com/inngest/inngest-demo/blob/main/app/(use-cases)/workflows/customer-onboarding/inngest.ts"
        illustration={<Illustration />}
        action={async () => {
          "use server";
          // Artificial delay to simulate a network request
          await new Promise((r) => setTimeout(r, 1_000));

          await inngest.send({
            name: 'app/user.signed.up',
            data: {
              userId: '123',
              firstName: 'John',
              lastName: 'Doe',
              email: 'doej@example.com',
            },
          });
        }}
      />
    </CategoryLayout>
  );
}
