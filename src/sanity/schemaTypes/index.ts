import { type SchemaTypeDefinition } from 'sanity'
import { tourType } from './tourType'
import { destinationType } from './destinationType'
import { testimonialType } from './testimonialType'
import { reviewType } from './reviewType'
import { blogPostType } from './blogPostType'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [tourType, destinationType, testimonialType, reviewType, blogPostType],
}
