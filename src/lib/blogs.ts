import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { Blog } from "@/types/blog"
import { remark } from "remark"
import html from "remark-html"

const BLOG_DIR = path.join(process.cwd(), "content/blog")

export function getAllBlogs(): Blog[] {
  if (!fs.existsSync(BLOG_DIR)) return []

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md") && f !== ".gitkeep")

  const blogs = files.map((file) => {
    const filePath = path.join(BLOG_DIR, file)
    const fileContent = fs.readFileSync(filePath, "utf-8")
    const { data, content } = matter(fileContent)

    const filenameSlug = file.replace(/\.md$/, "").replace(/^\d{4}-\d{2}-\d{2}-/, "")
    const slug = data.slug || filenameSlug

    let title = data.title
    if (title === "Blog" || !title) {
      title = slug
        .split("-")
        .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    }

    return {
      id: data.id || slug,
      slug: slug,
      title: title,
      excerpt: data.excerpt || "",
      author: data.author || "Raise Lab Equipment",
      date: data.date || "",
      coverImage: data.coverImage || data.image || "/images/blog/default.png",
      readTime: data.readTime || "5 min read",
      category: data.category || "Laboratory Equipment",
      featured: data.featured || false,
      published: data.published !== false,
      content: content,
    }
  })

  return blogs
    .filter((blog) => blog.published !== false)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getBlogBySlug(slug: string): Blog | undefined {
  const blogs = getAllBlogs()
  return blogs.find((blog) => blog.slug === slug)
}

export async function getBlogContent(slug: string): Promise<string> {
  const blog = getBlogBySlug(slug)
  if (!blog) return ""

  const processedContent = await remark()
    .use(html)
    .process(blog.content)
  
  return processedContent.toString()
}

export function getFeaturedBlogs(): Blog[] {
  return getAllBlogs().filter((blog) => blog.featured)
}

export function getPaginatedBlogs(page: number, limit: number = 6): { posts: Blog[], total: number } {
  const allBlogs = getAllBlogs()
  const offset = (page - 1) * limit
  const paginatedPosts = allBlogs.slice(offset, offset + limit)

  return {
    posts: paginatedPosts,
    total: allBlogs.length,
  }
}
