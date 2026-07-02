import Image from "next/image"
import { ArrowRight, Sparkles, Star } from "lucide-react"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-background">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 lg:grid-cols-2 lg:py-16">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-bold text-secondary-foreground">
            <Sparkles className="size-4" aria-hidden="true" />
            New season, new adventures
          </span>

          <h1 className="mt-5 text-balance font-heading text-5xl font-bold leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Where every day is <span className="text-primary">playtime</span>
          </h1>

          <p className="mt-5 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            Hand-picked toys that spark imagination, build skills and create big
            smiles — for tiny tots to big kids and everyone in between.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-base font-bold text-primary-foreground transition hover:opacity-90"
            >
              Shop all toys
              <ArrowRight className="size-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border-2 border-border bg-card px-7 py-3 text-base font-bold text-foreground transition hover:bg-muted"
            >
              Explore the sale
            </button>
          </div>

          <div className="mt-8 flex items-center gap-5">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="size-5 fill-secondary text-secondary"
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="text-sm font-semibold text-foreground">
              4.8/5 from <span className="text-primary">36,000+</span> happy families
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-6 -top-6 hidden size-28 rounded-full bg-accent/40 blur-2xl lg:block" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-xl">
            <Image
              src="/hero-toys.png"
              alt="A colorful collection of children's toys including blocks, a teddy bear and a toy rocket"
              width={900}
              height={720}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-lg">
            <span className="grid size-10 place-items-center rounded-xl bg-primary text-lg font-bold text-primary-foreground">
              %
            </span>
            <div className="leading-tight">
              <p className="font-heading text-base font-bold text-foreground">Up to 50% off</p>
              <p className="text-xs text-muted-foreground">Big brand toy sale</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
