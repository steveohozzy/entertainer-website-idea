"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import {
  Heart,
  ChevronLeft,
  ChevronRight,
  Search,
  Share2,
} from "lucide-react"

type Props = {
  images: string[]
  badge?: string
}

export function ProductGallery({
  images,
  badge,
}: Props) {
  const [selected, setSelected] = useState(0)
  const [liked, setLiked] = useState(false)
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([])

  const next = () =>
    setSelected((selected + 1) % images.length)

  const prev = () =>
    setSelected(
      (selected - 1 + images.length) % images.length
    )

    useEffect(() => {
      const thumbnail = thumbnailRefs.current[selected]

      if (!thumbnail) return

      const parent = thumbnail.parentElement

      if (!parent) return

      const thumbnailLeft = thumbnail.offsetLeft
      const thumbnailWidth = thumbnail.offsetWidth
      const parentWidth = parent.offsetWidth

      parent.scrollTo({
        left:
          thumbnailLeft -
          parentWidth / 2 +
          thumbnailWidth / 2,
        behavior: "smooth",
      })
    }, [selected])

  return (
    <div className="space-y-4">

      {/* MAIN IMAGE */}

      <div
        className="
          group
          relative
          overflow-hidden

          rounded-[36px]

          border
          border-white/20

          bg-gradient-to-br
          from-white
          via-white
          to-slate-50

          shadow-[0_30px_80px_rgba(0,0,0,.10)]

          aspect-square
        "
      >

        {/* soft glow */}

        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />

        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

        {/* badge */}

        {badge && (
          <span
            className="
              absolute
              left-6
              top-6
              z-20

              rounded-full

              bg-primary

              px-5
              py-2

              text-xs
              font-black
              text-white
            "
          >
            {badge}
          </span>
        )}

        {/* image count */}

        <span
          className="
            absolute
            bottom-6
            left-6
            z-20

            rounded-full

            bg-white/70
            backdrop-blur-xl

            px-4
            py-2

            text-sm
            font-bold
          "
        >
          {selected + 1} / {images.length}
        </span>

        {/* action buttons */}

        <div className="absolute right-6 top-6 z-20 flex flex-col gap-3">

          <button
            onClick={() => setLiked(!liked)}
            className="
              grid
              h-12
              w-12
              place-items-center

              rounded-full

              border
              border-white/30

              bg-white/70
              backdrop-blur-xl

              transition
              hover:scale-110
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

          <button
            className="
              grid
              h-12
              w-12
              place-items-center

              rounded-full

              border
              border-white/30

              bg-white/70
              backdrop-blur-xl

              transition
              hover:scale-110
            "
          >
            <Search className="size-5" />
          </button>

          <button
            className="
              grid
              h-12
              w-12
              place-items-center

              rounded-full

              border
              border-white/30

              bg-white/70
              backdrop-blur-xl

              transition
              hover:scale-110
            "
          >
            <Share2 className="size-5" />
          </button>

        </div>

        {/* previous */}

        <button
          onClick={prev}
          className="
            absolute
            left-2
            top-1/2

            z-20

            hidden
            lg:grid

            h-14
            w-14

            -translate-y-1/2

            place-items-center

            rounded-full

            border
            border-white/30

            bg-white/70
            backdrop-blur-xl

            transition
            hover:scale-110
          "
        >
          <ChevronLeft />
        </button>

        {/* next */}

        <button
          onClick={next}
          className="
            absolute
            right-2
            top-1/2

            z-20

            hidden
            lg:grid

            h-14
            w-14

            -translate-y-1/2

            place-items-center

            rounded-full

            border
            border-white/30

            bg-white/70
            backdrop-blur-xl

            transition
            hover:scale-110
          "
        >
          <ChevronRight />
        </button>

        {/* image */}

        <div className="relative h-full w-full">

          <Image
            key={selected}
            src={images[selected]}
            alt=""
            fill
            priority
            className="
              object-contain

              transition-transform
              duration-700
            "
          />

        </div>

      </div>

      {/* THUMBNAILS */}

        <div
          className="
            flex
            gap-4

            overflow-x-auto

            justify-start
            md:justify-center

            px-2
            pb-2
            pt-2

            snap-x
            snap-mandatory

            scrollbar-hide

            [-ms-overflow-style:none]
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >

          {images.map((img, i) => (

            <button
              key={i}
              ref={(el) => {
                thumbnailRefs.current[i] = el
              }}
              onClick={() => setSelected(i)}
              className={`
                relative

                shrink-0
                snap-center

                h-20
                w-20

                md:h-24
                md:w-24

                overflow-hidden

                rounded-[24px]

                border-2

                bg-white/80

                backdrop-blur-xl

                transition-all
                duration-300


                ${
                  selected === i
                    ? `
                      border-primary
                      ring-4
                      ring-primary/20
                      scale-105
                      shadow-md
                    `
                    : `
                      border-white
                      hover:border-primary/40
                      hover:scale-105
                    `
                }
              `}
            >

              <Image
                src={img}
                alt=""
                fill
                className="
                  object-contain
                  p-2
                "
              />

            </button>

          ))}

        </div>

    </div>
  )
}