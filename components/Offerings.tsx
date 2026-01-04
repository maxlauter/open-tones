import React from 'react';

const Offerings: React.FC = () => {
  return (
    <section id="offerings" className="py-32 px-8 relative overflow-hidden bg-dark">
      <div className="max-w-7xl mx-auto space-y-48">
        
        {/* First Narrative Block: The Invitation */}
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light font-serif leading-tight italic text-cream">
              An invitation into <br/>non-ordinary reality.
            </h2>
            <p className="text-lg md:text-xl text-cream/80 font-light leading-relaxed max-w-xl">
              We offer guided meditation, breathwork, ceremonial cleansing herbs, and fully improvised musical performance that leads participants through an immersive experience of the present. 
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] bg-deep/20 rounded-sm overflow-hidden shadow-2xl group border border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&q=80&w=1200" 
                alt="Ritual moment"
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-[3s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-6 left-6 text-[9px] uppercase tracking-widest bg-dark/60 backdrop-blur-sm px-4 py-2 border border-white/10 text-cream/60">
                The Container
              </div>
            </div>
          </div>
        </div>

        {/* Second Narrative Block: The Journey */}
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="order-1">
            <div className="relative aspect-[4/3] bg-deep/20 rounded-sm overflow-hidden shadow-2xl group border border-white/5">
               <img 
                src="https://images.unsplash.com/photo-1514525253344-99a42d7409c5?auto=format&fit=crop&q=80&w=1200" 
                alt="Sonic journey context"
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-[3s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-6 left-6 text-[9px] uppercase tracking-widest bg-dark/60 backdrop-blur-sm px-4 py-2 border border-white/10 text-cream/60">
                Sonic Resonance
              </div>
            </div>
          </div>
          <div className="space-y-8 order-2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light font-serif italic text-cream leading-tight">
              Sink deeper into states <br/>of reflective awareness.
            </h2>
            <p className="text-lg md:text-xl text-cream/80 font-light leading-relaxed max-w-xl">
              The sonic journey offers textural tones to balance the upper chakras with instruments of wind, voice, gongs, and singing bowls, while rooting and grounding the journey in trance-state rhythm, drums, and percussion.
            </p>
          </div>
        </div>

        {/* Final Quote Block */}
        <div className="max-w-4xl mx-auto text-center space-y-12 py-12">
          <div className="w-px h-24 bg-gradient-to-b from-cream/20 to-transparent mx-auto"></div>
          <p className="text-2xl md:text-4xl font-light font-serif leading-relaxed italic text-cream/90 px-4">
            "Participants often leave with a clearer sense of attunement: to themselves, to one another, and to what it means to be open to all that we are and all that we can be."
          </p>
          <div className="w-px h-24 bg-gradient-to-t from-cream/20 to-transparent mx-auto"></div>
        </div>

      </div>
    </section>
  );
};

export default Offerings;