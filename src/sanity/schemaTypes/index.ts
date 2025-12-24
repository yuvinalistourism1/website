import { type SchemaTypeDefinition } from 'sanity'
import { tourType } from './tourType'
import { destinationType } from './destinationType'
import { testimonialType } from './testimonialType'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [tourType, destinationType, testimonialType],
}
