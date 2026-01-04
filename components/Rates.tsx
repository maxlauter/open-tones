import React from 'react';

const Rates: React.FC = () => {
  const offerings = [
    { tier: "Community Offering", description: "Accessible sessions for libraries, schools, and cultural spaces.", context: "Pay-What-You-Can" },
    { tier: "Private (1 Person)", description: "Deeply personal regulation and reflection focused on individual attunement.", context: "1 Practitioner / 75-90 min" },
    { tier: "Private (2 People)", description: "Shared attunement and relational listening for couples or partners.", context: "1 Practitioner / 75-90 min" },
    { tier: "Small Group (3-10)", description: "Intimate circles for ceremonies, retreats, or private gatherings.", context: "1-5 Practitioners / 75-90 min" },
    { tier: "Large Group (11+)", description: "Expansive journeys for venues, festivals, and large-scale assemblies.", context: "3-5+ Practitioners / 75-90 min" },
    { tier: "Corporate / Institutional", description: "Professional wellness sessions designed for collaborative environments.", context: "1-5+ Practitioners / 60 min" }
  ];

  return (
    <section id="rates" className="py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-5xl md:text-7xl font-serif italic font-light leading-tight">Our Offerings</h2>
          </div>
          <div className="md:text-right space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-cream/30">Customized experiences available upon request</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((offering, idx) => (
            <div key={idx} className="p-10 border border-white/5 bg-white/5 hover:bg-white/[0.07] transition-all duration-700 flex flex-col justify-between aspect-square group">
              <div className="opacity-0 h-4">{/* Spacer instead of Tier label */}</div>
              <div>
                <h3 className="text-2xl md:text-3xl font-serif italic mb-4">{offering.tier}</h3>
                <p className="text-sm md:text-base font-light text-cream/70 leading-relaxed font-sans">
                  {offering.description}
                </p>
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-cream/70 leading-relaxed border-t border-white/10 pt-6 font-medium font-sans">
                {offering.context}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rates;