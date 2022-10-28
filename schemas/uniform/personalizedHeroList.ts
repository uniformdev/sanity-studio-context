export const personalizedHeroListSchema = {
  title: 'Personalized Hero List',
  name: 'personalizedHeroList',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Personalized Hero Name',
    },
    {
      name: 'heroVariations',
      type: 'array',
      title: 'Hero Variations',
      of: [
        {
          type: 'reference',
          to: [{ type: 'hero' }],
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
