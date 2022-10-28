// /sanity.cli.js (.ts)

import {createCliConfig} from 'sanity/cli'

export default createCliConfig({
  api: {
    projectId: 'your-project-id',
    dataset: 'production'
  }
})