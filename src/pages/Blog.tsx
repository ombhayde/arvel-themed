
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, User, Clock, Tag, ArrowRight } from 'lucide-react';

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  cover: string;
  date: string;
  author: string;
  readTime: string;
  tags: string[];
  issueNumber: number;
};

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Rise of Serverless Architecture",
      excerpt: "How serverless functions are changing the way we build applications and scale our services.",
      cover: "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/07/tony-stark-over-an-image-of-iron-man.jpg?q=70&fit=crop&w=1140&h=&dpr=1",
      date: "May 15, 2023",
      author: "Tony Stark",
      readTime: "5 min",
      tags: ["Cloud", "Backend", "AWS"],
      issueNumber: 5
    },
    {
      id: 2,
      title: "Mastering React Hooks",
      excerpt: "A deep dive into React's most powerful feature and how to use them effectively in your projects.",
      cover: "https://sm.ign.com/t/ign_it/screenshot/default/blob_94d4.2560.jpg",
      date: "April 22, 2023",
      author: "Peter Parker",
      readTime: "8 min",
      tags: ["React", "JavaScript", "Frontend"],
      issueNumber: 4
    },
    {
      id: 3,
      title: "The Future of AI in Web Development",
      excerpt: "Exploring how artificial intelligence is transforming the way we create and maintain web applications.",
      cover: "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/02/hulk-and-bruce-banner.jpg?q=70&fit=crop&w=1140&h=&dpr=1",
      date: "March 10, 2023",
      author: "Bruce Banner",
      readTime: "7 min",
      tags: ["AI", "Innovation", "Web Dev"],
      issueNumber: 3
    },
    {
      id: 4,
      title: "Building Accessible Web Applications",
      excerpt: "Best practices for creating inclusive applications that everyone can use, regardless of ability.",
      cover: "https://static1.srcdn.com/wordpress/wp-content/uploads/2025/03/captain-america-relatives-nomad-and-james-rogers.jpg?q=70&fit=crop&w=1140&h=&dpr=1",
      date: "February 5, 2023",
      author: "Steve Rogers",
      readTime: "6 min",
      tags: ["Accessibility", "UI/UX", "HTML"],
      issueNumber: 2
    },
    {
      id: 5,
      title: "TypeScript: The Superhero JavaScript Needs",
      excerpt: "Why TypeScript has become an essential tool for modern web development and how to get started.",
      cover: "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/09/natasha-romanoff-s-black-widow-and-yelena-belova-in-the-mcu.jpg?q=70&fit=crop&w=1140&h=&dpr=1",
      date: "January 18, 2023",
      author: "Natasha Romanoff",
      readTime: "9 min",
      tags: ["TypeScript", "JavaScript", "Programming"],
      issueNumber: 1
    }
  ];
  
  // Get all unique tags
  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));
  
  // Filter posts by tag if active
  const filteredPosts = activeTag 
    ? blogPosts.filter(post => post.tags.includes(activeTag))
    : blogPosts;
  
  const postsPerPage = 4;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  
  const displayedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage, 
    currentPage * postsPerPage
  );
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-marvel-blue py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="animate-pulse-grow inline-block bg-marvel-red px-8 py-2 transform -rotate-2 mb-6">
                <h1 className="font-marvel text-white text-3xl">MARVEL SERIES</h1>
              </div>
              <h2 className="font-comic text-6xl mb-8 text-white">CODE CHRONICLES</h2>
              <div className="speech-bubble relative inline-block animate-float">
                <p className="font-comic text-black text-xl">The latest issues and adventures!</p>
              </div>
            </div>
          </div>
          
          {/* Background Animation */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-marvel-blue via-marvel-blue to-marvel-black opacity-80 animate-hero-bg"></div>
          
          {/* Comic Dots Pattern */}
          <div className="absolute inset-0 bg-comic-dot-pattern opacity-30"></div>
          
          {/* Neon Elements */}
          <div className="absolute top-0 left-1/4 h-40 w-1 bg-marvel-red blur-sm animate-pulse-grow"></div>
          <div className="absolute bottom-0 right-1/4 h-40 w-1 bg-marvel-gold blur-sm animate-pulse-grow delay-150"></div>
        </section>
        
        {/* Blog Posts Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main Content */}
              <div className="w-full lg:w-2/3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {displayedPosts.map(post => (
                    <div key={post.id} className="comic-panel group hover:scale-[1.02] transition-transform duration-300">
                      {/* Issue Number */}
                      <div className="absolute -top-4 -right-4 bg-marvel-red text-white font-marvel w-12 h-12 rounded-full flex items-center justify-center transform rotate-12 z-10 border-2 border-black">
                        #{post.issueNumber}
                      </div>
                      
                      {/* Cover Image */}
                      <div className="relative h-48 -mx-4 -mt-4 mb-4 overflow-hidden">
                        <img 
                          src={post.cover} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <div className="flex items-center gap-2 text-white text-sm">
                            <Calendar size={14} />
                            <span>{post.date}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <h3 className="font-marvel text-2xl mb-2 group-hover:text-marvel-red transition-colors duration-300">
                        {post.title}
                      </h3>
                      
                      <p className="text-marvel-gray mb-4 text-sm">{post.excerpt}</p>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2 text-sm text-marvel-gray">
                          <User size={14} />
                          <span>{post.author}</span>
                          <span className="mx-1">•</span>
                          <Clock size={14} />
                          <span>{post.readTime}</span>
                        </div>
                        
                        <button className="text-marvel-red font-comic text-sm flex items-center gap-1 hover:underline">
                          <span>Read</span>
                          <ArrowRight size={14} />
                        </button>
                      </div>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {post.tags.map(tag => (
                          <span 
                            key={tag} 
                            className="text-xs px-2 py-1 bg-marvel-blue/10 text-marvel-blue rounded-full cursor-pointer hover:bg-marvel-blue hover:text-white transition-colors"
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveTag(tag);
                              setCurrentPage(1);
                            }}
                          >
                            <Tag size={10} className="inline mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center mt-12">
                    <div className="flex gap-2">
                      {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentPage(index + 1)}
                          className={`comic-button ${
                            currentPage === index + 1 
                              ? 'bg-marvel-red' 
                              : 'bg-marvel-gray'
                          } w-10 h-10 flex items-center justify-center p-0`}
                        >
                          {index + 1}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Sidebar */}
              <div className="w-full lg:w-1/3">
                {/* Tags Cloud */}
                <div className="comic-panel bg-marvel-black/5 mb-8">
                  <h3 className="font-marvel text-2xl mb-4 text-marvel-black">POWER TAGS</h3>
                  
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => {
                        setActiveTag(null);
                        setCurrentPage(1);
                      }}
                      className={`px-3 py-1 rounded-full text-sm ${
                        activeTag === null 
                          ? 'bg-marvel-red text-white' 
                          : 'bg-marvel-gray/20 text-marvel-gray hover:bg-marvel-gray/40'
                      }`}
                    >
                      All
                    </button>
                    {allTags.map(tag => (
                      <button
                        key={tag}
                        onClick={() => {
                          setActiveTag(tag);
                          setCurrentPage(1);
                        }}
                        className={`px-3 py-1 rounded-full text-sm ${
                          activeTag === tag 
                            ? 'bg-marvel-red text-white' 
                            : 'bg-marvel-gray/20 text-marvel-gray hover:bg-marvel-gray/40'
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Spotlight Issue */}
                <div className="comic-panel relative overflow-hidden">
                  <div className="absolute -top-4 -right-4 bg-marvel-gold text-black font-comic text-xs px-3 py-1 transform rotate-12 z-10 border border-black">
                    FEATURED ISSUE
                  </div>
                  
                  <div className="relative h-40 -mx-4 -mt-4 mb-4">
                    <img 
                      src="https://cdn.britannica.com/60/182360-050-CD8878D6/Avengers-Age-of-Ultron-Joss-Whedon.jpg?w=300" 
                      alt="Featured Post" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center gap-2 text-white text-sm">
                        <Calendar size={14} />
                        <span>Special Edition • June 2023</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="font-marvel text-2xl mb-2 text-marvel-red">
                    The Ultimate Guide to Web Animation
                  </h3>
                  
                  <p className="text-marvel-gray mb-4 text-sm">
                    Everything you need to know about creating stunning web animations that wow users and enhance UX.
                  </p>
                  
                  <button className="text-white bg-marvel-red font-comic text-sm px-4 py-2 rounded flex items-center gap-2 hover:bg-marvel-red/90 transition-colors">
                    <span>Read Special Issue</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-12 bg-marvel-gray text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="font-marvel text-3xl mb-4">JOIN S.H.I.E.L.D. INTELLIGENCE</h3>
              <p className="mb-6">Subscribe to receive secret intel about the latest tech trends and coding techniques!</p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 rounded border-2 border-black bg-white text-black focus:outline-none"
                />
                <button className="comic-button bg-marvel-red">
                  SUBSCRIBE NOW
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
