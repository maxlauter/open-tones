
import React from 'react';
import { BookingType } from '../types';

const Rates: React.FC = () => {
  const offerings = [
    { 
      tier: "Community Offering", 
      type: BookingType.CORPORATE,
      isNonprofit: true,
      description: "Accessible sessions for libraries, schools, and cultural spaces.", 
      context: "Pay-What-You-Can" 
    },
    { 
      tier: "Private (1 Person)", 
      type: BookingType.PRIVATE_1,
      isNonprofit: false,
      description: "Deeply personal regulation and reflection focused on individual attunement.", 
      context: "1 Practitioner / 75-90 min" 
    },
    { 
      tier: "Couples Private (2 people)", 
      type: BookingType.PRIVATE_2,
      isNonprofit: false,
      description: "Shared attunement and relational listening for couples or partners.", 
      context: "1 Practitioner / 75-90 min" 
    },
    { 
      tier: "Small Group (3-10)", 
      type: BookingType.SMALL_GROUP,
      isNonprofit: false,
      description: "Intimate circles for ceremonies, retreats, or private gatherings.", 
      context: "1-5 Practitioners / 75-90 min" 
    },
    { 
      tier: "Large Group (11-30+)", 
      type: BookingType.LARGE_11_30,
      isNonprofit: false,
      description: "Expansive journeys for venues, festivals, and large-scale assemblies.", 
      context: "3-5+ Practitioners / 75-90 min" 
    },
    { 
      tier: "Corporate", 
      type: BookingType.CORPORATE,
      isNonprofit: false,
      description: "Customize a facilitated wellness session with sound, breathwork, yoga, and more.", 
      context: "1-5+ Practitioners / 60-90+ min" 
    }
  ];

  const handleBookNow = (type: BookingType | null, isNonprofit: boolean) => {
    if (type) {
      window.dispatchEvent(new CustomEvent('select-booking-type', { 
        detail: { type, isNonprofit } 
      }));
    }
    
    const element = document.getElementById('calculator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
            <div key={idx} className="p-10 border border-white/5 bg-white/5 hover:bg-white/[0.07] transition-all duration-700 flex flex-col justify-between aspect-square group relative overflow-hidden rounded-sm">
              <div className="opacity-0 h-4">{/* Spacer */}</div>
              <div>
                <h3 className="text-2xl md:text-3xl font-serif italic mb-4">{offering.tier}</h3>
                <p className="text-sm md:text-base font-light text-cream/70 leading-relaxed font-sans mb-8">
                  {offering.description}
                </p>
                
                <button 
                  onClick={() => handleBookNow(offering.type, offering.isNonprofit)}
                  className="inline-flex items-center justify-between gap-4 px-8 py-4 bg-sage text-dark rounded-full text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-cream transition-all duration-500 group/btn min-w-[180px] shadow-lg shadow-sage/10 animate-button-pulse"
                >
                  Book Now
                  <svg 
                    width="14" 
                    height="14" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="transform group-hover/btn:animate-arrow-bounce transition-transform"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-cream/70 leading-relaxed border-t border-white/10 pt-6 font-medium font-sans mt-8">
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