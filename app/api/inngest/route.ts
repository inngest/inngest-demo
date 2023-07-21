import { serve } from 'inngest/next';
import inngest from './client';
import { importContactsFromCSVFile } from '@/app/(use-cases)/background-jobs/csv-file-import/inngest';
import { generateMonthlyReport } from '@/app/(use-cases)/scheduled-functions/monthly-report/inngest';
import { customerOnboarding } from '@/app/(use-cases)/workflows/customer-onboarding/inngest';

export const { GET, POST, PUT } = serve(inngest, [
  importContactsFromCSVFile,
  customerOnboarding,
  generateMonthlyReport,
]);
