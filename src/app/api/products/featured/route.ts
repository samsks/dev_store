import data from '../data.json'

import { iProducts } from '@/data/types/products'

export async function GET(): Promise<Response> {
  await new Promise((resolve) => setTimeout(resolve, 2000)) // for remove in production

  const featured = data.products.filter(
    (product: iProducts) => product.featured
  )
  return Response.json(featured)
}
