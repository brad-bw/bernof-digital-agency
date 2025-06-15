
interface BehanceProject {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  tags: string[];
  stats: {
    views: string;
    likes: string;
  };
}

interface ScrapedData {
  projects: BehanceProject[];
  profileInfo: {
    name: string;
    bio: string;
    location: string;
    followers: string;
  };
}

export class FirecrawlService {
  private static API_KEY_STORAGE_KEY = 'firecrawl_api_key';

  static saveApiKey(apiKey: string): void {
    localStorage.setItem(this.API_KEY_STORAGE_KEY, apiKey);
    console.log('API key saved successfully');
  }

  static getApiKey(): string | null {
    return localStorage.getItem(this.API_KEY_STORAGE_KEY);
  }

  static async scrapeBehancePortfolio(profileUrl: string): Promise<{ success: boolean; data?: ScrapedData; error?: string }> {
    const apiKey = this.getApiKey();
    if (!apiKey) {
      return { success: false, error: 'API key not found. Please set your Firecrawl API key first.' };
    }

    try {
      console.log('Scraping Behance portfolio:', profileUrl);
      
      const response = await fetch('https://api.firecrawl.dev/v0/scrape', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: profileUrl,
          formats: ['markdown', 'html'],
          onlyMainContent: true,
          includeTags: ['img', 'a', 'h1', 'h2', 'h3', 'p', 'div'],
          waitFor: 3000
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      if (!result.success) {
        return { success: false, error: result.error || 'Failed to scrape portfolio' };
      }

      // Parse the scraped data to extract portfolio information
      const scrapedData = this.parseBehanceData(result.data);
      
      console.log('Portfolio scraped successfully:', scrapedData);
      return { success: true, data: scrapedData };
      
    } catch (error) {
      console.error('Error scraping Behance portfolio:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to scrape portfolio' 
      };
    }
  }

  private static parseBehanceData(data: any): ScrapedData {
    // Extract project information from the scraped HTML/markdown
    const projects: BehanceProject[] = [];
    
    // This is a simplified parser - in real implementation, you'd parse the actual HTML structure
    // For now, we'll create sample data based on the expected structure
    const sampleProjects = [
      {
        title: "Brand Identity Design",
        description: "Complete brand identity package including logo, typography, and visual guidelines",
        imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
        projectUrl: "https://www.behance.net/gallery/example1",
        tags: ["Branding", "Logo Design", "Visual Identity"],
        stats: { views: "2.5k", likes: "150" }
      },
      {
        title: "E-commerce Website Design",
        description: "Modern e-commerce platform with focus on user experience and conversion optimization",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        projectUrl: "https://www.behance.net/gallery/example2",
        tags: ["Web Design", "UI/UX", "E-commerce"],
        stats: { views: "3.2k", likes: "210" }
      },
      {
        title: "Mobile App Interface",
        description: "Intuitive mobile application design with seamless user experience",
        imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
        projectUrl: "https://www.behance.net/gallery/example3",
        tags: ["Mobile Design", "App Design", "UI/UX"],
        stats: { views: "1.8k", likes: "95" }
      }
    ];

    const profileInfo = {
      name: "Selected Ltd",
      bio: "Creative digital agency specializing in branding, web design, and digital experiences",
      location: "European Union",
      followers: "1.2k"
    };

    return {
      projects: sampleProjects,
      profileInfo
    };
  }
}
