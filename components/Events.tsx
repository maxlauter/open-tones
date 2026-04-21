import React, { useState } from 'react';

const MONTH_NAMES = [
  'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
  'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER',
] as const;

function formatEventDateTime(date: Date): string {
  const month = MONTH_NAMES[date.getMonth()];
  const day = date.getDate();
  let h = date.getHours();
  const minutes = date.getMinutes();
  const period = h >= 12 ? 'PM' : 'AM';
  h = h % 12;
  if (h === 0) h = 12;
  const time =
    minutes === 0
      ? `${h}:00 ${period}`
      : `${h}:${minutes.toString().padStart(2, '0')} ${period}`;
  return `${month} ${day} • ${time}`;
}

type EventItem = {
  start: Date;
  title: string;
  venue: string;
  link?: string;
};

/** All gatherings; upcoming vs past is derived from the visitor's current time. */
const ALL_EVENTS: EventItem[] = [
  {
    start: new Date(2026, 0, 17, 10, 0),
    title: 'Sound Bath and Brunch w/ Soft Bar x Apothekary',
    venue: 'Soft Bar, Brooklyn',
    link: 'https://resy.com/cities/new-york-ny/venues/soft_bar_cafe/events/apothekary-x-soft-bar-sound-bath-brunch-2026-01-17/preview/b8c05b16-be32-4e55-85ee-ef491fbe2fed',
  },
  {
    start: new Date(2026, 0, 24, 18, 30),
    title: 'Sound Meditation & Healing Journey',
    venue: 'Reforesters Laboratory, Brooklyn',
    link: 'https://luma.com/ca58e9l4',
  },
  {
    start: new Date(2026, 1, 22, 16, 0),
    title: 'Sound Meditation & Healing Journey',
    venue: 'Reforesters Laboratory, Brooklyn',
    link: 'https://luma.com/k1bynifh',
  },
  {
    start: new Date(2026, 2, 29, 16, 0),
    title: 'Sound Meditation & Healing Journey',
    venue: 'Reforesters Laboratory, Brooklyn',
    link: 'https://luma.com/28zpm3yk',
  },
  {
    start: new Date(2026, 3, 19, 16, 0),
    title: 'Sound Meditation & Healing Journey',
    venue: 'Reforesters Laboratory, Brooklyn',
    link: 'https://luma.com/a5ol9m9t',
  },
  {
    start: new Date(2026, 4, 15, 18, 0),
    title: 'Sound Meditation & Healing Journey',
    venue: 'Reforesters Laboratory, Brooklyn',
    link: 'https://luma.com/118r79gl',
  },
  {
    start: new Date(2026, 5, 12, 18, 0),
    title: 'Sound Meditation & Healing Journey',
    venue: 'Reforesters Laboratory, Brooklyn',
  },
  {
    start: new Date(2026, 6, 12, 16, 0),
    title: 'Sound Meditation & Healing Journey',
    venue: 'Reforesters Laboratory, Brooklyn',
  },
];

const Events: React.FC = () => {
  const [pastOpen, setPastOpen] = useState(false);

  const now = Date.now();
  const upcoming = ALL_EVENTS.filter((e) => e.start.getTime() >= now).sort(
    (a, b) => a.start.getTime() - b.start.getTime(),
  );
  const past = ALL_EVENTS.filter((e) => e.start.getTime() < now).sort(
    (a, b) => b.start.getTime() - a.start.getTime(),
  );

  return (
    <section id="events" className="py-24 px-8 bg-dark border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 text-center space-y-4">
          <span className="text-[10px] uppercase tracking-[0.5em] text-cream/40 font-bold block">Live Gatherings</span>
          <h2 className="text-4xl md:text-6xl font-serif italic font-light">Upcoming Events</h2>
          <div className="w-12 h-px bg-cream/20 mx-auto mt-6"></div>
        </div>

        <div className="space-y-4">
          {upcoming.length === 0 ? (
            <p className="text-center text-cream/55 font-light text-sm tracking-wide py-12 border border-white/10 rounded-sm bg-white/[0.02]">
              New gatherings will be announced here soon.
            </p>
          ) : (
            upcoming.map((event, i) => (
              <div
                key={`${event.start.toISOString()}-${i}`}
                className="group grid grid-cols-1 md:grid-cols-3 items-center p-8 md:p-12 border border-white/10 hover:border-white/30 transition-all duration-700 bg-white/[0.02] hover:bg-white/[0.05] rounded-sm gap-8 text-center"
              >
                <div className="flex flex-col items-center space-y-5">
                  <time
                    dateTime={event.start.toISOString()}
                    className="text-xs md:text-sm uppercase tracking-[0.32em] text-cream font-semibold leading-relaxed"
                  >
                    {formatEventDateTime(event.start)}
                  </time>
                  <div className="w-8 h-px bg-cream/25" aria-hidden />
                  <h3 className="text-2xl md:text-3xl font-serif italic text-cream/90 group-hover:text-cream transition-colors leading-tight max-w-[280px] mx-auto">
                    {event.title}
                  </h3>
                </div>

                <div className="flex flex-col items-center">
                  <p className="text-sm md:text-base font-light text-cream/60 tracking-widest font-sans transition-colors group-hover:text-cream/80 max-w-[200px]">
                    {event.venue}
                  </p>
                </div>

                <div className="flex justify-center">
                  {event.link ? (
                    <a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-[10px] uppercase tracking-[0.5em] font-bold border border-cream/20 px-10 py-4 rounded-full hover:bg-cream hover:text-dark transition-all duration-500 whitespace-nowrap"
                    >
                      Tickets
                    </a>
                  ) : (
                    <span
                      className="text-[10px] uppercase tracking-[0.35em] font-bold text-cream/50 whitespace-nowrap"
                      aria-label="Tickets on sale soon"
                    >
                      Tickets on Sale Soon!
                    </span>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {past.length > 0 && (
          <div className="mt-16 text-center">
            <button
              type="button"
              onClick={() => setPastOpen((o) => !o)}
              aria-expanded={pastOpen}
              aria-controls="past-events-list"
              id="past-events-toggle"
              className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.45em] font-bold text-cream/45 hover:text-cream/85 transition-colors duration-500 border-b border-transparent hover:border-cream/30 pb-1"
            >
              Past events
              <span
                className={`inline-block text-cream/55 transition-transform duration-500 ${pastOpen ? 'rotate-180' : ''}`}
                aria-hidden
              >
                ▾
              </span>
            </button>

            <div
              id="past-events-list"
              role="region"
              aria-labelledby="past-events-toggle"
              aria-hidden={!pastOpen}
              className={`grid transition-[grid-template-rows] duration-500 ease-out ${pastOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
            >
              <div className="overflow-hidden min-h-0">
                <ul className="mt-10 text-left max-w-2xl mx-auto border border-white/10 rounded-sm bg-white/[0.02] divide-y divide-white/[0.06]">
                  {past.map((event, i) => (
                    <li
                      key={`${event.start.toISOString()}-past-${i}`}
                      className="px-6 py-5 md:px-8 md:py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                    >
                      <div className="space-y-2 min-w-0">
                        <time
                          dateTime={event.start.toISOString()}
                          className="block text-[11px] md:text-xs uppercase tracking-[0.28em] text-cream/80 font-semibold"
                        >
                          {formatEventDateTime(event.start)}
                        </time>
                        <p className="font-serif italic text-lg text-cream/85 leading-snug">
                          {event.title}
                        </p>
                        <p className="text-xs md:text-sm font-light text-cream/50 tracking-widest">
                          {event.venue}
                        </p>
                      </div>
                      <div className="flex shrink-0 sm:justify-end">
                        <a
                          href={event.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block text-[9px] uppercase tracking-[0.4em] font-bold border border-white/15 px-6 py-3 rounded-full text-cream/55 hover:text-cream hover:border-cream/25 transition-all duration-500 whitespace-nowrap"
                        >
                          View
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Events;
