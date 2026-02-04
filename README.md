# Elegance - Enterprise Solutions Website

An attractive and elegant website built with Next.js 15, featuring smooth transitions, optimized code, and a complete content management system.

## Features

### Pages
- **Homepage**: Hero section, infinite scroll clients marquee, products showcase, services slider, and "Why Choose Us" section
- **Products**: Category cards, product detail pages with tabs (description/features/specs)
- **Blog**: Listing page with featured posts and individual blog post pages
- **News**: Company news listing and detail pages
- **About**: Company information, values, team, and statistics
- **Contact**: Service request form with contact information

### Technical Features
- ✨ Smooth Framer Motion animations throughout
- 🎨 Elegant UI with Shadcn/UI components
- 🚀 Optimized with Next.js Image component and lazy loading
- 📱 Fully responsive design
- 🎯 SEO optimized
- 🔍 Instant search functionality in navigation
- 📝 Netlify CMS integration for content management

## Getting Started

### Prerequisites
- Node.js 18+ or Bun
- Git

### Installation

```bash
# Install dependencies
bun install
# or
npm install

# Run development server
bun dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Content Management

### Netlify CMS Setup

1. **Access Admin Panel**: Navigate to `/admin` to access the Netlify CMS admin interface

2. **Configure Git Gateway**:
   - Deploy your site to Netlify
   - Enable Identity in your Netlify site settings
   - Enable Git Gateway in Identity settings
   - Invite users via the Identity tab

3. **Manage Content**:
   - Products: Add/edit products with images, features, specs, and pricing
   - Categories: Create product categories
   - Blog Posts: Write and publish blog articles
   - News: Post company news and announcements
   - Pages: Edit About page content
   - Settings: Update site-wide settings

### Content Structure

All content is stored in the `content/` directory:
- `content/products/` - Product markdown files
- `content/categories/` - Category information
- `content/blog/` - Blog post markdown files
- `content/news/` - News article markdown files
- `content/pages/` - Page content
- `content/settings/` - Site-wide settings

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: Shadcn/UI
- **Animations**: Framer Motion
- **CMS**: Netlify CMS
- **Icons**: Lucide React
- **Language**: TypeScript

## Project Structure

```
├── public/
│   ├── admin/              # Netlify CMS admin interface
│   └── images/             # Static images
├── content/                # Content managed by Netlify CMS
│   ├── products/
│   ├── categories/
│   ├── blog/
│   ├── news/
│   ├── pages/
│   └── settings/
├── src/
│   ├── app/               # Next.js app router pages
│   │   ├── page.tsx       # Homepage
│   │   ├── products/      # Products pages
│   │   ├── blog/          # Blog pages
│   │   ├── news/          # News pages
│   │   ├── about/         # About page
│   │   └── contact/       # Contact page
│   ├── components/        # React components
│   │   ├── ui/           # Shadcn/UI components
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   └── lib/              # Utilities and data
│       └── data.ts       # Product and category data
```

## Deployment

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Configure build settings:
   - Build command: `npm run build` or `bun run build`
   - Publish directory: `.next`
4. Enable Netlify Identity
5. Enable Git Gateway
6. Deploy!

### Environment Variables

No environment variables required for basic functionality. The site works out of the box.

## Customization

### Colors and Theming
Edit `src/app/globals.css` to customize the color scheme and design tokens.

### Content Data
Modify `src/lib/data.ts` for initial product and category data, or use Netlify CMS to manage content.

### Components
All components are in `src/components/`. Customize them to match your brand.

## Performance Optimizations

- ✅ Next.js Image optimization
- ✅ Lazy loading components
- ✅ Optimized animations with Framer Motion
- ✅ Code splitting with dynamic imports
- ✅ Font optimization with next/font

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Support

For support, email support@elegance.com or visit our contact page.

---

Built with ❤️ using Next.js and modern web technologies.