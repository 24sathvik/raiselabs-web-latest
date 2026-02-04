import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BLOG_DIR = path.join(__dirname, '../content/blog');
const IMAGES_DIR = path.join(__dirname, '../public/images/blog');

if (!fs.existsSync(BLOG_DIR)) fs.mkdirSync(BLOG_DIR, { recursive: true });
if (!fs.existsSync(IMAGES_DIR)) fs.mkdirSync(IMAGES_DIR, { recursive: true });

async function fetchPage(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) return null;
    return await response.text();
  } catch (error) {
    console.error(`Error fetching ${url}:`, error);
    return null;
  }
}

function extractLinks(html) {
  const links = [];
  // Match standard WordPress blog post links
  const regex = /<h2[^>]*class="[^"]*entry-title[^"]*"[^>]*>\s*<a\s+href="([^"]+)"/g;
  let match;
  while ((match = regex.exec(html)) !== null) {
    links.push(match[1]);
  }
  
  // Fallback for different structures
  if (links.length === 0) {
    const fallbackRegex = /<article[^>]*>[\s\S]*?<a\s+href="([^"]+)"/g;
    while ((match = fallbackRegex.exec(html)) !== null) {
      if (!links.includes(match[1]) && match[1].includes('raiselabequip.com') && !match[1].includes('/category/') && !match[1].includes('/blog/page/')) {
        links.push(match[1]);
      }
    }
  }
  return [...new Set(links)];
}

async function scrapePost(url) {
  console.log(`Scraping post: ${url}`);
  const html = await fetchPage(url);
  if (!html) return null;

  const titleMatch = html.match(/<h1[^>]*class="[^"]*entry-title[^"]*"[^>]*>(.*?)<\/h1>/) || html.match(/<h1[^>]*>(.*?)<\/h1>/);
  const title = titleMatch ? titleMatch[1].replace(/&amp;/g, '&').trim() : '';
  
  const dateMatch = html.match(/<time[^>]*datetime="([^"]+)"/) || html.match(/class="entry-date[^"]*">([^<]+)<\/time>/);
  const date = dateMatch ? (dateMatch[1] || dateMatch[2]) : new Date().toISOString().split('T')[0];

  const contentMatch = html.match(/<div[^>]*class="[^"]*entry-content[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<!-- .entry-content -->/) || html.match(/<div[^>]*class="[^"]*entry-content[^"]*"[^>]*>([\s\S]*?)<\/div>/);
  let content = contentMatch ? contentMatch[1].trim() : '';

  // Clean up content
  content = content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  
  const excerptMatch = html.match(/<meta\s+name="description"\s+content="([^"]+)"/) || html.match(/<p>([\s\S]*?)<\/p>/);
  const excerpt = excerptMatch ? excerptMatch[1].substring(0, 160).trim() + '...' : title;

  const coverImageMatch = html.match(/<img[^>]*class="[^"]*wp-post-image[^"]*"[^>]*src="([^"]+)"/) || html.match(/<meta\s+property="og:image"\s+content="([^"]+)"/);
  const coverImage = coverImageMatch ? coverImageMatch[1] : 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80&fm=webp';

  const slug = url.split('/').filter(Boolean).pop();

  return {
    id: slug,
    slug,
    title,
    excerpt,
    body: content,
    author: 'Raise Lab Equipment',
    date: date.split('T')[0],
    coverImage,
    readTime: '5 min read',
    category: 'Laboratory Equipment',
    featured: false,
    published: true
  };
}

async function main() {
  const allPostUrls = [];
  
  // Scrape first 5 pages of the blog index
  for (let i = 1; i <= 5; i++) {
    const pageUrl = i === 1 ? 'https://www.raiselabequip.com/blog/' : `https://www.raiselabequip.com/blog/page/${i}/`;
    console.log(`Fetching page index: ${pageUrl}`);
    const html = await fetchPage(pageUrl);
    if (!html) break;
    const links = extractLinks(html);
    console.log(`Found ${links.length} links on page ${i}`);
    allPostUrls.push(...links);
  }

  const uniqueUrls = [...new Set(allPostUrls)];
  console.log(`Total unique blog posts found: ${uniqueUrls.length}`);

  for (const url of uniqueUrls) {
    const post = await scrapePost(url);
    if (post) {
      const fileName = `${post.date}-${post.slug}.md`;
      const filePath = path.join(BLOG_DIR, fileName);
      
      const { body, ...frontmatter } = post;
      const fileContent = matter.stringify(body, frontmatter);
      
      fs.writeFileSync(filePath, fileContent);
      console.log(`Saved: ${fileName}`);
    }
  }
  
  console.log('Scraping complete!');
}

main();
