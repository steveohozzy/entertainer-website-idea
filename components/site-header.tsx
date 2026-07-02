"use client"

import { useState } from "react"
import { Search, Heart, ShoppingBag, User, Menu, X, Truck } from "lucide-react"

const navLinks = [
  { label: "Toys", href: "#categories" },
  { label: "Shop by Age", href: "#ages" },
  { label: "Deals", href: "#deals" },
  { label: "New In", href: "#featured" },
  { label: "Brands", href: "#brands" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Announcement bar */}
      <div className="bg-foreground text-background">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-center text-xs font-semibold sm:text-sm">
          <Truck className="size-4 shrink-0" aria-hidden="true" />
          <span>Free click &amp; collect from 170+ stores · Free delivery over £30</span>
        </div>
      </div>

      <div className="border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full p-2 text-foreground lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>

          <a href="#top" className="flex items-center gap-2" aria-label="The Entertainer home">
            <span className="grid size-10 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
              <ShoppingBag className="size-5" aria-hidden="true" />
            </span>
            <span className="font-heading text-xl font-bold leading-none tracking-tight text-foreground">
              the<span className="text-primary">entertainer</span>
            </span>
          </a>

          {/* Search */}
          <div className="relative hidden flex-1 md:block">
            <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search for toys, brands and characters…"
              className="w-full rounded-full border border-border bg-muted py-3 pl-12 pr-4 text-sm text-foreground outline-none transition focus:border-primary focus:bg-card"
            />
          </div>

          <div className="ml-auto flex items-center gap-1 md:ml-0">
            <button className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-foreground transition hover:bg-muted sm:inline-flex">
              <User className="size-5" aria-hidden="true" />
              <span className="hidden lg:inline">Account</span>
            </button>
            <button className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-foreground transition hover:bg-muted">
              <Heart className="size-5" aria-hidden="true" />
              <span className="sr-only">Wishlist</span>
            </button>
            <button className="relative inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition hover:opacity-90">
              <ShoppingBag className="size-5" aria-hidden="true" />
              <span className="hidden sm:inline">Basket</span>
              <span className="grid size-5 place-items-center rounded-full bg-secondary text-[11px] font-bold text-secondary-foreground">
                3
              </span>
            </button>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="mx-auto hidden max-w-7xl items-center gap-1 px-4 pb-3 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-bold text-foreground transition hover:bg-muted"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#deals"
            className="ml-auto rounded-full bg-secondary px-4 py-2 text-sm font-bold text-secondary-foreground transition hover:opacity-90"
          >
            🎉 Up to 50% off Sale
          </a>
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-b border-border bg-background lg:hidden">
          <div className="mx-auto max-w-7xl space-y-3 px-4 py-4">
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search toys…"
                className="w-full rounded-full border border-border bg-muted py-3 pl-12 pr-4 text-sm outline-none focus:border-primary"
              />
            </div>
            <nav className="grid gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-bold text-foreground transition hover:bg-muted"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <button
              type="button"
              className="w-full rounded-full bg-primary px-6 py-3 text-base font-bold text-primary-foreground transition hover:opacity-90"
            >
              Sign in / Register
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
