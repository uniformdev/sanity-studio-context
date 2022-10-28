export const personalizedTalksListListSchema = {
  title: 'Personalized Talks Lists',
  name: 'personalizedTalksListList',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Personalized Talks List Name',
    },
    {
      name: 'talksListVariations',
      type: 'array',
      title: 'Talks List Variations',
      of: [
        {
          type: 'reference',
          to: [{ type: 'talksList' }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
};
