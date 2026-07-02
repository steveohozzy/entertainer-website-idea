import { PromoPod } from "./promo-pod"
import { ArrowUpRight } from "lucide-react"

const items = [
  {
    title: "Pre-Order Grand Theft Auto VI",
    image:
      "https://www.thetoyshop.com/medias/515Wx515H-578267-578267-6.jpg?context=bWFzdGVyfGltYWdlc3wxMDE1NTB8aW1hZ2UvanBlZ3xhR0ZoTDJnNE1TOHhNamMwTlRnek5UYzBNVEl4TkM4MU1UVlhlRFV4TlVoZk5UYzRNalkzWHpVM09ESTJOeTAyTG1wd1p3fGMxN2I0OGNiMjkxODdjMTczZDRjY2UzNzI3Yjc1YTliMDRiMTU3MzVhMmIzNzA5MjRjMjliNjUyYWQxNGI2Nzg",
    href: "#",
  },
  {
    title: "Hot Wheels Mega Track Set",
    image: "https://www.thetoyshop.com/medias/515Wx515H-578267-578267-6.jpg?context=bWFzdGVyfGltYWdlc3wxMDE1NTB8aW1hZ2UvanBlZ3xhR0ZoTDJnNE1TOHhNamMwTlRnek5UYzBNVEl4TkM4MU1UVlhlRFV4TlVoZk5UYzRNalkzWHpVM09ESTJOeTAyTG1wd1p3fGMxN2I0OGNiMjkxODdjMTczZDRjY2UzNzI3Yjc1YTliMDRiMTU3MzVhMmIzNzA5MjRjMjliNjUyYWQxNGI2Nzg",
    href: "#",
  },
  {
    title: "LEGO City Adventures",
    image: "https://www.thetoyshop.com/medias/515Wx515H-578267-578267-6.jpg?context=bWFzdGVyfGltYWdlc3wxMDE1NTB8aW1hZ2UvanBlZ3xhR0ZoTDJnNE1TOHhNamMwTlRnek5UYzBNVEl4TkM4MU1UVlhlRFV4TlVoZk5UYzRNalkzWHpVM09ESTJOeTAyTG1wd1p3fGMxN2I0OGNiMjkxODdjMTczZDRjY2UzNzI3Yjc1YTliMDRiMTU3MzVhMmIzNzA5MjRjMjliNjUyYWQxNGI2Nzg",
    href: "#",
  },
  {
    title: "Pre-Order Grand Theft Auto VI",
    image:
      "https://www.thetoyshop.com/medias/515Wx515H-578267-578267-6.jpg?context=bWFzdGVyfGltYWdlc3wxMDE1NTB8aW1hZ2UvanBlZ3xhR0ZoTDJnNE1TOHhNamMwTlRnek5UYzBNVEl4TkM4MU1UVlhlRFV4TlVoZk5UYzRNalkzWHpVM09ESTJOeTAyTG1wd1p3fGMxN2I0OGNiMjkxODdjMTczZDRjY2UzNzI3Yjc1YTliMDRiMTU3MzVhMmIzNzA5MjRjMjliNjUyYWQxNGI2Nzg",
    href: "#",
  },
]

export function PodCarousel() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      {/* header */}
      <div className="mb-6 flex items-end justify-between">
        <h2 className="text-2xl font-black text-foreground">
          Featured deals
        </h2>

        <a
          href="#categories"
          className="hidden shrink-0 items-center gap-1 rounded-full border-2 border-border bg-card px-5 py-2.5 text-sm font-bold text-foreground transition hover:border-primary sm:inline-flex"
        >
          View all
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </div>

      {/* rail */}
      <div
        className="
          flex
          gap-5
          overflow-x-auto
          pb-4
          scroll-smooth
          snap-x
          snap-mandatory
          [-ms-overflow-style:none]
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        {items.map((item, i) => (
          <div key={i} className="snap-start shrink-0">
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
    </section>
  )
}