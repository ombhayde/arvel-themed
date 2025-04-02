import React, { useState } from 'react';
import { Code, Link, FileText } from 'lucide-react';

type Mission = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
  categories: string[];  // Changed to an array to support multiple categories
};

const Missions = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const missions: Mission[] = [
    {
      title: "Mahakumbh AI Stampede Detection",
      description: "An AI-powered web application for real-time crowd analysis and early stampede detection using computer vision.",
      technologies: ["React", "TensorFlow.js", "OpenCV", "Flask"],
      image: "/images/maha.jpeg", 
      link: "https://github.com/ombhayde/Mahakumbh",
      categories: ["Web Dev", "AI"]  // Now belongs to both Web Dev and AI
    },
    {
      title: "Wedease: The Wedding Portal",
      description: "An all-in-one Indian wedding marketplace for booking venues, catering, and services with real-location features.",
      technologies: ["React", "Node.js", "Postgres", "Stripe","Google Maps API"],
      image: "/images/wed.jpg",
      link: "https://github.com/ombhayde/WedEase",
      categories: ["Web Dev"]
    },
    {
      title: "AI-Powered Farming Portal",
      description: "A mobile AI-driven portal that diagnoses crop and livestock diseases, offering smart treatment advice.",
      technologies: ["TensorFlow", "Python", "Flask", "Mobile AI Integration"],
      image: "/images/crop.png",
      link: "https://github.com/ombhayde/crop_disease_detection",
      categories: ["AI"]
    },
    {
      title: "DSurv: The Blockchain Sentinel",
      description: "A crypto token transfer platform leveraging Internet Identity for authentication, featuring a faucet, transfer UI, and balance check.",
      technologies: ["Motoko", "Internet Computer", "React", "Express","MongoDB"],
      image: "/images/open.png",
      link: "https://www.linkedin.com/posts/om-bhayde-66a643253_blockchain-crypto-webdevelopment-activity-7224011700901994496-OUJ7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6Qk_IBavu7Kz4fsLor-DcA3GdwFPdI4Cg",
      categories: ["Blockchain"]
    }
  ];

  const categories = ['All', 'Web Dev', 'AI', 'Blockchain'];

  const filteredMissions = activeFilter === 'All' 
    ? missions 
    : missions.filter(mission => mission.categories.includes(activeFilter));

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-comic text-5xl text-marvel-black inline-block relative">
            SECRET MISSIONS
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-marvel-red"></div>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg">
            Top-secret projects successfully completed by The Code Avenger
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button 
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`comic-button ${
                activeFilter === category 
                  ? 'bg-marvel-red' 
                  : 'bg-marvel-gray hover:bg-marvel-blue'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMissions.map((mission) => (
            <div 
              key={mission.title}
              className="comic-panel group hover:scale-105 transition-transform duration-300 overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-48 mb-4 overflow-hidden">
                <img 
                  src={mission.image} 
                  alt={mission.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex space-x-2">
                    <a href={mission.link} className="p-2 bg-marvel-red rounded-full text-white">
                      <Link size={20} />
                    </a>
                    <a href="#" className="p-2 bg-marvel-blue rounded-full text-white">
                      <FileText size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Title */}
              <h3 className="font-marvel text-2xl mb-2 text-marvel-black group-hover:text-marvel-red transition-colors">
                {mission.title}
              </h3>

              {/* Project Description */}
              <p className="mb-4 text-marvel-gray text-sm">
                {mission.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {mission.technologies.map(tech => (
                  <span key={tech} className="text-xs px-3 py-1 bg-marvel-blue/10 text-marvel-blue rounded-full flex items-center">
                    <Code size={12} className="mr-1" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Missions;
