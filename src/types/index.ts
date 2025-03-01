

// Vehicle Types
export interface Vehicle {
    id: number;
    name: string;
    category: string;
    image: string;
    description: string;
    passengers: number;
    range: string;
    emissions: string;
    efficiency: string;
    features: string[];
    co2Saved: string;
    energySource: string;
    pricePerDay?: number;
    pricePerWeek?: number;
    available?: boolean;
  }
  
  // Environmental Impact Types
  export interface EnvironmentalStat {
    title: string;
    value: string;
    unit: string;
    description: string;
    icon?: string;
  }
  
  // Blog Types
  export interface BlogPost {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    image: string;
    author: Author;
    category: string;
    tags: string[];
    publishedAt: string;
    readTime: number;
  }
  
  export interface Author {
    id: number;
    name: string;
    avatar: string;
    role: string;
    bio: string;
  }
  
  // Filter Types
  export interface FilterOptions {
    category: string | null;
    energySource: string | null;
  }