
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
  };
  seoKeywords: {
    web: string[];
    software: string[];
    startup: string[];
  };
  pricing: {
    webDevelopment: { min: number; max: number };
    softwareDevelopment: { min: number; max: number };
    startupDevelopment: { min: number; max: number };
  };
}

export const countriesConfig: Record<string, CountryConfig> = {
  ch: {
    code: 'ch',
    name: 'Switzerland',
    currency: 'CHF',
    currencySymbol: 'CHF',
    flag: '🇨🇭',
    marketContext: {
      painPoints: [
        'Extremely high local talent costs (CHF 80,000-120,000+ annually)',
        'Severe IT talent shortage with 25,000+ unfilled positions',
        'Strict data protection and compliance requirements',
        'Competition from major financial and tech hubs'
      ],
      opportunities: [
        'High purchasing power and premium market positioning',
        'Strong economy with stable business environment',
        'Gateway to European markets',
        'Innovation-focused culture with high R&D investment'
      ],
      keyStats: [
        'Average developer salary: CHF 95,000-140,000',
        'IT skills gap: 25,000+ unfilled positions',
        'Digital economy: 8.2% of GDP',
        'Startup funding: CHF 2.1B+ annually'
      ]
    },
    seoKeywords: {
      web: ['Switzerland web development', 'Swiss website design', 'Zurich web developers', 'Geneva web design', 'Swiss e-commerce development'],
      software: ['Switzerland software development', 'Swiss app development', 'Zurich software company', 'Geneva software solutions', 'Swiss enterprise software'],
      startup: ['Switzerland startup development', 'Swiss MVP development', 'Zurich startup services', 'Geneva startup consulting', 'Swiss tech startup']
    },
    pricing: {
      webDevelopment: { min: 4999, max: 19999 },
      softwareDevelopment: { min: 9999, max: 49999 },
      startupDevelopment: { min: 7999, max: 29999 }
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
        'Post-Brexit talent mobility challenges',
        'High competition in London and major cities',
        'Rising development costs (£45,000-80,000+ salaries)',
        'Regulatory changes and compliance complexity'
      ],
      opportunities: [
        'Strong fintech and digital innovation ecosystem',
        'Government digital transformation initiatives',
        'Access to European and global markets',
        'Established startup and scale-up culture'
      ],
      keyStats: [
        'Average developer salary: £45,000-85,000',
        'Tech sector contribution: £149B to UK economy',
        'Digital skills gap: 2.6M unfilled roles by 2030',
        'Startup ecosystem value: $1T+ (3rd globally)'
      ]
    },
    seoKeywords: {
      web: ['UK web development', 'British website design', 'London web developers', 'Manchester web design', 'UK e-commerce development'],
      software: ['UK software development', 'British app development', 'London software company', 'Manchester software solutions', 'UK enterprise software'],
      startup: ['UK startup development', 'British MVP development', 'London startup services', 'Manchester startup consulting', 'UK tech startup']
    },
    pricing: {
      webDevelopment: { min: 3999, max: 15999 },
      softwareDevelopment: { min: 7999, max: 39999 },
      startupDevelopment: { min: 5999, max: 24999 }
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
        'Extremely competitive talent market',
        'High development costs ($70,000-150,000+ salaries)',
        'Rapid technology evolution pressure',
        'Complex multi-state compliance requirements'
      ],
      opportunities: [
        'Largest global market with high purchasing power',
        'Innovation-driven economy and culture',
        'Access to venture capital and funding',
        'Leading edge technology adoption'
      ],
      keyStats: [
        'Average developer salary: $75,000-160,000',
        'Tech industry value: $1.8T (10% of GDP)',
        'Developer shortage: 1.2M unfilled positions',
        'Startup funding: $240B+ annually'
      ]
    },
    seoKeywords: {
      web: ['USA web development', 'American website design', 'New York web developers', 'Silicon Valley web design', 'US e-commerce development'],
      software: ['USA software development', 'American app development', 'Silicon Valley software company', 'New York software solutions', 'US enterprise software'],
      startup: ['USA startup development', 'American MVP development', 'Silicon Valley startup services', 'New York startup consulting', 'US tech startup']
    },
    pricing: {
      webDevelopment: { min: 4999, max: 19999 },
      softwareDevelopment: { min: 9999, max: 49999 },
      startupDevelopment: { min: 7999, max: 29999 }
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
        'Digital transformation lag in traditional industries',
        'Limited local tech talent pool',
        'Bureaucratic complexity for digital initiatives',
        'Competition from Northern European tech hubs'
      ],
      opportunities: [
        'Large untapped market for digitalization',
        'Government incentives for digital transformation',
        'Strong manufacturing base needing modernization',
        'Growing Milan tech ecosystem'
      ],
      keyStats: [
        'Average developer salary: €35,000-65,000',
        'Digital economy: 4.2% of GDP (below EU average)',
        'Tech skills gap: 135,000 unfilled positions by 2025',
        'Startup funding: €800M+ annually'
      ]
    },
    seoKeywords: {
      web: ['Italy web development', 'Italian website design', 'Milan web developers', 'Rome web design', 'Italian e-commerce development'],
      software: ['Italy software development', 'Italian app development', 'Milan software company', 'Rome software solutions', 'Italian enterprise software'],
      startup: ['Italy startup development', 'Italian MVP development', 'Milan startup services', 'Rome startup consulting', 'Italian tech startup']
    },
    pricing: {
      webDevelopment: { min: 3499, max: 13999 },
      softwareDevelopment: { min: 6999, max: 34999 },
      startupDevelopment: { min: 5499, max: 21999 }
    }
  }
};

export const getCountryConfig = (countryCode: string): CountryConfig | null => {
  return countriesConfig[countryCode] || null;
};

export const getAllCountries = (): CountryConfig[] => {
  return Object.values(countriesConfig);
};
