export default {
  name: 'restraunt',
  title: 'Restraunt',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Restraunt Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short Description',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of the Restraunt'
    },
    {
      name: 'lat',
      type: 'number',
      title: 'Latitude of the Restraunt'
    },
    {
      name: 'long',
      type: 'number',
      title: 'Longitude of the Restraunt'
    },
    {
      name: 'address',
      type: 'string',
      title: 'Address of the Restraunt',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Enter a value between 1 to 5',
      validation: (Rule) => Rule.required()
        .min(1)
        .max(5)
        .error("Please enter a value from 1 to 5"),
    }
  ],
}
