export { default as inngest } from "./client";

import { importContactsFromCSVFile} from './importContactsFromCSVFile';
import { generateMonthlyReport } from './generateMonthlyReport';
import { customerOnboarding}  from './customerOnboarding';


export const functions = [
  importContactsFromCSVFile,
  generateMonthlyReport,
  customerOnboarding
];
