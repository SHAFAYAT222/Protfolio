import React, { useState } from 'react';
import { X, Printer, Download, Copy, Check, FileText } from 'lucide-react';
import { COVER_LETTER_DOCUMENT, PERSONAL_INFO, TARGET_COMPANY } from '../data/portfolioData';

export default function OfficialCoverLetterModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = `
${COVER_LETTER_DOCUMENT.sender.name}
${COVER_LETTER_DOCUMENT.sender.address}
Email: ${COVER_LETTER_DOCUMENT.sender.email}
Phone: ${COVER_LETTER_DOCUMENT.sender.phone}

Date: ${COVER_LETTER_DOCUMENT.date}

${COVER_LETTER_DOCUMENT.recipient.title}
${COVER_LETTER_DOCUMENT.recipient.company}
${COVER_LETTER_DOCUMENT.recipient.address}

Subject: ${COVER_LETTER_DOCUMENT.subject}

${COVER_LETTER_DOCUMENT.salutation}

${COVER_LETTER_DOCUMENT.paragraphs.join('\n\n')}

${COVER_LETTER_DOCUMENT.closing}

${COVER_LETTER_DOCUMENT.signoff}

${COVER_LETTER_DOCUMENT.name}

Signature: ${COVER_LETTER_DOCUMENT.signature}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/80 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-3xl rounded-2xl bg-white shadow-2xl border border-slate-300 my-auto flex flex-col max-h-[92vh] overflow-hidden">
        
        {/* Modal Top Control Bar */}
        <div className="bg-slate-800 text-white px-5 py-3.5 flex items-center justify-between border-b border-slate-700">
          <div className="flex items-center gap-2.5">
            <span className="p-1.5 rounded-lg bg-blue-600/30 text-blue-400 border border-blue-500/40">
              <FileText className="w-4 h-4" />
            </span>
            <div>
              <h3 className="text-sm font-semibold text-white">
                Official Cover Letter — Wave Riders Limited (Turaag Active)
              </h3>
              <p className="text-[11px] text-slate-300 font-mono">
                Authentic Document • 14 October 2026
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-xs text-white transition-colors flex items-center gap-1.5 font-medium"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "Copied" : "Copy Text"}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs text-white font-medium transition-colors flex items-center gap-1.5 shadow"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors ml-1"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Paper Document Container matching exact PDF layout */}
        <div className="p-6 sm:p-12 overflow-y-auto bg-slate-100/70 flex justify-center">
          <div 
            id="printable-document" 
            className="w-full max-w-2xl bg-white shadow-md border border-slate-200 p-8 sm:p-14 text-slate-900 font-sans text-sm sm:text-base leading-relaxed"
            style={{ minHeight: '850px' }}
          >
            
            {/* Sender Info Block */}
            <div className="mb-6 space-y-0.5 text-slate-800">
              <div className="font-bold text-base text-black">{COVER_LETTER_DOCUMENT.sender.name}</div>
              <div>{COVER_LETTER_DOCUMENT.sender.address}</div>
              <div>Email: {COVER_LETTER_DOCUMENT.sender.email}</div>
              <div>Phone: {COVER_LETTER_DOCUMENT.sender.phone}</div>
            </div>

            {/* Date */}
            <div className="mb-6 text-slate-800">
              Date: {COVER_LETTER_DOCUMENT.date}
            </div>

            {/* Recipient Block */}
            <div className="mb-6 space-y-0.5 text-slate-800">
              <div>{COVER_LETTER_DOCUMENT.recipient.title}</div>
              <div className="font-semibold text-black">{COVER_LETTER_DOCUMENT.recipient.company}</div>
              <div>{COVER_LETTER_DOCUMENT.recipient.address}</div>
            </div>

            {/* Subject */}
            <div className="mb-6 font-bold text-black">
              Subject: {COVER_LETTER_DOCUMENT.subject}
            </div>

            {/* Salutation */}
            <div className="mb-4 text-black">
              {COVER_LETTER_DOCUMENT.salutation}
            </div>

            {/* Paragraphs */}
            <div className="space-y-4 text-slate-800 leading-relaxed text-justify">
              {COVER_LETTER_DOCUMENT.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Closing */}
            <div className="mt-6 mb-4 text-slate-800">
              {COVER_LETTER_DOCUMENT.closing}
            </div>

            <div className="mb-6 text-slate-800">
              {COVER_LETTER_DOCUMENT.signoff}
            </div>

            <div className="mb-6 font-bold text-black">
              {COVER_LETTER_DOCUMENT.name}
            </div>

            <div className="pt-2 text-slate-800">
              Signature: <span className="font-mono text-slate-600">{COVER_LETTER_DOCUMENT.signature}</span>
            </div>

          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-3 flex items-center justify-between text-xs text-slate-500 font-mono">
          <span>Targeting: Web Development at Wave Riders Limited</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
