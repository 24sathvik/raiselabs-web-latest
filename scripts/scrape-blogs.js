const fs = require('fs');
const path = require('path');

const blogs = [
  {
    slug: 'role-of-tablet-dissolution-testing-in-drug-development-and-bioavailability-studies',
    url: 'https://www.raiselabequip.com/role-of-tablet-dissolution-testing-in-drug-development-and-bioavailability-studies/'
  },
  {
    slug: 'standard-operating-procedure-for-tap-density-apparatus-as-per-usp-standards',
    url: 'https://www.raiselabequip.com/standard-operating-procedure-for-tap-density-apparatus-as-per-usp-standards/'
  },
  {
    slug: 'understanding-the-difference-between-manual-offline-sampling-and-online-sampling-dissolution-testers',
    url: 'https://www.raiselabequip.com/understanding-the-difference-between-manual-offline-sampling-and-online-sampling-dissolution-testers/'
  },
  {
    slug: 'automated-tablet-disintegration-testing-features-benefits-and-compliance',
    url: 'https://www.raiselabequip.com/automated-tablet-disintegration-testing-features-benefits-and-compliance/'
  },
  {
    slug: 'validation-of-dissolution-test-apparatus-guaranteeing-precision-in-pharmaceutical-analysis',
    url: 'https://www.raiselabequip.com/validation-of-dissolution-test-apparatus-guaranteeing-precision-in-pharmaceutical-analysis/'
  },
  {
    slug: 'a-review-of-disintegration-mechanisms-and-measurement-techniques',
    url: 'https://www.raiselabequip.com/a-review-of-disintegration-mechanisms-and-measurement-techniques/'
  },
  {
    slug: 'comprehensive-guide-to-dissolution-media-preparation-and-media-preparators',
    url: 'https://www.raiselabequip.com/comprehensive-guide-to-dissolution-media-preparation-and-media-preparators/'
  }
];

async function scrapeBlog(blog) {
  try {
    const response = await fetch(blog.url);
    const html = await response.text();

    // Title extraction
    let title = '';
    const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
    if (h1Match) {
      title = h1Match[1].replace(/<[^>]*>/g, '').trim();
      if (title.toLowerCase() === 'blog') {
        const ogTitleMatch = html.match(/<meta property="og:title" content="([^"]+)"/);
        if (ogTitleMatch) title = ogTitleMatch[1].replace(' - Raise Lab Equipment', '').trim();
      }
    }

    const dateMatch = html.match(/<meta property="article:published_time" content="([^"]+)"/);
    const date = dateMatch ? dateMatch[1].split('T')[0] : new Date().toISOString().split('T')[0];

    const descMatch = html.match(/<meta name="description" content="([^"]+)"/);
    const excerpt = descMatch ? descMatch[1] : '';

    // Content extraction
    let content = '';
    const contentMatch = html.match(/<div class="elementor-widget-container">([\s\S]*?)<\/div>/g);
    if (contentMatch) {
      const richContent = contentMatch.find(c => c.length > 500 && c.includes('<p'));
      if (richContent) {
        content = richContent
          .replace(/<div[^>]*>/g, '')
          .replace(/<\/div>/g, '')
          .replace(/class="[^"]*"/g, '')
          .replace(/id="[^"]*"/g, '')
          .replace(/style="[^"]*"/g, '')
          .replace(/<script[^>]*>[\s\S]*?<\/script>/g, '')
          .replace(/<style[^>]*>[\s\S]*?<\/style>/g, '')
          .trim();
      }
    }

    if (!content) {
       const pMatch = html.match(/<p>([\s\S]*?)<\/p>/g);
       if (pMatch) {
         content = pMatch.slice(0, 15).join('\n');
       }
    }

    return {
      id: blog.slug,
      slug: blog.slug,
      title: title || 'Pharmaceutical Testing Insights',
      excerpt,
      content: content || 'Detailed insights into pharmaceutical laboratory testing equipment and standards.',
      author: 'Raise Lab Equipment',
      date,
      coverImage: `https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80&fm=webp`,
      readTime: '5 min read',
      category: 'Pharmaceutical Testing',
      featured: true,
      published: true
    };
  } catch (error) {
    console.error(`Error scraping ${blog.slug}:`, error);
    return null;
  }
}

async function run() {
  const results = [];
  for (const blog of blogs) {
    console.log(`Scraping ${blog.slug}...`);
    const result = await scrapeBlog(blog);
    if (result) results.push(result);
  }

  const images = [
    'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80&fm=webp',
    'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1200&q=80&fm=webp',
    'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&q=80&fm=webp',
    'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=1200&q=80&fm=webp',
    'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=1200&q=80&fm=webp',
    'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=1200&q=80&fm=webp',
    'https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=1200&q=80&fm=webp'
  ];

  results.forEach((r, i) => {
    r.coverImage = images[i % images.length];
  });

  const output = {
    posts: results
  };

  fs.writeFileSync(path.join(__dirname, '../content/blogs.json'), JSON.stringify(output, null, 2));
  console.log('Done!');
}

run();
