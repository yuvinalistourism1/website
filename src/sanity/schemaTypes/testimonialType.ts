import { defineField, defineType } from 'sanity'

export const testimonialType = defineType({
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
        defineField({
            name: 'author',
            title: 'Author',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'role',
            title: 'Role',
            type: 'string',
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'text',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'avatar',
            title: 'Avatar',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'rating',
            title: 'Rating',
            type: 'number',
            validation: (Rule) => Rule.min(1).max(5),
        }),
    ],
})
