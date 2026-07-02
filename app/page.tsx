import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { ValueProps } from "@/components/value-props"
import { CategoryGrid } from "@/components/category-grid"
import { FeaturedProducts } from "@/components/featured-products"
import { PromoBanner } from "@/components/promo-banner"
import { ShopByAge } from "@/components/shop-by-age"
import { BrandStrip } from "@/components/brand-strip"
import { Newsletter } from "@/components/newsletter"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <ValueProps />
        <CategoryGrid />
        <FeaturedProducts />
        <PromoBanner />
        <ShopByAge />
        <BrandStrip />
        <Newsletter />
      </main>
      <SiteFooter />
    </div>
  )
}
