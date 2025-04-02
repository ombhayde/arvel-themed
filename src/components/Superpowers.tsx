
import React from 'react';
import { Code, Zap, FileText, User } from 'lucide-react';

type PowerMeter = {
  skill: string;
  level: number;
  icon: React.ReactNode;
  color: string;
};

const Superpowers = () => {
  const powers: PowerMeter[] = [
    { skill: "Web-Slinging (Full-Stack Development - MERN, PERN)", level: 90, icon: <Code size={24} />, color: "bg-blue-500" },
    { skill: "Shield Mastery (DSA & Algorithm Optimisation)", level: 85, icon: <FileText size={24} />, color: "bg-marvel-blue" },
    { skill: "Thunder Control (Blockchain & Cryptography)", level: 80, icon: <Zap size={24} />, color: "bg-green-500" },
    { skill: "Mind Reading (UX & AI Integration)", level: 75, icon: <User size={24} />, color: "bg-purple-500" },
    { skill: "Iron Suit (System & Web Security, Browser Exploitation Prevention)", level: 70, icon: <Code size={24} />, color: "bg-marvel-red" },
    { skill: "Time Control (Project Management)", level: 85, icon: <FileText size={24} />, color: "bg-yellow-500" },
  ];

  return (
    <section className="py-20 bg-marvel-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-comic text-5xl text-white inline-block relative">
            SUPERPOWERS
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-marvel-red"></div>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {powers.map((power, index) => (
            <div 
              key={power.skill}
              className="comic-panel bg-marvel-gray/20 animate-slide-in-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-3">
                <div className={`p-2 rounded mr-3 ${power.color}`}>{power.icon}</div>
                <h3 className="font-marvel text-xl">{power.skill}</h3>
              </div>
              
              <div className="w-full bg-marvel-gray/30 rounded-full h-6 mb-2">
                <div 
                  className={`${power.color} h-6 rounded-full animate-pulse-grow`}
                  style={{ width: `${power.level}%` }}
                >
                  <span className="flex justify-center font-bold text-white">
                    {power.level}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Superpowers;
