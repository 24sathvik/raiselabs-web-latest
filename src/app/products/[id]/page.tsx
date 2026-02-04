"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, ShoppingCart, Settings } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { getProductById, getCategoryById } from "@/lib/data"
import { generateProductSchema, generateBreadcrumbSchema } from "@/lib/seo"
import { use } from "react"

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const product = id ? getProductById(id) : null

  // Client-safe "not found"
  if (!id || !product) {
    return (
      <>
        <Navigation />
        <main className="pt-16 lg:pt-20">
          <div className="container mx-auto px-4 lg:px-8 py-20 text-center">
            <h1 className="text-3xl font-bold text-[#1a1f3a]">Product Not Found</h1>
            <p className="text-muted-foreground mt-2">
              The product you are looking for does not exist.
            </p>
            <Link href="/products" className="inline-block mt-6 text-[#7F9DB1] underline">
              Back to Products
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const category = getCategoryById(product.category)

  const productSchema = generateProductSchema({
    name: product.title,
    description: product.fullDescription,
    image: product.image,
    sku: product.id,
    brand: "Raise Lab Equipment",
    category: category?.name,
  })

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" },
    { name: category?.name || "Category", url: `/products/category/${product.category}` },
    { name: product.title, url: `/products/${product.id}` },
  ])

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navigation />

      <main className="pt-16 lg:pt-20">
        {/* Back Button */}
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <Link href="/products">
            <motion.div
              whileHover={{ x: -5 }}
              className="inline-flex items-center text-muted-foreground hover:text-[#1a1f3a] transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Products
            </motion.div>
          </Link>
        </div>

        {/* Product Header */}
        <section className="pb-12 lg:pb-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className="relative w-full h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl bg-white">
                    <Image
                      src={product.image}
                      alt={`${product.title} - ${product.description} by Raise Lab Equipment`}
                      fill
                      className="object-contain p-8"
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                    </div>
                  </motion.div>

              {/* Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div>
                  <div className="inline-block px-3 py-1 bg-[#7F9DB1]/10 text-[#7F9DB1] text-sm font-medium rounded-full mb-4 border border-[#7F9DB1]/20">
                    {category?.name || product.category}
                  </div>
                  <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-[#1a1f3a]">
                    {product.title}
                  </h1>
                  <p className="text-xl text-muted-foreground">{product.description}</p>
                </div>

                    <div className="flex flex-col gap-4 pt-6">
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/contact" className="flex-1">
                          <Button size="lg" className="w-full text-base bg-[#1a1f3a] hover:bg-[#1a1f3a]/90 text-white">
                            <ShoppingCart className="mr-2 h-5 w-5" />
                            Request Quote
                          </Button>
                        </Link>
                        <Link href="/contact" className="flex-1">
                          <Button
                            size="lg"
                            variant="outline"
                            className="w-full text-base border-[#7F9DB1]/30 hover:border-[#7F9DB1] hover:bg-[#7F9DB1]/5 text-[#1a1f3a]"
                          >
                            Contact Sales
                          </Button>
                        </Link>
                      </div>
                      
                        <div className="pt-2">
                          <Link href="/customization" className="w-full">
                            <Button
                              size="lg"
                              variant="outline"
                              className="w-full text-base border-[#7F9DB1]/30 hover:border-[#7F9DB1] hover:bg-[#7F9DB1]/5 text-[#7F9DB1]"
                            >
                              <Settings className="mr-2 h-5 w-5" />
                              Customization Options
                            </Button>
                          </Link>
                          <p className="text-xs text-center text-muted-foreground mt-2">
                            Need this product with custom specifications? We offer full customization.
                          </p>
                        </div>
                    </div>

                <div className="grid grid-cols-2 gap-4 pt-6">
                  {(product.features ?? []).slice(0, 4).map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      className="flex items-start gap-2"
                    >
                      <Check className="h-5 w-5 text-[#7F9DB1] flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-sm">{feature.split(" ").slice(0, 4).join(" ")}...</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="py-12 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Tabs defaultValue="description" className="w-full">
                <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-8 lg:mb-12">
                  <TabsTrigger value="description" className="text-base">Description</TabsTrigger>
                  <TabsTrigger value="features" className="text-base">Features</TabsTrigger>
                  <TabsTrigger value="specs" className="text-base">Specifications</TabsTrigger>
                </TabsList>

                <TabsContent value="description" className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto bg-card p-8 lg:p-12 rounded-2xl border border-[#7F9DB1]/20 shadow-lg"
                  >
                    <h2 className="text-3xl font-bold mb-6 text-[#1a1f3a]">Product Overview</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      {product.fullDescription}
                    </p>
                  </motion.div>
                </TabsContent>

                <TabsContent value="features" className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto bg-card p-8 lg:p-12 rounded-2xl border border-[#7F9DB1]/20 shadow-lg"
                  >
                    <h2 className="text-3xl font-bold mb-8 text-[#1a1f3a]">Key Features</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      {(product.features ?? []).map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.05 }}
                          className="flex items-start gap-3 p-4 rounded-lg hover:bg-[#7F9DB1]/5 transition-colors"
                        >
                          <Check className="h-6 w-6 text-[#7F9DB1] flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <span className="text-base">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </TabsContent>

                <TabsContent value="specs" className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto bg-card p-8 lg:p-12 rounded-2xl border border-[#7F9DB1]/20 shadow-lg"
                  >
                    <h2 className="text-3xl font-bold mb-8 text-[#1a1f3a]">Technical Specifications</h2>
                    <div className="space-y-4">
                      {(product.specs ?? []).map((spec, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.05 }}
                          className="flex items-center justify-between p-4 rounded-lg border border-[#7F9DB1]/20 hover:bg-[#7F9DB1]/5 transition-colors"
                        >
                          <span className="font-semibold text-[#1a1f3a]">{spec.label}</span>
                          <span className="text-muted-foreground">{spec.value}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>
        </section>

        <section className="py-20 lg:py-32" aria-labelledby="cta-heading">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center bg-gradient-to-br from-[#1a1f3a]/5 via-background to-[#7F9DB1]/5 p-12 lg:p-16 rounded-3xl border border-[#7F9DB1]/20"
            >
              <h2 id="cta-heading" className="text-3xl lg:text-5xl font-bold mb-6">
                Ready to get started?
              </h2>
              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                Contact our team for a personalized quote and expert consultation on your laboratory equipment needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="text-base px-8 bg-[#1a1f3a] hover:bg-[#1a1f3a]/90 text-white">
                    Request Quote
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="text-base px-8 border-[#7F9DB1]/30 hover:border-[#7F9DB1] text-[#1a1f3a]">
                    Talk to Sales
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
