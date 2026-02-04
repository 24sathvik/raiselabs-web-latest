"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { Search, Menu, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Fuse from "fuse.js"
import { searchIndex, fuseOptions, type SearchItem } from "@/lib/search-index"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function Navigation() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<SearchItem[]>([])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/news", label: "News" },
    { href: "/blog", label: "Blogs" },
    { href: "/service", label: "Service Request" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ]

  // Initialize Fuse.js
  const fuse = new Fuse(searchIndex, fuseOptions)

  // Handle search
  useEffect(() => {
    if (searchQuery.trim().length >= 2) {
      const results = fuse.search(searchQuery).slice(0, 8)
      setSearchResults(results.map(result => result.item))
      setSelectedIndex(0)
    } else {
      setSearchResults([])
      setSelectedIndex(0)
    }
  }, [searchQuery])

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false)
        setSearchResults([])
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isSearchOpen) return

      if (e.key === "ArrowDown") {
        e.preventDefault()
        setSelectedIndex(prev => Math.min(prev + 1, searchResults.length - 1))
      } else if (e.key === "ArrowUp") {
        e.preventDefault()
        setSelectedIndex(prev => Math.max(prev - 1, 0))
      } else if (e.key === "Enter" && searchResults.length > 0) {
        e.preventDefault()
        handleSelectResult(searchResults[selectedIndex])
      } else if (e.key === "Escape") {
        setIsSearchOpen(false)
        setSearchResults([])
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isSearchOpen, searchResults, selectedIndex])

  const handleSelectResult = (result: SearchItem) => {
    router.push(result.url)
    setIsSearchOpen(false)
    setSearchQuery("")
    setSearchResults([])
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchResults.length > 0) {
      handleSelectResult(searchResults[0])
    }
  }

    const getTypeLabel = (type: string) => {
      const labels: Record<string, string> = {
        product: "Products",
        category: "Categories",
        blog: "Blogs",
        news: "News",
        page: "Pages"
      }
      return labels[type] || type
    }

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      product: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
      category: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
      blog: "bg-green-500/10 text-green-600 dark:text-green-400",
      news: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
      page: "bg-gray-500/10 text-gray-600 dark:text-gray-400"
    }
    return colors[type] || colors.page
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo with Raise Labs Image */}
            <Link href="/" className="flex items-center gap-2 lg:gap-3 hover:opacity-90 transition-opacity">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/RLE-1765286666043.png"
                alt="Raise Labs Equipment Logo"
                width={200}
                height={50}
                className="h-10 lg:h-12 w-auto mix-blend-multiply"
                priority
                quality={85}
              />
            </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <div className="nav-link relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  <span className="relative z-10">{link.label}</span>
                  <div className="nav-underline absolute bottom-0 left-0 right-0 h-0.5 bg-[#7F9DB1] origin-left scale-x-0 transition-transform duration-300" />
                </div>
              </Link>
            ))}
          </div>

          {/* Search & Mobile Menu */}
          <div className="flex items-center space-x-2 lg:space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                setIsSearchOpen(!isSearchOpen)
                if (!isSearchOpen) {
                  setTimeout(() => inputRef.current?.focus(), 100)
                }
              }}
              className="relative hover:bg-[#7F9DB1]/10 transition-colors"
            >
              <Search className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden hover:bg-[#7F9DB1]/10 transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Search Bar with Live Suggestions */}
        {isSearchOpen && (
          <div
            ref={searchRef}
            className="pb-4 animate-in fade-in slide-in-from-top-2 duration-200"
          >
            <form onSubmit={handleSearchSubmit}>
              <Input
                ref={inputRef}
                type="search"
                placeholder="Search products, categories, services, blogs, news..."
                className="w-full bg-muted/50 border-[#7F9DB1]/30 focus:border-primary transition-colors"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
            </form>

            {/* Search Results Dropdown */}
            {searchResults.length > 0 && (
              <div className="absolute left-4 right-4 mt-2 bg-card border border-[#7F9DB1]/20 rounded-xl shadow-2xl overflow-hidden max-h-[500px] overflow-y-auto z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                {searchResults.map((result, index) => (
                  <div
                    key={result.id}
                    onClick={() => handleSelectResult(result)}
                    className={`flex items-center gap-4 p-4 cursor-pointer transition-all hover:translate-x-1 ${
                      index === selectedIndex
                        ? "bg-[#7F9DB1]/10"
                        : "hover:bg-muted/50"
                    } ${index !== searchResults.length - 1 ? "border-b border-border" : ""}`}
                  >
                    {result.image && (
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={result.image}
                          alt={result.title}
                          fill
                          className="object-cover"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-sm truncate">
                          {result.title}
                        </h4>
                        <span className={`text-xs px-2 py-0.5 rounded-full flex-shrink-0 ${getTypeColor(result.type)}`}>
                          {getTypeLabel(result.type)}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-1">
                        {result.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {searchQuery.trim().length >= 2 && searchResults.length === 0 && (
              <div className="absolute left-4 right-4 mt-2 bg-card border border-[#7F9DB1]/20 rounded-xl shadow-xl p-6 text-center z-50 animate-in fade-in duration-200">
                <p className="text-muted-foreground">No results found for "{searchQuery}"</p>
                <p className="text-sm text-muted-foreground mt-2">Try different keywords or browse our products</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
                <div className="block px-4 py-3 text-base hover:bg-[#7F9DB1]/10 rounded-lg transition-colors font-medium">
                  {link.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}