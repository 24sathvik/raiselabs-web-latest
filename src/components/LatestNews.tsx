"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, TrendingUp } from "lucide-react"
import { useRef } from "react"

const news = [
  {
    id: "1",
    title: "Raise Lab Equipment Launches New Automated Dissolution Tester",
    excerpt: "Introducing the next generation of dissolution testing with enhanced automation, precision, and compliance features.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    date: "Dec 6, 2024",
    category: "Product Launch"
  },
  {
    id: "2",
    title: "Expansion of Global Distribution Network",
    excerpt: "We're excited to announce new partnerships expanding our reach across Asia-Pacific and European markets.",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&q=80",
    date: "Dec 4, 2024",
    category: "Company News"
  },
  {
    id: "3",
    title: "ISO 9001:2015 Certification Renewed",
    excerpt: "Raise Lab Equipment successfully completes ISO 9001:2015 recertification, reinforcing our commitment to quality.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    date: "Nov 30, 2024",
    category: "Certification"
  },
  {
    id: "4",
    title: "Partnership with Leading Pharmaceutical Research Institute",
    excerpt: "Strategic collaboration to advance pharmaceutical testing technology and develop next-generation instruments.",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80",
    date: "Nov 27, 2024",
    category: "Partnership"
  },
]

export default function LatestNews() {
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
    <section className="py-12 lg:py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl lg:text-6xl font-bold mb-4">
              Latest News
            </h2>
            <p className="text-lg text-muted-foreground">
              Stay informed about our latest developments, product launches, and company milestones.
            </p>
          </div>

          <Link href="/news" className="hidden md:block">
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
            {news.map((item) => (
              <div key={item.id} className="flex-shrink-0 w-[350px]">
                <Link href={`/news/${item.id}`}>
                  <div className="group/card h-full bg-card rounded-2xl overflow-hidden border border-border shadow-lg hover:shadow-2xl hover:border-[#7F9DB1]/40 cursor-pointer transition-all hover:-translate-y-2">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="350px"
                        loading="lazy"
                        className="object-cover transition-transform duration-500 group-hover/card:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-[#7F9DB1]/80 backdrop-blur-sm text-white text-xs font-medium rounded-full flex items-center gap-1">
                          <TrendingUp className="h-3 w-3" />
                          {item.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Calendar className="h-4 w-4" />
                        {item.date}
                      </div>
                      <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover/card:text-[#7F9DB1] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                        {item.excerpt}
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
        <Link href="/news" className="md:hidden">
          <button className="w-full mt-8 flex items-center justify-center gap-2 px-6 py-4 bg-[#1a1f3a] text-white rounded-xl font-semibold transition-colors hover:bg-[#1a1f3a]/90">
            View All News
            <ArrowRight className="h-5 w-5" />
          </button>
        </Link>
      </div>
    </section>
  )
}