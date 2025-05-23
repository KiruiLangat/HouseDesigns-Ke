// Generate a dynamic sitemap that includes blog posts from WordPress
import { getServerSideSitemap, getServerSideSitemapLegacy } from 'next-sitemap';

export const getServerSideProps = async (ctx) => {
  // Fetch blog posts from WordPress
  const response = await fetch(`https://housedesigns.co.ke/CMS/wp-json/wp/v2/posts`);
  const posts = await response.json();
  
  // Create an array of all static pages
  const staticPages = [
    'https://housedesigns.co.ke',
    'https://housedesigns.co.ke/about-us',
    'https://housedesigns.co.ke/our-expertise',
    'https://housedesigns.co.ke/architecture',
    'https://housedesigns.co.ke/blog',
    'https://housedesigns.co.ke/shop',
    'https://housedesigns.co.ke/contact-us',
    'https://housedesigns.co.ke/residentials',
    'https://housedesigns.co.ke/commercial',
    'https://housedesigns.co.ke/institutions',
    'https://housedesigns.co.ke/masterplanning',
  ];
  
  // Create sitemap fields for static pages
  const staticFields = staticPages.map(url => ({
    loc: url,
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: 0.7,
  }));
  
  // Create sitemap fields for blog posts
  const blogFields = posts.map(post => ({
    loc: `https://housedesigns.co.ke/blog/${post.slug}`,
    lastmod: post.modified ? new Date(post.modified).toISOString() : new Date().toISOString(),
    changefreq: 'monthly',
    priority: 0.8,
  }));
  
  // Combine all fields
  const fields = [...staticFields, ...blogFields];
  
  // Use either the new or legacy function based on your next-sitemap version
  try {
    return getServerSideSitemap(ctx, fields);
  } catch (e) {
    return getServerSideSitemapLegacy(ctx, fields);
  }
};

// Default export to prevent next.js errors
export default function Sitemap() {}
