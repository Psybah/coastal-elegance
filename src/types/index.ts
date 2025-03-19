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