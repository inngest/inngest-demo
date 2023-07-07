import inngest from '../../../api/inngest/client';

export default inngest.createFunction(
  { name: 'Customer Onboarding' },
  { event: 'app/user.signed.up' },
  async ({ event, step }) => {
    await step.run('Send welcome email', async () => {
      // Send welcome email
    });

    await step.sleep('2s'); // Replace with 2 days in production

    await step.run('Send “New in Stock” email', async () => {
      // Send “New in Stock” email
    });

    const emailOpenedEvent = await step.waitForEvent('app/email.opened', {
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
