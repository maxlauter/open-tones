import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-dark/40 backdrop-blur-md border-b border-white/5 transition-all duration-700">
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex items-center group transition-all duration-1000 ease-in-out ${isScrolled ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-90 pointer-events-none'}`}
        >
          <div className="h-10 flex items-center">
            {!imageError ? (
              <img 
                src="/logo.png" 
                alt="Open Tones" 
                className="h-full w-auto object-contain brightness-[2.0]"
                onError={() => setImageError(true)}
              />
            ) : (
              <span className="text-xl font-serif italic tracking-tighter text-cream whitespace-nowrap">Open Tones</span>
            )}
          </div>
        </a>
        
        <nav className="hidden md:flex items-center gap-10">
          <a 
            href="#events" 
            onClick={(e) => handleNavClick(e, 'events')}
            className="text-[10px] uppercase tracking-[0.4em] font-bold text-cream/50 hover:text-cream transition-colors"
          >
            Events
          </a>
          <a 
            href="#rates" 
            onClick={(e) => handleNavClick(e, 'rates')}
            className="text-[10px] uppercase tracking-[0.4em] font-bold text-cream/50 hover:text-cream transition-colors"
          >
            Offerings
          </a>
          <a 
            href="#bios" 
            onClick={(e) => handleNavClick(e, 'bios')}
            className="text-[10px] uppercase tracking-[0.4em] font-bold text-cream/50 hover:text-cream transition-colors"
          >
            Practitioners
          </a>
          <a 
            href="#calculator" 
            onClick={(e) => handleNavClick(e, 'calculator')}
            className="text-[10px] uppercase tracking-[0.4em] font-bold border border-cream/20 px-8 py-2 rounded-full hover:bg-cream hover:text-dark transition-all"
          >
            Book Session
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;