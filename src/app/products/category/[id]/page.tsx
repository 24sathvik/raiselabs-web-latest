"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { getCategoryById, getProductsByCategory } from "@/lib/data"
import { generateBreadcrumbSchema } from "@/lib/seo"
import { notFound } from "next/navigation"
import { use } from "react"

export default function CategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)

  const category = getCategoryById(id)
  const products = getProductsByCategory(id) ?? []

  if (!id || !category) {
    notFound()
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" },
    { name: category.name, url: `/products/category/${id}` },
  ])

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navigation />

      <main className="pt-16 lg:pt-20">
        <nav className="container mx-auto px-4 lg:px-8 py-8" aria-label="Breadcrumb">
          <Link href="/products">
            <motion.div
              whileHover={{ x: -5 }}
              className="inline-flex items-center text-muted-foreground hover:text-[#1a1f3a] transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" aria-hidden="true" />
              Back to Categories
            </motion.div>
          </Link>
        </nav>

        <section className="pb-20" aria-labelledby="category-title">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="relative w-full lg:w-[400px] h-[300px] lg:h-[400px] rounded-2xl overflow-hidden bg-white border border-[#7F9DB1]/20 shadow-lg flex-shrink-0"
                >
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 1024px) 100vw, 400px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f3a]/80 via-[#1a1f3a]/20 to-transparent" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex-1"
                >
                  <div className="inline-block px-3 py-1 bg-[#7F9DB1]/10 text-[#7F9DB1] text-sm font-medium rounded-full mb-4 border border-[#7F9DB1]/20">
                    {products.length} Products
                  </div>
                  <h1 id="category-title" className="text-4xl lg:text-6xl font-bold mb-6">
                    {category.name}
                  </h1>
                  <p className="text-lg lg:text-xl text-muted-foreground">
                    {category.description}
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

        <section className="pb-20 lg:pb-32" aria-label="Products in this category">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {products.map((product, index) => (
                <motion.article
                  key={product.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                    <Link href={`/products/${product.id}`}>
                      <motion.div
                        whileHover={{ y: -8 }}
                        transition={{ duration: 0.3 }}
                        className="group relative h-[480px] rounded-2xl overflow-hidden bg-card border border-[#7F9DB1]/20 shadow-lg hover:shadow-2xl hover:border-[#7F9DB1]/40 flex flex-col"
                      >
                            <div className="relative w-full h-[280px] flex-shrink-0 bg-white">
                              <Image
                                  src={product.image}
                                  alt={`${product.title} - ${product.description} by Raise Lab Equipment`}
                                  fill
                                    className="object-contain p-1 transition-transform duration-500 scale-75 md:scale-100 group-hover:scale-110"
                                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                  loading="lazy"
                                />
                            </div>

                          <div className="p-6 flex flex-col flex-1">
                            <h2 className="text-xl font-bold mb-2 line-clamp-2 text-[#1a1f3a]">
                              {product.title}
                            </h2>
                              <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">
                                {product.description}
                              </p>
                                  <div className="flex flex-col gap-3 mt-auto">
                                    <Button variant="outline" className="w-full text-[#1a1f3a] border-[#7F9DB1]/30 hover:border-[#7F9DB1] hover:bg-[#7F9DB1]/5">
                                      View Details
                                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                                    </Button>
                                  </div>
                            </div>

                    </motion.div>
                  </Link>
                </motion.article>
              ))}
            </div>

            {products.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <p className="text-xl text-muted-foreground">
                  No products found in this category.
                </p>
              </motion.div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
