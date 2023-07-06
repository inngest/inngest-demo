import type { EventPayload } from 'inngest';

export default interface AppUserSignedUp extends EventPayload {
  name: 'app/user.signed.up';
  data: {
    firstName: string;
    lastName: string;
    email: string;
  };
}
