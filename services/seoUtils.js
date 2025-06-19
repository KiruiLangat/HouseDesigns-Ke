/**
 * Utility functions for handling social media sharing and SEO optimization
 */

/**
 * Ensures a URL is absolute with the correct domain
 * @param {string} url - The URL to process
 * @param {string} [defaultImage] - Default image to use if URL is empty
 * @returns {string} - An absolute URL
 */
export const ensureAbsoluteUrl = (url) => {
  if (!url) return 'https://housedesigns.co.ke/CM_1.jpg';
  
  // Handle protocol-relative URLs (starting with //)
  if (url.startsWith('//')) {
    return 'https:' + url;
  }
  
  // Handle absolute paths (starting with /)
  if (url.startsWith('/') && !url.startsWith('//')) {
    return 'https://housedesigns.co.ke' + url;
  }
  
  // Handle URLs without protocol
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return 'https://' + url;
  }
  
  return url;
};

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
 */  
export const getSocialImage = (post) => {
  try {
    // Check if we have embedded media
    if (!post._embedded || !post._embedded['wp:featuredmedia'] || post._embedded['wp:featuredmedia'].length === 0) {
    return 'https://housedesigns.co.ke/CM_1.jpg';
  }
    
    const media = post._embedded['wp:featuredmedia'][0];
    
    // First try to get the full size image
    let imageUrl = null;
    
    // Try the main source_url first
    if (media.source_url) {
      imageUrl = media.source_url;
    } 
    // Then try the large size
    else if (media.media_details?.sizes?.large?.source_url) {
      imageUrl = media.media_details.sizes.large.source_url;
    }
    // Then try medium
    else if (media.media_details?.sizes?.medium?.source_url) {
      imageUrl = media.media_details.sizes.medium.source_url;
    }
    
    // If no image was found, return default
    if (!imageUrl) {
      return 'https://housedesigns.co.ke/CM_1.jpg';
    }
    
    // Ensure it's an absolute URL with https://
    if (imageUrl.startsWith('//')) {
      imageUrl = 'https:' + imageUrl;
    } else if (imageUrl.startsWith('/')) {
      imageUrl = 'https://housedesigns.co.ke' + imageUrl;
    } else if (!imageUrl.startsWith('http')) {
      imageUrl = 'https://' + imageUrl;
    }
    
    return imageUrl;
  } catch (error) {
    return 'https://housedesigns.co.ke/CM_1.jpg';
  }
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
