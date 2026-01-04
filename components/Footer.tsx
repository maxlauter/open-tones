import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <footer className="py-16 px-8 border-t border-white/5 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div className="w-32 md:w-48 grayscale brightness-[3.5] opacity-60">
              {!imageError ? (
                <img 
                  src="/logo.png" 
                  alt="Open Tones" 
                  className="w-full h-full object-contain" 
                  onError={() => setImageError(true)}
                />
              ) : (
                <span className="text-3xl font-serif italic tracking-tighter text-cream whitespace-nowrap">Open Tones</span>
              )}
            </div>
            <p className="text-2xl font-serif italic font-light text-cream/70 leading-snug max-w-sm">
              ...the beauty of the heavens and the grandeur of the earth are the echo of our open tones...
            </p>
          </div>
          
          <div className="flex flex-col md:items-end gap-12">
            <div className="flex flex-col md:items-end gap-6">
              <span className="text-[10px] uppercase tracking-[0.5em] opacity-40 font-bold">Connect</span>
              <nav className="flex flex-col md:items-end gap-4 text-xs font-light tracking-[0.3em] uppercase">
                <a href="https://instagram.com/open.tones" target="_blank" rel="noopener" className="hover:text-sage transition-all">Instagram</a>
                <a href="https://soundcloud.com/open-tones" target="_blank" rel="noopener" className="hover:text-sage transition-all">Soundcloud</a>
              </nav>
            </div>

            <div className="text-[9px] uppercase tracking-[0.4em] opacity-30 text-left md:text-right space-y-2 font-medium">
              <p>Rooted in New York & Worldwide</p>
              <p>© Open Tones Collective 2026</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-64 -right-64 w-[900px] h-[900px] border border-white/5 rounded-full pointer-events-none opacity-10"></div>
    </footer>
  );
};

export default Footer;