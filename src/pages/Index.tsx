
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import OriginStory from '@/components/OriginStory';
import Superpowers from '@/components/Superpowers';
import Missions from '@/components/Missions';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Main Content */}
      <main>
        <Hero />
        <OriginStory />
        <Superpowers />
        <Missions />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
