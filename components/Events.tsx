import React from 'react';

const Events: React.FC = () => {
  const events = [
    {
      date: "JANUARY 24 • 6:30 PM",
      title: "Sound Meditation & Healing Journey",
      venue: "Reforesters Laboratory, Brooklyn",
      link: "https://luma.com/ca58e9l4"
    },
    {
      date: "FEBRUARY 22 • 4:00 PM",
      title: "Sound Meditation & Healing Journey",
      venue: "Reforesters Laboratory, Brooklyn",
      link: "https://luma.com/k1bynifh"
    },
    {
      date: "MARCH 29 • 4:00 PM",
      title: "Sound Meditation & Healing Journey",
      venue: "Reforesters Laboratory, Brooklyn",
      link: "https://luma.com/28zpm3yk"
    }
  ];

  return (
    <section id="events" className="py-24 px-8 bg-dark border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 text-center space-y-4">
          <span className="text-[10px] uppercase tracking-[0.5em] text-cream/40 font-bold block">Live Gatherings</span>
          <h2 className="text-4xl md:text-6xl font-serif italic font-light">Upcoming Events</h2>
          <div className="w-12 h-px bg-cream/20 mx-auto mt-6"></div>
        </div>

        <div className="space-y-4">
          {events.map((event, i) => (
            <div 
              key={i} 
              className="group grid grid-cols-1 md:grid-cols-3 items-center p-8 md:p-12 border border-white/10 hover:border-white/30 transition-all duration-700 bg-white/[0.02] hover:bg-white/[0.05] rounded-sm gap-8 text-center"
            >
              {/* Date & Title Column */}
              <div className="flex flex-col items-center space-y-3">
                <p className="text-[10px] uppercase tracking-[0.4em] text-cream font-bold opacity-60">
                  {event.date}
                </p>
                <h3 className="text-2xl md:text-3xl font-serif italic text-cream/90 group-hover:text-cream transition-colors leading-tight max-w-[280px] mx-auto">
                  {event.title}
                </h3>
              </div>

              {/* Venue Column */}
              <div className="flex flex-col items-center">
                <p className="text-sm md:text-base font-light text-cream/60 tracking-widest font-sans transition-colors group-hover:text-cream/80 max-w-[200px]">
                  {event.venue}
                </p>
              </div>
              
              {/* Action Column */}
              <div className="flex justify-center">
                <a 
                  href={event.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[10px] uppercase tracking-[0.5em] font-bold border border-cream/20 px-10 py-4 rounded-full hover:bg-cream hover:text-dark transition-all duration-500 whitespace-nowrap"
                >
                  Tickets
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;