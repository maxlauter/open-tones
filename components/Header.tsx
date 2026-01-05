import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const WavyHamburger = () => (
    <svg 
      width="30" 
      height="30" 
      viewBox="0 0 30 30" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="transition-transform duration-500"
    >
      {isMenuOpen ? (
        <>
          <line x1="6" y1="6" x2="24" y2="24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="6" y1="24" x2="24" y2="6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </>
      ) : (
        <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none">
          {/* Top wavy line */}
          <path d="M 4 8 C 7 3, 11 3, 15 8 C 19 13, 23 13, 26 8" />
          {/* Middle wavy line */}
          <path d="M 4 15 C 7 10, 11 10, 15 15 C 19 20, 23 20, 26 15" />
          {/* Bottom wavy line */}
          <path d="M 4 22 C 7 17, 11 17, 15 22 C 19 27, 23 27, 26 22" />
        </g>
      )}
    </svg>
  );

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
        
        {/* Desktop Navigation */}
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

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-cream/80 hover:text-cream transition-colors z-[110]"
          aria-label="Toggle Menu"
        >
          <WavyHamburger />
        </button>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-16 right-8 bg-deep/90 backdrop-blur-xl border border-white/10 p-8 rounded-sm shadow-2xl md:hidden animate-reveal min-w-[240px]">
            <nav className="flex flex-col gap-8 text-center">
              <a 
                href="#events" 
                onClick={(e) => handleNavClick(e, 'events')}
                className="text-[10px] uppercase tracking-[0.4em] font-bold text-cream/70 hover:text-cream transition-colors"
              >
                Events
              </a>
              <a 
                href="#rates" 
                onClick={(e) => handleNavClick(e, 'rates')}
                className="text-[10px] uppercase tracking-[0.4em] font-bold text-cream/70 hover:text-cream transition-colors"
              >
                Offerings
              </a>
              <a 
                href="#bios" 
                onClick={(e) => handleNavClick(e, 'bios')}
                className="text-[10px] uppercase tracking-[0.4em] font-bold text-cream/70 hover:text-cream transition-colors"
              >
                Practitioners
              </a>
              <a 
                href="#calculator" 
                onClick={(e) => handleNavClick(e, 'calculator')}
                className="text-[10px] uppercase tracking-[0.4em] font-bold border border-cream/20 px-4 py-3 rounded-full hover:bg-cream hover:text-dark transition-all"
              >
                Book Session
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;