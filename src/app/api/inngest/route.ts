import processCSVFile from '@/app/use-cases/background-jobs/csv-file/processCSVFile';
import inngest from './client';
import { serve } from "inngest/next";

export const { GET, POST, PUT } = serve(inngest, [processCSVFile]);
