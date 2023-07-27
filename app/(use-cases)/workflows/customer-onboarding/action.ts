'use server';

import inngest from '@/app/api/inngest/client';

export default async function action() {
  // Artificial delay to simulate a network request
  await new Promise((r) => setTimeout(r, 1_000));

  await inngest.send({
    name: 'app/user.signed.up',
    data: {
      userId: '123',
      firstName: 'John',
      lastName: 'Doe',
      email: 'doej@example.com',
    },
  });
}
