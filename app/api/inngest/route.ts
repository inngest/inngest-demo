// app/api/inngest/route.ts
import { serve } from "inngest/next";
import { inngest } from "../../../inngest/client";   // your client
import * as fns from "../../../inngest/functions";   // your functions

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: Object.values(fns),
});
