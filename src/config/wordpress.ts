// WordPress.com Configuration
export const WORDPRESS_CONFIG = {
  // Replace with your WordPress.com site URL
  API_BASE: 'https://bernofco.wordpress.com/wp-json/wp/v2',
  
  // Site URL for links
  SITE_URL: 'https://bernofco.wordpress.com',
  
  // Number of posts to fetch
  POSTS_PER_PAGE: 10,
  
  // Cache time in milliseconds (5 minutes)
  CACHE_TIME: 5 * 60 * 1000,
  
  // Retry attempts
  RETRY_ATTEMPTS: 3,
};

// Helper function to get API URL
export const getWordPressApiUrl = (endpoint: string) => {
  return `${WORDPRESS_CONFIG.API_BASE}/${endpoint}`;
}; 