import React, { useState } from 'react';
import { FileText, Menu, X, ExternalLink, Download } from 'lucide-react';
import { Github } from './SocialIcons';
import { PERSONAL_INFO, TARGET_COMPANY } from '../data/portfolioData';

export default function Navbar({ onOpenCoverLetter, onOpenCV }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Circular Fit", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Life Events", href: "#events" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand matching demo style (e.g. Chayan Ad.) */}
          <a href="#home" className="flex items-center gap-2 text-slate-800 hover:text-blue-600 transition-colors">
            <span className="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-slate-900">
              Shafayat Shaan<span className="text-blue-600">.</span>
            </span>
            <span className="hidden md:inline-block px-2 py-0.5 text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full font-mono">
              Available for Web Roles
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-blue-600 transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTAs: Official CV & Cover Letter */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenCV}
              className="px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50 border border-slate-300 transition-colors flex items-center gap-1.5 shadow-sm"
              title="Pop up Official Curriculum Vitae"
            >
              <FileText className="w-4 h-4 text-blue-600" />
              <span>Official CV</span>
            </button>

            <button
              onClick={onOpenCoverLetter}
              className="px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all flex items-center gap-1.5 shadow-sm"
              title="Pop up Cover Letter for Wave Riders"
            >
              <FileText className="w-4 h-4" />
              <span>Cover Letter</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenCV}
              className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-200"
            >
              CV
            </button>
            <button
              onClick={onOpenCoverLetter}
              className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 text-white"
            >
              Letter
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-2 shadow-lg animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenCV(); }}
              className="w-full py-2.5 px-4 rounded-lg text-xs font-bold text-center text-slate-700 bg-slate-100 border border-slate-200"
            >
              View Official CV (PDF)
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenCoverLetter(); }}
              className="w-full py-2.5 px-4 rounded-lg text-xs font-bold text-center text-white bg-blue-600"
            >
              View Cover Letter (Wave Riders)
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
