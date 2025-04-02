
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Eye, Github, ExternalLink, Code, Cpu, Globe } from 'lucide-react';
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  
  
  // Project data
  const projects: Project[] = [
    {
      id: 1,
      title: "Mahakumbh AI Stampede Detection",
      description: "An AI-powered web application for real-time crowd analysis and early stampede detection using computer vision.",
      image: "/images/maha.jpeg",
      demoLink: "#",
      codeLink: "https://github.com/ombhayde/Mahakumbh",
      technologies: ["React", "TensorFlow.js", "OpenCV", "Flask"],
      category: "AI",
      details: "Utilizes AI-powered computer vision for crowd density estimation and real-time alert systems to prevent stampedes."
    },
    {
      id: 2,
      title: "Wedease: The Wedding Portal",
      description: "An all-in-one Indian wedding marketplace for booking venues, catering, and services with real-location features.",
      image: "/images/wed.jpg",
      demoLink: "#",
      codeLink: "https://github.com/ombhayde/WedEase",
      technologies: ["React", "Node.js", "Postgres", "Stripe", "Google Maps API"],
      category: "Web Dev",
      details: "Integrated real-time location services, vendor onboarding, and payment solutions for seamless wedding planning."
    },
    {
      id: 3,
      title: "AI-Powered Farming Portal",
      description: "A mobile AI-driven portal that diagnoses crop and livestock diseases, offering smart treatment advice.",
      image: "/images/crop.png",
      demoLink: "#",
      codeLink: "https://github.com/ombhayde/crop_disease_detection",
      technologies: ["TensorFlow", "Python", "Flask", "Mobile AI Integration"],
      category: "AI",
      details: "Uses AI models to detect diseases in crops and livestock through image analysis and provides recommended treatments."
    },
    {
      id: 4,
      title: "DSurv: The Blockchain Sentinel",
      description: "A crypto token transfer platform leveraging Internet Identity for authentication, featuring a faucet, transfer UI, and balance check.",
      image: "/images/open.png",
      demoLink: "#",
      codeLink: "https://www.linkedin.com/posts/om-bhayde-66a643253_blockchain-crypto-webdevelopment-activity-7224011700901994496-OUJ7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6Qk_IBavu7Kz4fsLor-DcA3GdwFPdI4Cg",
      technologies: ["Motoko", "Internet Computer", "React", "Express", "MongoDB"],
      category: "Blockchain",
      details: "Secure and decentralized crypto transactions using the Internet Computer blockchain, featuring an intuitive UI."
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
  const handleDemoClick = (demoLink: string) => {
    if (demoLink === "#") {
      navigate("/notfound"); // Redirect to NotFound.tsx
    } else {
      window.open(demoLink, "_blank", "noopener,noreferrer");
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
                            onClick={(e) => {
                              e.preventDefault(); // Prevent default anchor behavior
                              handleDemoClick(project.demoLink);
                            }} 
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
