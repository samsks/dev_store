'use client'

import { useCartContext } from '@/contexts/cart-context'
import { ShoppingBag } from 'lucide-react'

export function CartWidget() {
  const { cartItems } = useCartContext()

  return (
    <div className="flex items-center gap-2">
      <ShoppingBag className="h-4 w-4" />
      <span className="text-sm">Cart ({cartItems.length})</span>
    </div>
  )
}
