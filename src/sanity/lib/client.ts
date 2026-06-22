import { createClient } from "next-sanity";
import {
  SANITY_API_VERSION,
  SANITY_DATASET,
  SANITY_PROJECT_ID,
} from "@/sanity/lib/env";

export const client = createClient({
  projectId: SANITY_PROJECT_ID || "missing-project-id",
  dataset: SANITY_DATASET,
  apiVersion: SANITY_API_VERSION,
  useCdn: true,
});
