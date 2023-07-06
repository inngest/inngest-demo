import AppCSVFileUploaded from '@/app/use-cases/background-jobs/csv-file/AppCSVFileUploaded';
import AppUserSignedUp from '@/app/use-cases/workflows/onboarding/AppUserSignedUp';
import { EventSchemas, Inngest } from "inngest";

const inngest = new Inngest({
  name: 'Inngest Demo',
  schemas: new EventSchemas().fromUnion<
    AppCSVFileUploaded |
    AppUserSignedUp
  >(),
});

export default inngest;
