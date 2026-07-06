"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, Plus, Star } from "lucide-react"

export type Product = {
  name: string
  img: string
  price: number
  wasPrice?: number
  rating: number
  reviews: number
  age: string
  badge?: string
}

export function ProductCard({ product }: { product: Product }) {
  const [liked, setLiked] = useState(false)
  const [added, setAdded] = useState(false)

  return (
    <div
      className="
      group
      relative
      flex
      flex-col
      overflow-hidden
      rounded-[2rem]
      cursor-pointer

      border border-white/15

      bg-white/50
      backdrop-blur-2xl

      shadow-[0_10px_20px_rgba(0,0,0,.12)]

      transition-all duration-500
      hover:-translate-y-2
      hover:shadow-[0_15px_30px_rgba(0,0,0,.18)]
    "
    >

      {/* glossy glass tint */}
      <div className="
        absolute inset-0
        bg-gradient-to-br
        from-white/40
        via-white/15
        to-primary/5
      " />

      {/* reflection sweep */}
      <div className="
        absolute
        inset-0
        opacity-0
        transition-opacity
        duration-700
        group-hover:opacity-100
        bg-gradient-to-tr
        from-white/20
        via-transparent
        to-transparent
      " />

      {/* inner glass highlight */}
      <div className="
        absolute inset-0 rounded-[2rem]
        ring-1 ring-white/15
        shadow-inner
      " />

      {/* IMAGE */}
      <div className="relative z-10 aspect-square overflow-hidden">

        {product.badge && (
          <span
            className="
            absolute left-4 top-4 z-20

            rounded-full
            border border-white/20
            bg-primary/90
            px-4 py-1.5

            text-xs
            font-bold
            text-primary-foreground

            shadow-lg
            backdrop-blur-xl
          "
          >
            {product.badge}
          </span>
        )}

        <button
          type="button"
          onClick={() => setLiked((v) => !v)}
          aria-label={
            liked
              ? "Remove from wishlist"
              : "Add to wishlist"
          }
          aria-pressed={liked}
          className="
          absolute
          right-4
          top-4
          z-20

          grid
          size-10
          place-items-center

          rounded-full
          border border-white/20
          bg-white/30

          backdrop-blur-xl

          transition
          hover:scale-110

          cursor-pointer
        "
        >
          <Heart
            className={`size-5 transition ${
              liked
                ? "fill-primary text-primary"
                : "text-foreground"
            }`}
          />
        </button>

        <Image
          src={product.img || "/placeholder.svg"}
          alt={product.name}
          fill
          className="
          object-contain

          transition-all
          duration-700

          group-hover:scale-110
        "
          sizes="(max-width:768px) 50vw, 25vw"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-1 flex-col p-5">

        <span className="
          text-xs
          font-bold
          uppercase
          tracking-[0.15em]
          text-primary
        ">
          {product.age}
        </span>

        <h3 className="
          mt-2
          line-clamp-2
          text-base
          font-black
          leading-snug
          text-foreground
        ">
          {product.name}
        </h3>

        <div className="mt-3 flex items-center gap-1.5">
          <Star
            className="size-4 fill-yellow-400 text-yellow-400"
            aria-hidden="true"
          />

          <span className="text-sm font-bold">
            {product.rating}
          </span>

          <span className="text-xs text-muted-foreground">
            ({product.reviews})
          </span>
        </div>

        <div className="mt-auto flex items-end justify-between pt-5">

          <div className="flex flex-col-reverse items-baseline">

            <span className="
              text-xl
              font-black
              text-foreground
              md:text-2xl
            ">
              £{product.price.toFixed(2)}
            </span>

            {product.wasPrice && (
              <span className="
                text-xs
                md:text-sm
                font-medium
                text-muted-foreground
                line-through
              ">
                £{product.wasPrice.toFixed(2)}
              </span>
            )}

          </div>

          <button
            type="button"
            onClick={() => setAdded(true)}
            aria-label={`Add ${product.name} to basket`}
            className={`
            grid
            size-12
            place-items-center
            rounded-full

            border border-white/20
            backdrop-blur-xl

            transition-all
            hover:scale-110

            cursor-pointer

            ${
              added
                ? "bg-chart-4 text-primary-foreground"
                : "bg-primary text-primary-foreground"
            }
          `}
          >
            <Plus
              className={`size-5 transition duration-300 ${
                added
                  ? "rotate-45"
                  : ""
              }`}
            />
          </button>

        </div>

      </div>
    </div>
  )
}