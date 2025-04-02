
import React from 'react';
import { Star } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-marvel-blue pt-16">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-marvel-blue via-marvel-black to-black opacity-80 animate-hero-bg"></div>
      
      {/* Comic Dots Pattern */}
      <div className="absolute inset-0 bg-comic-dot-pattern opacity-30"></div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 py-16 relative">
        {/* Marvel Logo */}
        <div className="absolute top-0 left-0 right-0 flex justify-center">
          <div className="bg-marvel-red px-10 py-2 transform -skew-x-12">
            <h2 className="font-marvel text-white text-3xl tracking-wider">OM</h2>
          </div>
        </div>

        {/* Comic Number */}
        <div className="absolute top-10 right-8 bg-marvel-gold p-2 border-2 border-black transform rotate-12">
          <p className="font-comic text-black text-sm">ISSUE #1</p>
        </div>

        {/* Main Title */}
        <div className="text-center my-16 animate-pop">
          <h1 className="font-comic text-white text-6xl md:text-8xl leading-none mb-6 drop-shadow-[0_5px_0px_rgba(0,0,0,0.8)]">
            THE CODE
            <span className="block text-marvel-red">AVENGER</span>
          </h1>
          <div className="relative w-fit mx-auto">
            <div className="speech-bubble animate-pulse-grow">
              <p className="font-comic text-black text-xl md:text-2xl">Crafting digital experiences with super powers!</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-12">
          <button className="comic-button bg-marvel-red text-xl font-comic"
          onClick={() => window.open("https://github.com/ombhayde", "_blank")}>
            SEE MY WORK
          </button>
          <button className="comic-button bg-marvel-blue text-xl font-comic"
          onClick={() => window.open("https://www.linkedin.com/in/om-bhayde-66a643253/", "_blank")}>
            HIRE ME
          </button>
        </div>

        {/* Decoration Stars */}
        <div className="absolute top-1/4 left-10 animate-float text-marvel-gold">
          <Star size={40} fill="currentColor" />
        </div>
        <div className="absolute bottom-1/4 right-10 animate-float delay-150 text-marvel-red">
          <Star size={30} fill="currentColor" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
