import { ImageResponse } from 'next/og'

import { api } from '@/data/api'
import { iProducts } from '@/data/types/products'
import { env } from '@/env'
import colors from 'tailwindcss/colors'

export const runtime = 'edge'

export const alt = ''

export const size = {
  width: 1200,
  height: 630
}

export const contentType = 'image/png'

async function getProduct(slug: string): Promise<iProducts> {
  const res = await api(`/products/${slug}`, {
    next: {
      revalidate: 15 * 60 // 15 minutes
    }
  })

  return await res.json()
}

export default async function OGImage({
  params
}: {
  params: { slug: string }
}) {
  const product = await getProduct(params.slug)

  const productImageURL = new URL(product.image, env.APP_URL).toString()

  return new ImageResponse(
    (
      <div
        style={{
          background: colors.zinc[950],
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={productImageURL} alt="" style={{ width: '100%' }} />
      </div>
    ),
    {
      ...size
    }
  )
}
