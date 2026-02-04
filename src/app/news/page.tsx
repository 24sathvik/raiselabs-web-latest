"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Calendar, ArrowRight, TrendingUp } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { getAllNews } from "@/lib/news"

const newsItems = getAllNews()

export default function NewsPage() {
  return (
    <>
      <Navigation />
      
      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-[#1a1f3a]/5 via-background to-[#7F9DB1]/5">
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
                <TrendingUp className="h-4 w-4 text-[#7F9DB1]" />
                <span className="text-sm font-medium text-[#7F9DB1]">Latest Updates</span>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
                Company News
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
                Stay informed about our latest announcements, partnerships, and achievements.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Latest News - Featured */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-2xl lg:text-3xl font-bold mb-2 text-[#1a1f3a]">Breaking News</h2>
              <p className="text-muted-foreground">Our most recent announcement</p>
            </motion.div>

            <Link href={`/news/${newsItems[0].slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden bg-card border border-[#7F9DB1]/20 shadow-xl hover:shadow-2xl hover:border-[#7F9DB1]/40"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={newsItems[0].image}
                    alt={newsItems[0].title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f3a]/90 via-[#1a1f3a]/50 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                  <div className="inline-block px-3 py-1 bg-[#7F9DB1] text-white text-sm font-medium rounded-full mb-4">
                    {newsItems[0].category}
                  </div>
                  <h3 className="text-3xl lg:text-5xl font-bold text-white mb-4">
                    {newsItems[0].title}
                  </h3>
                  <p className="text-lg text-white/80 mb-6 max-w-3xl">
                    {newsItems[0].excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <Calendar className="h-4 w-4" />
                    {newsItems[0].date}
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-12 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl lg:text-3xl font-bold mb-2 text-[#1a1f3a]">Recent News</h2>
              <p className="text-muted-foreground">All the latest updates from Raise Lab Equipment</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {newsItems.slice(1).map((news, index) => (
                <motion.div
                  key={news.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={`/news/${news.slug}`}>
                    <motion.div
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.3 }}
                      className="group h-full bg-card rounded-2xl overflow-hidden border border-[#7F9DB1]/20 shadow-lg hover:shadow-2xl hover:border-[#7F9DB1]/40"
                    >
                      <div className="relative w-full h-48">
                        <Image
                          src={news.image}
                          alt={news.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                        />
                      </div>

                      <div className="p-6">
                        <div className="inline-block px-2 py-1 bg-[#7F9DB1]/10 text-[#7F9DB1] text-xs font-medium rounded-full mb-3">
                          {news.category}
                        </div>
                        <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-[#7F9DB1] transition-colors text-[#1a1f3a]">
                          {news.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {news.excerpt}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                          <Calendar className="h-3 w-3" />
                          {news.date}
                        </div>
                        <div className="flex items-center text-[#1a1f3a] font-medium group-hover:translate-x-2 group-hover:text-[#7F9DB1] transition-all">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}