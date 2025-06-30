
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

    const body = await req.json()
    console.log('Received webhook from Sanity:', JSON.stringify(body, null, 2))

    // Handle blog post creation/update
    if (body._type === 'post') {
      console.log('Processing blog post:', body.title)
      
      // Extract categories properly
      const categories = body.categories ? body.categories.map((cat: any) => cat.title || cat.name || cat) : []
      
      // Extract tags properly
      const tags = body.tags ? body.tags.map((tag: any) => tag.title || tag.name || tag) : []
      
      // Calculate reading time based on content
      let readingTime = 5; // default
      if (body.content && Array.isArray(body.content)) {
        const wordCount = body.content
          .filter((block: any) => block._type === 'block')
          .map((block: any) => {
            return block.children?.map((child: any) => child.text || '').join(' ') || ''
          })
          .join(' ')
          .split(' ')
          .filter((word: string) => word.length > 0).length
        
        readingTime = Math.max(1, Math.ceil(wordCount / 200)) // 200 words per minute
      }

      const blogPost = {
        sanity_id: body._id,
        title: body.title || '',
        slug: body.slug?.current || '',
        excerpt: body.excerpt || null,
        content: body.content || {},
        author_name: body.author?.name || 'Anonymous',
        author_image: body.author?.image?.asset?.url || null,
        author_bio: body.author?.bio || null,
        featured_image: body.mainImage?.asset?.url || null,
        categories: categories,
        tags: tags,
        reading_time: readingTime,
        is_featured: body.featured || false,
        published_at: body.publishedAt ? new Date(body.publishedAt).toISOString() : null,
      }

      console.log('Upserting blog post:', JSON.stringify(blogPost, null, 2))

      // Upsert the blog post
      const { data, error } = await supabaseClient
        .from('blog_posts')
        .upsert(blogPost, { 
          onConflict: 'sanity_id',
          ignoreDuplicates: false 
        })

      if (error) {
        console.error('Error upserting blog post:', error)
        throw error
      }

      console.log('Successfully synced blog post:', blogPost.title, 'Data:', data)
    }

    // Handle blog category creation/update
    if (body._type === 'category') {
      console.log('Processing category:', body.title)
      
      const category = {
        name: body.title || '',
        slug: body.slug?.current || '',
        description: body.description || null,
        color: body.color || '#1F5F5B',
      }

      const { data, error } = await supabaseClient
        .from('blog_categories')
        .upsert(category, { 
          onConflict: 'slug',
          ignoreDuplicates: false 
        })

      if (error) {
        console.error('Error upserting category:', error)
        throw error
      }

      console.log('Successfully synced category:', category.name, 'Data:', data)
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Webhook processed successfully' }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Webhook error:', error)
    return new Response(
      JSON.stringify({ error: error.message, stack: error.stack }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})
