export const heroSchema = {
  title: 'Hero',
  name: 'hero',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'personalizationCriteria',
      type: 'uniform.personalizationCriteria',
      title: 'Personalization Criteria',
    },
    {
      name: 'buttonText',
      type: 'string',
      title: 'Button Text',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {accept: 'image/*'},
    },
    {
      name: 'buttonLink',
      type: 'url',
      title: 'Button Link',
    },
  ],
  // https://www.sanity.io/docs/previews-list-views
  preview: {
    select: {
      title: 'title',
    },
  },
}
