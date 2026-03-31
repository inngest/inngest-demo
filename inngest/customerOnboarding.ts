import { inngest } from '@/inngest';

export const customerOnboarding = inngest.createFunction(
  { id: 'customer-onboarding', name: 'Customer Onboarding', triggers: [{ event: 'app/user.signed.up' }] },
  async ({ event, step }) => {
    await step.run('send-welcome-email', async () => {
      // Send welcome email
    });

    await step.sleep('wait-after-first-email', '2s'); // Replace with 2 days in production

    await step.run('send-new-in-stock-email', async () => {
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
      await step.run('send-10-percent-discount-email', async () => {
        // Send “10% Discount” email
      });
    }
  }
);
