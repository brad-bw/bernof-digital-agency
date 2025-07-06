import { createClient } from '@sanity/client'

const sanityClient = createClient({
  projectId: 'kvyko3sv', // Your Sanity project ID
  dataset: 'production', // Your dataset name
  apiVersion: '2023-10-01', // Use a recent date for the API version
  useCdn: true, // `false` if you want to ensure fresh data
})

export default sanityClient;

// Example GROQ query to fetch all blog posts with all fields
export async function fetchBlogPosts() {
  return sanityClient.fetch(`*[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    metaTitle,
    metaDescription,
    slug,
    featuredImage {
      asset->{url},
      alt
    }?,
    excerpt,
    body,
    categories,
    tags,
    author {
      name,
      bio,
      image {
        asset->{url}
      }?,
      twitter,
      linkedin,
      website
    }?,
    publishedAt,
    focusKeyword,
    schemaType,
    readingTime,
    relatedPosts[]->{
      _id,
      metaTitle,
      slug
    }?,
    openGraphImage {
      asset->{url}
    }?,
    twitterCardType,
    socialDescription,
    canonicalUrl,
    noIndex,
    customScripts
  }`)
} 