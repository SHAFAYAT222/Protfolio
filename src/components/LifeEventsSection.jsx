import React, { useState } from 'react';
import { LIFE_EVENTS } from '../data/portfolioData';
import { X, Award } from 'lucide-react';

export default function LifeEventsSection() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <section id="events" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching Demo Page 4 */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800">
            Recent Life <span className="font-script text-3xl sm:text-5xl text-blue-600 font-bold ml-1">Events</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500">
            You can expand this section for more recent activities.
          </p>
        </div>

        {/* 4 Cards Grid exactly matching Demo Page 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LIFE_EVENTS.map((event) => (
            <div
              key={event.id}
              onClick={() => setSelectedEvent(event)}
              className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all cursor-pointer flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Photo frame */}
                <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-4 text-center">
                  <h3 className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {event.title}
                  </h3>

                  {/* Award / Winner Badge */}
                  <div className="my-2 inline-block px-2.5 py-0.5 rounded text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200">
                    {event.award}
                  </div>

                  <p className="text-xs text-slate-500 text-justify leading-relaxed line-clamp-4">
                    {event.description}
                  </p>
                </div>
              </div>

              {/* Bottom detail action */}
              <div className="p-3 bg-slate-50 border-t border-slate-100 text-center">
                <span className="text-[11px] font-semibold text-blue-600 group-hover:underline">
                  View Full Highlight &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Expanded Event */}
        {selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
            <div className="relative w-full max-w-lg rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden">
              <div className="relative aspect-video w-full bg-slate-100">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-6 space-y-3">
                <div className="inline-block px-2.5 py-0.5 rounded text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200">
                  {selectedEvent.award}
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-display">
                  {selectedEvent.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed text-justify">
                  {selectedEvent.description}
                </p>
                <div className="pt-3 flex justify-end">
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="px-4 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
