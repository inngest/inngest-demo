import inngest from '@/app/api/inngest/client';
import { parse } from 'csv-parse/sync';
import fs from 'node:fs/promises';
import path from 'path';

type Contact = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthDate: string;
  jobTitle: string;
};

export default inngest.createFunction(
  { name: 'Process CSV file' },
  { event: 'app/csv.file.uploaded' },
  async ({ event, step }) => {
    const fileContent = await step.run('Read file content', async () => {
      const fileURL = event.data.url;
      const csvFilePath = path.join(process.cwd(), fileURL);
      const buffer = await fs.readFile(csvFilePath);
      return buffer.toString();
    });

    const records = await step.run('Parse CSV', async () => {
      return parse(fileContent, { columns: true, bom: true }) as Contact[];
    });

    const batches = await step.run('Split records into batches', async () => {
      return records.reduce<Contact[][]>((batches, record, index) => {
        const batchIndex = Math.floor(index / 100);
        batches[batchIndex] = [...(batches[batchIndex] || []), record];
        return batches;
      }, []);
    });

    const importSteps = batches.map((batch) =>
      step.run('Import contact batch', () => {
        // API call to import contacts
        return { success: true, message: `${batch.length} contacts imported.` };
      }),
    );

    return await Promise.all(importSteps);
  },
);
