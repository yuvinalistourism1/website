import { defineField, defineType } from 'sanity'

export const reviewType = defineType({
    name: 'review',
    title: 'Review',
    type: 'document',
    fields: [
        defineField({
            name: 'firstName',
            title: 'First Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'lastName',
            title: 'Last Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'role',
            title: 'Role / Service Type',
            type: 'string',
            description: 'e.g., "Visa Client", "Dubai Tour", "Family Vacation"',
        }),
        defineField({
            name: 'text',
            title: 'Review Text',
            type: 'text',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'stars',
            title: 'Star Rating',
            type: 'number',
            validation: (Rule) => Rule.required().min(1).max(5),
        }),
        defineField({
            name: 'source',
            title: 'Source',
            type: 'string',
            options: {
                list: [
                    { title: 'Google', value: 'google' },
                    { title: 'Manual Entry', value: 'manual' },
                ],
            },
            description: 'Where this review came from',
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime',
        }),
    ],
    preview: {
        select: {
            title: 'firstName',
            subtitle: 'role',
        },
    },
})
