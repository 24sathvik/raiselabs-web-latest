import newsData from "../../content/news.json"

export interface News {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  category: string
  image: string
  featured: boolean
  published: boolean
}

export function getAllNews(): News[] {
  return newsData.posts
    .filter(news => news.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getNewsBySlug(slug: string): News | undefined {
  return newsData.posts.find(news => news.slug === slug && news.published)
}

export function getFeaturedNews(): News[] {
  return newsData.posts
    .filter(news => news.published && news.featured)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
