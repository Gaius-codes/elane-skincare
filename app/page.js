import Hero from "@/components/Hero"
import ProductFeature from "@/components/ProductFeature"
import KeyIngredients from "@/components/KeyIngredients"
import ShopCollection from "@/components/ShopCollection"
import Testimonials from "@/components/Testimonials"
import RitualBanner from "@/components/RitualBanner"
import Footer from "@/components/Footer"

const page = () => {
  return (
    <div>
      <Hero />
      <ProductFeature />
      <KeyIngredients />
      <ShopCollection />
      <Testimonials />
      <RitualBanner />
      <Footer />
    </div>
  )
}

export default page
