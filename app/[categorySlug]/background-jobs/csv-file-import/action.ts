'use server';

import inngest from '@/app/api/inngest/client';

export default async function action() {
  async function fakeUpload() {
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
