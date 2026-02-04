import { Metadata } from "next"

export interface SEOData {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
  type?: "website" | "article" | "product"
  publishedTime?: string
  modifiedTime?: string
}

const baseKeywords = [
  "Raise Lab Equipment",
  "Raise Labs",
  "pharmaceutical testing",
  "laboratory equipment",
  "DEVI Group"
]

export function generateMetadata(data: SEOData): Metadata {
  const siteName = "Raise Lab Equipment"
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://raiselabequip.com"
  
  const fullTitle = `${data.title} | ${siteName}`
  const imageUrl = data.image || `${baseUrl}/images/og-image.webp`
  const pageUrl = data.url ? `${baseUrl}${data.url}` : baseUrl
  const combinedKeywords = [...baseKeywords, ...(data.keywords || [])]

  return {
    title: data.title,
    description: data.description,
    keywords: combinedKeywords.join(", "),
    authors: [{ name: siteName, url: baseUrl }],
    creator: siteName,
    publisher: siteName,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: data.type || "website",
      title: fullTitle,
      description: data.description,
      url: pageUrl,
      siteName,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: data.description,
      images: [imageUrl],
      creator: "@raiselabequip",
    },
    alternates: {
      canonical: pageUrl,
    },
  }
}

export function generateProductSchema(product: {
  name: string
  description: string
  image: string
  sku?: string
  brand?: string
  category?: string
}) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://raiselabequip.com"
  
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image,
    sku: product.sku || product.name.toLowerCase().replace(/\s+/g, "-"),
    brand: {
      "@type": "Brand",
      name: product.brand || "Raise Lab Equipment",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Raise Lab Equipment",
      url: baseUrl,
    },
    category: product.category,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    },
  }
}

export function generateOrganizationSchema() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://raiselabequip.com"
  
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Raise Lab Equipment",
    alternateName: "Raise Lab Equipment - DEVI Group",
    description: "Leading manufacturer of pharmaceutical testing instruments including tablet hardness testers, dissolution testers, friability testers, and powder testing equipment. Part of DEVI Group, Hyderabad.",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    foundingDate: "2022",
    founders: [{
      "@type": "Organization",
      name: "DEVI Group"
    }],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Moula Ali Industrial Park",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN"
    },
    sameAs: [
      "https://www.linkedin.com/company/raiselabequipment",
      "https://twitter.com/raiselabequip",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-40-XXXXXXXX",
      contactType: "Sales",
      areaServed: ["IN", "Worldwide"],
      availableLanguage: ["English", "Hindi"],
    },
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 50,
      maxValue: 200
    },
    knowsAbout: [
      "Pharmaceutical Testing Equipment",
      "Tablet Hardness Testers",
      "Dissolution Testers",
      "Friability Testers",
      "Disintegration Testers",
      "Powder Testing Instruments",
      "Laboratory Equipment Manufacturing"
    ]
  }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://raiselabequip.com"
  
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  }
}

export function generateArticleSchema(article: {
  title: string
  description: string
  image: string
  author?: string
  publishedTime: string
  modifiedTime?: string
}) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://raiselabequip.com"
  
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.image,
    author: {
      "@type": "Person",
      name: article.author || "Raise Lab Team",
    },
    publisher: {
      "@type": "Organization",
      name: "Raise Lab Equipment",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.png`,
      },
    },
    datePublished: article.publishedTime,
    dateModified: article.modifiedTime || article.publishedTime,
  }
}

export function generateWebPageSchema(page: {
  name: string
  description: string
  url: string
}) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://raiselabequip.com"
  
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.name,
    description: page.description,
    url: `${baseUrl}${page.url}`,
    isPartOf: {
      "@type": "WebSite",
      name: "Raise Lab Equipment",
      url: baseUrl,
    },
  }
}

export function generateLocalBusinessSchema() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://raiselabequip.com"
  
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": baseUrl,
    name: "Raise Lab Equipment",
    image: `${baseUrl}/logo.png`,
    description: "Manufacturer of pharmaceutical laboratory testing instruments",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Moula Ali Industrial Park",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500040",
      addressCountry: "IN"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 17.4239,
      longitude: 78.5311
    },
    url: baseUrl,
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00"
    }
  }
}