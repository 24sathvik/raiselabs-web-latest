import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BLOG_DIR = path.join(__dirname, '../content/blog');
const OUTPUT_FILE = path.join(__dirname, '../content/blogs.json');

function getAllBlogs() {
  if (!fs.existsSync(BLOG_DIR)) return [];
  
  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md') && f !== '.gitkeep');
  
  const blogs = files.map(file => {
    const filePath = path.join(BLOG_DIR, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    
    // Extract slug from filename if not in frontmatter
    // Filename format: YYYY-MM-DD-slug.md
    const filenameSlug = file.replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, '');
    const slug = data.slug || filenameSlug;

    // Derive title from slug if it's "Blog" or missing
    let title = data.title;
    if (title === 'Blog' || !title) {
      title = slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }
    
    return {
      id: data.id || slug,
      slug: slug,
      title: title,
      excerpt: data.excerpt || '',
      author: data.author || 'Raise Lab Equipment',
      date: data.date || '',
      coverImage: data.coverImage || data.image || '/images/blog/default.png',
      readTime: data.readTime || '5 min read',
      category: data.category || 'Laboratory Equipment',
      featured: data.featured || false,
      published: data.published !== false,
      content: content,
    };
  });

  return blogs
    .filter(blog => blog.published !== false)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

const blogs = getAllBlogs();
fs.writeFileSync(OUTPUT_FILE, JSON.stringify({ posts: blogs }, null, 2));
console.log(`Generated ${OUTPUT_FILE} with ${blogs.length} posts`);
