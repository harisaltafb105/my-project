import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import order from './order'
import cartItem from './cartItem'
import feedback from './feedback'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,order,cartItem,feedback],
}
