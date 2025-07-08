// Netlify serverless function for Sanity blog proxy
exports.handler = async function(event, context) {
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  const query = '*[_type == "blogPost"] | order(publishedAt desc) { _id, metaTitle, metaDescription, slug, featuredImage { asset->{url}, alt }, cardThumbnail { asset->{url}, alt }, excerpt, body, categories, tags, author { name, bio, image { asset->{url} }, twitter, linkedin, website }, publishedAt, focusKeyword, schemaType, readingTime, relatedPosts[]->{ _id, metaTitle, slug }, openGraphImage { asset->{url} }, twitterCardType, socialDescription, canonicalUrl, noIndex, customScripts }';
  const encodedQuery = encodeURIComponent(query);
  const url = `https://kvyko3sv.api.sanity.io/v2023-10-01/data/query/production?query=${encodedQuery}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data.result)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message || 'Unknown error' })
    };
  }
} 