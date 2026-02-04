import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BLOG_DIR = path.join(__dirname, '../content/blog');
const IMAGES_DIR = path.join(__dirname, '../public/images/blog');

if (!fs.existsSync(IMAGES_DIR)) fs.mkdirSync(IMAGES_DIR, { recursive: true });

async function downloadImage(url, fileName) {
  try {
    const response = await fetch(url);
    if (!response.ok) return null;
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const filePath = path.join(IMAGES_DIR, fileName);
    fs.writeFileSync(filePath, buffer);
    return `/images/blog/${fileName}`;
  } catch (error) {
    console.error(`Error downloading image ${url}:`, error);
    return null;
  }
}

async function main() {
  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'));
  
  for (const file of files) {
    const filePath = path.join(BLOG_DIR, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const { data, content: body } = matter(content);
    
    if (data.coverImage && data.coverImage.startsWith('http')) {
      console.log(`Processing image for ${file}: ${data.coverImage}`);
      const extension = data.coverImage.split('.').pop().split('?')[0] || 'jpg';
      const fileName = `${data.slug}.${extension}`;
      const localPath = await downloadImage(data.coverImage, fileName);
      
      if (localPath) {
        data.coverImage = localPath;
        const newContent = matter.stringify(body, data);
        fs.writeFileSync(filePath, newContent);
        console.log(`Updated ${file} with local image path`);
      }
    }
  }
}

main();
