"use client"

import { useState } from "react"
import { Mail, Check } from "lucide-react"

export function Newsletter() {
  const [sent, setSent] = useState(false)

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 lg:py-20">
      <div className="rounded-[2.5rem] border border-border bg-secondary px-6 py-12 text-center sm:px-12">
        <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-secondary-foreground/10 text-secondary-foreground">
          <Mail className="size-7" aria-hidden="true" />
        </span>
        <h2 className="mt-5 text-balance font-heading text-3xl font-bold tracking-tight text-secondary-foreground sm:text-4xl">
          Get £5 off your first order
        </h2>
        <p className="mx-auto mt-3 max-w-md text-pretty text-base leading-relaxed text-secondary-foreground/80">
          Join the Playtime Club for exclusive offers, new arrivals and expert
          play tips — straight to your inbox.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            setSent(true)
          }}
          className="mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-full border border-border bg-card px-5 py-3 text-sm text-foreground outline-none focus:border-primary"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-base font-bold text-primary-foreground transition hover:opacity-90"
          >
            {sent ? (
              <>
                <Check className="size-5" aria-hidden="true" />
                Subscribed
              </>
            ) : (
              "Sign me up"
            )}
          </button>
        </form>
        <p className="mt-4 text-xs text-secondary-foreground/70">
          No spam, just play. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
