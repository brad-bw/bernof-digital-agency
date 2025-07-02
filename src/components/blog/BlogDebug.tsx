
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';

const BlogDebug = () => {
  const [sanityProjectId, setSanityProjectId] = useState('');
  const [sanityToken, setSanityToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleManualSync = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('manual-sync', {
        body: { sanityProjectId, sanityToken }
      });

      if (error) throw error;
      setResult(data);
    } catch (error) {
      console.error('Sync error:', error);
      setResult({ error: error.message });
    } finally {
      setLoading(false);
    }
  };

  const handleTestWebhook = async () => {
    setLoading(true);
    try {
      const testPayload = {
        _type: 'post',
        _id: 'test-id',
        title: 'Test Post',
        slug: { current: 'test-post' },
        excerpt: 'This is a test post',
        content: [
          {
            _type: 'block',
            children: [{ text: 'This is test content for the blog post.' }]
          }
        ],
        author: { name: 'Test Author' },
        publishedAt: new Date().toISOString(),
        featured: false
      };

      const { data, error } = await supabase.functions.invoke('sanity-webhook', {
        body: testPayload
      });

      if (error) throw error;
      setResult(data);
    } catch (error) {
      console.error('Webhook test error:', error);
      setResult({ error: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto mt-8">
      <CardHeader>
        <CardTitle>Blog Sync Debug Tool</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Sanity Project ID</label>
          <Input
            value={sanityProjectId}
            onChange={(e) => setSanityProjectId(e.target.value)}
            placeholder="Enter your Sanity project ID"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Sanity Token</label>
          <Input
            type="password"
            value={sanityToken}
            onChange={(e) => setSanityToken(e.target.value)}
            placeholder="Enter your Sanity token"
          />
        </div>

        <div className="flex gap-2">
          <Button 
            onClick={handleManualSync} 
            disabled={loading || !sanityProjectId || !sanityToken}
          >
            {loading ? 'Syncing...' : 'Manual Sync'}
          </Button>
          
          <Button 
            onClick={handleTestWebhook} 
            disabled={loading}
            variant="outline"
          >
            {loading ? 'Testing...' : 'Test Webhook'}
          </Button>
        </div>

        {result && (
          <div className="mt-4 p-4 bg-gray-100 rounded">
            <h3 className="font-medium mb-2">Result:</h3>
            <pre className="text-sm overflow-auto">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BlogDebug;
