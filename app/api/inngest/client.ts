import { EventSchemas, Inngest } from 'inngest';
import AppCSVFileUploaded from '../../use-cases/background-jobs/csv-file/AppCSVFileUploaded';
import AppUserSignedUp from '../../use-cases/workflows/onboarding/AppUserSignedUp';
import AppEmailOpened from '../../use-cases/workflows/onboarding/AppEmailOpened';

const inngest = new Inngest({
  name: 'Inngest Demo',
  schemas: new EventSchemas().fromUnion<AppCSVFileUploaded | AppUserSignedUp | AppEmailOpened>(),
  eventKey: process.env.NEXT_PUBLIC_INNGEST_EVENT_KEY,
});

export default inngest;
