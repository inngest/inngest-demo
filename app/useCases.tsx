import React from 'react';
import CSVFileImportIllustration from '@/app/(use-cases)/background-jobs/csv-file-import/Illustration';
import csvFileImportAction from '@/app/(use-cases)/background-jobs/csv-file-import/action';
import CustomerOnboardingIllustration from '@/app/(use-cases)/workflows/customer-onboarding/Illustration';
import customerOnboardingAction from '@/app/(use-cases)/workflows/customer-onboarding/action';
import MonthlyReportIllustration from '@/app/(use-cases)/scheduled-functions/monthly-report/Illustration';
import monthlyReportAction from '@/app/(use-cases)/scheduled-functions/monthly-report/action';

export type Category = {
  name: string;
  summary: string;
  illustration: React.ReactNode;
  slug: string;
  examples: Example[];
};

export type Example = {
  name: string;
  slug: string;
  description: string;
  benefits: {
    name: string;
    description: string;
  }[];
  docsHref: string;
  githubHref: string;
  illustration: React.ReactNode;
  action: () => Promise<void>;
};

const useCases: Category[] = [
  {
    name: 'Background Jobs',
    summary: 'Run reliable background jobs without deploying any new infrastructure.',
    illustration: <></>,
    slug: 'background-jobs',
    examples: [
      {
        name: 'CSV File Import',
        slug: 'csv-file-import',
        description:
          'This example demonstrate a CSV import functionality that allows the user to import a list of contacts. The CSV file is uploaded and then processed in the background by an Inngest function.',
        benefits: [
          {
            name: 'Auto-retries',
            description:
              'No need to worry about timeouts or rate limits when saving the contacts. Inngest will automatically retry failed requests for you.',
          },
          {
            name: 'No queues or workers required',
            description:
              'Serverless background jobs mean you don’t need to set up queues or long-running workers.',
          },
        ],
        docsHref: 'https://www.inngest.com/docs/guides/background-jobs',
        githubHref:
          'https://github.com/inngest/inngest-demo/blob/main/app/(use-cases)/background-jobs/csv-file-import/inngest.ts',
        illustration: <CSVFileImportIllustration />,
        action: csvFileImportAction,
      },
    ],
  },
  {
    name: 'Workflows',
    summary: 'Build complex workflows in minutes without file configurations.',
    illustration: <></>,
    slug: 'workflows',
    examples: [
      {
        name: 'Customer Onboarding',
        slug: 'customer-onboarding',
        description:
          'This is an example of a typical onboarding workflow that is triggered when a new user signs up. The workflow sends a welcome email and follows up other ones to keep the user engaged.',
        benefits: [
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
        ],
        docsHref: 'https://www.inngest.com/docs/functions/multi-step',
        githubHref:
          'https://github.com/inngest/inngest-demo/blob/main/app/(use-cases)/workflows/customer-onboarding/inngest.ts',
        illustration: <CustomerOnboardingIllustration />,
        action: customerOnboardingAction,
      },
    ],
  },
  {
    name: 'Scheduled Functions',
    summary: 'Run functions on a schedule that automatically retries on failure.',
    illustration: <></>,
    slug: 'scheduled-functions',
    examples: [
      {
        name: 'Monthly Report',
        slug: 'monthly-report',
        description:
          'This example demonstrate an Inngest function that automatically generate a report at the end of each month (for demo purposes, the report is generated every 5 minutes.)',
        benefits: [
          {
            name: 'Auto-retries',
            description:
              'If a report fails to generate (e.g. because of a network error), Inngest will automatically retry the request for you.',
          },
        ],
        docsHref: 'https://www.inngest.com/docs/guides/scheduled-functions',
        githubHref:
          'https://github.com/inngest/inngest-demo/blob/main/app/(use-cases)/scheduled-functions/monthly-report/inngest.ts',
        illustration: <MonthlyReportIllustration />,
        action: monthlyReportAction,
      },
    ],
  },
];

export default useCases;
