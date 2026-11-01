import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Award, 
  Layers, 
  CheckCircle,
  FileText
} from 'lucide-react';
import { Github } from './SocialIcons';
import { PERSONAL_INFO, TARGET_COMPANY, EDUCATION, FACULTY_REFERENCES, PROJECTS } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden flex flex-col max-h-[94vh]">
        
        {/* Top Action Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 bg-slate-950 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              <FileText className="w-4 h-4" />
            </span>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white font-display">
                Official Curriculum Vitae — Shafayat Khan Shaan
              </h3>
              <span className="text-xs text-slate-400 font-mono">
                Target Role: Web Developer @ Wave Riders Ltd (Turaag Active)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold font-mono flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formatted Resume Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-slate-950/90 text-slate-300 font-sans print:bg-white print:text-black">
          
          {/* Header Contact Block */}
          <div className="border-b border-slate-800 pb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm font-semibold text-emerald-400 mt-1">
              Web Developer | Shopify &amp; Liquid Specialist | React Engineer
            </p>

            <div className="mt-3 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {PERSONAL_INFO.location}
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                {PERSONAL_INFO.phone}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                {PERSONAL_INFO.email}
              </span>
              <span className="flex items-center gap-1">
                <Github className="w-3.5 h-3.5 text-cyan-400" />
                github.com/SHAFAYAT222
              </span>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2">
              Executive Profile
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {PERSONAL_INFO.bio} Specifically targeting the Web Developer position at Wave Riders Limited (Turaag Active), offering verified competence in Shopify Theme Editor customization, Liquid template logic, responsive React SPAs, and SQL database management.
            </p>
          </div>

          {/* Education Timeline */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-4">
              Academic Background
            </h2>
            <div className="space-y-4">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <span className="font-bold text-white text-sm">{edu.degree}</span>
                    <span className="font-mono text-xs text-emerald-400 font-bold">{edu.score}</span>
                  </div>
                  <div className="text-xs text-slate-400 font-mono mb-2">
                    {edu.institution} | {edu.duration}
                  </div>
                  <p className="text-xs text-slate-300">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Academic Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-4">
              Featured Academic Projects
            </h2>
            <div className="space-y-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <span className="font-bold text-white text-sm">{proj.title}</span>
                    <span className="text-xs font-mono text-cyan-400">{proj.category}</span>
                  </div>
                  <div className="text-xs text-emerald-400/90 font-mono mb-2">
                    Supervised by: {proj.supervision.faculty} ({proj.supervision.title}, AIUB)
                  </div>
                  <p className="text-xs text-slate-300 mb-2">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tech.map(t => (
                      <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950 text-slate-400 border border-slate-800">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Competencies Matrix */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3">
              Technical Core
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800">
                <span className="font-bold text-white block mb-1">Shopify &amp; eCommerce</span>
                <span className="text-slate-400">Liquid, Theme Editor, Dynamic Sections, Metafields, PDP &amp; Collection layouts, Speed optimization.</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800">
                <span className="font-bold text-white block mb-1">Frontend Engineering</span>
                <span className="text-slate-400">React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Responsive &amp; Mobile-First Design.</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800">
                <span className="font-bold text-white block mb-1">Backend &amp; Database</span>
                <span className="text-slate-400">SQL (Relational databases), Node.js, Python, C#, OOP Principles, REST APIs.</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800">
                <span className="font-bold text-white block mb-1">Engineering Workflow</span>
                <span className="text-slate-400">Git/GitHub, Branching, Chrome DevTools, Clean code refactoring, Algorithmic optimization.</span>
              </div>
            </div>
          </div>

          {/* Academic References */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3">
              Faculty References (AIUB)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {FACULTY_REFERENCES.map((ref) => (
                <div key={ref.name} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                  <span className="font-bold text-white text-sm block">{ref.name}</span>
                  <span className="text-emerald-400 font-mono block">{ref.title}</span>
                  <span className="text-slate-400 block">{ref.department}</span>
                  <span className="text-slate-400 block">{ref.institution}</span>
                  <div className="mt-2 pt-2 border-t border-slate-800/80 text-[11px] text-slate-300">
                    <span className="font-semibold text-cyan-400">{ref.projectRelation}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Bottom Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs">
          <span className="font-mono text-slate-400">Shafayat Khan Shaan — Available Immediately</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
}
