import { serve } from 'inngest/next';
import inngest from './client';
import { importContactsFromCSVFile } from '@/app/[categorySlug]/background-jobs/csv-file-import/inngest';
import { generateMonthlyReport } from '@/app/[categorySlug]/scheduled-functions/monthly-report/inngest';
import { customerOnboarding } from '@/app/[categorySlug]/workflows/customer-onboarding/inngest';

export const { GET, POST, PUT } = serve(inngest, [
  importContactsFromCSVFile,
  customerOnboarding,
  generateMonthlyReport,
]);
