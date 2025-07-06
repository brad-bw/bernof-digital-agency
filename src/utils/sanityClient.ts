import { createClient } from '@sanity/client'

const sanityClient = createClient({
  projectId: 'kvyko3sv', // Your Sanity project ID
  dataset: 'production', // Your dataset name
  apiVersion: '2023-10-01', // Use a recent date for the API version
  useCdn: false, // Use live data and full query support
})

export default sanityClient;

// Example GROQ query to fetch all blog posts with all fields
export async function fetchBlogPosts() {
  // Minimal query for debugging
  return sanityClient.fetch(`*[_type == "blogPost"][0...1]{_id, metaTitle}`)
}

// Direct fetch test for debugging (now via Netlify proxy)
export async function fetchBlogPostsDirect() {
  try {
    const res = await fetch('/.netlify/functions/sanity-proxy');
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: ${await res.text()}`);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.error('Proxy fetch error:', err);
    throw err;
  }
} 