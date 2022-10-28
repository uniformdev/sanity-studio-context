export const callToActionSchema = {
  title: 'Call To Action',
  name: 'callToAction',
  type: 'document',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'subheading',
      type: 'string',
      title: 'Subheading',
    },
    {
      name: 'buttonLink',
      type: 'url',
      title: 'Button Link',
    },
    {
      name: 'buttonText',
      type: 'string',
      title: 'Button Text',
    },
    {
      name: 'buttonImage',
      type: 'image',
      title: 'Button Image',
      options: {accept: 'image/*'},
    },
  ],
  // https://www.sanity.io/docs/previews-list-views
  preview: {
    select: {
      title: 'heading',
    },
  },
}
