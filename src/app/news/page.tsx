"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Calendar, ArrowRight, TrendingUp } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { getAllNews } from "@/lib/news"

const newsItems = getAllNews()

// ✅ bulletproof date formatter
function formatDate(dateString: string) {

  if (!dateString) return ""

  try {

    // Already correct format YYYY-MM-DD
    const parts = dateString.split("-")

    if (parts.length !== 3) return dateString

    const year = parseInt(parts[0])
    const month = parseInt(parts[1]) - 1
    const day = parseInt(parts[2])

    const date = new Date(year, month, day)

    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    })

  } catch {

    return dateString

  }

}

export default function NewsPage() {

  if (!newsItems.length) {
    return null
  }

  const breakingNews = newsItems[0]
  const remainingNews = newsItems.slice(1)

  return (
    <>
      <Navigation />

      <main className="pt-16 lg:pt-20">

        {/* Breaking News */}
        <section className="py-12 lg:py-20">

          <div className="container mx-auto px-4 lg:px-8">

            <h2 className="text-2xl lg:text-3xl font-bold mb-8">
              Breaking News
            </h2>

            <Link href={`/news/${breakingNews.slug}`}>

              <div className="relative h-[500px] rounded-2xl overflow-hidden">

                <Image
                  src={breakingNews.image}
                  alt={breakingNews.title}
                  fill
                  className="object-cover"
                />

                <div className="absolute bottom-0 p-8 text-white">

                  <h3 className="text-3xl font-bold">
                    {breakingNews.title}
                  </h3>

                  <div className="flex items-center gap-2 mt-2">

                    <Calendar size={16} />

                    {formatDate(breakingNews.date)}

                  </div>

                </div>

              </div>

            </Link>

          </div>

        </section>


        {/* News Grid */}
        <section className="py-12">

          <div className="container mx-auto px-4 lg:px-8">

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              {remainingNews.map(news => (

                <Link key={news.id} href={`/news/${news.slug}`}>

                  <div className="rounded-xl overflow-hidden shadow">

                    <Image
                      src={news.image}
                      alt={news.title}
                      width={400}
                      height={250}
                    />

                    <div className="p-4">

                      <h3 className="font-bold">
                        {news.title}
                      </h3>

                      <div className="flex items-center gap-2 text-sm mt-2">

                        <Calendar size={14} />

                        {formatDate(news.date)}

                      </div>

                    </div>

                  </div>

                </Link>

              ))}

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </>
  )
}
