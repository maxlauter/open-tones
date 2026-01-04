import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative flex flex-col items-center justify-start overflow-hidden bg-dark">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay muted loop playsInline 
          className="w-full h-full object-cover opacity-20 saturate-0 contrast-125 scale-110"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-slow-motion-of-abstract-smoke-in-dark-background-42171-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-dark/40 backdrop-blur-[1px]"></div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-8 w-full flex flex-col items-center text-center pt-24 md:pt-32 pb-8">
        
        {/* The Logo Centerpiece */}
        <div className="w-full max-w-[320px] md:max-w-[480px] aspect-square mb-20 transform hover:scale-105 transition-all duration-[3s] ease-out flex items-center justify-center">
          {!imageError ? (
            <img 
              src="/logo.png" 
              alt="Open Tones" 
              className="w-full h-full object-contain brightness-[1.5] contrast-[1.1]"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="text-8xl md:text-[10rem] font-serif italic text-cream/90 tracking-tighter select-none leading-none">
              Open Tones
            </div>
          )}
        </div>

        <div className="space-y-8">
          <div className="w-12 h-px bg-cream/20 mx-auto"></div>
          <p className="text-xl md:text-2xl font-serif italic font-light text-cream/90 leading-relaxed max-w-2xl mx-auto">
            Open Tones is a collective of artists and wellness practitioners offering sound-based mindfulness programs encouraging alignment, healing, and growth through deep listening.
          </p>
        </div>

        {/* Video & CTA Section */}
        <div className="flex flex-col items-center gap-12 w-full mt-32">
          <div className="flex flex-col items-center gap-8 opacity-40">
            <span className="text-[10px] uppercase tracking-[0.6em] font-medium">Become Present</span>
            <div className="w-px h-12 bg-gradient-to-b from-cream to-transparent"></div>
          </div>
          
          <div className="w-full max-w-4xl aspect-video rounded-sm overflow-hidden border border-white/5 shadow-2xl bg-black/40">
            <iframe 
              className="w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-1000"
              src={`https://www.youtube.com/embed/ljtJXGPilOM?rel=0&autoplay=0&enablejsapi=1&origin=${window.location.origin}`} 
              title="Open Tones Video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;