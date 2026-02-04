"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { useRef } from "react"

const blogs = [
  {
    id: "1",
    title: "Understanding Tablet Hardness Testing Standards",
    excerpt: "A comprehensive guide to pharmacopoeial requirements and best practices for tablet hardness testing in pharmaceutical QC.",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80",
    date: "Dec 5, 2024",
    category: "Testing Standards"
  },
  {
    id: "2",
    title: "Best Practices for Dissolution Testing",
    excerpt: "Learn the key factors that influence dissolution testing accuracy and how to optimize your testing procedures.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    date: "Dec 3, 2024",
    category: "Quality Control"
  },
  {
    id: "3",
    title: "Powder Flow Testing: A Complete Guide",
    excerpt: "Explore different methods for characterizing powder flow properties and their importance in pharmaceutical manufacturing.",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80",
    date: "Nov 28, 2024",
    category: "Technical Guide"
  },
  {
    id: "4",
    title: "Friability Testing: Ensuring Tablet Durability",
    excerpt: "Discover why friability testing is crucial for tablet quality and how to interpret test results effectively.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    date: "Nov 25, 2024",
    category: "Quality Assurance"
  },
]

export default function LatestBlogs() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      })
    }
  }

  return (
    <section className="py-12 lg:py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl lg:text-6xl font-bold mb-4">
              Latest Blog Posts
            </h2>
            <p className="text-lg text-muted-foreground">
              Stay updated with the latest insights, guides, and best practices in pharmaceutical testing.
            </p>
          </div>

          <Link href="/blog" className="hidden md:block">
            <button className="flex items-center gap-2 px-6 py-3 text-[#1a1f3a] font-semibold hover:text-[#7F9DB1] transition-colors">
              View All
              <ArrowRight className="h-5 w-5" />
            </button>
          </Link>
        </div>

        {/* Horizontal Scroll Slider */}
        <div className="relative group">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-12 w-12 bg-card border border-border rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#1a1f3a] hover:text-white hover:border-[#1a1f3a]"
            aria-label="Scroll left"
          >
            <ArrowRight className="h-5 w-5 rotate-180" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-12 w-12 bg-card border border-border rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#1a1f3a] hover:text-white hover:border-[#1a1f3a]"
            aria-label="Scroll right"
          >
            <ArrowRight className="h-5 w-5" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {blogs.map((blog) => (
              <div key={blog.id} className="flex-shrink-0 w-[350px]">
                <Link href={`/blog/${blog.id}`}>
                  <div className="group/card h-full bg-card rounded-2xl overflow-hidden border border-border shadow-lg hover:shadow-2xl hover:border-[#7F9DB1]/40 cursor-pointer transition-all hover:-translate-y-2">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        sizes="350px"
                        loading="lazy"
                        className="object-cover transition-transform duration-500 group-hover/card:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-[#1a1f3a] text-white text-xs font-medium rounded-full">
                          {blog.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Calendar className="h-4 w-4" />
                        {blog.date}
                      </div>
                      <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover/card:text-[#7F9DB1] transition-colors">
                        {blog.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                        {blog.excerpt}
                      </p>
                      <div className="flex items-center text-[#1a1f3a] font-medium transition-transform group-hover/card:translate-x-2 group-hover/card:text-[#7F9DB1]">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View All Button */}
        <Link href="/blog" className="md:hidden">
          <button className="w-full mt-8 flex items-center justify-center gap-2 px-6 py-4 bg-[#1a1f3a] text-white rounded-xl font-semibold transition-colors hover:bg-[#1a1f3a]/90">
            View All Blogs
            <ArrowRight className="h-5 w-5" />
          </button>
        </Link>
      </div>
    </section>
  )
}