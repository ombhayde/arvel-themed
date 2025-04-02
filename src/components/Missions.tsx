
import React, { useState } from 'react';
import { Code, Link, FileText } from 'lucide-react';

type Mission = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
  category: string;
};

const Missions = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const missions: Mission[] = [
    {
      title: "The Web Crawler",
      description: "A responsive e-commerce website with user authentication and payment processing capabilities.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://source.unsplash.com/photo-1531297484001-80022131f5a1",
      link: "#",
      category: "Web Dev"
    },
    {
      title: "Mind Stone Analytics",
      description: "Real-time data visualization dashboard for monitoring business metrics and performance indicators.",
      technologies: ["Vue.js", "D3.js", "Firebase", "Google Analytics"],
      image: "https://source.unsplash.com/photo-1605810230434-7631ac76ec81",
      link: "#",
      category: "AI"
    },
    {
      title: "Quantum Realm Explorer",
      description: "Virtual reality application showcasing interactive 3D models of quantum physics concepts.",
      technologies: ["Unity", "C#", "Oculus SDK", "WebXR"],
      image: "https://source.unsplash.com/photo-1485827404703-89b55fcc595e",
      link: "#",
      category: "Blockchain"
    }
  ];

  const categories = ['All', 'Web Dev', 'AI', 'Blockchain'];
  const filteredMissions = activeFilter === 'All' 
    ? missions 
    : missions.filter(mission => mission.category === activeFilter);

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
          {filteredMissions.map((mission, index) => (
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
