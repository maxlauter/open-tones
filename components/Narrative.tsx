import React, { useEffect, useRef } from 'react';

const Narrative: React.FC = () => {
  const experiences = [
    { 
      title: "Intention", 
      desc: "An invitation to channel intention in a safe, facilitated space.", 
      image: "/step-1.jpg",
      rotation: "rotate-3"
    },
    { 
      title: "Breathwork & Movement", 
      desc: "Guided breath and movement to transition from external noise to internal presence.", 
      image: "/step-2.jpg",
      rotation: "-rotate-3"
    },
    { 
      title: "Meditation", 
      desc: "Guided meditation to sensitize the mind and body to subtle shifts.", 
      image: "/step-3.jpg",
      rotation: "rotate-2"
    },
    { 
      title: "Sound", 
      desc: "Immersive journey through instruments of wind, voice, gongs, singing bowls, and trance-state rhythm.", 
      image: "/step-4.jpg",
      rotation: "-rotate-2"
    },
    { 
      title: "Return", 
      desc: "Gentle integration and closing to ground the experience.", 
      image: "/step-5.jpg",
      rotation: "rotate-3"
    }
  ];

  const observerRef = useRef<IntersectionObserver | null>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    // Reveal animation observer
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('step-visible');
          entry.target.classList.remove('step-hidden');
          if (entry.target.classList.contains('journey-path-svg')) {
             (entry.target as HTMLElement).style.opacity = '1';
          }
        }
      });
    }, { threshold: 0.05 });

    const elements = document.querySelectorAll('.step-animate');
    elements.forEach(el => observerRef.current?.observe(el));

    // Mobile scroll focus effect
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        // Reset filters for desktop to use hover states instead
        imageRefs.current.forEach(img => {
          if (img) img.style.filter = '';
        });
        return;
      }

      const viewportCenter = window.innerHeight / 2;
      
      imageRefs.current.forEach(img => {
        if (!img) return;
        const rect = img.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const distanceFromCenter = Math.abs(viewportCenter - elementCenter);
        
        // Calculate focus: 0 at center, 1 at edges of a 500px range
        const range = window.innerHeight * 0.6;
        const focusFactor = Math.min(distanceFromCenter / (range / 2), 1);
        
        // Map focusFactor to grayscale (0% at center, 100% at edges)
        // Also subtle opacity shift
        const grayscale = focusFactor * 100;
        const opacity = 0.8 - (focusFactor * 0.3); // 0.8 at center, 0.5 at edges
        
        img.style.filter = `grayscale(${grayscale}%)`;
        img.style.opacity = opacity.toString();
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      observerRef.current?.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const pathD = `
    M 50 0 
    C 48 5, 42 8, 44 18
    C 45 25, 54 28, 56 38
    C 58 45, 43 48, 44 58
    C 45 65, 55 68, 56 78
    C 57 85, 46 92, 50 100
  `;

  return (
    <section id="story" className="pt-32 pb-32 px-8 bg-dark relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-32 md:space-y-48 relative z-10">
        
        {/* Invitation Paragraph */}
        <div className="space-y-8 text-center step-animate step-hidden max-w-4xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.5em] text-cream/40 font-bold block">The Invitation</span>
          <p className="text-3xl md:text-5xl font-serif italic font-light text-cream/90 leading-snug">
            "As an invitation into non-ordinary reality, we offer guided meditation, breathwork, ceremonial cleansing herbs, and fully improvised musical performance that leads participants through an immersive experience of the present."
          </p>
        </div>

        {/* Modalities Section */}
        <div className="py-16 relative">
          <div className="text-center mb-32 md:mb-48 step-animate step-hidden">
            <h2 className="text-5xl md:text-8xl font-serif italic font-light mb-6">Modalities</h2>
            <div className="w-32 h-px bg-white/20 mx-auto"></div>
          </div>

          <div className="relative space-y-32 md:space-y-56">
            
            <div className="absolute inset-0 z-0 pointer-events-none hidden md:block opacity-0 transition-opacity duration-[3000ms] step-animate journey-path-svg">
              <svg 
                className="w-full h-full overflow-visible" 
                viewBox="0 0 100 100" 
                preserveAspectRatio="none"
              >
                <path 
                  d={pathD} 
                  fill="none" 
                  stroke="currentColor" 
                  className="text-cream opacity-[0.12]"
                  strokeWidth="0.25"
                  strokeLinecap="round"
                />
                <path 
                  d={pathD} 
                  fill="none" 
                  stroke="currentColor" 
                  className="text-cream opacity-[0.06]"
                  strokeWidth="0.6"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            
            {experiences.map((exp, i) => (
              <div 
                key={i} 
                className={`relative flex flex-col md:flex-row items-center gap-12 md:gap-24 group transition-all duration-1000 step-animate step-hidden ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`flex-1 flex flex-col items-center ${i % 2 !== 0 ? 'md:items-start md:pl-16' : 'md:items-end md:pr-16'} text-center md:text-left z-10`}>
                  <div className="relative mb-10">
                    <div className="absolute inset-[-2rem] rounded-full border border-cream/30 animate-ripple"></div>
                    <div className="absolute inset-[-1rem] rounded-full border border-cream/15 animate-ripple [animation-delay:1.5s]"></div>
                    <div className="w-16 h-16 rounded-full border-2 border-cream/60 bg-dark shadow-[0_0_40px_rgba(245,245,240,0.15)] flex items-center justify-center relative z-10 group-hover:border-sage group-hover:scale-110 group-hover:shadow-sage/40 transition-all duration-700">
                    </div>
                  </div>
                  <div className={`max-w-md space-y-4 ${i % 2 !== 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <h3 className="text-3xl md:text-4xl font-serif italic text-cream/90 group-hover:text-sage transition-colors duration-700">
                      {exp.title}
                    </h3>
                    <p className="text-lg font-serif italic font-light text-cream/60 leading-relaxed">
                      {exp.desc}
                    </p>
                  </div>
                </div>

                <div className="hidden md:block w-px h-full shrink-0"></div>

                <div className={`flex-1 flex ${i % 2 !== 0 ? 'justify-end md:justify-end md:pr-16' : 'justify-start md:justify-start md:pl-16'} z-10`}>
                  <div className={`w-64 md:w-96 aspect-square rounded-sm overflow-hidden bg-white/5 border border-white/10 shadow-2xl transition-all duration-1000 group-hover:scale-105 group-hover:border-white/30 group-hover:rotate-0 ${exp.rotation}`}>
                    {/* Fixed ref assignment to return void */}
                    <img 
                      ref={el => { imageRefs.current[i] = el; }}
                      src={exp.image} 
                      alt={exp.title} 
                      className="w-full h-full object-cover opacity-50 md:grayscale md:group-hover:grayscale-0 md:group-hover:opacity-80 transition-all duration-1000"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Creating Resonance Paragraph */}
        <div className="grid lg:grid-cols-12 gap-16 md:gap-24 items-center py-24 border-y border-white/5 step-animate step-hidden">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[10px] uppercase tracking-[0.5em] text-cream font-bold block">Creating Resonance</span>
            <p className="text-3xl md:text-4xl font-serif italic font-light text-cream/90 leading-relaxed">
              Our sessions are an opportunity to sink deeper into states of reflective awareness. 
            </p>
            <p className="text-lg font-light text-cream/70 leading-relaxed font-sans max-w-2xl">
              The sonic journey offers textural tones to balance the upper energetic centers with instruments of wind, voice, gongs, and singing bowls—rooting and grounding the body through trance-state drumming and immersive percussion.
            </p>
          </div>
          <div className="lg:col-span-5 aspect-square bg-deep/20 rounded-sm overflow-hidden transform rotate-2 shadow-2xl border border-white/10 group">
            <img 
              src="/resonance.jpg" 
              alt="Sonic journey context"
              className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-105 transition-all duration-[2s]"
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center py-24 step-animate step-hidden">
           <p className="text-3xl md:text-5xl font-light font-serif leading-relaxed italic text-cream/90 px-4">
            "Participants often leave with a clearer sense of attunement: to themselves, to one another, and to what it means to be open to all that we are and all that we can be."
           </p>
           <div className="mt-16 w-px h-24 bg-gradient-to-b from-white/20 to-transparent mx-auto"></div>
        </div>

      </div>
    </section>
  );
};

export default Narrative;