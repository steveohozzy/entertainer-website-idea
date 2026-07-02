import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function PromoBanner() {
  return (
    <section id="deals" className="mx-auto max-w-7xl px-4 py-14 lg:py-20">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-primary text-primary-foreground">
        <div className="grid items-center gap-6 lg:grid-cols-2">
          <div className="p-8 sm:p-12 lg:p-14">
            <span className="inline-flex rounded-full bg-primary-foreground/15 px-4 py-1.5 text-sm font-bold">
              Outdoor season is here
            </span>
            <h2 className="mt-4 text-balance font-heading text-4xl font-bold leading-tight sm:text-5xl">
              Get set for garden-sized fun
            </h2>
            <p className="mt-4 max-w-md text-pretty text-lg leading-relaxed text-primary-foreground/85">
              Trampolines, water play, ride-ons and kites — everything you need
              to get the kids outside and grinning all summer long.
            </p>
            <button
              type="button"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-7 py-3 text-base font-bold text-secondary-foreground transition hover:opacity-90"
            >
              Shop outdoor toys
              <ArrowRight className="size-5" aria-hidden="true" />
            </button>
          </div>

          <div className="relative h-64 lg:h-full lg:min-h-[380px]">
            <Image
              src="/promo-outdoor.png"
              alt="Children playing with colorful outdoor toys in a sunny garden"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
