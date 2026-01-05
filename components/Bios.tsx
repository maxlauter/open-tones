import React, { useEffect, useRef } from 'react';

const Bios: React.FC = () => {
  const bios = [
    {
      name: "David Christian Nuss",
      title: "Percussion / Engineer / Theology",
      desc: "A Brooklyn-based drummer and engineer with extensive experience across genres, including Director of Symphony Orchestra and performance at Holland's premier metal festival Roadburn. With training from Union Theological Seminary, the Zen Center for Contemplative Care, and Kripalu's School of Ayurveda, David brings careful listening into his musical practice, thriving on the unknown as an entry point to transformation. He currently runs recording sessions and rehearsals from Silver Cave Studios.",
      image: "/bio-david.jpg"
    },
    {
      name: "Maximilian Lauter",
      title: "Facilitator / Interactive Design / Yoga",
      desc: "As an artist, innovation consultant, and certified facilitator, Maximilian leads programs based in somatic and creative practice to empower transformation. He brings 15+ years of experience producing with world-class cultural institutions, festivals, and global brands—from The Met and Sonar, to Meta to the New York Times. As a trained musician and Katonah Yoga® teacher, he weaves live instrumentation and spatial audio with mindfulness techniques to cultivate deep internal and group resonance.",
      image: "/bio-maximilian.jpg"
    },
    {
      name: "Sam Haddix",
      title: "Facilitator / Social Work / Chaplan",
      desc: "A founding pillar of the Open Tones ensemble, Sam brings a deep sensitivity to harmonic instrumentation and wind textures. His work focuses on the intersection of silence and subtle vibration, facilitating spaces where participants can encounter the delicate nuances of their own internal listening.",
      image: "/bio-sam.jpg"
    },
    {
      name: "Sarah Martin-Nuss",
      title: "Voice Activation / Breathwork / Listening",
      desc: "Sarah Martin-Nuss is an interdisciplinary artist, painter, and musician working with sound as a medium for meditation, attention, and perceptual awareness. Treating sound as a relational system of bodies, space, and time, she engages listening as a compositional and experiential framework. She has trained with the Meredith Monk Ensemble and offers Somatic Voicework™, a method that integrates vocal production, breath coordination, and embodied cognition.",
      image: "/bio-sarah.jpg"
    },
    {
      name: "Briana Weiner",
      title: "Voice / Ritual / Psychology",
      desc: "An expert in spatial attunement and ceremonial ritual, Briana's background in psychological facilitation and ceremony provides a secure container for deep exploration.",
      image: "/bio-brianna.jpg"
    }
  ];

  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
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
        
        const range = window.innerHeight * 0.5;
        const focusFactor = Math.min(distanceFromCenter / (range / 2), 1);
        
        const grayscale = focusFactor * 100;
        const opacity = 1.0 - (focusFactor * 0.4); 
        
        img.style.filter = `grayscale(${grayscale}%)`;
        img.style.opacity = opacity.toString();
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="bios" className="py-16 px-8 bg-cream/5 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] uppercase tracking-[0.5em] text-cream/40 font-bold block">The Ensemble</span>
            <h2 className="text-4xl md:text-6xl font-serif italic font-light">Open Tones Practitioners</h2>
          </div>
          <p className="max-w-3xl mx-auto text-sm md:text-base font-light text-cream/60 leading-relaxed font-sans px-4">
            Our practitioners are certified facilitators bringing together expertise in art, music, wellness, social work, and psychology. Our methodology is rooted in a diverse range of spiritual practices, drawing inspiration from indigenous cultures, yogic and devotional traditions, and modern mindfulness techniques. We are committed to honoring these rich lineages of knowledge and teachings by creating sacred, safe spaces for transformative experiences.
          </p>
        </div>
        
        <div className="space-y-20">
          {bios.map((bio, i) => (
            <div key={i} className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="md:w-3/5 space-y-4 w-full">
                <div className="space-y-1">
                  <h3 className="text-2xl md:text-3xl font-serif italic tracking-tight text-cream/90">{bio.name}</h3>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-sage font-bold block">{bio.title}</span>
                </div>
                <p className="text-base text-cream/70 leading-relaxed font-light font-sans">
                  {bio.desc}
                </p>
              </div>
              <div className="md:w-2/5 aspect-square relative group w-full max-w-sm">
                <div className="absolute inset-0 bg-sage/20 translate-x-2 translate-y-2 -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-700"></div>
                <div className="w-full h-full bg-dark overflow-hidden rounded-sm border border-white/10 shadow-2xl">
                  {/* Fixed ref assignment to return void */}
                  <img 
                    ref={el => { imageRefs.current[i] = el; }}
                    src={bio.image} 
                    alt={bio.name} 
                    className="w-full h-full object-cover md:grayscale md:hover:grayscale-0 opacity-60 md:group-hover:opacity-100 transition-all duration-1000" 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bios;