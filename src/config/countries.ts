
export interface CountryConfig {
  code: string;
  name: string;
  currency: string;
  currencySymbol: string;
  flag: string;
  marketContext: {
    painPoints: string[];
    opportunities: string[];
    keyStats: string[];
    heroStats: {
      localCost: string;
      bernofCost: string;
      savings: string;
    };
  };
  seoKeywords: {
    web: string[];
    software: string[];
    startup: string[];
  };
  pricing: {
    web: { min: number; max: number; localMin: number; localMax: number };
    software: { min: number; max: number; localMin: number; localMax: number };
    startup: { min: number; max: number; localMin: number; localMax: number };
  };
}

export const countriesConfig: Record<string, CountryConfig> = {
  ch: {
    code: 'ch',
    name: 'Switzerland',
    currency: 'CHF',
    currencySymbol: '€',
    flag: '🇨🇭',
    marketContext: {
      painPoints: [
        'Swiss web agencies charge €120-€180 per hour - 3.2x higher than EU average',
        'Switzerland faces a 15,000 IT specialist shortage with 4-6 month hiring delays',
        'Swiss web projects take 3-6 months longer than EU average due to overbooked agencies',
        'Average Swiss business website costs €15,000-€35,000 vs €6,000-€14,000 with Bernof Co'
      ],
      opportunities: [
        'Access top European talent without Swiss premium pricing',
        'Same timezone, European business culture, GDPR compliance',
        '60% cost savings while maintaining enterprise-grade quality',
        'Immediate project start - no waiting lists or recruitment delays'
      ],
      keyStats: [
        'Swiss Agency Average: €120-€180/hour vs Bernof Co: €50-€70/hour',
        'Local Website Cost: €15,000-€35,000 vs Bernof Co: €6,000-€14,000',
        'IT Talent Shortage: 15,000+ unfilled positions',
        'Average Hiring Time: 4-6 months vs Bernof Co: 48 hours project start'
      ],
      heroStats: {
        localCost: '€15,000-€35,000',
        bernofCost: '€6,000-€14,000',
        savings: '60% less'
      }
    },
    seoKeywords: {
      web: ['web development Switzerland', 'Swiss website design', 'Zurich web developers', 'Geneva web design', 'Swiss e-commerce development', 'GDPR compliant web development Switzerland'],
      software: ['software development Switzerland', 'Swiss app development', 'Zurich software company', 'Geneva software solutions', 'Swiss enterprise software', 'custom software development Switzerland'],
      startup: ['startup development Switzerland', 'Swiss MVP development', 'Zurich startup services', 'Geneva startup consulting', 'Swiss tech startup', 'MVP development Switzerland cost']
    },
    pricing: {
      web: { min: 6000, max: 14000, localMin: 15000, localMax: 35000 },
      software: { min: 32000, max: 60000, localMin: 80000, localMax: 150000 },
      startup: { min: 32000, max: 60000, localMin: 80000, localMax: 150000 }
    }
  },
  uk: {
    code: 'uk',
    name: 'United Kingdom',
    currency: 'GBP',
    currencySymbol: '£',
    flag: '🇬🇧',
    marketContext: {
      painPoints: [
        'UK web agencies charge £80-£120 per hour - post-Brexit talent costs rising',
        'Digital skills gap: 2.6M unfilled roles by 2030 affecting project timelines',
        'High competition in London drives development costs 40% above EU average',
        'Average UK business website costs £12,000-£28,000 vs £4,800-£11,200 with Bernof Co'
      ],
      opportunities: [
        'Access European talent pool without visa complications',
        'Same business hours, cultural alignment, native English communication',
        '60% cost savings compared to London and major UK city agencies',
        'Immediate team scaling without recruitment overhead'
      ],
      keyStats: [
        'UK Agency Average: £80-£120/hour vs Bernof Co: £32-£48/hour',
        'Local Website Cost: £12,000-£28,000 vs Bernof Co: £4,800-£11,200',
        'Tech Sector Value: £149B contribution to UK economy',
        'Startup Ecosystem: $1T+ value (3rd globally) but high development costs'
      ],
      heroStats: {
        localCost: '£12,000-£28,000',
        bernofCost: '£4,800-£11,200',
        savings: '60% less'
      }
    },
    seoKeywords: {
      web: ['web development UK', 'British website design', 'London web developers', 'Manchester web design', 'UK e-commerce development', 'post-Brexit web development'],
      software: ['software development UK', 'British app development', 'London software company', 'Manchester software solutions', 'UK enterprise software', 'fintech development UK'],
      startup: ['startup development UK', 'British MVP development', 'London startup services', 'Manchester startup consulting', 'UK tech startup', 'MVP development London cost']
    },
    pricing: {
      web: { min: 4800, max: 11200, localMin: 12000, localMax: 28000 },
      software: { min: 25600, max: 48000, localMin: 64000, localMax: 120000 },
      startup: { min: 25600, max: 48000, localMin: 64000, localMax: 120000 }
    }
  },
  us: {
    code: 'us',
    name: 'United States',
    currency: 'USD',
    currencySymbol: '$',
    flag: '🇺🇸',
    marketContext: {
      painPoints: [
        'US web agencies charge $100-$200 per hour - Silicon Valley premium affects entire market',
        'Developer shortage: 1.2M unfilled positions driving up costs nationwide',
        'Average US business website costs $15,000-$40,000 vs $6,000-$16,000 with Bernof Co',
        'Rapid technology evolution pressure requires constant expensive upgrades'
      ],
      opportunities: [
        'Access European expertise at fraction of Silicon Valley costs',
        'Overlap business hours with US East Coast, professional English communication',
        '60% cost savings compared to major US metropolitan areas',
        'European data privacy standards exceed US requirements'
      ],
      keyStats: [
        'US Agency Average: $100-$200/hour vs Bernof Co: $40-$80/hour',
        'Local Website Cost: $15,000-$40,000 vs Bernof Co: $6,000-$16,000',
        'Tech Industry Value: $1.8T (10% of GDP)',
        'Annual Startup Funding: $240B+ but high development costs limit runway'
      ],
      heroStats: {
        localCost: '$15,000-$40,000',
        bernofCost: '$6,000-$16,000',
        savings: '60% less'
      }
    },
    seoKeywords: {
      web: ['web development USA', 'American website design', 'New York web developers', 'Silicon Valley web design alternative', 'US e-commerce development', 'cost-effective web development USA'],
      software: ['software development USA', 'American app development', 'Silicon Valley alternative software', 'New York software solutions', 'US enterprise software', 'affordable software development USA'],
      startup: ['startup development USA', 'American MVP development', 'Silicon Valley startup alternative', 'New York startup consulting', 'US tech startup', 'affordable MVP development USA']
    },
    pricing: {
      web: { min: 6000, max: 16000, localMin: 15000, localMax: 40000 },
      software: { min: 32000, max: 64000, localMin: 80000, localMax: 160000 },
      startup: { min: 32000, max: 64000, localMin: 80000, localMax: 160000 }
    }
  },
  it: {
    code: 'it',
    name: 'Italy',
    currency: 'EUR',
    currencySymbol: '€',
    flag: '🇮🇹',
    marketContext: {
      painPoints: [
        'Italian web agencies charge €60-€100 per hour but limited advanced expertise',
        'Digital transformation lag: traditional industries 18 months behind EU average',
        'Limited local tech talent pool concentrated in Milan/Rome areas',
        'Average Italian business website costs €10,000-€24,000 vs €4,000-€9,600 with Bernof Co'
      ],
      opportunities: [
        'Access advanced European development expertise for Italian market',
        'Same timezone, cultural understanding, Italian language capabilities',
        '60% cost savings while gaining access to cutting-edge technologies',
        'Bridge digital transformation gap with modern solutions'
      ],
      keyStats: [
        'Italian Agency Average: €60-€100/hour vs Bernof Co: €24-€40/hour',
        'Local Website Cost: €10,000-€24,000 vs Bernof Co: €4,000-€9,600',
        'Digital Economy: 4.2% of GDP (below EU average of 8.2%)',
        'Tech Skills Gap: 135,000 unfilled positions by 2025'
      ],
      heroStats: {
        localCost: '€10,000-€24,000',
        bernofCost: '€4,000-€9,600',
        savings: '60% less'
      }
    },
    seoKeywords: {
      web: ['web development Italy', 'Italian website design', 'Milan web developers', 'Rome web design', 'Italian e-commerce development', 'sviluppo web Italia'],
      software: ['software development Italy', 'Italian app development', 'Milan software company', 'Rome software solutions', 'Italian enterprise software', 'sviluppo software Italia'],
      startup: ['startup development Italy', 'Italian MVP development', 'Milan startup services', 'Rome startup consulting', 'Italian tech startup', 'sviluppo MVP Italia']
    },
    pricing: {
      web: { min: 4000, max: 9600, localMin: 10000, localMax: 24000 },
      software: { min: 20000, max: 38400, localMin: 50000, localMax: 96000 },
      startup: { min: 20000, max: 38400, localMin: 50000, localMax: 96000 }
    }
  }
};

export const getCountryConfig = (countryCode: string): CountryConfig | null => {
  return countriesConfig[countryCode] || null;
};

export const getAllCountries = (): CountryConfig[] => {
  return Object.values(countriesConfig);
};
