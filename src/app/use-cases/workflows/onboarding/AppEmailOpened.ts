import type { EventPayload } from 'inngest';

export default interface AppEmailOpened extends EventPayload {
  name: 'app/email.opened';
  data: {
    userId: string;
    template: {
      name: string;
    }
  };
}
