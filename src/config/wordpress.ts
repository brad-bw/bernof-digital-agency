// WordPress.com Configuration
export const WORDPRESS_CONFIG = {
  // Your WordPress.com site URL
  SITE_URL: 'https://bernofco.wordpress.com',
  
  // WordPress.com REST API endpoint
  API_BASE: 'https://public-api.wordpress.com/rest/v1.1/sites/bernofco.wordpress.com',
  
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

// Manual author and date editing - you can modify these values
// This allows you to override author names, dates, and add author images/bios
// even when the WordPress.com API doesn't provide them
export const MANUAL_AUTHOR_OVERRIDE = {
  "uk-startup-ecosystem-value-development-costs": {
    author: "Kylie Frost",
    date: "January 27, 2025",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    authorBio: "UK Tech Market Analyst with 15 years experience in regional development economics"
  },
  // Add more overrides as needed for your posts
  // Format: "post-slug": { author, date, authorImage, authorBio }
}; 