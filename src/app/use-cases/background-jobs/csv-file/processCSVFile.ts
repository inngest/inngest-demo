import inngest from '@/app/api/inngest/client';
import { parse } from 'csv-parse';
import fs from 'fs';
import { z } from "zod";
import path from 'path';

const personSchema = z.object({
    index: z.string(),
    id: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    sex: z.string(),
    email: z.string(),
    phone: z.string(),
    birthDate: z.coerce.date(),
    jobTitle: z.string(),
});

type Person = z.infer<typeof personSchema>;


const processCSVFile = inngest.createFunction(
  { name: "Process CSV file" },
  { event: "app/csv.file.uploaded" },
  async ({ event }) => {
    const fileURL = event.data.url;
    const csvFilePath = path.join(process.cwd(), fileURL);

    const parser = fs.createReadStream(csvFilePath).pipe(parse({
        columns: Object.keys(personSchema.shape),
    }));

    let adultCount = 0;
    for await (const record of parser) {
        const result = personSchema.safeParse(record);
        if (!result.success) continue;

        const person = result.data;
        if (isAdult(person)) adultCount++;
    }

    return { adultCount };
  }
);

function isAdult(person: Person) {
    const age = getAge(person);
    return age >= 18;
}
function getAge(person: Person) {
    const today = new Date();
    const age = today.getFullYear() - person.birthDate.getFullYear();
    const month = today.getMonth() - person.birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < person.birthDate.getDate())) {
        return age - 1;
    }
    return age;
}

export default processCSVFile;
