import { ShoppingBag, Globe, MessageCircle, Send } from "lucide-react"

const columns = [
  {
    title: "Shop",
    links: ["New in", "Bestsellers", "Sale", "Shop by age", "Gift finder"],
  },
  {
    title: "Help",
    links: ["Track my order", "Delivery & returns", "Click & collect", "Contact us", "FAQs"],
  },
  {
    title: "About",
    links: ["Our story", "Store finder", "Careers", "Sustainability", "Gift cards"],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <a href="#top" className="flex items-center gap-2" aria-label="The Entertainer home">
              <span className="grid size-10 place-items-center rounded-2xl bg-primary text-primary-foreground">
                <ShoppingBag className="size-5" aria-hidden="true" />
              </span>
              <span className="font-heading text-xl font-bold leading-none">
                the<span className="text-primary">entertainer</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-pretty text-sm leading-relaxed text-background/70">
              The UK&apos;s favourite toy shop — bringing joy to families with
              carefully chosen toys since day one.
            </p>
            <div className="mt-5 flex gap-3">
              {[Globe, MessageCircle, Send].map((Icon, i) => (
                <a
                  key={i}
                  href="#top"
                  className="grid size-10 place-items-center rounded-full bg-background/10 text-background transition hover:bg-primary"
                  aria-label="Social link"
                >
                  <Icon className="size-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-background">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#top"
                      className="text-sm text-background/70 transition hover:text-background"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-background/15 pt-6 text-sm text-background/60 sm:flex-row">
          <p>© {new Date().getFullYear()} The Entertainer. A modern redesign concept.</p>
          <div className="flex gap-5">
            <a href="#top" className="transition hover:text-background">Privacy</a>
            <a href="#top" className="transition hover:text-background">Terms</a>
            <a href="#top" className="transition hover:text-background">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
