export const talksListSchema = {
  title: 'Talks List',
  name: 'talksList',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'titleWhenPersonalized',
      type: 'string',
      title: 'Title When Personalized',
    },
    {
      name: 'numberToShow',
      type: 'number',
      title: 'Number of Talks To Show',
    },
    {
      name: 'registerButtonText',
      type: 'string',
      title: 'Register Button Text',
    },
    // note: `array` field type is useful for one-to-many references. whereas `reference` field type is 1:1.
    // also note: by default `array` field type will store inline instances of objects. For our use, though,
    // we want to store references to existing objects.
    // Therefore we use an `array` field containing `reference` objects.
    {
      name: 'talks',
      title: 'Talks',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'talk'}],
        },
      ],
    },
    // {
    //   name: 'personalizationCriteria',
    //   type: 'uniform.personalizationCriteria',
    //   title: 'Personalization Criteria',
    // },
  ],
  // https://www.sanity.io/docs/previews-list-views
  preview: {
    select: {
      title: 'title',
    },
  },
}
