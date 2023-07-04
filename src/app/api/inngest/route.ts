import inngest from './client';
import { serve } from "inngest/next";

export const { GET, POST, PUT } = serve(inngest, []);
