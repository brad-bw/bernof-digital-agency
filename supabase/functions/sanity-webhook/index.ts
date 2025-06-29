
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
    console.log('Received webhook from Sanity:', body)

    // Handle blog post creation/update
    if (body._type === 'post') {
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
        categories: body.categories || [],
        tags: body.tags || [],
        reading_time: body.readingTime || 5,
        is_featured: body.featured || false,
        published_at: body.publishedAt ? new Date(body.publishedAt).toISOString() : null,
      }

      // Upsert the blog post
      const { error } = await supabaseClient
        .from('blog_posts')
        .upsert(blogPost, { 
          onConflict: 'sanity_id',
          ignoreDuplicates: false 
        })

      if (error) {
        console.error('Error upserting blog post:', error)
        throw error
      }

      console.log('Successfully synced blog post:', blogPost.title)
    }

    // Handle blog category creation/update
    if (body._type === 'category') {
      const category = {
        name: body.title || '',
        slug: body.slug?.current || '',
        description: body.description || null,
        color: body.color || '#1F5F5B',
      }

      const { error } = await supabaseClient
        .from('blog_categories')
        .upsert(category, { 
          onConflict: 'slug',
          ignoreDuplicates: false 
        })

      if (error) {
        console.error('Error upserting category:', error)
        throw error
      }

      console.log('Successfully synced category:', category.name)
    }

    return new Response(
      JSON.stringify({ success: true }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Webhook error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})
