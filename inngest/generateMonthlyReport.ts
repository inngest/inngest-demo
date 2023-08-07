import { inngest } from '@/inngest';

export const generateMonthlyReport = inngest.createFunction(
  { name: 'Generate monthly report' },
  { cron: '0 0 1 * *' }, // Every 1st day of the month at midnight
  async ({ event, step }) => {
    step.run('Generate report', () => {
      // Query database and generate report
    });

    step.run('Send report', () => {
      // Send report to employees
    });
  },
);
