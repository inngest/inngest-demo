import { inngest } from '@/inngest';

export const generateMonthlyReport = inngest.createFunction(
  { id: 'generate-monthly-report', name: 'Generate monthly report', triggers: [{ cron: '0 0 1 * *' }] }, // Every 1st day of the month at midnight
  async ({ event, step }) => {
    step.run('generate-report', () => {
      // Query database and generate report
    });

    step.run('send-report', () => {
      // Send report to employees
    });
  }
);
