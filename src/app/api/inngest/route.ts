import processCSVFile from '@/app/use-cases/background-jobs/csv-file/processCSVFile';
import customerOnboarding from '@/app/use-cases/workflows/onboarding/customerOnboarding';
import inngest from './client';
import { serve } from "inngest/next";

export const { GET, POST, PUT } = serve(inngest, [
  processCSVFile,
  customerOnboarding
]);
