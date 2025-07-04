// WordPress.com Configuration
export const WORDPRESS_CONFIG = {
  // Your WordPress.com site URL
  SITE_URL: 'https://bernofco.wordpress.com',
  
  // Since WordPress.com doesn't expose REST API for free sites,
  // we'll use a different approach
  API_BASE: 'https://bernofco.wordpress.com',
  
  // Number of posts to fetch
  POSTS_PER_PAGE: 10,
  
  // Cache time in milliseconds (5 minutes)
  CACHE_TIME: 5 * 60 * 1000,
  
  // Retry attempts
  RETRY_ATTEMPTS: 3,
};

// Helper function to get API URL
export const getWordPressApiUrl = (endpoint: string) => {
  return `${WORDPRESS_CONFIG.API_BASE}/${endpoint}`;
};

// Sample blog posts data (since we can't fetch from WordPress.com API)
export const SAMPLE_BLOG_POSTS = [
  {
    id: 1,
    title: "UK Startup Ecosystem: £1T+ Value, High Development Costs",
    excerpt: "The UK startup ecosystem has achieved a remarkable milestone, surpassing £1 trillion in total value. This achievement positions the UK as Europe's leading startup hub and the third-largest globally, behind only the US and China.",
    content: `
      <h2>The UK Startup Success Story</h2>
      <p>The UK startup ecosystem has achieved a remarkable milestone, surpassing £1 trillion in total value. This achievement positions the UK as Europe's leading startup hub and the third-largest globally, behind only the US and China.</p>
      
      <h2>Key Statistics</h2>
      <ul>
        <li>Total ecosystem value: £1.1 trillion (2024)</li>
        <li>Number of unicorns: 144 companies</li>
        <li>Annual VC investment: £15.8 billion</li>
        <li>Tech workforce: 1.7 million professionals</li>
      </ul>
      
      <h2>The Development Cost Challenge</h2>
      <p>Despite the ecosystem's success, UK startups face significant development cost challenges:</p>
      
      <h3>Average Development Costs</h3>
      <ul>
        <li>Senior developer salary: £65,000 – £95,000</li>
        <li>MVP development: £50,000 – £150,000</li>
        <li>Full product development: £200,000 – £500,000</li>
        <li>Annual burn rate: £500,000 – £2M for typical Series A startup</li>
      </ul>
      
      <h2>Cost Drivers in the UK Market</h2>
      
      <h3>1. Talent Shortage</h3>
      <p>High demand for skilled developers has driven up salaries:</p>
      <ul>
        <li>50% increase in developer salaries since 2020</li>
        <li>Competition from tech giants (Google, Meta, Amazon)</li>
        <li>Brexit impact on EU talent availability</li>
      </ul>
      
      <h3>2. London Premium</h3>
      <p>London-based startups face additional costs:</p>
      <ul>
        <li>Office rent: £800-1,200 per desk/month</li>
      </ul>
      
      <h3>3. Regulatory Compliance</h3>
      <p>UK regulations require significant investment:</p>
      <ul>
        <li>GDPR compliance systems</li>
        <li>Financial services regulations</li>
        <li>Industry-specific requirements</li>
      </ul>
      
      <h2>Strategies for Cost-Effective Development</h2>
      
      <h3>1. Distributed Teams</h3>
      <p>Many successful UK startups are adopting distributed models:</p>
      <ul>
        <li>Remote-first culture reducing office costs</li>
        <li>Access to global talent pools</li>
        <li>Regional UK hubs (Manchester, Edinburgh, Bristol)</li>
      </ul>
      
      <h3>2. Offshore Development Partnerships</h3>
      <p>Strategic partnerships with development teams in:</p>
      <ul>
        <li>Eastern Europe (Poland, Czech Republic)</li>
        <li>India and Southeast Asia</li>
        <li>Latin America for timezone alignment</li>
      </ul>
      
      <h3>3. Technology Stack Optimization</h3>
      <ul>
        <li>Cloud-first architecture reducing infrastructure costs</li>
        <li>Open-source technologies</li>
        <li>Low-code/no-code platforms for rapid prototyping</li>
      </ul>
      
      <h2>Success Stories: Cost-Effective Scaling</h2>
      
      <h3>Monzo</h3>
      <p>Built a £1.25B banking platform using:</p>
      <ul>
        <li>Cloud-native architecture</li>
        <li>Microservices reducing development complexity</li>
        <li>Strong engineering culture attracting talent</li>
      </ul>
      
      <h3>Deliveroo</h3>
      <p>Scaled globally through:</p>
      <ul>
        <li>Distributed engineering teams</li>
        <li>Agile development methodologies</li>
        <li>Strategic technology partnerships</li>
      </ul>
      
      <h2>Government Support and Initiatives</h2>
      
      <h3>R&D Tax Credits</h3>
      <p>UK startups can claim up to 33% of qualifying development costs</p>
      
      <h3>Enterprise Investment Scheme (EIS)</h3>
      <p>Tax incentives for investors supporting startup growth</p>
      
      <h3>Innovation Grants</h3>
      <ul>
        <li>Innovate UK funding</li>
        <li>Sector-specific grants</li>
        <li>European funding programs</li>
      </ul>
      
      <h2>Emerging Trends</h2>
      
      <h3>1. AI-Assisted Development</h3>
      <p>AI tools reducing development time by 30-40%:</p>
      <ul>
        <li>Code generation and optimization</li>
        <li>Automated testing</li>
        <li>Bug detection and fixing</li>
      </ul>
      
      <h3>2. Platform-as-a-Service (PaaS)</h3>
      <p>Increased adoption of platforms reducing development overhead</p>
      
      <h3>3. Community-Driven Development</h3>
      <p>Open-source contributions and collaborative development models</p>
      
      <h2>Regional Development Hubs</h2>
      
      <h3>Manchester</h3>
      <ul>
        <li>40% lower development costs than London</li>
        <li>Strong university partnerships</li>
        <li>Growing fintech cluster</li>
      </ul>
      
      <h3>Edinburgh</h3>
      <ul>
        <li>Fintech specialization</li>
        <li>Government support</li>
        <li>Lower operational costs</li>
      </ul>
      
      <h3>Bristol</h3>
      <ul>
        <li>Aerospace and defense tech</li>
        <li>Strong talent pipeline</li>
        <li>Competitive costs</li>
      </ul>
      
      <h2>Future Outlook</h2>
      <p>The UK startup ecosystem is expected to continue growing, with predictions of:</p>
      <ul>
        <li>£2 trillion value by 2030</li>
        <li>200+ unicorn companies</li>
        <li>Continued investment in emerging technologies</li>
      </ul>
      
      <h2>Recommendations for Startups</h2>
      <ul>
        <li>Embrace remote-first development models</li>
        <li>Leverage government incentives and grants</li>
        <li>Consider regional hubs for cost optimization</li>
        <li>Invest in AI and automation tools</li>
        <li>Build strategic partnerships for development</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>While the UK's startup ecosystem thrives with record valuations, managing development costs remains crucial for sustainable growth. Startups that adopt innovative approaches to development, leverage technology, and make strategic location decisions will be best positioned for success in this competitive landscape.</p>
    `,
    slug: "uk-startup-ecosystem-1t-value-high-development-costs",
    date: "July 4, 2025",
    author: "Bernof Co",
    featuredImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    category: "Startup Strategy"
  },
  {
    id: 2,
    title: "Hello World!",
    excerpt: "Welcome to WordPress! This is your first post. Edit or delete it to take the first step in your blogging journey.",
    content: `
      <h2>Welcome to Bernof Co Blog</h2>
      <p>Welcome to our blog! This is where we'll share insights about digital development, startup growth, and industry trends.</p>
      
      <p>We're excited to bring you:</p>
      <ul>
        <li>Expert analysis on web development trends</li>
        <li>Startup growth strategies and insights</li>
        <li>Digital innovation and technology updates</li>
        <li>Market analysis and cost comparisons</li>
      </ul>
      
      <p>Stay tuned for more content coming soon!</p>
    `,
    slug: "hello-world",
    date: "July 2, 2025",
    author: "Bernof Co",
    featuredImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    category: "Digital Insights"
  }
]; 