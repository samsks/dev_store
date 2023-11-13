import data from '../data.json'
import { iProducts } from '../route'

export async function GET(): Promise<Response> {
  const featured = data.products.filter(
    (product: iProducts) => product.featured
  )
  return Response.json(featured)
}
