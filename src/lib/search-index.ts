import { products, categories } from "./data"

export interface SearchItem {
  id: string
  title: string
  description: string
  type: "product" | "category" | "blog" | "news" | "page"
  url: string
  keywords: string[]
  image?: string
}

// Generate comprehensive search index
export const searchIndex: SearchItem[] = [
  // Products
  ...products.map(product => ({
    id: product.id,
    title: product.title,
    description: product.description,
    type: "product" as const,
    url: `/products/${product.id}`,
    keywords: [
      product.title.toLowerCase(),
      product.category,
      ...product.features.map(f => f.toLowerCase()),
      product.description.toLowerCase(),
      // Extract keywords from title
      ...product.title.toLowerCase().split(/\s+/),
    ],
    image: product.image
  })),

  // Categories
  ...categories.map(category => ({
    id: category.id,
    title: category.name,
    description: category.description,
    type: "category" as const,
    url: `/products/category/${category.id}`,
    keywords: [
      category.name.toLowerCase(),
      category.description.toLowerCase(),
      ...category.name.toLowerCase().split(/\s+/),
    ],
    image: category.image
  })),

  // Service Request Page
  {
    id: "service-request",
    title: "Service Request",
    description: "Request service, support, or maintenance for your Raise Lab equipment",
    type: "page" as const,
    url: "/contact",
    keywords: ["service", "request", "support", "maintenance", "repair", "assistance", "help"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80"
  },

  // Blog Page
  {
    id: "blog",
    title: "Blog",
    description: "Latest insights, industry trends, and technical articles from Raise Lab Equipment",
    type: "page" as const,
    url: "/blog",
    keywords: ["blog", "articles", "insights", "industry", "trends", "news", "updates"],
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80"
  },

  // News Page
  {
    id: "news",
    title: "News",
    description: "Company news, product launches, and industry announcements",
    type: "page" as const,
    url: "/news",
    keywords: ["news", "announcements", "launches", "updates", "company", "press"],
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80"
  },

  // About Page
  {
    id: "about",
    title: "About Us",
    description: "Learn about Raise Lab Equipment's history, mission, and commitment to quality",
    type: "page" as const,
    url: "/about",
    keywords: ["about", "company", "history", "mission", "team", "vision", "values"],
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80"
  },

  // Contact Page
  {
    id: "contact",
    title: "Contact",
    description: "Get in touch with our team for inquiries, support, or partnership opportunities",
    type: "page" as const,
    url: "/contact",
    keywords: ["contact", "inquiry", "support", "email", "phone", "office", "location"],
    image: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800&q=80"
  },

  // Add specific product type searches
  {
    id: "hardness-search",
    title: "Hardness Testing",
    description: "Find all hardness testing instruments and equipment",
    type: "category" as const,
    url: "/products/category/hardness-testing",
    keywords: ["hardness", "tablet hardness", "breaking force", "compression"],
  },
  {
    id: "friability-search",
    title: "Friability Testing",
    description: "Find all friability testing instruments",
    type: "category" as const,
    url: "/products/category/friability-testing",
    keywords: ["friability", "abrasion", "tablet durability", "mechanical stress"],
  },
  {
    id: "powder-search",
    title: "Powder Testing",
    description: "Find all powder testing and characterization instruments",
    type: "category" as const,
    url: "/products/category/powder-testing",
    keywords: ["powder", "tapped density", "bulk density", "flow", "sieve"],
  },
  {
    id: "leak-search",
    title: "Leak Testing",
    description: "Find packaging integrity and leak testing equipment",
    type: "category" as const,
    url: "/products/category/packaging-integrity",
    keywords: ["leak", "leak test", "packaging", "integrity", "seal", "container"],
  },
]

// Fuse.js search options
export const fuseOptions = {
  keys: [
    { name: "title", weight: 3 },
    { name: "description", weight: 2 },
    { name: "keywords", weight: 1.5 },
  ],
  threshold: 0.3,
  includeScore: true,
  minMatchCharLength: 2,
  ignoreLocation: true,
}
