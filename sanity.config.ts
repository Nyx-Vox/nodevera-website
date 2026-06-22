import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./src/sanity/schemaTypes";
import { SANITY_DATASET, SANITY_PROJECT_ID } from "./src/sanity/lib/env";

export default defineConfig({
  name: "nodevera",
  title: "NodeVera Blog Studio",
  basePath: "/studio",
  projectId: SANITY_PROJECT_ID || "missing-project-id",
  dataset: SANITY_DATASET,
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
