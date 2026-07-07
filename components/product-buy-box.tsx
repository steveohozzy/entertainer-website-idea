"use client"

import { Heart, Minus, Plus, ShieldCheck, Star, Truck, ShoppingBag } from "lucide-react"
import { useState } from "react"

type Product = {
  name: string
  brand: string
  badge?: string

  price: number
  wasPrice?: number

  rating: number
  reviews: number

  age: string
}

export function ProductBuyBox({
  product,
}: {
  product: Product
}) {
  const [qty, setQty] = useState(1)
  const [liked, setLiked] = useState(false)
  const [added, setAdded] = useState(false)

  const saving =
    product.wasPrice
      ? product.wasPrice - product.price
      : 0

  return (
    <aside className="space-y-5">

      {/* Brand */}

      <p className="text-sm font-black uppercase tracking-[0.18em] text-primary">
        {product.brand}
      </p>

      {/* Title */}

      <h1 className="text-4xl font-black leading-tight text-foreground">
        {product.name}
      </h1>

      {/* Rating */}

      <div className="flex items-center gap-3">

        <div className="flex items-center gap-1">
          <Star className="size-4 fill-yellow-400 text-yellow-400" />
          <span className="font-bold">
            {product.rating}
          </span>
        </div>

        <span className="text-muted-foreground">
          ({product.reviews} reviews)
        </span>

        <span className="text-muted-foreground">
          SKU: 582561
        </span>

      </div>

      {/* Price Card */}

      <div
        className="
          rounded-[2rem]
          border border-white/20
          bg-white/60
          backdrop-blur-2xl
          p-6
          shadow-xl
        "
      >

        <div className="flex items-end gap-3">

          <span className="text-5xl font-black">
            £{product.price.toFixed(2)}
          </span>

          {product.wasPrice && (
            <span className="pb-2 text-xl text-muted-foreground line-through">
              £{product.wasPrice.toFixed(2)}
            </span>
          )}

        </div>

        {saving > 0 && (
          <div className="mt-3 inline-flex rounded-full bg-secondary px-4 py-2 text-sm font-bold text-white">
            Save £{saving.toFixed(2)}
          </div>
        )}

        <p className="mt-5 text-sm text-muted-foreground">
          or 4 interest free payments of{" "}
          <strong>
            £{(product.price / 4).toFixed(2)}
          </strong>
        </p>

      </div>

      {/* Basket Card */}

      <div
        className="
          rounded-[2rem]
          border border-white/20
          bg-white/60
          backdrop-blur-2xl
          p-6
          shadow-xl
        "
      >

        <div className="flex items-center gap-4">

          {/* Qty */}

          <div
            className="
              flex
              items-center
              rounded-full
              bg-white
              shadow
            "
          >

            <button
              onClick={() =>
                setQty(Math.max(1, qty - 1))
              }
              className="p-4 hover:bg-muted rounded-l-full cursor-pointer"
            >
              <Minus className="size-4" />
            </button>

            <span className="w-10 text-center font-bold">
              {qty}
            </span>

            <button
              onClick={() => setQty(qty + 1)}
              className="p-4 hover:bg-muted rounded-r-full cursor-pointer"
            >
              <Plus className="size-4" />
            </button>

          </div>

          {/* Add */}

          <button
            type="button"
            onClick={() => setAdded(true)}
            className={`
              flex
              items-center
              justify-center
              gap-2
              grow
              text-center
              cursor-pointer
              rounded-full

              px-6
              py-3

              font-black

              transition-all

              hover:scale-105

              ${
                added
                  ? "bg-green-500 text-white"
                  : "bg-primary text-primary-foreground"
              }
            `}
          >

            <ShoppingBag className="size-5" />

            {
              added
                ? "Added"
                : "Add to Basket"
            }

          </button>

          {/* Wishlist */}

          <button
            onClick={() => setLiked(!liked)}
            className="
              grid
              h-14
              w-14
              place-items-center
              rounded-full
              bg-white
              shadow
              transition
              hover:scale-110
              cursor-pointer
            "
          >
            <Heart
              className={`size-5 ${
                liked
                  ? "fill-primary text-primary"
                  : ""
              }`}
            />
          </button>

        </div>

      </div>

      {/* Delivery */}

      <div
        className="
          rounded-[2rem]
          border border-white/20
          bg-white/60
          backdrop-blur-2xl
          p-6
          shadow-xl
          space-y-5
        "
      >

        <div className="flex gap-4">

          <Truck className="mt-1 text-primary" />

          <div>

            <h3 className="font-bold">
              FREE Standard Delivery
            </h3>

            <p className="text-sm text-muted-foreground">
              Arrives in 2–3 working days
            </p>

          </div>

        </div>

        <div className="flex gap-4">

          <ShieldCheck className="mt-1 text-primary" />

          <div>

            <h3 className="font-bold">
              Click & Collect
            </h3>

            <p className="text-sm text-muted-foreground">
              Ready from your local store
            </p>

          </div>

        </div>

      </div>

      {/* Store */}

      <button
        className="
          w-full
          rounded-full
          border-2
          border-primary
          py-4
          font-bold
          text-primary
          transition
          hover:bg-primary
          hover:text-white
          cursor-pointer
        "
      >
        Check Store Stock
      </button>

    </aside>
  )
}