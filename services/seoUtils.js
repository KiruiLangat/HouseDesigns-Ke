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
  
  // Handle URLs that start with http or https
  if (url.startsWith('http')) return url;
  
  // Handle protocol-relative URLs (starting with //)
  if (url.startsWith('//')) return `https:${url}`;
  
  // Handle absolute paths
  if (url.startsWith('/')) return `https://housedesigns.co.ke${url}`;
  
  // Handle relative paths
  return `https://housedesigns.co.ke/${url}`;
}

/**
 * Cleans HTML tags and decodes HTML entities from a string
 * @param {string} text - Text that might contain HTML tags and entities
 * @returns {string} - Clean, decoded text without HTML tags or entities
 */
export function cleanHtmlTags(text) {
  if (!text) return '';
  
  // First remove HTML tags
  let cleanText = text.replace(/<[^>]*>/g, '');
  
  // Then decode HTML entities
  const textarea = typeof document !== 'undefined' ? document.createElement('textarea') : null;
  
  if (textarea) {
    // Browser environment - use DOM to decode
    textarea.innerHTML = cleanText;
    cleanText = textarea.value;
  } else {
    // Server environment - manual replacement of common entities
    cleanText = cleanText
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'")
      .replace(/&#8217;/g, "'")
      .replace(/&#8216;/g, "'")
      .replace(/&#8220;/g, '"')
      .replace(/&#8221;/g, '"')
      .replace(/&hellip;/g, '...')
      .replace(/&#8230;/g, '...');
  }
  
  return cleanText;
}

/**
 * Gets social sharing image with correct dimensions
 * This helps ensure WordPress images are properly sized for social sharing
 * @param {object} post - WordPress post object with _embedded media
 * @param {string} [fallbackImage] - Fallback image to use if post has no image
 * @returns {string} - URL to an appropriately sized image
 */  export const getSocialImage = (post) => {
    // Simple fallback for missing post data
    if (!post || !post._embedded) {
      return ensureAbsoluteUrl('/CM_1.jpg');
    }
    
    // Make sure we have featured media
    const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
    if (!featuredMedia) {
      return ensureAbsoluteUrl('/CM_1.jpg');
    }
    
    // Direct source URL is available
    if (featuredMedia.source_url) {
      return ensureAbsoluteUrl(featuredMedia.source_url);
    }
    
    // Check if WordPress has generated appropriate sized images
    if (featuredMedia.media_details && featuredMedia.media_details.sizes) {
      // Try to get an image close to 1200x630 (Facebook recommendation)
      const sizes = featuredMedia.media_details.sizes;
          // Check for sizes in preferred order
      if (sizes.large && sizes.large.source_url) {
        return ensureAbsoluteUrl(sizes.large.source_url);
      } else if (sizes.medium_large && sizes.medium_large.source_url) {
        return ensureAbsoluteUrl(sizes.medium_large.source_url);
      } else if (sizes.medium && sizes.medium.source_url) {
        return ensureAbsoluteUrl(sizes.medium.source_url);
      }
    }
    
    // Ultimate fallback if no other image was found
    return ensureAbsoluteUrl('/CM_1.jpg');
    
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
