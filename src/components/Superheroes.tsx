
import React from 'react';
import { Zap, Shield, Eye, Brain, Flame, Rocket } from 'lucide-react';

type Superhero = {
  name: string;
  alias: string;
  power: string;
  color: string;
  icon: React.ReactNode;
  position: 'left' | 'right';
};

const Superheroes = () => {
  const heroes: Superhero[] = [
    {
      name: "Iron Developer",
      alias: "Tony Code",
      power: "Building incredible UIs with React",
      color: "bg-marvel-red",
      icon: <Rocket size={32} />,
      position: "left"
    },
    {
      name: "Captain Web",
      alias: "Steve Responsive",
      power: "Defending against browser incompatibilities",
      color: "bg-marvel-blue",
      icon: <Shield size={32} />,
      position: "right"
    },
    {
      name: "Thor: God of APIs",
      alias: "Thor RESTful",
      power: "Wielding the mighty power of backend integration",
      color: "bg-marvel-gold",
      icon: <Zap size={32} />,
      position: "left"
    },
    {
      name: "Code Widow",
      alias: "Natasha Debugger",
      power: "Finding and eliminating bugs with deadly precision",
      color: "bg-black",
      icon: <Eye size={32} />,
      position: "right"
    },
    {
      name: "The Incredible Function",
      alias: "Bruce Coder",
      power: "Transforms into massive computational power when angry",
      color: "bg-green-600",
      icon: <Brain size={32} />,
      position: "left"
    },
    {
      name: "Doctor Strange Code",
      alias: "Stephen Logic",
      power: "Mastering the mystic arts of algorithm optimization",
      color: "bg-purple-600",
      icon: <Flame size={32} />,
      position: "right"
    }
  ];

  return (
    <section className="py-20 bg-marvel-black relative overflow-hidden">
      {/* Background cosmic effect */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxyYWRpYWxHcmFkaWVudCBpZD0iYSIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iNTAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjM2E0MDlkIiBzdG9wLW9wYWNpdHk9Ii4yIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMTExIiBzdG9wLW9wYWNpdHk9Ii41Ii8+PC9yYWRpYWxHcmFkaWVudD48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNhKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')] opacity-70"></div>
      
      {/* Stars effect */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white neon-spark"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's'
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-14">
          <h2 className="font-comic text-5xl text-white inline-block relative">
            AVENGERS ASSEMBLE
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-marvel-red neon-pulse"></div>
          </h2>
          <p className="mt-4 text-marvel-gold font-comic text-xl">Every great developer has multiple superpowers—here are mine!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {heroes.map((hero, index) => (
            <div 
              key={hero.name}
              className={`flex ${hero.position === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center comic-panel bg-marvel-black/80 border-2 border-gray-800 transform hover:scale-105 transition-transform duration-300`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Hero Icon/Avatar */}
              <div className={`${hero.color} p-6 rounded-full m-4 neon-glow text-white flex-shrink-0 transform rotate-3`}>
                {hero.icon}
              </div>
              
              {/* Hero Info */}
              <div className="p-4 flex-grow">
                <h3 className="font-marvel text-2xl text-white neon-glow-text">{hero.name}</h3>
                <p className="text-gray-300 italic mb-2">Power Mode: {hero.alias}</p>
                <div className="speech-bubble bg-white/90 mt-3 transform -rotate-2">
                  <p className="font-comic text-sm">{hero.power}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Superheroes;
