export const talkSchema = {
  title: 'Talk',
  name: 'talk',
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
      name: 'audience',
      type: 'string',
      title: 'Audience',
      options: {
        list: [
          { title: 'Developers', value: 'Developers' },
          { title: 'Marketers', value: 'Marketers' },
        ],
        layout: 'radio',
      },
    },
  ],
  // https://www.sanity.io/docs/previews-list-views
  preview: {
    select: {
      title: 'title',
    },
  },
};
