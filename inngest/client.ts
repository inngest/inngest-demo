import { Inngest } from 'inngest';

const inngest = new Inngest({
  id: 'Inngest Demo',
  eventKey: process.env.NEXT_PUBLIC_INNGEST_EVENT_KEY,
});

export default inngest;
