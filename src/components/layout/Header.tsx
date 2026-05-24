import React, { useState, useEffect } from 'react';
import ThemeToggle from '../shared/ThemeToggle';
import { Menu, X } from 'lucide-react';
import NavMenu from './NavMenu';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass py-2' : 'py-4 bg-transparent'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold neon-glow font-space-grotesk">
          Gihan
        </a>
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
          
          <button 
            onClick={toggleMenu}
            className="p-2 glass rounded-full hover:bg-background/30 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>
      </div>

      <NavMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </header>
  );
};

export default Header;