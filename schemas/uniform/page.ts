import {StringFieldProps} from 'sanity'

export const pageSchema = {
  title: 'Page',
  name: 'page',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: (input: string) => {
          return input.startsWith('/') ? input.toLowerCase() : `/${input.toLowerCase()}`
        },
      },
    },
    {
      name: 'enrichmentTag',
      type: 'uniform.enrichmenttags',
      title: 'Enrichments',
    },
    {
      name: 'components',
      title: 'Components',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'callToAction'},
            {type: 'hero'},
            {type: 'personalizedHeroList'},
            {type: 'personalizedTalksListList'},
            {type: 'registrationForm'},
            {type: 'talksList'},
            {type: 'whyAttend'},
          ],
        },
      ],
    },
  ],
  // https://www.sanity.io/docs/previews-list-views
  preview: {
    select: {
      title: 'title',
    },
  },
}
