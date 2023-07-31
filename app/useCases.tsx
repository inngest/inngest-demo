import React from 'react';
import CSVFileImportIllustration from '@/app/[categorySlug]/background-jobs/csv-file-import/Illustration';
import csvFileImportAction from '@/app/[categorySlug]/background-jobs/csv-file-import/action';
import CustomerOnboardingIllustration from '@/app/[categorySlug]/workflows/customer-onboarding/Illustration';
import customerOnboardingAction from '@/app/[categorySlug]/workflows/customer-onboarding/action';
import MonthlyReportIllustration from '@/app/[categorySlug]/scheduled-functions/monthly-report/Illustration';

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
  action?: () => Promise<void>;
};

const useCases: Category[] = [
  {
    name: 'Background Jobs',
    summary: 'Run reliable background jobs without deploying any new infrastructure.',
    illustration: (
      <svg
        width="102"
        height="102"
        viewBox="0 0 102 102"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.4"
          d="M14.3847 71.9231V30.077C14.0805 27.9454 14.2768 25.7723 14.9578 23.7297C15.6389 21.6871 16.7861 19.8311 18.3086 18.3086C19.8311 16.7861 21.6871 15.6389 23.7297 14.9578C25.7723 14.2768 27.9454 14.0805 30.077 14.3847H71.9231C74.0547 14.0805 76.2278 14.2768 78.2704 14.9578C80.313 15.6389 82.169 16.7861 83.6915 18.3086C85.214 19.8311 86.3612 21.6871 87.0422 23.7297C87.7233 25.7723 87.9195 27.9454 87.6154 30.077V71.9231C87.9195 74.0547 87.7233 76.2278 87.0422 78.2704C86.3612 80.313 85.214 82.169 83.6915 83.6915C82.169 85.214 80.313 86.3612 78.2704 87.0422C76.2278 87.7233 74.0547 87.9195 71.9231 87.6154H30.077C27.9454 87.9195 25.7723 87.7233 23.7297 87.0422C21.6871 86.3612 19.8311 85.214 18.3086 83.6915C16.7861 82.169 15.6389 80.313 14.9578 78.2704C14.2768 76.2278 14.0805 74.0547 14.3847 71.9231Z"
          fill="white"
        />
        <path
          d="M32.6923 61.4615V40.5385C32.5402 39.4727 32.6383 38.3861 32.9789 37.3648C33.3194 36.3435 33.893 35.4155 34.6542 34.6543C35.4155 33.893 36.3435 33.3194 37.3648 32.9789C38.3861 32.6384 39.4727 32.5402 40.5384 32.6923H61.4615C62.5273 32.5402 63.6138 32.6384 64.6351 32.9789C65.6564 33.3194 66.5844 33.893 67.3457 34.6543C68.107 35.4155 68.6805 36.3435 69.0211 37.3648C69.3616 38.3861 69.4597 39.4727 69.3077 40.5385V61.4615C69.4597 62.5273 69.3616 63.6139 69.0211 64.6352C68.6805 65.6565 68.107 66.5845 67.3457 67.3457C66.5844 68.107 65.6564 68.6806 64.6351 69.0211C63.6138 69.3616 62.5273 69.4598 61.4615 69.3077H40.5384C39.4727 69.4598 38.3861 69.3616 37.3648 69.0211C36.3435 68.6806 35.4155 68.107 34.6542 67.3457C33.893 66.5845 33.3194 65.6565 32.9789 64.6352C32.6383 63.6139 32.5402 62.5273 32.6923 61.4615Z"
          fill="white"
        />
        <path
          d="M102 35.3077C102.001 35.8231 101.9 36.3335 101.703 36.8098C101.506 37.2861 101.217 37.7188 100.852 38.0833C100.488 38.4477 100.055 38.7366 99.579 38.9335C99.1028 39.1305 98.5923 39.2315 98.0769 39.2308H87.6154V31.3846H98.0769C98.5923 31.3839 99.1028 31.4849 99.579 31.6818C100.055 31.8787 100.488 32.1677 100.852 32.5321C101.217 32.8966 101.506 33.3293 101.703 33.8056C101.9 34.2819 102.001 34.7923 102 35.3077ZM98.0769 62.7692H87.6154V70.6154H98.0769C99.1174 70.6154 100.115 70.2021 100.851 69.4663C101.587 68.7306 102 67.7328 102 66.6923C102 65.6518 101.587 64.654 100.851 63.9183C100.115 63.1826 99.1174 62.7692 98.0769 62.7692ZM3.92308 31.3846C2.88261 31.3846 1.88476 31.7979 1.14904 32.5337C0.413322 33.2694 0 34.2672 0 35.3077C0 36.3482 0.413322 37.346 1.14904 38.0817C1.88476 38.8174 2.88261 39.2308 3.92308 39.2308H14.3846V31.3846H3.92308ZM3.92308 62.7692C2.88261 62.7692 1.88476 63.1826 1.14904 63.9183C0.413322 64.654 0 65.6518 0 66.6923C0 67.7328 0.413322 68.7306 1.14904 69.4663C1.88476 70.2021 2.88261 70.6154 3.92308 70.6154H14.3846V62.7692H3.92308ZM66.6923 3.49682e-06C65.654 0.0068575 64.6601 0.422381 63.9258 1.15662C63.1916 1.89086 62.7761 2.88473 62.7692 3.92308V14.3846H70.6154V3.92308C70.6161 3.4077 70.5151 2.89725 70.3182 2.42097C70.1213 1.94469 69.8323 1.51194 69.4679 1.14751C69.1034 0.783082 68.6707 0.494137 68.1944 0.297228C67.7181 0.100319 67.2077 -0.000685054 66.6923 3.49682e-06ZM35.3077 3.49682e-06C34.2693 0.0068575 33.2755 0.422381 32.5412 1.15662C31.807 1.89086 31.3915 2.88473 31.3846 3.92308V14.3846H39.2308V3.92308C39.2315 3.4077 39.1305 2.89725 38.9335 2.42097C38.7366 1.94469 38.4477 1.51194 38.0833 1.14751C37.7188 0.783082 37.2861 0.494137 36.8098 0.297228C36.3335 0.100319 35.8231 -0.000685054 35.3077 3.49682e-06ZM62.7692 87.6154V98.0769C62.7692 99.1174 63.1826 100.115 63.9183 100.851C64.654 101.587 65.6518 102 66.6923 102C67.7328 102 68.7306 101.587 69.4663 100.851C70.2021 100.115 70.6154 99.1174 70.6154 98.0769V87.6154H62.7692ZM31.3846 87.6154V98.0769C31.3846 99.1174 31.7979 100.115 32.5337 100.851C33.2694 101.587 34.2672 102 35.3077 102C36.3482 102 37.346 101.587 38.0817 100.851C38.8174 100.115 39.2308 99.1174 39.2308 98.0769V87.6154H31.3846Z"
          fill="white"
        />
      </svg>
    ),
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
          'https://github.com/inngest/inngest-demo/blob/main/app/[categorySlug]/background-jobs/csv-file-import/inngest.ts',
        illustration: <CSVFileImportIllustration />,
        action: csvFileImportAction,
      },
    ],
  },
  {
    name: 'Workflows',
    summary: 'Build complex workflows in minutes without file configurations.',
    illustration: (
      <svg
        width="103"
        height="103"
        viewBox="0 0 103 103"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.4"
          d="M68.2034 11.524C61.7975 11.524 56.6048 16.6431 56.6048 22.9586V80.1316C56.6048 92.761 46.2184 103 33.4067 103C20.5951 103 10.2095 92.761 10.2095 80.1308V17.2413H21.8089V80.1308C21.8089 86.4455 27.0009 91.5654 33.4067 91.5654C39.8133 91.5654 45.0061 86.4463 45.0061 80.1308V22.9578C45.0061 10.3284 55.3917 0.0893555 68.2034 0.0893555C81.015 0.0893555 91.4014 10.3284 91.4014 22.9586V80.1316H79.802V22.9586C79.802 16.6439 74.6092 11.524 68.2034 11.524Z"
          fill="white"
        />
        <path
          d="M21.0183 2.83627C18.7809 -0.945423 13.2379 -0.945423 10.9996 2.83627L0.798606 20.0761C-1.45631 23.8871 1.33183 28.6743 5.80838 28.6743H26.2103C30.6861 28.6743 33.475 23.8871 31.2193 20.0761L21.0183 2.83627ZM68.2035 85.8465C68.2035 76.3744 75.9927 68.6954 85.6026 68.6954C95.211 68.6954 103 76.3744 103 85.8473C103 95.3193 95.211 102.999 85.6018 102.999C75.9927 102.999 68.2035 95.3193 68.2035 85.8473V85.8465Z"
          fill="black"
        />
        <path
          d="M21.0183 2.83627C18.7809 -0.945423 13.2379 -0.945423 10.9996 2.83627L0.798606 20.0761C-1.45631 23.8871 1.33183 28.6743 5.80838 28.6743H26.2103C30.6861 28.6743 33.475 23.8871 31.2193 20.0761L21.0183 2.83627ZM68.2035 85.8465C68.2035 76.3744 75.9927 68.6954 85.6026 68.6954C95.211 68.6954 103 76.3744 103 85.8473C103 95.3193 95.211 102.999 85.6018 102.999C75.9927 102.999 68.2035 95.3193 68.2035 85.8473V85.8465Z"
          fill="white"
        />
      </svg>
    ),
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
          'https://github.com/inngest/inngest-demo/blob/main/app/[categorySlug]/workflows/customer-onboarding/inngest.ts',
        illustration: <CustomerOnboardingIllustration />,
        action: customerOnboardingAction,
      },
    ],
  },
  {
    name: 'Scheduled Functions',
    summary: 'Run functions on a schedule that automatically retries on failure.',
    illustration: (
      <svg
        width="102"
        height="102"
        viewBox="0 0 102 102"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30.3586 82.2695C32.6027 83.9865 35.0669 85.4302 37.7016 86.551L33.5412 93.757C32.3676 95.7898 29.7683 96.4863 27.7356 95.3127C25.7028 94.1391 25.0064 91.5398 26.18 89.507L30.3586 82.2695ZM64.331 86.5371C66.9644 85.4135 69.4272 83.9673 71.6696 82.2479L75.7862 89.3781C76.9598 91.4108 76.2633 94.0101 74.2306 95.1837C72.1978 96.3573 69.5986 95.6608 68.425 93.6281L64.331 86.5371Z"
          fill="white"
        />
        <path
          opacity="0.3"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M51 89.25C32.2224 89.25 17 74.0277 17 55.25C17 36.4723 32.2224 21.25 51 21.25C69.7777 21.25 85 36.4723 85 55.25C85 74.0277 69.7777 89.25 51 89.25ZM81.0425 13.8298L88.4771 21.2644C90.9667 23.754 90.9667 27.7904 88.4771 30.28C85.9875 32.7696 81.9511 32.7696 79.4615 30.28L72.0269 22.8454C69.5373 20.3558 69.5373 16.3194 72.0269 13.8298C74.5165 11.3402 78.5529 11.3402 81.0425 13.8298ZM22.5192 12.2488C25.0088 9.75922 29.0452 9.75922 31.5348 12.2488C34.0244 14.7384 34.0244 18.7748 31.5348 21.2644L22.5192 30.28C20.0296 32.7696 15.9932 32.7696 13.5036 30.28C11.014 27.7904 11.014 23.754 13.5036 21.2644L22.5192 12.2488Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M50.8429 31.875H51.2019C52.2937 31.875 53.2078 32.7023 53.3164 33.7886L55.25 53.125L69.0543 61.0132C69.7164 61.3915 70.125 62.0956 70.125 62.8582V63.75C70.125 64.6464 69.3984 65.3731 68.502 65.3731C68.3577 65.3731 68.2141 65.3538 68.0749 65.3159L48.4444 59.9621C47.461 59.6939 46.8066 58.7653 46.8847 57.749L48.7241 33.837C48.8093 32.7299 49.7325 31.875 50.8429 31.875Z"
          fill="white"
        />
      </svg>
    ),
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
          'https://github.com/inngest/inngest-demo/blob/main/app/[categorySlug]/scheduled-functions/monthly-report/inngest.ts',
        illustration: <MonthlyReportIllustration />,
      },
    ],
  },
];

export default useCases;
