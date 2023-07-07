import processCSVFile from '../../use-cases/background-jobs/csv-file/processCSVFile';
import generateMonthlyReport from '../../use-cases/scheduled-functions/monthly-report/generateMonthlyReport';
import customerOnboarding from '../../use-cases/workflows/onboarding/customerOnboarding';
import inngest from './client';
import { serve } from 'inngest/next';

export const { GET, POST, PUT } = serve(inngest, [
  processCSVFile,
  customerOnboarding,
  generateMonthlyReport,
]);
