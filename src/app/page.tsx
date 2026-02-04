import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import ClientsMarquee from "@/components/ClientsMarquee"
import ProductsShowcase from "@/components/ProductsShowcase"
import CustomizationSection from "../components/CustomizationSection"
import ServicesSlider from "@/components/ServicesSlider"
import WhyChooseUs from "@/components/WhyChooseUs"
import LatestBlogs from "@/components/LatestBlogs"
import LatestNews from "@/components/LatestNews"
import Footer from "@/components/Footer"
import { generateMetadata as generateSEOMetadata, generateOrganizationSchema } from "@/lib/seo"
import type { Metadata } from "next"

export const metadata: Metadata = generateSEOMetadata({
  title: "Home - Premium Laboratory Testing Equipment",
  description: "Raise Lab Equipment offers world-class pharmaceutical testing instruments including hardness testers, dissolution testers, friability testers, and powder testing equipment. ISO certified quality.",
  keywords: [
    "laboratory equipment",
    "pharmaceutical testing",
    "tablet hardness tester",
    "dissolution tester",
    "friability tester",
    "powder testing",
    "pharmaceutical instruments",
    "quality control equipment",
    "lab instruments",
    "raise lab equipment"
  ],
  url: "/",
  type: "website"
})

export default function Home() {
  const organizationSchema = generateOrganizationSchema()

  return (
    <div className="flex min-h-screen flex-col">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
      <Navigation />
      
      <main className="flex-grow">
        <Hero />
        
        <div className="bg-background relative z-10">
          <ClientsMarquee />
          
          <div className="pb-12 lg:pb-20">
            <ProductsShowcase />
            <CustomizationSection />
            <WhyChooseUs />
            <ServicesSlider />
            <LatestBlogs />
            <LatestNews />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
