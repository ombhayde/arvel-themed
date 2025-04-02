
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Eye, Github, ExternalLink, Code, Cpu, Globe } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  demoLink: string;
  codeLink: string;
  technologies: string[];
  category: string;
  details: string;
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  
  // Project data
  const projects: Project[] = [
    {
      id: 1,
      title: "INFINITY WEB",
      description: "A responsive e-commerce platform with advanced filtering and real-time inventory management.",
      image: "https://source.unsplash.com/random/800x600?ecommerce",
      demoLink: "#",
      codeLink: "#",
      technologies: ["React", "Node.js", "MongoDB", "Redux"],
      category: "Web Dev",
      details: "Built from scratch using the MERN stack, this project features user authentication, payment processing through Stripe, and a responsive admin dashboard. Implemented advanced state management using Redux and optimized performance for mobile devices."
    },
    {
      id: 2,
      title: "MIND STONE ANALYTICS",
      description: "AI-powered data visualization dashboard for business metrics and performance tracking.",
      image: "https://source.unsplash.com/random/800x600?dashboard",
      demoLink: "#",
      codeLink: "#",
      technologies: ["Python", "TensorFlow", "D3.js", "Flask"],
      category: "AI",
      details: "Using advanced machine learning algorithms to predict business trends and visualize complex data sets. Features include anomaly detection, custom report generation, and integration with popular data sources. The backend uses Flask with efficient data processing pipelines."
    },
    {
      id: 3,
      title: "QUANTUM LEDGER",
      description: "Decentralized application for transparent supply chain tracking and verification.",
      image: "https://source.unsplash.com/random/800x600?blockchain",
      demoLink: "#",
      codeLink: "#",
      technologies: ["Solidity", "Ethereum", "Web3.js", "React"],
      category: "Blockchain",
      details: "Built on Ethereum, this dApp provides immutable records of product journeys from manufacturer to consumer. Smart contracts ensure automatic payments and verification of goods. Features include QR code scanning for authenticity checks and a user-friendly tracking interface."
    },
    {
      id: 4,
      title: "SUPERHERO CMS",
      description: "Content management system with drag-and-drop interface and real-time collaboration.",
      image: "https://source.unsplash.com/random/800x600?cms",
      demoLink: "#",
      codeLink: "#",
      technologies: ["Vue.js", "GraphQL", "PostgreSQL", "Docker"],
      category: "Web Dev",
      details: "A modern CMS built with Vue.js and GraphQL, featuring real-time collaboration, version control, and a headless architecture. The system includes user roles, workflow management, and a powerful API for content delivery to multiple platforms."
    },
    {
      id: 5,
      title: "JARVIS ASSISTANT",
      description: "Voice-controlled AI assistant for developer productivity and code generation.",
      image: "https://source.unsplash.com/random/800x600?ai",
      demoLink: "#",
      codeLink: "#",
      technologies: ["Python", "OpenAI", "FastAPI", "React"],
      category: "AI",
      details: "Inspired by Iron Man's JARVIS, this AI assistant helps developers write code, debug issues, and answer programming questions. Uses natural language processing to understand context and generate relevant code snippets across multiple programming languages."
    },
    {
      id: 6,
      title: "COSMIC CHAIN",
      description: "NFT marketplace for digital art with creator royalties and auction functionality.",
      image: "https://source.unsplash.com/random/800x600?nft",
      demoLink: "#",
      codeLink: "#",
      technologies: ["React", "Solidity", "IPFS", "Ethers.js"],
      category: "Blockchain",
      details: "A complete NFT marketplace supporting ERC-721 and ERC-1155 tokens with integrated wallet connection. Features include art auctions, creator royalties on secondary sales, and decentralized storage via IPFS for artwork files."
    }
  ];
  
  const categories = ['All', 'Web Dev', 'AI', 'Blockchain'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
    
  const toggleCard = (id: number) => {
    if (flippedCard === id) {
      setFlippedCard(null);
    } else {
      setFlippedCard(id);
    }
  };
  
  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'Web Dev':
        return <Globe className="text-marvel-blue" />;
      case 'AI':
        return <Cpu className="text-marvel-red" />;
      case 'Blockchain':
        return <Code className="text-marvel-gold" />;
      default:
        return <Code className="text-marvel-blue" />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-marvel-black text-white py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="animate-pulse-grow inline-block bg-marvel-red px-8 py-2 transform -rotate-2 mb-6">
                <h1 className="font-marvel text-white text-3xl">CLASSIFIED</h1>
              </div>
              <h2 className="font-comic text-6xl mb-8">SECRET MISSIONS</h2>
              <div className="speech-bubble relative inline-block animate-float">
                <p className="font-comic text-black text-xl">The Code Avenger's completed operations</p>
              </div>
            </div>
          </div>
          
          {/* Comic Dot Background */}
          <div className="absolute inset-0 bg-comic-dot-pattern opacity-10"></div>
          
          {/* Neon Animation Elements */}
          <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-transparent via-marvel-red to-transparent neon-glow"></div>
          <div className="absolute left-0 right-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-marvel-blue to-transparent neon-glow"></div>
        </section>
        
        {/* Filter Categories */}
        <section className="py-10 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map(category => (
                <button 
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`comic-button ${
                    activeFilter === category 
                      ? 'bg-marvel-red neon-glow-text' 
                      : 'bg-marvel-gray hover:bg-marvel-blue'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div key={project.id} className="relative perspective">
                  <div 
                    className={`relative transition-all duration-500 preserve-3d cursor-pointer ${
                      flippedCard === project.id ? 'rotate-y-180' : ''
                    }`}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Front of Card */}
                    <div 
                      className="comic-panel h-full backface-hidden"
                      onClick={() => toggleCard(project.id)}
                    >
                      {/* Project Category Badge */}
                      <div className="absolute top-4 right-4 bg-white z-10 rounded-full p-2 border-2 border-black">
                        {getCategoryIcon(project.category)}
                      </div>
                      
                      {/* Project Image */}
                      <div className="h-48 mb-4 overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                      
                      {/* Project Info */}
                      <div className="neon-pulse mb-2" style={{filter: `drop-shadow(0 0 3px ${project.category === 'AI' ? '#ED1D24' : project.category === 'Blockchain' ? '#F0E6D2' : '#518CCA'})`}}>
                        <h3 className="font-marvel text-2xl">{project.title}</h3>
                      </div>
                      <p className="mb-4 text-marvel-black/80">{project.description}</p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map(tech => (
                          <span key={tech} className="text-xs px-3 py-1 bg-marvel-black/5 text-marvel-black rounded-full">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="text-xs px-3 py-1 bg-marvel-black/5 text-marvel-black rounded-full">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                      
                      <div className="text-center mt-4">
                        <p className="font-comic text-marvel-red text-sm">Click for mission details</p>
                      </div>
                    </div>
                    
                    {/* Back of Card */}
                    <div 
                      className="comic-panel absolute inset-0 backface-hidden rotate-y-180 bg-marvel-black text-white"
                      onClick={() => toggleCard(project.id)}
                      style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                    >
                      <div className="h-full flex flex-col">
                        <h3 className="font-marvel text-2xl mb-3 text-marvel-red">{project.title}</h3>
                        <h4 className="font-comic text-lg mb-4 text-marvel-gold">Mission Details</h4>
                        
                        <p className="mb-6 flex-grow">{project.details}</p>
                        
                        <div className="flex justify-center gap-4 mt-auto">
                          <a 
                            href={project.demoLink} 
                            className="flex items-center gap-1 bg-marvel-blue px-3 py-2 rounded-md hover:bg-marvel-blue/80"
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            <Eye size={16} />
                            <span>Demo</span>
                          </a>
                          <a 
                            href={project.codeLink} 
                            className="flex items-center gap-1 bg-marvel-gray px-3 py-2 rounded-md hover:bg-marvel-gray/80"
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            <Github size={16} />
                            <span>Code</span>
                          </a>
                        </div>
                        
                        <div className="text-center mt-4">
                          <p className="font-comic text-sm text-marvel-silver">Click to flip back</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
