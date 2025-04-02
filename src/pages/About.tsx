
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, Zap, Star, Sparkles, Image as ImageIcon } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
        
        {/* Hero Photo Section */}
        <section className="py-16 bg-marvel-black text-white relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
              {/* Photo Frame */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 perspective">
                <div className="absolute inset-0 bg-marvel-red transform rotate-6 rounded-lg shadow-lg z-0"></div>
                <div className="absolute inset-0 bg-marvel-blue transform -rotate-3 rounded-lg shadow-lg z-10"></div>
                <div className="relative w-full h-full z-20 transform hover:scale-105 transition-all duration-300">
                  <div className="w-full h-full rounded-lg overflow-hidden comic-panel bg-white p-2 border-4 border-marvel-black">
                    <AspectRatio ratio={1/1} className="relative">
                      <div className="absolute inset-0 bg-comic-dot-pattern opacity-10"></div>
                      <Avatar className="w-full h-full rounded-none">
                        <AvatarImage 
                          src="/images/om21.png" 
                          alt="Your Superhero Photo" 
                          className="object-cover neon-glow"
                        />
                        <AvatarFallback className="bg-marvel-gold/20 w-full h-full flex items-center justify-center">
                          <ImageIcon className="w-12 h-12 text-marvel-gold"/>
                        </AvatarFallback>
                      </Avatar>
                    </AspectRatio>
                  </div>
                </div>
                
                {/* Comic Elements */}
                <div className="absolute -top-6 -right-6 bg-marvel-gold text-marvel-black font-comic text-sm px-3 py-1 transform rotate-12 z-30 shadow-lg">
                  CLASSIFIED
                </div>
                <div className="absolute -bottom-4 -left-4 bg-marvel-red text-white font-comic text-base px-3 py-1 transform -rotate-6 z-30 shadow-lg neon-glow">
                  TOP SECRET
                </div>
              </div>
              
              {/* Hero Description */}
              <div className="max-w-lg">
                <h3 className="font-comic text-4xl mb-6 text-marvel-red neon-glow-text">THE CODING HERO</h3>
                <div className="speech-bubble bg-white text-marvel-black p-5 relative">
                  <p className="font-comic text-lg">
                    Behind the digital mask lies a developer with extraordinary abilities to transform concepts into code! 
                    When not saving the web from bugs and crashes, this hero studies the ancient arts of new frameworks and languages.
                  </p>
                </div>
                
                <div className="mt-8 comic-panel bg-marvel-blue/30 transform -rotate-1">
                  <p className="font-marvel text-xl">
                    "With great code comes great responsibility!"
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Animated Stars */}
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
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
                    <span className="font-marvel text-lg bg-marvel-red text-white px-3 py-1 inline-block transform -rotate-2 mb-4">2022</span>
                    <h3 className="font-comic text-2xl mb-3">THE AWAKENING</h3>
                    <p>In my first year of college, I built my first website—a simple project that unknowingly set me on a path to discovering my passion for coding and transforming my future.</p>
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
                    <span className="font-marvel text-lg bg-marvel-blue text-white px-3 py-1 inline-block transform -rotate-2 mb-4">2023</span>
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
                    <span className="font-marvel text-lg bg-marvel-gold text-black px-3 py-1 inline-block transform -rotate-2 mb-4">2024</span>
                    <h3 className="font-comic text-2xl mb-3">FIRST MISSION</h3>
                    <p>Receiving a stipend for developing a plugin for <b>Adobe</b>, our hero takes their first step into the real-world tech industry, overcoming challenges and collaborating with other innovators.</p>
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
