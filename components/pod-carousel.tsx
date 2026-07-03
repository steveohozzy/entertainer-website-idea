"use client"

import { useRef } from "react"
import { PromoPod } from "./promo-pod"
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"

const items = [
  {
    title: "Pre-Order Grand Theft Auto VI",
    image:
      "https://www.thetoyshop.com/medias/515Wx515H-578267-578267-6.jpg?context=bWFzdGVyfGltYWdlc3wxMDE1NTB8aW1hZ2UvanBlZ3xhR0ZoTDJnNE1TOHhNamMwTlRnek5UYzBNVEl4TkM4MU1UVlhlRFV4TlVoZk5UYzRNalkzWHpVM09ESTJOeTAyTG1wd1p3fGMxN2I0OGNiMjkxODdjMTczZDRjY2UzNzI3Yjc1YTliMDRiMTU3MzVhMmIzNzA5MjRjMjliNjUyYWQxNGI2Nzg",
    href: "#",
  },
  {
    title: "Hot Wheels Mega Track Set",
    image:
      "https://www.thetoyshop.com/medias/515Wx515H-578267-578267-6.jpg?context=bWFzdGVyfGltYWdlc3wxMDE1NTB8aW1hZ2UvanBlZ3xhR0ZoTDJnNE1TOHhNamMwTlRnek5UYzBNVEl4TkM4MU1UVlhlRFV4TlVoZk5UYzRNalkzWHpVM09ESTJOeTAyTG1wd1p3fGMxN2I0OGNiMjkxODdjMTczZDRjY2UzNzI3Yjc1YTliMDRiMTU3MzVhMmIzNzA5MjRjMjliNjUyYWQxNGI2Nzg",
    href: "#",
  },
  {
    title: "LEGO City Adventures",
    image:
      "https://www.thetoyshop.com/medias/515Wx515H-578267-578267-6.jpg?context=bWFzdGVyfGltYWdlc3wxMDE1NTB8aW1hZ2UvanBlZ3xhR0ZoTDJnNE1TOHhNamMwTlRnek5UYzBNVEl4TkM4MU1UVlhlRFV4TlVoZk5UYzRNalkzWHpVM09ESTJOeTAyTG1wd1p3fGMxN2I0OGNiMjkxODdjMTczZDRjY2UzNzI3Yjc1YTliMDRiMTU3MzVhMmIzNzA5MjRjMjliNjUyYWQxNGI2Nzg",
    href: "#",
  },
  {
    title: "Limited Time Offers",
    image:
      "https://www.thetoyshop.com/medias/515Wx515H-578267-578267-6.jpg?context=bWFzdGVyfGltYWdlc3wxMDE1NTB8aW1hZ2UvanBlZ3xhR0ZoTDJnNE1TOHhNamMwTlRnek5UYzBNVEl4TkM4MU1UVlhlRFV4TlVoZk5UYzRNalkzWHpVM09ESTJOeTAyTG1wd1p3fGMxN2I0OGNiMjkxODdjMTczZDRjY2UzNzI3Yjc1YTliMDRiMTU3MzVhMmIzNzA5MjRjMjliNjUyYWQxNGI2Nzg",
    href: "#",
  },
  {
    title: "LEGO City Adventures",
    image:
      "https://www.thetoyshop.com/medias/515Wx515H-578267-578267-6.jpg?context=bWFzdGVyfGltYWdlc3wxMDE1NTB8aW1hZ2UvanBlZ3xhR0ZoTDJnNE1TOHhNamMwTlRnek5UYzBNVEl4TkM4MU1UVlhlRFV4TlVoZk5UYzRNalkzWHpVM09ESTJOeTAyTG1wd1p3fGMxN2I0OGNiMjkxODdjMTczZDRjY2UzNzI3Yjc1YTliMDRiMTU3MzVhMmIzNzA5MjRjMjliNjUyYWQxNGI2Nzg",
    href: "#",
  },
  {
    title: "LEGO City Adventures",
    image:
      "https://www.thetoyshop.com/medias/515Wx515H-578267-578267-6.jpg?context=bWFzdGVyfGltYWdlc3wxMDE1NTB8aW1hZ2UvanBlZ3xhR0ZoTDJnNE1TOHhNamMwTlRnek5UYzBNVEl4TkM4MU1UVlhlRFV4TlVoZk5UYzRNalkzWHpVM09ESTJOeTAyTG1wd1p3fGMxN2I0OGNiMjkxODdjMTczZDRjY2UzNzI3Yjc1YTliMDRiMTU3MzVhMmIzNzA5MjRjMjliNjUyYWQxNGI2Nzg",
    href: "#",
  },
]

export function PodCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "next" | "prev") => {
    if (!scrollRef.current) return

    const container = scrollRef.current

    const cards =
      container.querySelectorAll<HTMLElement>("[data-pod]")

    if (!cards.length) return

    const cardWidth = cards[0].offsetWidth + 20

    const current = container.scrollLeft
    const max =
      container.scrollWidth - container.clientWidth

    const threshold = 50

    if (direction === "next") {
      // if at end → jump back to start
      if (current >= max - threshold) {
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        })
        return
      }

      container.scrollBy({
        left: cardWidth,
        behavior: "smooth",
      })
    }

    if (direction === "prev") {
      // if at start → jump to last card
      if (current <= threshold) {
        container.scrollTo({
          left: max,
          behavior: "smooth",
        })
        return
      }

      container.scrollBy({
        left: -cardWidth,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">

      {/* header */}
      <div className="mb-6 flex items-end justify-between">

        <h2 className="text-2xl font-black text-foreground">
          Featured deals
        </h2>

        <a
          href="#categories"
          className="
            hidden
            items-center
            gap-2
            rounded-full
            border
            border-white/20
            bg-white/10
            px-5
            py-2.5
            text-sm
            font-bold
            backdrop-blur-xl
            transition
            hover:bg-white/20
            sm:inline-flex
          "
        >
          View all
          <ArrowUpRight className="size-4" />
        </a>

      </div>

      <div className="relative">

        {/* left glass arrow */}
        <button
          onClick={() => scroll("prev")}
          className="
            absolute
            left-2
            top-1/2
            z-20
            hidden
            -translate-y-1/2
            lg:flex

            h-14
            w-14
            items-center
            justify-center

            rounded-full
            border
            border-white/50
            bg-white/30
            backdrop-blur-2xl

            shadow-lg

            transition
            hover:scale-110
            hover:bg-white/40
          "
        >
          <ChevronLeft className="size-6" />
        </button>

        {/* right glass arrow */}
        <button
          onClick={() => scroll("next")}
          className="
            absolute
            right-2
            top-1/2
            z-20
            hidden
            -translate-y-1/2
            lg:flex

            h-14
            w-14
            items-center
            justify-center

            rounded-full
            border
            border-white/50
            bg-white/30
            backdrop-blur-2xl

            shadow-lg

            transition
            hover:scale-110
            hover:bg-white/40
          "
        >
          <ChevronRight className="size-6" />
        </button>

        {/* carousel */}
        <div
          ref={scrollRef}
          className="
            flex
            gap-5
            overflow-x-auto
            pb-4
            scroll-smooth
            snap-x
            snap-mandatory

            cursor-grab
            active:cursor-grabbing

            [-ms-overflow-style:none]
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {items.map((item, i) => (
            <div
              key={i}
              data-pod
              className="
                snap-start
                shrink-0
                w-[320px]
              "
            >
              <PromoPod
                title={item.title}
                image={item.image}
                href={item.href}
                cta="Shop now"
                dataPromotionIndex={String(i + 1)}
                dataPromotionName={item.title}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}