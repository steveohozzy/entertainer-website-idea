import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { CategoryGrid } from "@/components/category-grid"
import { FeaturedProducts } from "@/components/featured-products"
import { PromoBanner } from "@/components/promo-banner"
import { ShopByAge } from "@/components/shop-by-age"
import { Newsletter } from "@/components/newsletter"
import { PodCarousel } from "@/components/pod-carousel"
import { SiteFooter } from "@/components/site-footer"
import { CompetitionBanners } from "@/components/Competitions"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <ShopByAge />
        <FeaturedProducts />
        <PodCarousel />
        <CategoryGrid />
        <FeaturedProducts />
        <PromoBanner />
        <CompetitionBanners />
        <Newsletter />
      </main>
      <SiteFooter />
    </div>
  )
}
