
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { sanityProjectId, sanityToken } = await req.json()
    
    if (!sanityProjectId || !sanityToken) {
      throw new Error('Missing sanityProjectId or sanityToken')
    }

    console.log('Starting manual sync from Sanity project:', sanityProjectId)

    // Fetch published posts from Sanity using the correct GROQ query format
    const query = `*[_type == "post" && defined(publishedAt)] | order(publishedAt desc) {
      _id,
      _type,
      title,
      slug,
      excerpt,
      content,
      author->{
        name,
        bio,
        image{
          asset->{
            url
          }
        }
      },
      mainImage{
        asset->{
          url
        }
      },
      categories[]->{
        title,
        slug
      },
      tags[]->{
        title
      },
      publishedAt,
      featured
    }`
    
    const encodedQuery = encodeURIComponent(query)
    const sanityUrl = `https://${sanityProjectId}.api.sanity.io/v2021-10-21/data/query/production?query=${encodedQuery}`
    
    console.log('Fetching from Sanity URL:', sanityUrl)
    
    const response = await fetch(sanityUrl, {
      headers: {
        'Authorization': `Bearer ${sanityToken}`,
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Sanity API Error:', response.status, errorText)
      throw new Error(`Failed to fetch from Sanity: ${response.status} ${response.statusText} - ${errorText}`)
    }

    const sanityData = await response.json()
    console.log('Fetched posts from Sanity:', sanityData.result?.length || 0)

    if (!sanityData.result) {
      console.log('No results from Sanity query')
      return new Response(
        JSON.stringify({ 
          success: true, 
          syncedCount: 0, 
          errors: [],
          message: 'No posts found in Sanity' 
        }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    let syncedCount = 0
    let errors = []

    for (const post of sanityData.result || []) {
      try {
        // Extract categories
        const categories = post.categories ? post.categories.map((cat: any) => cat.title || cat.name || cat) : []
        
        // Extract tags
        const tags = post.tags ? post.tags.map((tag: any) => tag.title || tag.name || tag) : []
        
        // Calculate reading time
        let readingTime = 5
        if (post.content && Array.isArray(post.content)) {
          const wordCount = post.content
            .filter((block: any) => block._type === 'block')
            .map((block: any) => {
              return block.children?.map((child: any) => child.text || '').join(' ') || ''
            })
            .join(' ')
            .split(' ')
            .filter((word: string) => word.length > 0).length
          
          readingTime = Math.max(1, Math.ceil(wordCount / 200))
        }

        const blogPost = {
          sanity_id: post._id,
          title: post.title || '',
          slug: post.slug?.current || '',
          excerpt: post.excerpt || null,
          content: post.content || {},
          author_name: post.author?.name || 'Anonymous',
          author_image: post.author?.image?.asset?.url || null,
          author_bio: post.author?.bio || null,
          featured_image: post.mainImage?.asset?.url || null,
          categories: categories,
          tags: tags,
          reading_time: readingTime,
          is_featured: post.featured || false,
          published_at: post.publishedAt ? new Date(post.publishedAt).toISOString() : null,
        }

        console.log('Syncing post:', post.title, 'with data:', JSON.stringify(blogPost, null, 2))

        const { error } = await supabaseClient
          .from('blog_posts')
          .upsert(blogPost, { 
            onConflict: 'sanity_id',
            ignoreDuplicates: false 
          })

        if (error) {
          console.error('Error upserting post:', post.title, error)
          errors.push({ post: post.title || post._id, error: error.message })
        } else {
          syncedCount++
          console.log('Successfully synced post:', post.title)
        }
      } catch (err) {
        console.error('Error processing post:', post.title || post._id, err)
        errors.push({ post: post.title || post._id, error: err.message })
      }
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        syncedCount, 
        errors,
        totalPosts: sanityData.result?.length || 0,
        message: `Successfully synced ${syncedCount} out of ${sanityData.result?.length || 0} posts` 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Manual sync error:', error)
    return new Response(
      JSON.stringify({ 
        error: error.message,
        details: error.stack 
      }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})
