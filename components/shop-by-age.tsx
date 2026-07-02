const ages = [
  { label: "0–18 mths", note: "Sensory & first toys", tone: "bg-chart-3/20 hover:bg-chart-3/30" },
  { label: "18 mths–3 yrs", note: "Toddler play", tone: "bg-chart-2/25 hover:bg-chart-2/35" },
  { label: "3–5 yrs", note: "Imaginative fun", tone: "bg-chart-1/15 hover:bg-chart-1/25" },
  { label: "5–8 yrs", note: "Games & building", tone: "bg-chart-4/20 hover:bg-chart-4/30" },
  { label: "8+ yrs", note: "Big kid adventures", tone: "bg-chart-5/20 hover:bg-chart-5/30" },
]

export function ShopByAge() {
  return (
    <section id="ages" className="bg-accent/8 py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 text-center">
          <p className="font-heading text-sm font-bold uppercase tracking-widest text-accent">
            The right toy, every stage
          </p>
          <h2 className="mt-1 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Shop by age
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {ages.map((age) => (
            <a
              key={age.label}
              href="#ages"
              className={`flex flex-col items-center justify-center rounded-3xl border border-border p-6 text-center transition hover:-translate-y-1 hover:shadow-lg ${age.tone}`}
            >
              <span className="font-heading text-xl font-bold text-foreground">{age.label}</span>
              <span className="mt-1 text-sm font-semibold text-muted-foreground">{age.note}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
