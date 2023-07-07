import type { EventPayload } from 'inngest';

export default interface AppCSVFileUploaded extends EventPayload {
  name: 'app/csv.file.uploaded';
  data: {
    url: string;
  };
}
