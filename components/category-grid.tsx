import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const categories = [
  {
    name: "Building & Blocks",
    count: "420+ toys",
    img: "/product-blocks.png",
    tone: "bg-chart-3/15",
    span: "lg:col-span-2 lg:row-span-2",
    large: true,
  },
  { name: "Soft & Plush", count: "260+ toys", img: "/product-plush.png", tone: "bg-chart-5/15" },
  { name: "Cars & Vehicles", count: "310+ toys", img: "/product-car.png", tone: "bg-chart-1/12" },
  { name: "Arts & Crafts", count: "190+ toys", img: "/product-art.png", tone: "bg-chart-4/15" },
  { name: "Games & Puzzles", count: "230+ toys", img: "/product-games.png", tone: "bg-chart-2/20" },
]

export function CategoryGrid() {
  return (
    <section id="categories" className="mx-auto max-w-7xl px-4 py-14 lg:py-20">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="font-heading text-sm font-bold uppercase tracking-widest text-primary">
            Browse the shelves
          </p>
          <h2 className="mt-1 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Shop by category
          </h2>
        </div>
        <a
          href="#categories"
          className="hidden shrink-0 items-center gap-1 rounded-full border-2 border-border bg-card px-5 py-2.5 text-sm font-bold text-foreground transition hover:border-primary sm:inline-flex"
        >
          View all
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </div>

      <div className="grid auto-rows-[180px] grid-cols-2 gap-4 lg:grid-cols-4">
        {categories.map((cat) => (
          <a
            key={cat.name}
            href="#categories"
            className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border p-5 transition hover:-translate-y-1 hover:shadow-xl ${cat.tone} ${cat.span ?? ""}`}
          >
            <div className="relative z-10 flex items-start justify-between">
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-primary">
                  {cat.name}
                </h3>
                <p className="text-sm font-semibold text-muted-foreground">{cat.count}</p>
              </div>
              <span className="grid size-9 place-items-center rounded-full bg-card text-foreground shadow-sm transition group-hover:bg-primary group-hover:text-primary-foreground">
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </span>
            </div>
            <Image
              src={cat.img || "/placeholder.svg"}
              alt={cat.name}
              width={cat.large ? 420 : 220}
              height={cat.large ? 420 : 220}
              className={`relative z-10 mx-auto object-contain drop-shadow-md transition group-hover:scale-105 ${
                cat.large ? "size-52 lg:size-64" : "size-28"
              }`}
            />
          </a>
        ))}
      </div>
    </section>
  )
}
