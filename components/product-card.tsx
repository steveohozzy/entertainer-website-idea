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
    <div className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-square bg-muted/50">
        {product.badge && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
            {product.badge}
          </span>
        )}
        <button
          type="button"
          onClick={() => setLiked((v) => !v)}
          aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={liked}
          className="absolute right-3 top-3 z-10 grid size-9 place-items-center rounded-full bg-card/90 text-foreground shadow-sm backdrop-blur transition hover:scale-110"
        >
          <Heart className={`size-5 ${liked ? "fill-primary text-primary" : ""}`} />
        </button>
        <Image
          src={product.img || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-contain p-6 transition group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <span className="text-xs font-bold uppercase tracking-wide text-accent-foreground/70">
          {product.age}
        </span>
        <h3 className="mt-1 line-clamp-2 font-heading text-base font-bold leading-snug text-foreground">
          {product.name}
        </h3>

        <div className="mt-1.5 flex items-center gap-1.5">
          <Star className="size-4 fill-secondary text-secondary" aria-hidden="true" />
          <span className="text-sm font-semibold text-foreground">{product.rating}</span>
          <span className="text-xs text-muted-foreground">({product.reviews})</span>
        </div>

        <div className="mt-auto flex items-end justify-between pt-4">
          <div className="flex items-baseline gap-2">
            <span className="font-heading text-xl font-bold text-foreground">
              £{product.price.toFixed(2)}
            </span>
            {product.wasPrice && (
              <span className="text-sm font-semibold text-muted-foreground line-through">
                £{product.wasPrice.toFixed(2)}
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={() => setAdded(true)}
            aria-label={`Add ${product.name} to basket`}
            className={`grid size-10 place-items-center rounded-full transition hover:scale-110 ${
              added
                ? "bg-chart-4 text-primary-foreground"
                : "bg-primary text-primary-foreground"
            }`}
          >
            <Plus className={`size-5 transition ${added ? "rotate-45" : ""}`} />
          </button>
        </div>
      </div>
    </div>
  )
}
