import type { EventPayload } from 'inngest';
import { inngest } from '@/inngest';

export interface AppUserSignedUp extends EventPayload {
  name: 'app/user.signed.up';
  data: {
    userId: string;
    firstName: string;
    lastName: string;
    email: string;
  };
}

export interface AppEmailOpened extends EventPayload {
  name: 'app/email.opened';
  data: {
    userId: string;
    template: {
      name: string;
    };
  };
}

export const customerOnboarding = inngest.createFunction(
  {id: 'customer-onboarding', name: 'Customer Onboarding' },
  { event: 'app/user.signed.up' },
  async ({ event, step }) => {
    await step.run('Send welcome email', async () => {
      // Send welcome email
    });

    await step.sleep('wait-after-first-email','2s'); // Replace with 2 days in production

    await step.run('Send “New in Stock” email', async () => {
      // Send “New in Stock” email
    });

    const emailOpenedEvent = await step.waitForEvent('wait-for-email-opened', {
      event: 'app/email.opened',
      timeout: '3s', // Replace with 3 days in production
      if:
        'event.data.userId == async.data.userId &&' +
        "async.event.data.template.name == 'New in Stock'",
    });

    if (!emailOpenedEvent) {
      await step.run('Send “10% Discount” email', async () => {
        // Send “10% Discount” email
      });
    }
  },
);
