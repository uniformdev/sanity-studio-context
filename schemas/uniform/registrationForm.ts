export const registrationFormSchema = {
  title: 'Registration Form',
  name: 'registrationForm',
  type: 'document',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'buttonText',
      type: 'string',
      title: 'Button Text',
    },
    {
      name: 'registeredText',
      type: 'string',
      title: 'Registered Text',
    },
  ],
  // https://www.sanity.io/docs/previews-list-views
  preview: {
    select: {
      title: 'heading',
    },
  },
}
