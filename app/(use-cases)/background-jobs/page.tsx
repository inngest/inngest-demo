import Illustration from '@/app/(use-cases)/background-jobs/csv-file-import/Illustration';
import CategoryLayout from '@/app/(use-cases)/CategoryLayout';
import Example from '@/app/(use-cases)/Example';
import path from 'path';

export default async function BackgroundJobsPage() {
  return (
    <CategoryLayout title="Background Jobs">
      <Example
        name="CSV File Import"
        description="This example demonstrate a CSV import functionality that allows the user to import a list of contacts. The CSV file is uploaded and then processed in the background by an Inngest function."
        benefits={[
          'By using an Inngest function, you don’t have to worry about timeouts or rate limits when saving the contacts. Inngest will automatically retry failed requests for you.',
        ]}
        docsHref="https://www.inngest.com/docs/guides/background-jobs"
        codeHref="https://github.com/inngest/inngest-demo/blob/main/app/background-jobs/csv-file-import/inngest.ts"
        illustration={<Illustration />}
        codeFilePath={path.join(
          process.cwd(),
          'app/(use-cases)/background-jobs/csv-file-import/inngest.ts',
        )}
      />
    </CategoryLayout>
  );
}
