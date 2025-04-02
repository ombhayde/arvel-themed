
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-marvel-black/90 backdrop-blur-sm text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-marvel-red font-marvel text-3xl tracking-wider transform -rotate-2">MARVEL</span>
          <span className="text-white font-marvel text-xl ml-1">PORTFOLIO</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Projects", path: "/projects" },
            { name: "Skills", path: "/skills" },
            { name: "Blog", path: "/blog" },
            { name: "Contact", path: "/contact" }
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`font-comic hover:text-marvel-red transition-colors duration-200 relative ${
                location.pathname === item.path ? 'text-marvel-red' : 'text-white'
              }`}
            >
              {item.name}
              {location.pathname === item.path && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-marvel-red neon-pulse"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-marvel-black text-white px-4 py-5 animate-slide-in-left">
          <div className="flex flex-col space-y-4">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Projects", path: "/projects" },
              { name: "Skills", path: "/skills" },
              { name: "Blog", path: "/blog" },
              { name: "Contact", path: "/contact" }
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-comic hover:text-marvel-red transition-colors duration-200 py-2 px-4 ${
                  location.pathname === item.path ? 'text-marvel-red bg-marvel-black/20' : 'text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
