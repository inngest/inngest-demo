import CategoryLayout from '@/app/(use-cases)/CategoryLayout';
import Example from '@/app/(use-cases)/Example';
import Illustration from './monthly-report/Illustration';

export default function ScheduledFunctionsPage() {
  return (
    <CategoryLayout title="Scheduled Functions">
      <Example
        name="Monthly Report"
        description="This example demonstrate an Inngest function that automatically generate a report at the end of each month (for demo purposes, the report is generated every 5 minutes.)"
        benefits={[
          {
            name: 'Auto-retries',
            description:
              'If a report fails to generate (e.g. because of a network error), Inngest will automatically retry the request for you.',
          },
        ]}
        docsHref="https://www.inngest.com/docs/guides/scheduled-functions"
        githubHref="https://github.com/inngest/inngest-demo/blob/main/app/(use-cases)/scheduled-functions/monthly-report/inngest.ts"
        illustration={<Illustration />}
        action={async () => {
          'use server';
          // Do nothing
        }}
      />
    </CategoryLayout>
  );
}
