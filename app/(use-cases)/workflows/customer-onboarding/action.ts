'use server';

import inngest from '@/app/api/inngest/client';

export default async function action() {
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
