import { AppCSVFileUploaded } from '@/app/background-jobs/csv-file-import/inngest';
import {
  AppEmailOpened,
  AppUserSignedUp,
} from '@/app/workflows/customer-onboarding/inngest';
import { EventSchemas, Inngest } from 'inngest';

const inngest = new Inngest({
  name: 'Inngest Demo',
  schemas: new EventSchemas().fromUnion<AppCSVFileUploaded | AppUserSignedUp | AppEmailOpened>(),
  eventKey: process.env.NEXT_PUBLIC_INNGEST_EVENT_KEY,
});

export default inngest;
