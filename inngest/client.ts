import type { AppCSVFileUploaded } from '@/inngest/importContactsFromCSVFile';
import type {
  AppEmailOpened,
  AppUserSignedUp,
} from '@/inngest/customerOnboarding';
import { EventSchemas, Inngest } from 'inngest';

const inngest = new Inngest({
  name: 'Inngest Demo',
  schemas: new EventSchemas().fromUnion<AppCSVFileUploaded | AppUserSignedUp | AppEmailOpened>(),
  eventKey: process.env.NEXT_PUBLIC_INNGEST_EVENT_KEY,
});

export default inngest;
