// Author type for blog posts
export interface Author {
  id: number;
  name: string;
  avatar: string;
  role: string;
  bio: string;
}

// Blog post type
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

// Vehicle type for fleet
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
  pricePerDay: number;
  pricePerWeek: number;
  available: boolean;
}

// Environmental stat type
export interface EnvironmentalStat {
  title: string;
  value: string;
  unit: string;
  description: string;
}

// Filter options for fleet
export interface FilterOptions {
  category: string | null;
  energySource: string | null;
}