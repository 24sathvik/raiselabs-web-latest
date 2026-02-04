import { Calendar, Clock, User, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { getPaginatedBlogs, getAllBlogs } from "@/lib/blogs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Blog - Pharmaceutical Testing Insights & Technical Guides",
  description: "Expert insights on pharmaceutical testing, quality control best practices, laboratory equipment guides, and industry compliance standards. Technical resources from Raise Lab Equipment.",
  keywords: [
    "pharmaceutical testing blog",
    "laboratory equipment guides",
    "tablet hardness testing",
    "dissolution testing best practices",
    "pharmaceutical QC standards",
    "USP compliance",
    "laboratory testing tips",
    "Raise Lab Equipment blog"
  ],
  openGraph: {
    title: "Blog - Pharmaceutical Testing Insights | Raise Lab Equipment",
    description: "Expert insights on pharmaceutical testing, quality control best practices, and laboratory equipment guides.",
    type: "website",
  },
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>
}) {
  const { page: pageStr } = await searchParams
  const currentPage = parseInt(pageStr || "1")
    const allBlogs = getAllBlogs()
    const limit = 6
    const offset = (currentPage - 1) * limit
    
    // Simple 6-item pagination
    const blogPosts = allBlogs.slice(offset, offset + limit)
    const featuredPost = currentPage === 1 ? allBlogs.find(p => p.featured) || allBlogs[0] : null
    
    const total = allBlogs.length
    const totalPages = Math.ceil(total / limit)


  return (
    <>
      <Navigation />
      
      <main className="pt-16 lg:pt-20 bg-[#f8fafc]">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-[#1a1f3a] text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
                Industrial Insights & <span className="text-[#7F9DB1]">Technical Guides</span>
              </h1>
              <p className="text-lg lg:text-xl text-white/70 max-w-2xl mx-auto font-light">
                Deep dives into laboratory excellence, pharmaceutical compliance, and the future of quality control equipment.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post - Only on Page 1 */}
        {currentPage === 1 && featuredPost && (
          <section className="py-12 lg:py-20 -mt-16 relative z-20">
            <div className="container mx-auto px-4 lg:px-8">
              <Link href={`/blog/${featuredPost.slug}`}>
                <div className="group relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden bg-white border border-[#7F9DB1]/20 shadow-2xl hover:shadow-3xl transition-all duration-500">
                  <div className="relative w-full h-full">
                    <Image
                      src={featuredPost.coverImage}
                      alt={featuredPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f3a] via-[#1a1f3a]/40 to-transparent" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                    <div className="inline-block px-4 py-1.5 bg-[#7F9DB1] text-white text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                      Featured Analysis
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight max-w-4xl">
                      {featuredPost.title}
                    </h2>
                    <p className="text-lg text-white/80 mb-8 max-w-3xl line-clamp-2 font-light">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center gap-6 text-white/60 text-sm font-medium">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-[#7F9DB1]" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-[#7F9DB1]" />
                        {new Date(featuredPost.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-[#7F9DB1]" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* Blog Grid */}
        <section className={`py-12 lg:py-20 ${currentPage === 1 ? '' : 'pt-24'}`}>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1f3a] mb-2 tracking-tight">
                  {currentPage === 1 ? 'Latest Publications' : `Archive - Page ${currentPage}`}
                </h2>
                <p className="text-muted-foreground font-medium">
                  Exploring the intersection of technology and laboratory precision.
                </p>
              </div>
              <div className="text-sm font-bold text-[#7F9DB1] uppercase tracking-widest">
                Showing {blogPosts.length} of {total} Articles
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {blogPosts.map((post) => (
                <article key={post.id} className="flex flex-col h-full">
                  <Link href={`/blog/${post.slug}`} className="group block flex-grow">
                    <div className="bg-white rounded-2xl overflow-hidden border border-[#7F9DB1]/10 shadow-sm hover:shadow-xl hover:border-[#7F9DB1]/30 transition-all duration-500 h-full flex flex-col">
                      <div className="relative w-full h-64 overflow-hidden">
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                          loading="lazy"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#1a1f3a] text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-8 flex flex-col flex-grow">
                        <div className="flex items-center gap-4 text-[11px] font-bold text-[#7F9DB1] uppercase tracking-wider mb-4">
                          <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                          <span className="w-1 h-1 bg-[#7F9DB1]/30 rounded-full" />
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-4 line-clamp-2 text-[#1a1f3a] group-hover:text-[#7F9DB1] transition-colors leading-snug">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-6 line-clamp-3 font-light leading-relaxed">
                          {post.excerpt}
                        </p>
                        <div className="mt-auto flex items-center text-[#1a1f3a] text-xs font-bold uppercase tracking-widest group-hover:gap-3 transition-all">
                          Full Report
                          <ArrowRight className="ml-2 h-4 w-4 text-[#7F9DB1]" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-20 flex justify-center items-center gap-3">
                {currentPage > 1 && (
                  <Link href={`/blog?page=${currentPage - 1}`}>
                    <Button variant="outline" className="rounded-xl border-[#7F9DB1]/20 hover:bg-[#7F9DB1]/5 text-[#1a1f3a]">
                      <ChevronLeft className="h-4 w-4 mr-2" />
                      Previous
                    </Button>
                  </Link>
                )}
                
                <div className="flex items-center gap-2">
                  {[...Array(totalPages)].map((_, i) => {
                    const pageNum = i + 1
                    const isCurrent = pageNum === currentPage
                    
                    // Show current page, first, last, and pages around current
                    if (
                      pageNum === 1 || 
                      pageNum === totalPages || 
                      (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                    ) {
                      return (
                        <Link key={pageNum} href={`/blog?page=${pageNum}`}>
                          <Button 
                            variant={isCurrent ? "default" : "outline"}
                            className={`w-10 h-10 rounded-xl p-0 ${
                              isCurrent 
                                ? "bg-[#1a1f3a] hover:bg-[#1a1f3a]/90 text-white" 
                                : "border-[#7F9DB1]/20 hover:bg-[#7F9DB1]/5 text-[#1a1f3a]"
                            }`}
                          >
                            {pageNum}
                          </Button>
                        </Link>
                      )
                    }
                    
                    if (
                      (pageNum === 2 && currentPage > 3) || 
                      (pageNum === totalPages - 1 && currentPage < totalPages - 2)
                    ) {
                      return <span key={pageNum} className="text-muted-foreground px-1">...</span>
                    }
                    
                    return null
                  })}
                </div>

                {currentPage < totalPages && (
                  <Link href={`/blog?page=${currentPage + 1}`}>
                    <Button variant="outline" className="rounded-xl border-[#7F9DB1]/20 hover:bg-[#7F9DB1]/5 text-[#1a1f3a]">
                      Next
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Empty State */}
        {blogPosts.length === 0 && (
          <section className="py-20 lg:py-32">
            <div className="container mx-auto px-4 lg:px-8 text-center">
              <h2 className="text-2xl font-bold mb-4 text-[#1a1f3a]">No publications found</h2>
              <p className="text-muted-foreground">The archive is being updated. Please check back shortly.</p>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  )
}
