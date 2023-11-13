import data from './data.json'

export interface iProducts {
  id: number
  title: string
  slug: string
  price: number
  image: string
  description: string
  featured: boolean
}

export async function GET(): Promise<Response> {
  return Response.json(data.products)
}
