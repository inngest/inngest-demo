import { inngest, functions } from '@/inngest';
import { serve } from 'inngest/next';

export const { GET, POST, PUT } = serve(inngest, functions);
