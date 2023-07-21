import React from 'react';

export type Category = {
  name: string;
  description: string;
  illustration: React.ReactNode;
  slug: string;
  examples: Example[];
};

export type Example = {
  name: string;
  slug: string;
};

const useCases: Category[] = [
  {
    name: 'Background Jobs',
    description: 'Run reliable background jobs without deploying any new infrastructure.',
    illustration: <></>,
    slug: 'background-jobs',
    examples: [
      {
        name: 'CSV File Import',
        slug: 'csv-file-import',
      },
    ],
  },
  {
    name: 'Workflows',
    description: 'Build complex workflows in minutes without file configurations.',
    illustration: <></>,
    slug: 'workflows',
    examples: [
      {
        name: 'Customer Onboarding',
        slug: 'customer-onboarding',
      },
    ],
  },
  {
    name: 'Scheduled Functions',
    description: 'Run functions on a schedule that automatically retries on failure.',
    illustration: <></>,
    slug: 'scheduled-functions',
    examples: [
      {
        name: 'Monthly Report',
        slug: 'monthly-report',
      },
    ],
  },
];

export default useCases;
