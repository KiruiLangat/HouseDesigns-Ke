/**
 * Utility functions for handling social media sharing and SEO optimization
 */

/**
 * Ensures a URL is absolute with the correct domain
 * @param {string} url - The URL to process
 * @param {string} [defaultImage] - Default image to use if URL is empty
 * @returns {string} - An absolute URL
 */
export function ensureAbsoluteUrl(url, defaultImage = '/Logo.png') {
  if (!url) return `https://housedesigns.co.ke${defaultImage}`;
  
  if (url.startsWith('http')) return url;
  if (url.startsWith('/')) return `https://housedesigns.co.ke${url}`;
  return `https://housedesigns.co.ke/${url}`;
}

/**
 * Cleans HTML tags from a string
 * @param {string} text - Text that might contain HTML
 * @returns {string} - Clean text without HTML tags
 */
export function cleanHtmlTags(text) {
  if (!text) return '';
  return text.replace(/<[^>]*>/g, '');
}

/**
 * Gets social sharing image with correct dimensions
 * This helps ensure WordPress images are properly sized for social sharing
 * @param {object} post - WordPress post object with _embedded media
 * @param {string} [fallbackImage] - Fallback image to use if post has no image
 * @returns {string} - URL to an appropriately sized image
 */
export function getSocialImage(post, fallbackImage = '/Logo.png') {
  // If no post or embedded media, return fallback
  if (!post || 
      !post._embedded || 
      !post._embedded['wp:featuredmedia'] || 
      !post._embedded['wp:featuredmedia'][0]) {
    return ensureAbsoluteUrl(fallbackImage);
  }
  
  const media = post._embedded['wp:featuredmedia'][0];
  
  // Check if WordPress has generated appropriate sized images
  if (media.media_details && media.media_details.sizes) {
    // Try to get an image close to 1200x630 (Facebook recommendation)
    const sizes = media.media_details.sizes;
    
    // Check for sizes in preferred order
    if (sizes.large) {
      return ensureAbsoluteUrl(sizes.large.source_url);
    } else if (sizes.medium_large) {
      return ensureAbsoluteUrl(sizes.medium_large.source_url);
    } else if (sizes.medium) {
      return ensureAbsoluteUrl(sizes.medium.source_url);
    }
  }
  
  // Fallback to the main source URL
  return ensureAbsoluteUrl(media.source_url);
}

/**
 * Truncates text to a specified length with ellipsis
 * @param {string} text - Text to truncate
 * @param {number} [length=160] - Maximum length
 * @returns {string} - Truncated text
 */
export function truncateText(text, length = 160) {
  if (!text) return '';
  
  // First clean HTML tags
  const cleanText = cleanHtmlTags(text);
  
  if (cleanText.length <= length) return cleanText;
  
  // Truncate at the last space before the limit to avoid cutting words
  const truncated = cleanText.substring(0, length);
  const lastSpace = truncated.lastIndexOf(' ');
  
  if (lastSpace > 0) {
    return truncated.substring(0, lastSpace) + '...';
  }
  
  return truncated + '...';
}
