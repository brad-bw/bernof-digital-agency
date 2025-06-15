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
  // Keeping this class for potential future API integration
  static async scrapeBehancePortfolio(profileUrl: string): Promise<{ success: boolean; data?: ScrapedData; error?: string }> {
    // For now, return static data - can be enhanced later with actual scraping
    console.log('Portfolio data loaded from static source');
    return { 
      success: true, 
      data: {
        projects: [],
        profileInfo: {
          name: "Selected Ltd",
          bio: "Creative digital agency",
          location: "European Union",
          followers: "1.2k"
        }
      }
    };
  }
}
