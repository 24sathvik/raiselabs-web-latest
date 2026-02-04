"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Package } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { categories } from "@/lib/data"

export default function ProductsPage() {
  return (
    <>
      <Navigation />
      
      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-[#1a1f3a]/5 via-background to-[#7F9DB1]/5" aria-labelledby="products-title">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center space-x-2 bg-[#7F9DB1]/10 px-4 py-2 rounded-full mb-6 border border-[#7F9DB1]/20"
              >
                <Package className="h-4 w-4 text-[#7F9DB1]" aria-hidden="true" />
                <span className="text-sm font-medium text-[#7F9DB1]">Explore Our Solutions</span>
              </motion.div>
              
              <h1 id="products-title" className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
                Product Categories
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover our comprehensive range of pharmaceutical testing instruments designed to meet the highest quality control standards.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-20 lg:py-32" aria-label="Product categories">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {categories.map((category, index) => (
                <motion.article
                  key={category.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={`/products/category/${category.id}`}>
                      <motion.div
                        whileHover={{ y: -8, scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="group relative h-[400px] rounded-2xl overflow-hidden bg-card border border-[#7F9DB1]/20 shadow-lg hover:shadow-2xl hover:border-[#7F9DB1]/40"
                      >
{/* Image */}
                            <div className="relative w-full h-full bg-white p-4">
                              <Image
                                src={category.image}
                                alt={`${category.name} - ${category.description} by Raise Lab Equipment`}
                                fill
                                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f3a]/90 via-[#1a1f3a]/40 to-transparent" />
                          </div>

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                        <div className="inline-block px-3 py-1 text-white text-xs font-medium rounded-full mb-3 bg-[#7F9DB1]">
                          {category.productCount} Products
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                          {category.name}
                        </h2>
                        <p className="text-white/80 mb-4">
                          {category.description}
                        </p>
                        <div className="flex items-center text-[#7F9DB1] font-medium group-hover:translate-x-2 transition-transform">
                          Browse Products
                          <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                        </div>
                      </div>

                      {/* Hover overlay */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#7F9DB1]/10" />
                    </motion.div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-32 bg-muted/30" aria-labelledby="cta-title">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 id="cta-title" className="text-3xl lg:text-5xl font-bold mb-6">
                Need Help Choosing?
              </h2>
              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                Our team of experts is ready to help you find the perfect solution for your laboratory needs.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity bg-[#1a1f3a]"
              >
                Contact Sales
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}