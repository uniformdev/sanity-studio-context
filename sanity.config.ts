import { defineConfig } from "sanity";
import { schemaTypes } from './schemas'
import { structureTool } from "sanity/structure";
import { uniformPlugin } from '@uniformdev/sanity-plugin-uniform'

export default defineConfig({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET!,
  plugins: [
    structureTool(),
    uniformPlugin({
      apiHost: 'https://uniform.app',
      apiKey: process.env.SANITY_STUDIO_UNIFORM_API_KEY!,
      projectId: process.env.SANITY_STUDIO_UNIFORM_PROJECT_ID!,
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});

// export default createConfig({
//   name: 'default',
//   title: 'UniformConf',
//   projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID,
//   dataset: import.meta.env.SANITY_STUDIO_DATASET,

//   plugins: [
//     uniformPlugin({
//       apiHost: import.meta.env.SANITY_STUDIO_UNIFORM_HOST || 'https://uniform.app',
//       apiKey: import.meta.env.SANITY_STUDIO_UNIFORM_API_KEY!,
//       projectId: import.meta.env.SANITY_STUDIO_UNIFORM_PROJECT_ID!,
//     }),
//     deskTool(),
//   ],

//   schema: {
//     types: schemaTypes,
//   },
// })
