// Netlify/Node handler signature
export default async function handler(req: any, res: any) {
  // Only allow GET
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  // Use a fixed, safe query for blog posts
  const query = '*[_type == "blogPost"] | order(publishedAt desc) { _id, metaTitle, metaDescription, slug, featuredImage { asset->{url}, alt }, excerpt, body, categories, tags, author { name, bio, image { asset->{url} }, twitter, linkedin, website }, publishedAt, focusKeyword, schemaType, readingTime, relatedPosts[]->{ _id, metaTitle, slug }, openGraphImage { asset->{url} }, twitterCardType, socialDescription, canonicalUrl, noIndex, customScripts }';
  const encodedQuery = encodeURIComponent(query);
  const url = `https://kvyko3sv.api.sanity.io/v2023-10-01/data/query/production?query=${encodedQuery}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data.result);
  } catch (err: any) {
    res.status(500).json({ error: err.message || 'Unknown error' });
  }
} 