import AppCSVFileUploaded from '@/app/use-cases/background-jobs/csv-file/AppCSVFileUploaded';
import { EventSchemas, Inngest } from "inngest";

const inngest = new Inngest({
  name: 'Inngest Demo',
  schemas: new EventSchemas().fromUnion<
    AppCSVFileUploaded
  >(),
});

export default inngest;
