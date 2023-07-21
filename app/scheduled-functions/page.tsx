'use client';

import CategoryLayout from '@/app/CategoryLayout';
import UseCaseExample from '@/app/UseCaseExample';

export default function ScheduledFunctionsPage() {
  return (
    <CategoryLayout title="Scheduled Functions">
      <UseCaseExample
        name="Monthly Report"
        description="This example demonstrate an Inngest function that automatically generate a report at the end of each month (for demo purposes, the report is generated every 5 minutes.)"
        benefits={[
          'If a report fails to generate (e.g. because of a network error), Inngest will automatically retry the request for you.',
        ]}
        docsHref="https://www.inngest.com/docs/guides/scheduled-functions"
        codeHref="https://github.com/inngest/inngest-demo/blob/main/app/scheduled-functions/monthly-report/inngest.ts"
        illustration={
          <a
            href="http://localhost:8288/"
            target="_blank"
            className="bg-slate-900 inline-flex items-center hover:bg-slate-800 absolute bottom-4 right-4 text-sm font-semibold text-slate-100 transition-colors rounded-lg py-2 pl-4 pr-1.5 text-center group"
          >
            Open Result
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-6 h-6 -mt-0.5 -mr-0.5"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.46433 13.5353C6.32368 13.3947 6.24466 13.2039 6.24466 13.005C6.24466 12.8061 6.32368 12.6153 6.46433 12.4747L11.1581 7.78091L8.24624 7.92092C8.14599 7.92581 8.04577 7.91052 7.95154 7.87596C7.8573 7.8414 7.77096 7.78828 7.69762 7.71975C7.62429 7.65121 7.56547 7.56865 7.52463 7.47696C7.48379 7.38527 7.46177 7.28631 7.45988 7.18596C7.45798 7.0856 7.47625 6.98589 7.5136 6.89272C7.55095 6.79956 7.60663 6.71484 7.67732 6.64358C7.74801 6.57233 7.83229 6.51599 7.92516 6.4779C8.01802 6.43981 8.11759 6.42075 8.21796 6.42185L12.9909 6.24508C13.0917 6.24322 13.1919 6.26171 13.2854 6.29943C13.3788 6.33715 13.4638 6.39333 13.5351 6.46462C13.6063 6.53591 13.6625 6.62083 13.7003 6.71433C13.738 6.80782 13.7565 6.90795 13.7546 7.00875L13.5778 11.7817C13.5789 11.8821 13.5599 11.9817 13.5218 12.0745C13.4837 12.1674 13.4274 12.2517 13.3561 12.3224C13.2848 12.3931 13.2001 12.4487 13.107 12.4861C13.0138 12.5234 12.9141 12.5417 12.8137 12.5398C12.7134 12.5379 12.6144 12.5159 12.5227 12.4751C12.431 12.4342 12.3485 12.3754 12.2799 12.3021C12.2114 12.2287 12.1583 12.1424 12.1237 12.0481C12.0892 11.9539 12.0739 11.8537 12.0788 11.7534L12.2188 8.84157L7.52499 13.5353C7.38434 13.676 7.19358 13.755 6.99466 13.755C6.79575 13.755 6.60499 13.676 6.46433 13.5353Z"
              />
            </svg>
          </a>
        }
      />
    </CategoryLayout>
  );
}
