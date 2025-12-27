import { defineField, defineType } from 'sanity'

export const blogPostType = defineType({
    name: 'blogPost',
    title: 'Blog Post',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 120,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            rows: 3,
            description: 'Short preview used on cards and share snippets.',
        }),
        defineField({
            name: 'mainImage',
            title: 'Cover Image',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'readTime',
            title: 'Read time',
            type: 'string',
            description: 'Example: 6 min read.',
        }),
        defineField({
            name: 'category',
            title: 'Primary category',
            type: 'string',
            options: {
                list: [
                    'Visa Guides',
                    'Travel Planning',
                    'Tours & Experiences',
                    'Destination Tips',
                    'Travel Stories',
                ],
                layout: 'radio',
                direction: 'vertical',
            },
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
            options: { layout: 'tags' },
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'object',
            fields: [
                { name: 'name', title: 'Name', type: 'string', validation: (Rule) => Rule.required() },
                { name: 'role', title: 'Role', type: 'string' },
                { name: 'avatar', title: 'Avatar', type: 'image', options: { hotspot: true } },
            ],
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [
                { type: 'block' },
                {
                    type: 'image',
                    fields: [
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alt text',
                        },
                    ],
                    options: { hotspot: true },
                },
            ],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'featured',
            title: 'Featured',
            type: 'boolean',
            initialValue: false,
        }),
        defineField({
            name: 'seoTitle',
            title: 'SEO Title',
            type: 'string',
        }),
        defineField({
            name: 'seoDescription',
            title: 'SEO Description',
            type: 'text',
            rows: 3,
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'category',
            media: 'mainImage',
        },
        prepare(selection) {
            const { title, subtitle, media } = selection
            return {
                title,
                subtitle: subtitle || 'Blog Post',
                media,
            }
        },
    },
})
