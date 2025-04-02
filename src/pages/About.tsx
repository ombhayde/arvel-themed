
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, Zap, Star, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-marvel-blue/10 py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="animate-pulse-grow inline-block bg-marvel-red px-8 py-2 transform -rotate-2 mb-6">
                <h1 className="font-marvel text-white text-3xl">SECRET FILES</h1>
              </div>
              <h2 className="font-comic text-6xl mb-8 text-marvel-black">ORIGIN STORY</h2>
              <div className="speech-bubble relative inline-block animate-float">
                <p className="font-comic text-xl">The full classified backstory of The Code Avenger!</p>
              </div>
            </div>
          </div>
          
          {/* Animated Background Elements */}
          <div className="absolute top-20 left-10 text-marvel-red/20 animate-float">
            <Shield size={80} strokeWidth={1} />
          </div>
          <div className="absolute bottom-20 right-10 text-marvel-blue/20 animate-float delay-150">
            <Zap size={80} strokeWidth={1} />
          </div>
        </section>
        
        {/* Timeline Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Timeline Item 1 */}
              <div className="flex flex-col md:flex-row items-start mb-20 relative">
                <div className="absolute left-[10px] md:left-1/2 h-full w-1 bg-marvel-red transform md:translate-x-[-0.5px] hidden md:block"></div>
                <div className="absolute left-[10px] md:left-1/2 top-0 w-5 h-5 rounded-full bg-marvel-red border-4 border-white transform md:translate-x-[-10px] z-10"></div>
                
                {/* Content for right side */}
                <div className="w-full md:w-1/2 pb-10 md:pr-10 md:text-right order-2 md:order-1">
                  <div className="comic-panel bg-marvel-gold/10 animate-slide-in-left">
                    <span className="font-marvel text-lg bg-marvel-red text-white px-3 py-1 inline-block transform -rotate-2 mb-4">2010</span>
                    <h3 className="font-comic text-2xl mb-3">THE AWAKENING</h3>
                    <p>Our hero discovers coding during a high school project, creating a simple website that would change the course of their destiny forever.</p>
                    <div className="neon-pulse mt-4 inline-block" style={{filter: "drop-shadow(0 0 8px #ED1D24)"}}>
                      <Sparkles size={24} className="text-marvel-red" />
                    </div>
                  </div>
                </div>
                
                {/* Empty space for left side */}
                <div className="w-full md:w-1/2 order-1 md:order-2"></div>
              </div>
              
              {/* Timeline Item 2 */}
              <div className="flex flex-col md:flex-row items-start mb-20 relative">
                <div className="absolute left-[10px] md:left-1/2 h-full w-1 bg-marvel-red transform md:translate-x-[-0.5px] hidden md:block"></div>
                <div className="absolute left-[10px] md:left-1/2 top-0 w-5 h-5 rounded-full bg-marvel-blue border-4 border-white transform md:translate-x-[-10px] z-10"></div>
                
                {/* Empty space for right side */}
                <div className="w-full md:w-1/2 order-1"></div>
                
                {/* Content for left side */}
                <div className="w-full md:w-1/2 pb-10 md:pl-10 order-2">
                  <div className="comic-panel bg-marvel-blue/10 animate-slide-in-right">
                    <span className="font-marvel text-lg bg-marvel-blue text-white px-3 py-1 inline-block transform -rotate-2 mb-4">2014</span>
                    <h3 className="font-comic text-2xl mb-3">THE TRAINING</h3>
                    <p>College years spent mastering the fundamentals of computer science, learning various programming languages, and building a foundation of knowledge.</p>
                    <div className="neon-pulse mt-4 inline-block" style={{filter: "drop-shadow(0 0 8px #518CCA)"}}>
                      <Zap size={24} className="text-marvel-blue" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Timeline Item 3 */}
              <div className="flex flex-col md:flex-row items-start mb-20 relative">
                <div className="absolute left-[10px] md:left-1/2 h-full w-1 bg-marvel-red transform md:translate-x-[-0.5px] hidden md:block"></div>
                <div className="absolute left-[10px] md:left-1/2 top-0 w-5 h-5 rounded-full bg-marvel-gold border-4 border-white transform md:translate-x-[-10px] z-10"></div>
                
                {/* Content for right side */}
                <div className="w-full md:w-1/2 pb-10 md:pr-10 md:text-right order-2 md:order-1">
                  <div className="comic-panel bg-marvel-red/10 animate-slide-in-left">
                    <span className="font-marvel text-lg bg-marvel-gold text-black px-3 py-1 inline-block transform -rotate-2 mb-4">2017</span>
                    <h3 className="font-comic text-2xl mb-3">FIRST MISSION</h3>
                    <p>Joining a tech startup as a junior developer, our hero faces their first real-world challenges and learns to collaborate with other heroes.</p>
                    <div className="neon-pulse mt-4 inline-block" style={{filter: "drop-shadow(0 0 8px #F0E6D2)"}}>
                      <Star size={24} className="text-marvel-gold" />
                    </div>
                  </div>
                </div>
                
                {/* Empty space for left side */}
                <div className="w-full md:w-1/2 order-1 md:order-2"></div>
              </div>
              
              {/* Timeline Item 4 */}
              <div className="flex flex-col md:flex-row items-start relative">
                <div className="absolute left-[10px] md:left-1/2 top-0 w-5 h-5 rounded-full bg-marvel-red border-4 border-white transform md:translate-x-[-10px] z-10"></div>
                
                {/* Empty space for right side */}
                <div className="w-full md:w-1/2 order-1"></div>
                
                {/* Content for left side */}
                <div className="w-full md:w-1/2 md:pl-10 order-2">
                  <div className="comic-panel bg-black/10 animate-slide-in-right">
                    <span className="font-marvel text-lg bg-marvel-black text-white px-3 py-1 inline-block transform -rotate-2 mb-4">TODAY</span>
                    <h3 className="font-comic text-2xl mb-3">THE CODE AVENGER RISES</h3>
                    <p>Now a full-stack superhero, The Code Avenger creates digital experiences that amaze users and solves complex problems with elegant solutions.</p>
                    <div className="neon-pulse mt-4 inline-block" style={{filter: "drop-shadow(0 0 8px white)"}}>
                      <Sparkles size={24} className="text-white stroke-marvel-red" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Fun Facts Section */}
        <section className="py-20 bg-marvel-gray text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-comic text-4xl inline-block relative">
                SUPERHERO FUN FACTS
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-marvel-red"></div>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="comic-panel bg-marvel-black/50 transform rotate-1 hover:rotate-0 transition-transform">
                <div className="absolute -top-3 -right-3 bg-marvel-red text-white font-comic text-sm px-2 py-1 transform rotate-12">
                  DID YOU KNOW?
                </div>
                <h3 className="font-marvel text-xl mb-4">COFFEE POWERED</h3>
                <p>Our hero can debug complex code with the power of a single cup of coffee, unlocking superhuman problem-solving abilities!</p>
              </div>
              
              <div className="comic-panel bg-marvel-black/50 transform -rotate-1 hover:rotate-0 transition-transform">
                <div className="absolute -top-3 -right-3 bg-marvel-blue text-white font-comic text-sm px-2 py-1 transform rotate-12">
                  SECRET INFO!
                </div>
                <h3 className="font-marvel text-xl mb-4">NIGHT CODING</h3>
                <p>Like Batman, The Code Avenger's powers peak at night, when most other developers have gone to sleep!</p>
              </div>
              
              <div className="comic-panel bg-marvel-black/50 transform rotate-1 hover:rotate-0 transition-transform">
                <div className="absolute -top-3 -right-3 bg-marvel-gold text-black font-comic text-sm px-2 py-1 transform rotate-12">
                  CLASSIFIED!
                </div>
                <h3 className="font-marvel text-xl mb-4">BUG CRUSHER</h3>
                <p>Has defeated over 9,000 bugs in production, saving countless users from frustration and error messages!</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
