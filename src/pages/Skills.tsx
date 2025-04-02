
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Code, Server, Database, Cpu, Figma, Brain, Zap, Shield, Eye, Layers } from 'lucide-react';

type SkillCategory = {
  name: string;
  icon: React.ReactNode;
  color: string;
  skills: Skill[];
};

type Skill = {
  name: string;
  level: number;
  color: string;
  icon: React.ReactNode;
  description: string;
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Frontend');
  
  const skillCategories: SkillCategory[] = [
    {
      name: 'Frontend',
      icon: <Code size={24} />,
      color: 'bg-marvel-red',
      skills: [
        { 
          name: 'React.js', 
          level: 92, 
          color: 'bg-blue-500', 
          icon: <Zap size={20} />,
          description: 'Building dynamic user interfaces with functional components and hooks'
        },
        { 
          name: 'TypeScript', 
          level: 88, 
          color: 'bg-blue-600', 
          icon: <Shield size={20} />,
          description: 'Strong static typing to eliminate common bugs and improve code quality'
        },
        { 
          name: 'Tailwind CSS', 
          level: 90, 
          color: 'bg-teal-500', 
          icon: <Layers size={20} />,
          description: 'Rapidly building responsive and custom user interfaces'
        },
        { 
          name: 'Next.js', 
          level: 86, 
          color: 'bg-black', 
          icon: <Zap size={20} />,
          description: 'Server-side rendering and static site generation for optimal performance'
        },
        { 
          name: 'Vue.js', 
          level: 80, 
          color: 'bg-green-500', 
          icon: <Eye size={20} />,
          description: 'Creating reactive components with the progressive JavaScript framework'
        }
      ]
    },
    {
      name: 'Backend',
      icon: <Server size={24} />,
      color: 'bg-marvel-blue',
      skills: [
        { 
          name: 'Node.js', 
          level: 85, 
          color: 'bg-green-600', 
          icon: <Zap size={20} />,
          description: 'Building scalable server-side applications with JavaScript'
        },
        { 
          name: 'Express.js', 
          level: 88, 
          color: 'bg-gray-600', 
          icon: <Zap size={20} />,
          description: 'Creating robust APIs and handling HTTP requests efficiently'
        },
        { 
          name: 'Python', 
          level: 80, 
          color: 'bg-yellow-600', 
          icon: <Code size={20} />,
          description: 'Data processing, automation, and backend development'
        },
        { 
          name: 'GraphQL', 
          level: 75, 
          color: 'bg-pink-600', 
          icon: <Database size={20} />,
          description: 'Building efficient APIs with precise data fetching'
        },
        { 
          name: 'Docker', 
          level: 70, 
          color: 'bg-blue-700', 
          icon: <Shield size={20} />,
          description: 'Containerizing applications for consistent deployment environments'
        }
      ]
    },
    {
      name: 'Database',
      icon: <Database size={24} />,
      color: 'bg-green-600',
      skills: [
        { 
          name: 'MongoDB', 
          level: 85, 
          color: 'bg-green-500', 
          icon: <Database size={20} />,
          description: 'NoSQL database for flexible, schema-less data storage'
        },
        { 
          name: 'PostgreSQL', 
          level: 80, 
          color: 'bg-blue-800', 
          icon: <Database size={20} />,
          description: 'Powerful relational database with advanced features'
        },
        { 
          name: 'Redis', 
          level: 75, 
          color: 'bg-red-600', 
          icon: <Zap size={20} />,
          description: 'In-memory data structure store for caching and real-time operations'
        },
        { 
          name: 'Firebase', 
          level: 85, 
          color: 'bg-yellow-500', 
          icon: <Database size={20} />,
          description: 'Real-time database and backend-as-a-service platform'
        }
      ]
    },
    {
      name: 'DevOps',
      icon: <Cpu size={24} />,
      color: 'bg-purple-600',
      skills: [
        { 
          name: 'AWS', 
          level: 78, 
          color: 'bg-yellow-600', 
          icon: <Shield size={20} />,
          description: 'Cloud infrastructure and serverless application deployment'
        },
        { 
          name: 'CI/CD', 
          level: 82, 
          color: 'bg-blue-600', 
          icon: <Zap size={20} />,
          description: 'Automated testing and deployment pipelines'
        },
        { 
          name: 'Kubernetes', 
          level: 70, 
          color: 'bg-blue-500', 
          icon: <Shield size={20} />,
          description: 'Container orchestration for complex microservice architectures'
        },
        { 
          name: 'Terraform', 
          level: 75, 
          color: 'bg-purple-700', 
          icon: <Layers size={20} />,
          description: 'Infrastructure as code for consistent cloud resource provisioning'
        }
      ]
    },
    {
      name: 'Design',
      icon: <Figma size={24} />,
      color: 'bg-pink-600',
      skills: [
        { 
          name: 'Figma', 
          level: 85, 
          color: 'bg-black', 
          icon: <Figma size={20} />,
          description: 'Collaborative interface design and prototyping'
        },
        { 
          name: 'UI/UX', 
          level: 80, 
          color: 'bg-indigo-600', 
          icon: <Eye size={20} />,
          description: 'Creating intuitive, accessible, and engaging user experiences'
        },
        { 
          name: 'Responsive Design', 
          level: 90, 
          color: 'bg-teal-600', 
          icon: <Layers size={20} />,
          description: 'Adapting interfaces for all device sizes and screen types'
        },
        { 
          name: 'Animation', 
          level: 75, 
          color: 'bg-pink-500', 
          icon: <Zap size={20} />,
          description: 'Creating engaging motion designs and microinteractions'
        }
      ]
    },
    {
      name: 'AI/ML',
      icon: <Brain size={24} />,
      color: 'bg-yellow-600',
      skills: [
        { 
          name: 'TensorFlow', 
          level: 70, 
          color: 'bg-orange-600', 
          icon: <Brain size={20} />,
          description: 'Building and training neural networks for computer vision and NLP'
        },
        { 
          name: 'OpenAI APIs', 
          level: 85, 
          color: 'bg-green-600', 
          icon: <Brain size={20} />,
          description: 'Integrating AI capabilities into applications'
        },
        { 
          name: 'Python ML', 
          level: 75, 
          color: 'bg-blue-600', 
          icon: <Code size={20} />,
          description: 'Data analysis and machine learning with Python libraries'
        },
        { 
          name: 'Computer Vision', 
          level: 65, 
          color: 'bg-purple-600', 
          icon: <Eye size={20} />,
          description: 'Image recognition and processing algorithms'
        }
      ]
    }
  ];
  
  const currentCategory = skillCategories.find(category => category.name === activeCategory) || skillCategories[0];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-marvel-black text-white py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="animate-pulse-grow inline-block bg-marvel-red px-8 py-2 transform -rotate-2 mb-6">
                <h1 className="font-marvel text-white text-3xl">TOP SECRET</h1>
              </div>
              <h2 className="font-comic text-6xl mb-8">SUPERPOWERS</h2>
              <div className="speech-bubble relative inline-block animate-float">
                <p className="font-comic text-black text-xl">The Code Avenger's special abilities!</p>
              </div>
            </div>
          </div>
          
          {/* Neon Animation Elements */}
          <div className="absolute -top-5 left-10 right-10 h-10 blur-xl bg-marvel-red/20 animate-pulse"></div>
          <div className="absolute -bottom-5 left-10 right-10 h-10 blur-xl bg-marvel-blue/20 animate-pulse"></div>
          
          {/* Power Sparks */}
          <div className="absolute top-1/4 left-10 h-2 w-2 rounded-full bg-marvel-red neon-spark"></div>
          <div className="absolute top-1/3 right-20 h-3 w-3 rounded-full bg-marvel-blue neon-spark delay-100"></div>
          <div className="absolute bottom-1/4 left-20 h-2 w-2 rounded-full bg-marvel-gold neon-spark delay-200"></div>
          <div className="absolute bottom-1/3 right-10 h-3 w-3 rounded-full bg-marvel-red neon-spark delay-300"></div>
        </section>
        
        {/* Skills Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {skillCategories.map(category => (
                <button 
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`flex items-center gap-2 comic-button ${
                    activeCategory === category.name 
                      ? category.color
                      : 'bg-marvel-gray hover:bg-marvel-gray/80'
                  }`}
                >
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
            
            {/* Skills Power Meters */}
            <div className="max-w-4xl mx-auto">
              <div className="comic-panel bg-marvel-silver/10 mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-full ${currentCategory.color}`}>
                    {currentCategory.icon}
                  </div>
                  <h3 className="font-marvel text-3xl text-marvel-black">{currentCategory.name} POWERS</h3>
                </div>
                
                <div className="grid gap-8">
                  {currentCategory.skills.map((skill, index) => (
                    <div 
                      key={skill.name}
                      className="animate-slide-in-left"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className={`p-2 rounded ${skill.color} text-white`}>
                            {skill.icon}
                          </div>
                          <h4 className="font-comic text-lg">{skill.name}</h4>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="comic-panel py-1 px-3 bg-marvel-black text-white transform rotate-2">
                            <span className="font-marvel">{skill.level}/100</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="relative w-full h-10 bg-marvel-gray/20 rounded-full overflow-hidden">
                        <div 
                          className={`${skill.color} h-full neon-pulse-bar rounded-full flex items-center justify-end pr-4 text-white font-bold`}
                          style={{ 
                            width: `${skill.level}%`,
                            boxShadow: `0 0 10px ${skill.color.replace('bg-', '')}`
                          }}
                        >
                          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-sm max-w-[70%] truncate text-white">
                            {skill.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="comic-panel bg-marvel-blue/10">
                  <h3 className="font-marvel text-2xl mb-4">POWER PROGRESSION</h3>
                  <p className="text-marvel-black">The Code Avenger continuously enhances abilities through rigorous training and real-world missions. Skill levels increase with each challenge overcome and new technology mastered.</p>
                  
                  <div className="mt-6">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span>Novice</span>
                      <span>Expert</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-full" style={{width: '85%'}}></div>
                    </div>
                    <div className="text-right text-sm mt-1">Current Level: Superhero</div>
                  </div>
                </div>
                
                <div className="comic-panel bg-marvel-red/10">
                  <h3 className="font-marvel text-2xl mb-4">SPECIAL ABILITIES</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Zap size={20} className="text-marvel-red mt-1 flex-shrink-0" />
                      <span>Ultra-fast debugging reflexes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield size={20} className="text-marvel-blue mt-1 flex-shrink-0" />
                      <span>Defensive coding to prevent vulnerabilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Brain size={20} className="text-purple-600 mt-1 flex-shrink-0" />
                      <span>Algorithm optimization sixth sense</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Eye size={20} className="text-marvel-gold mt-1 flex-shrink-0" />
                      <span>UI/UX x-ray vision for spotting design flaws</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Skills;
