import React from 'react';

const Bios: React.FC = () => {
  const bios = [
    {
      name: "David Christian Nuss",
      title: "Percussion / Drummer / Composer",
      desc: "A Brooklyn-based drummer and engineer with extensive experience across genres. David has managed performance spaces in NYC and served as Executive Director of a Symphony Orchestra. He has recorded on labels including Metal Blade and Revenant, performing at major festivals like Roadburn and Primavera Sound. David currently teaches meditation and Dharma classes at the Kadampa Meditation Center.",
      image: "/bio-david.jpg"
    },
    {
      name: "Maximilian Lauter",
      title: "Facilitator / Sound Design / Yoga",
      desc: "An artist and facilitator specializing in interactive media and spatial audio. With over 15 years developing programs for global cultural institutions and brands, Maximilian weaves live instrumentation and electronic synthesis to cultivate group resonance. He is a trained musician and certified yoga teacher, presenting works at the Guggenheim and Storefront for Art and Architecture.",
      image: "/bio-maximilian.jpg"
    },
    {
      name: "Sam Haddix",
      title: "Harmonics / Ensemble Core",
      desc: "A founding pillar of the Open Tones ensemble, Sam brings a deep sensitivity to harmonic instrumentation and wind textures. His work focuses on the intersection of silence and subtle vibration, facilitating spaces where participants can encounter the delicate nuances of their own internal listening.",
      image: "/bio-sam.jpg"
    },
    {
      name: "Sarah Martin Nuss",
      title: "Voice / Breathwork / Integration",
      desc: "A multidisciplinary artist whose practice explores the vocal resonances of the collective. Sarah leads with a focus on breathwork and the grounding power of the human voice. Her facilitation style is embodied and integrative, helping participants bridge the gap between non-ordinary states and grounded reality.",
      image: "/bio-sarah.jpg"
    },
    {
      name: "Brianna Weiner",
      title: "Ceremony / Ritual / Psychology",
      desc: "An expert in spatial attunement and ceremonial ritual, Brianna guides the opening and closing arcs of the Open Tones experience. Her background in psychological facilitation and herbal ceremony provides a secure container for deep exploration.",
      image: "/bio-brianna.jpg"
    }
  ];

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
              <div className="md:w-3/5 space-y-4">
                <div className="space-y-1">
                  <h3 className="text-2xl md:text-3xl font-serif italic tracking-tight text-cream/90">{bio.name}</h3>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-sage font-bold block">{bio.title}</span>
                </div>
                <p className="text-base text-cream/70 leading-relaxed font-light font-sans">
                  {bio.desc}
                </p>
              </div>
              <div className="md:w-2/5 aspect-square relative group">
                <div className="absolute inset-0 bg-sage/20 translate-x-2 translate-y-2 -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-700"></div>
                <div className="w-full h-full bg-dark overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-1000 border border-white/10 shadow-2xl">
                  <img src={bio.image} alt={bio.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
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