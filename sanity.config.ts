import {createConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {uniformPlugin} from '@uniformdev/sanity-plugin-uniform'

export default createConfig({
  name: 'default',
  title: 'UniformConf',
  projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID,
  dataset: import.meta.env.SANITY_STUDIO_DATASET,

  plugins: [
    uniformPlugin({
      apiHost: import.meta.env.SANITY_STUDIO_UNIFORM_HOST || 'https://uniform.app',
      apiKey: import.meta.env.SANITY_STUDIO_UNIFORM_API_KEY!,
      projectId: import.meta.env.SANITY_STUDIO_UNIFORM_PROJECT_ID!,
    }),
    deskTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
