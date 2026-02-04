"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { categories } from "@/lib/data"

export default function ProductsShowcase() {
  const duplicatedCategories = [...categories, ...categories, ...categories]

  return (
    <section className="py-12 lg:py-20 overflow-hidden bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 lg:px-8 mb-12">
        {/* Header */}
        <div className="max-w-3xl">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Product Categories
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground">
            Explore our comprehensive range of pharmaceutical testing instruments across six specialized categories.
          </p>
        </div>
      </div>

      {/* CSS-based Infinite Horizontal Scroll */}
      <div className="relative">
          <div className="flex gap-6 animate-scroll-horizontal-products">
            {duplicatedCategories.map((category, index) => (
              <Link
                key={`${category.id}-${index}`}
                href={`/products/category/${category.id}`}
                className="flex-shrink-0"
              >
                  <div className="group relative w-[400px] h-[500px] rounded-2xl overflow-hidden bg-card border border-border shadow-lg hover:shadow-2xl cursor-pointer transition-shadow">
                    {/* Image */}
                    <div className="relative w-full h-full bg-white">
                        <Image
                          src={category.image}
                          alt={category.name}
                          fill
                          sizes="400px"
                          loading="lazy"
                            className={`object-contain p-1 transition-transform duration-500 group-hover:scale-110 ${category.id === 'lacquer-porosity-testing' ? 'scale-75' : ''}`}
                        />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f3a]/95 via-[#1a1f3a]/40 to-transparent" />
                  </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <div className="inline-block px-3 py-1 bg-[#7F9DB1]/30 backdrop-blur-sm text-white text-xs font-medium rounded-full mb-3">
                    {category.productCount} Products
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight">
                    {category.name}
                  </h3>
                  <p className="text-white/90 mb-4 line-clamp-2">
                    {category.description}
                  </p>
                  <div className="flex items-center text-[#7F9DB1] font-medium transition-transform group-hover:translate-x-2">
                    Browse Products
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#7F9DB1]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="container mx-auto px-4 lg:px-8 mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link href="/products">
          <button className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#1a1f3a] text-white rounded-xl font-semibold hover:bg-[#1a1f3a]/90 transition-colors shadow-lg">
            View All Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </Link>
        <Link href="/customization">
          <button className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-[#1a1f3a] border-2 border-[#1a1f3a]/10 rounded-xl font-semibold hover:bg-[#1a1f3a]/5 transition-colors">
            Custom Solutions
          </button>
        </Link>
      </div>
    </section>
  )
}