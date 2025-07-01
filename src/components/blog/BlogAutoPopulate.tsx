
import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

const BlogAutoPopulate = () => {
  const [hasPopulated, setHasPopulated] = useState(false);

  useEffect(() => {
    const checkAndPopulateArticles = async () => {
      if (hasPopulated) return;

      try {
        // Check if we have any articles
        const { data: existingPosts, error: checkError } = await supabase
          .from('blog_posts')
          .select('id')
          .limit(5);

        if (checkError) {
          console.error('Error checking articles:', checkError);
          return;
        }

        // If we have fewer than 4 articles, populate them
        if (!existingPosts || existingPosts.length < 4) {
          console.log('Populating articles automatically...');
          const { data, error } = await supabase.functions.invoke('add-sample-articles');
          
          if (error) {
            console.error('Error auto-populating articles:', error);
          } else {
            console.log('Articles auto-populated successfully:', data);
            setHasPopulated(true);
          }
        }
      } catch (error) {
        console.error('Error in auto-populate:', error);
      }
    };

    checkAndPopulateArticles();
  }, [hasPopulated]);

  return null; // This component doesn't render anything
};

export default BlogAutoPopulate;
