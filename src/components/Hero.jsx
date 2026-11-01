import React from 'react';
import { FileText, Sparkles, MapPin, Building2, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, TARGET_COMPANY } from '../data/portfolioData';

export default function Hero({ onOpenCV, onOpenCoverLetter, onScrollToSection }) {
  return (
    <section id="home" className="py-12 sm:py-16 bg-[#f8f9fa] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Grid matching Page 1 of the demo UI */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Left Column: Portrait Card matching Demo Page 1 */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-3xl bg-white p-4 sm:p-5 shadow-lg border border-slate-200">
              
              {/* Photo Frame with blue backdrop matching CV and demo */}
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-gradient-to-b from-blue-100 to-blue-200 shadow-inner">
                <img
                  src={PERSONAL_INFO.avatarUrl}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 right-3 py-1.5 px-3 rounded-xl bg-white/95 backdrop-blur-sm border border-slate-200 text-center shadow-sm">
                  <span className="text-xs font-bold text-slate-800">
                    {PERSONAL_INFO.name}
                  </span>
                  <span className="text-[11px] text-blue-600 block font-mono">
                    AIUB CSE Undergraduate
                  </span>
                </div>
              </div>

              {/* Status pill under image */}
              <div className="mt-3 flex items-center justify-between px-2 text-xs text-slate-500 font-mono">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Kuril, Dhaka
                </span>
                <span className="text-blue-600 font-medium">
                  Gulshan 1 Commute Ready
                </span>
              </div>

            </div>
          </div>

          {/* Right Column: Text & 3 Clean Stacked Pill Buttons matching Demo Page 1 */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Target Job Callout Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
              <Building2 className="w-3.5 h-3.5" />
              <span>Target: Web Developer @ {TARGET_COMPANY.companyName}</span>
            </div>

            {/* Headline with signature handwritten blue script keyword */}
            <div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
                Hi, I'm Shafayat!
              </h1>
              
              <div className="mt-2 text-2xl sm:text-4xl font-extrabold text-slate-800">
                A Web &amp; Shopify <span className="font-script text-3xl sm:text-5xl text-blue-600 font-bold ml-1">Developer.</span>
              </div>
            </div>

            {/* Bio paragraph strictly tailored from student profile & demo intro */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify">
              "Welcome to my portfolio! I'm a passionate Computer Science undergraduate at American International University-Bangladesh (AIUB) focused on modern web engineering, clean maintainable code, and dynamic eCommerce interfaces. I specialize in Shopify Theme customization, Liquid template logic, responsive React SPAs, and database-driven web applications. Take a look at my work, verified credentials, and official application below."
            </p>

            {/* 3 Stacked Buttons matching Demo Page 1:
                - Skills
                - Qualifications (CV)
                - About & Cover Letter
            */}
            <div className="space-y-3 pt-2 max-w-md">
              <button
                onClick={() => onScrollToSection('skills')}
                className="demo-pill-btn flex items-center justify-center gap-2 font-semibold hover:border-blue-500 hover:text-blue-600"
              >
                <span>Skills &amp; Circular Fit</span>
              </button>

              <button
                onClick={onOpenCV}
                className="demo-pill-btn flex items-center justify-center gap-2 font-bold text-blue-700 border-blue-300 bg-blue-50/60 hover:bg-blue-100/70 hover:border-blue-500 shadow-sm"
              >
                <FileText className="w-4 h-4 text-blue-600" />
                <span>Qualifications (Official CV — Click to Pop Up)</span>
              </button>

              <button
                onClick={onOpenCoverLetter}
                className="demo-pill-btn flex items-center justify-center gap-2 font-bold text-emerald-700 border-emerald-300 bg-emerald-50/60 hover:bg-emerald-100/70 hover:border-emerald-500 shadow-sm"
              >
                <FileText className="w-4 h-4 text-emerald-600" />
                <span>About &amp; Cover Letter (Wave Riders — Click to Pop Up)</span>
              </button>
            </div>

            {/* Quick Circular Alignment Proof */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-500 font-mono">
              <span className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Shopify Theme Editor &amp; Liquid (95%)
              </span>
              <span className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                React &amp; Modern JS (92%)
              </span>
              <span className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                SQL &amp; Backend Logic (88%)
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
