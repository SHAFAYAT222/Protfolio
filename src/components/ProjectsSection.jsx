import React from 'react';
import { Play, ExternalLink } from 'lucide-react';
import { Github } from './SocialIcons';
import { PROJECTS } from '../data/portfolioData';

export default function ProjectsSection({ onOpenDemoModal }) {
  return (
    <section id="projects" className="py-14 sm:py-20 bg-[#f8f9fa] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching Demo Pages 5 & 6 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800">
            Enjoy the <span className="font-script text-3xl sm:text-5xl text-blue-600 font-bold ml-1">Creativity...</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 font-mono">
            Production Web Applications &amp; Algorithmic Systems developed under AIUB faculty supervision
          </p>
        </div>

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((proj, idx) => (
            <div
              key={proj.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Project Image Banner */}
                <div className="relative aspect-video w-full bg-slate-100 overflow-hidden">
                  <img
                    src={proj.image}
                    alt={proj.shortTitle}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white/95 text-blue-700 shadow border border-slate-200">
                    {proj.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {proj.shortTitle}
                  </h3>

                  <div className="text-[11px] text-blue-700 font-mono bg-blue-50/70 p-2 rounded-lg border border-blue-100">
                    <span className="font-bold">Supervisor:</span> {proj.supervisor}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed text-justify">
                    {proj.description}
                  </p>

                  {/* Tech stack pills */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 text-slate-700 border border-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions matching Demo button style ("Show Portfolio") */}
              <div className="p-5 pt-0 flex items-center gap-2">
                <button
                  onClick={() => onOpenDemoModal(proj)}
                  className="flex-1 py-2 px-3 rounded-lg text-xs font-semibold text-white bg-slate-900 hover:bg-blue-600 transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Interactive Live Demo</span>
                </button>

                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-3 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center gap-1 border border-slate-200"
                  title="GitHub Repository"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Code</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
