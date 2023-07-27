'use server';

import inngest from '@/app/api/inngest/client';

export default async function action() {
  async function fakeUpload() {
    // Simulate upload time
    await new Promise((r) => setTimeout(r, 2_000));

    return {
      url: '/public/500-contacts.csv',
      uploadedAt: new Date(),
      contentType: 'text/csv',
    };
  }

  const { url } = await fakeUpload();

  await inngest.send({
    name: 'app/csv.file.uploaded',
    data: {
      url,
    },
  });
}
