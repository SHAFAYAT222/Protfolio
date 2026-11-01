import React, { useState } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  Printer, 
  Mail, 
  Download, 
  Sparkles, 
  Building2, 
  MapPin, 
  Calendar,
  ExternalLink,
  Phone
} from 'lucide-react';
import { COVER_LETTER_DATA, TARGET_COMPANY, PERSONAL_INFO } from '../data/portfolioData';

export default function CoverLetterModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const fullText = `
${COVER_LETTER_DATA.date}

To:
${COVER_LETTER_DATA.recipient.name}
${COVER_LETTER_DATA.recipient.company}
${COVER_LETTER_DATA.recipient.address}

Subject: ${COVER_LETTER_DATA.subject}

${COVER_LETTER_DATA.salutation}

${COVER_LETTER_DATA.paragraphs.join('\n\n')}

${COVER_LETTER_DATA.signoff}
${COVER_LETTER_DATA.applicant}
${COVER_LETTER_DATA.applicantDetails}
    `.trim();

    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Top Header */}
        <div className="p-4 sm:p-6 border-b border-slate-800 bg-slate-950/90 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white font-display">
                Formal Job Application: Web Developer at Wave Riders Limited (Turaag Active)
              </h2>
              <span className="text-xs text-slate-400 font-mono">
                Applicant: Shafayat Khan Shaan | AIUB CSE Undergraduate
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Letterhead Bar */}
        <div className="px-6 py-3 bg-slate-950/50 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <Building2 className="w-3.5 h-3.5" />
              {TARGET_COMPANY.companyName}
            </span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              {TARGET_COMPANY.location}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-slate-500" />
            <span>{COVER_LETTER_DATA.date}</span>
          </div>
        </div>

        {/* Rendered Letter Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-slate-300 text-sm leading-relaxed font-sans bg-slate-900/60 selection:bg-emerald-500/30">
          
          {/* Recipient Details */}
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/90 text-xs font-mono space-y-1 text-slate-300">
            <div className="text-emerald-400 font-semibold">{COVER_LETTER_DATA.recipient.name}</div>
            <div className="font-bold text-white text-sm">{COVER_LETTER_DATA.recipient.company}</div>
            <div className="text-slate-400">{COVER_LETTER_DATA.recipient.address}</div>
          </div>

          {/* Subject Line */}
          <div className="py-2 border-b border-slate-800">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-cyan-400 block mb-1">
              Subject:
            </span>
            <p className="font-bold text-white text-base">
              {COVER_LETTER_DATA.subject}
            </p>
          </div>

          {/* Salutation */}
          <p className="font-semibold text-slate-100 pt-2">
            {COVER_LETTER_DATA.salutation}
          </p>

          {/* Paragraphs */}
          {COVER_LETTER_DATA.paragraphs.map((p, idx) => (
            <p key={idx} className="text-slate-300 text-sm leading-relaxed">
              {p}
            </p>
          ))}

          {/* Signoff */}
          <div className="pt-6 border-t border-slate-800/80 space-y-2">
            <p className="text-slate-300">{COVER_LETTER_DATA.signoff}</p>
            <p className="font-bold text-white text-base font-display">
              {COVER_LETTER_DATA.applicant}
            </p>
            <div className="text-xs font-mono text-slate-400 whitespace-pre-line leading-relaxed">
              {COVER_LETTER_DATA.applicantDetails}
            </div>
          </div>

        </div>

        {/* Modal Action Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-800 bg-slate-950 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-800 hover:bg-slate-750 text-slate-200 hover:text-white transition-colors flex items-center gap-2 border border-slate-700"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-cyan-400" />
                  <span>Copy Letter Text</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-800 hover:bg-slate-750 text-slate-200 hover:text-white transition-colors flex items-center gap-2 border border-slate-700"
            >
              <Printer className="w-4 h-4 text-teal-400" />
              <span>Print / Save PDF</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Interview%20Invitation%20-%20Web%20Developer%20(Wave%20Riders)`}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:opacity-90 transition-opacity flex items-center gap-1.5 shadow-md shadow-emerald-500/20"
            >
              <Mail className="w-4 h-4" />
              <span>Send Direct Email</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
