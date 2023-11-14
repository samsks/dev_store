import data from './data.json'

export async function GET(): Promise<Response> {
  return Response.json(data.products)
}
