
export interface CountryConfig {
  code: string;
  name: string;
  currency: string;
  pricing: {
    web: { min: number; max: number };
    software: { min: number; max: number };
    startup: { min: number; max: number };
  };
  seoKeywords: {
    web: string[];
    software: string[];
    startup: string[];
  };
}

const countries: CountryConfig[] = [
  {
    code: 'ch',
    name: 'Switzerland',
    currency: 'CHF',
    pricing: {
      web: { min: 4999, max: 19999 },
      software: { min: 7999, max: 29999 },
      startup: { min: 3999, max: 24999 }
    },
    seoKeywords: {
      web: ['web development switzerland', 'website design zurich', 'swiss web agency'],
      software: ['software development switzerland', 'custom software zurich', 'swiss tech company'],
      startup: ['startup development switzerland', 'mvp development zurich', 'swiss startup services']
    }
  },
  {
    code: 'uk',
    name: 'United Kingdom',
    currency: 'GBP',
    pricing: {
      web: { min: 3999, max: 15999 },
      software: { min: 5999, max: 24999 },
      startup: { min: 2999, max: 19999 }
    },
    seoKeywords: {
      web: ['web development uk', 'website design london', 'uk web agency'],
      software: ['software development uk', 'custom software london', 'uk tech company'],
      startup: ['startup development uk', 'mvp development london', 'uk startup services']
    }
  },
  {
    code: 'us',
    name: 'United States',
    currency: 'USD',
    pricing: {
      web: { min: 4999, max: 19999 },
      software: { min: 7999, max: 29999 },
      startup: { min: 3999, max: 24999 }
    },
    seoKeywords: {
      web: ['web development usa', 'website design america', 'us web agency'],
      software: ['software development usa', 'custom software america', 'us tech company'],
      startup: ['startup development usa', 'mvp development america', 'us startup services']
    }
  },
  {
    code: 'it',
    name: 'Italy',
    currency: 'EUR',
    pricing: {
      web: { min: 3499, max: 13999 },
      software: { min: 5499, max: 21999 },
      startup: { min: 2499, max: 16999 }
    },
    seoKeywords: {
      web: ['web development italy', 'website design milan', 'italian web agency'],
      software: ['software development italy', 'custom software milan', 'italian tech company'],
      startup: ['startup development italy', 'mvp development milan', 'italian startup services']
    }
  }
];

export const getCountryConfig = (code: string): CountryConfig | undefined => {
  return countries.find(country => country.code === code);
};

export const getAllCountries = (): CountryConfig[] => {
  return countries;
};
