
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import OriginStory from '@/components/OriginStory';
import Superheroes from '@/components/Superheroes';
import Superpowers from '@/components/Superpowers';
import Missions from '@/components/Missions';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  // Add effect to hide Lovable badge on mount
  useEffect(() => {
    // Try to find and hide the Lovable badge
    const hideBadge = () => {
      const badges = document.querySelectorAll('a[href*="lovable.app"], a[href*="lovable.dev"]');
      badges.forEach(badge => {
        if (badge.parentElement) {
          badge.parentElement.style.display = 'none';
        }
      });
    };
    
    // Run immediately and also after a small delay (in case badge loads after page)
    hideBadge();
    const timeoutId = setTimeout(hideBadge, 1000);
    
    // Add a mutation observer to catch dynamically added badges
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(() => {
        hideBadge();
      });
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Main Content */}
      <main>
        <Hero />
        <OriginStory />
        <Superheroes />
        <Superpowers />
        <Missions />
        <Contact />
      </main>
      
      <Footer />
      
      {/* Additional CSS to hide Lovable badge */}
      <style jsx="true">{`
        a[href*="lovable.app"], a[href*="lovable.dev"] {
          display: none !important;
        }
      `}</style>
    </div>
  );
};

export default Index;
