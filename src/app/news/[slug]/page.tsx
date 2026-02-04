"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Share2, BookmarkPlus } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { use, useEffect, useState } from "react"
import { getNewsBySlug } from "@/lib/news"
import type { News } from "@/lib/news"
import { notFound } from "next/navigation"

export default function NewsPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const [news, setNews] = useState<News | null>(null)

  useEffect(() => {
    const fetchedNews = getNewsBySlug(slug)
    if (!fetchedNews) {
      notFound()
    }
    setNews(fetchedNews)
  }, [slug])

  if (!news) {
    return null
  }

  return (
    <>
      <Navigation />
      
      <main className="pt-16 lg:pt-20">
        {/* Back Button */}
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <Link href="/news">
            <motion.div
              whileHover={{ x: -5 }}
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to News
            </motion.div>
          </Link>
        </div>

        {/* Hero Image */}
        <section className="pb-12">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src={news.image}
                alt={news.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-20 lg:pb-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Meta Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <div className="inline-block px-3 py-1 bg-[#7F9DB1]/10 text-[#7F9DB1] text-sm font-medium rounded-full mb-6">
                  {news.category}
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  {news.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    <span>{new Date(news.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm">
                    <BookmarkPlus className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                </div>
              </motion.div>

              {/* Article Body */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="prose prose-lg max-w-none"
              >
                <div 
                  className="space-y-6 text-muted-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: news.content }}
                />
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
