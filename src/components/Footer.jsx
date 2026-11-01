import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO, TARGET_COMPANY } from '../data/portfolioData';

export default function Footer({ onOpenCoverLetter, onOpenCV }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          
          <div className="text-center sm:text-left">
            <span className="font-bold text-slate-900 text-sm">
              Shafayat Khan Shaan<span className="text-blue-600">.</span>
            </span>
            <div className="mt-0.5 text-slate-500 font-mono">
              Target Candidate for <span className="text-blue-700 font-semibold">{TARGET_COMPANY.companyName}</span>
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              American International University-Bangladesh (AIUB) • Department of CSE
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 font-medium">
            <button onClick={onOpenCV} className="text-slate-600 hover:text-blue-600">
              Official CV
            </button>
            <button onClick={onOpenCoverLetter} className="text-slate-600 hover:text-blue-600">
              Cover Letter
            </button>
            <a href="#projects" className="text-slate-600 hover:text-blue-600">
              Projects
            </a>
            <a href="#contact" className="text-slate-600 hover:text-blue-600">
              Contact
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors flex items-center gap-1.5 font-mono text-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-blue-600" />
          </button>

        </div>

      </div>
    </footer>
  );
}
