import inngest from '@/app/api/inngest/client';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(request: NextRequest) {
  const { url } = await fakeUpload(request.body);

  await inngest.send({
    name: 'app/csv.file.uploaded',
    data: {
      url,
    },
  });

  return NextResponse.json({ url });
}

async function fakeUpload(file: NextRequest['body']) {
  return {
    url: '/public/500-contacts.csv',
    uploadedAt: new Date(),
    contentType: 'text/csv',
  };
}
