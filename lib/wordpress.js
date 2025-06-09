
import { cleanHtmlTags, truncateText, getSocialImage } from '../services/seoUtils';

export const generatePostMetadata = (post) => ({
  title: cleanHtmlTags(post.title.rendered),
  description: truncateText(cleanHtmlTags(post.excerpt.rendered), 160),
  canonicalUrl: `https://housedesigns.co.ke/blog/${post.slug}`,
  ogImage: getSocialImage(post),
  publishedTime: post.date,
  modifiedTime: post.modified,
  author: post._embedded?.author?.[0]?.name || "HouseDesigns",
});
