import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, Clock, Tag, Search, User, 
  ChevronRight, Filter, ChevronDown, ArrowRight 
} from 'lucide-react';
import { blogPosts, blogCategories, blogTags } from '../data/blogData';
import { BlogPost } from '../types';
import Breadcrumb from '../components/Breadcrumb';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

const Blog: React.FC = () => {
  // State management
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [featuredPost, setFeaturedPost] = useState<BlogPost | null>(null);

  // Load and filter blog posts
  useEffect(() => {
    try {
      setIsLoading(true);
      
      // Simulate API call
      setTimeout(() => {
        // Set featured post (most recent)
        const sortedPosts = [...blogPosts].sort((a, b) => 
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        );
        
        setFeaturedPost(sortedPosts[0]);
        
        // Filter posts
        const filtered = sortedPosts.filter(post => {
          // Skip the featured post in the main list
          if (post.id === sortedPosts[0].id) return false;
          
          // Apply category filter
          if (selectedCategory && post.category !== selectedCategory) return false;
          
          // Apply tag filter
          if (selectedTag && !post.tags.includes(selectedTag)) return false;
          
          // Apply search filter
          if (searchQuery) {
            const query = searchQuery.toLowerCase();
            return (
              post.title.toLowerCase().includes(query) ||
              post.excerpt.toLowerCase().includes(query) ||
              post.content.toLowerCase().includes(query) ||
              post.author.name.toLowerCase().includes(query)
            );
          }
          
          return true;
        });
        
        setPosts(filtered);
        setIsLoading(false);
      }, 600);
    } catch (err) {
      setError('Failed to load blog posts. Please try again.');
      setIsLoading(false);
    }
  }, [selectedCategory, selectedTag, searchQuery]);

  // Format date
  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedTag(null);
    setSearchQuery('');
  };

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is already handled by the useEffect
  };

  return (
    <div className="pt-16 pb-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brand-brown to-brand-red py-16">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Coastal Elegance Blog
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Insights, tips, and stories about sustainable luxury transportation and travel experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: 'Blog' }]} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            {/* Search */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-lg font-semibold text-brand-brown mb-4">Search Articles</h3>
              <form onSubmit={handleSearch}>
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for articles..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-brand-gold focus:border-brand-gold"
                    aria-label="Search for articles"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" aria-hidden="true" />
                </div>
              </form>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-lg font-semibold text-brand-brown mb-4">Categories</h3>
              <ul className="space-y-2">
                {blogCategories.map((category, index) => (
                  <li key={index}>
                    <button
                      onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
                      className={`flex items-center w-full text-left px-2 py-1 rounded-md transition-colors ${
                        category === selectedCategory 
                          ? 'bg-brand-red/10 text-brand-red' 
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                      aria-pressed={category === selectedCategory}
                    >
                      <ChevronRight 
                        className={`h-4 w-4 mr-2 transition-transform ${
                          category === selectedCategory ? 'rotate-90 text-brand-red' : 'text-gray-400'
                        }`} 
                        aria-hidden="true" 
                      />
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Tags */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-brand-brown mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {blogTags.map((tag, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                      tag === selectedTag
                        ? 'bg-brand-gold text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    aria-pressed={tag === selectedTag}
                  >
                    <Tag className="h-3 w-3 mr-1" aria-hidden="true" />
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            {/* Active Filters */}
            {(selectedCategory || selectedTag || searchQuery) && (
              <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex justify-between items-center">
                <div className="flex items-center">
                  <Filter className="h-5 w-5 text-brand-brown mr-2" aria-hidden="true" />
                  <span className="text-sm font-medium text-gray-700">Active filters:</span>
                  {selectedCategory && (
                    <span className="ml-2 px-3 py-1 bg-brand-red/10 text-brand-red text-sm rounded-full">
                      {selectedCategory}
                    </span>
                  )}
                  {selectedTag && (
                    <span className="ml-2 px-3 py-1 bg-brand-gold/10 text-brand-gold text-sm rounded-full">
                      {selectedTag}
                    </span>
                  )}
                  {searchQuery && (
                    <span className="ml-2 px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      "{searchQuery}"
                    </span>
                  )}
                </div>
                <button
                  onClick={clearFilters}
                  className="text-sm text-brand-red hover:text-brand-red/80"
                  aria-label="Clear all filters"
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Featured Post */}
            {featuredPost && !selectedCategory && !selectedTag && !searchQuery && (
              <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
                <div className="relative">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-brand-red text-white px-4 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4 mr-1" aria-hidden="true" />
                    <span>{formatDate(featuredPost.publishedAt)}</span>
                    <span className="mx-2">•</span>
                    <Clock className="h-4 w-4 mr-1" aria-hidden="true" />
                    <span>{featuredPost.readTime} min read</span>
                  </div>
                  <h2 className="text-2xl font-bold text-brand-brown mb-3">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center mb-4">
                    <img 
                      src={featuredPost.author.avatar} 
                      alt={featuredPost.author.name} 
                      className="h-10 w-10 rounded-full mr-3 object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium text-brand-brown">{featuredPost.author.name}</p>
                      <p className="text-xs text-gray-500">{featuredPost.author.role}</p>
                    </div>
                  </div>
                  <Link
                    to={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center px-4 py-2 bg-brand-red text-white rounded-lg hover:bg-brand-red/90 transition-all duration-300"
                    aria-label={`Read more about ${featuredPost.title}`}
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            )}

            {/* Loading and Error States */}
            {isLoading && <LoadingSpinner size="large" color="text-brand-red" />}
            
            {error && <ErrorMessage message={error} onRetry={() => {
              setError(null);
              setIsLoading(true);
            }} />}

            {/* No Results */}
            {!isLoading && !error && posts.length === 0 && (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-500 mb-6">
                  We couldn't find any articles matching your current filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-brand-red hover:bg-brand-red/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red"
                >
                  Clear filters
                </button>
              </div>
            )}

            {/* Blog Posts */}
            {!isLoading && !error && posts.length > 0 && (
              <div className="space-y-8">
                {posts.map((post) => (
                  <article 
                    key={post.id} 
                    className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="md:flex">
                      <div className="md:flex-shrink-0 md:w-48">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="h-48 w-full md:w-48 object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <Calendar className="h-4 w-4 mr-1" aria-hidden="true" />
                          <span>{formatDate(post.publishedAt)}</span>
                          <span className="mx-2">•</span>
                          <Clock className="h-4 w-4 mr-1" aria-hidden="true" />
                          <span>{post.readTime} min read</span>
                        </div>
                        <h2 className="text-xl font-bold text-brand-brown mb-2">
                          {post.title}
                        </h2>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <User className="h-4 w-4 text-brand-gold mr-1" aria-hidden="true" />
                            <span className="text-sm text-gray-600">{post.author.name}</span>
                          </div>
                          <Link
                            to={`/blog/${post.slug}`}
                            className="text-brand-red hover:text-brand-red/80 font-medium flex items-center"
                            aria-label={`Read more about ${post.title}`}
                          >
                            Read More
                            <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <section className="bg-brand-brown py-16 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-white/80 mb-8">
              Stay updated with our latest articles, travel tips, and exclusive offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-lg focus:ring-brand-gold focus:border-brand-gold sm:w-72"
                aria-label="Your email address"
                required
              />
              <button
                type="submit"
                className="bg-brand-gold hover:bg-brand-gold/90 text-white px-6 py-3 rounded-lg transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;