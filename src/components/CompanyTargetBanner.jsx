import React from 'react';
import { Target, Building2, MapPin, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { TARGET_COMPANY, PERSONAL_INFO } from '../data/portfolioData';

export default function CompanyTargetBanner({ onOpenCoverLetter, onScrollToSection }) {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-4">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-emerald-950/40 border border-emerald-500/20 shadow-xl shadow-black/50 backdrop-blur-xl p-4 sm:p-5">
        
        {/* Ambient glow in background */}
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 -mb-8 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          
          {/* Left: Job Match Badge & Description */}
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-400/30 text-emerald-400 shrink-0">
              <Target className="w-5 h-5" />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  Target Circular Application
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  {TARGET_COMPANY.location}
                </span>
              </div>

              <h2 className="text-sm sm:text-base font-semibold text-slate-100 flex flex-wrap items-center gap-1.5">
                <span>Tailored for</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 font-bold">
                  {TARGET_COMPANY.companyName}
                </span>
                <span className="text-slate-400">— {TARGET_COMPANY.position}</span>
              </h2>

              <p className="text-xs text-slate-400 mt-0.5 max-w-2xl line-clamp-1 sm:line-clamp-none">
                {TARGET_COMPANY.circularSummary}
              </p>
            </div>
          </div>

          {/* Right: Quick Match Metrics & Action */}
          <div className="flex items-center flex-wrap gap-2.5 sm:self-center">
            <div className="hidden md:flex items-center gap-3 px-3 py-1.5 rounded-lg bg-slate-950/60 border border-slate-800 text-xs">
              <span className="text-slate-400">Circular Fit:</span>
              <span className="font-mono font-bold text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> 95% Match
              </span>
            </div>

            <button
              onClick={() => onScrollToSection('skills')}
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-750 transition-colors flex items-center gap-1.5 border border-slate-700/60"
            >
              <span>View Fit Matrix</span>
              <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
            </button>

            <button
              onClick={onOpenCoverLetter}
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 transition-colors flex items-center gap-1.5 shadow-sm shadow-emerald-500/20"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Cover Letter</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
