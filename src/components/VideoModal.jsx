import React, { useState } from 'react';
import { 
  X, 
  Play, 
  ExternalLink,
  Sparkles,
  Film
} from 'lucide-react';
import { VIDEO_SHOWCASE, PERSONAL_INFO, TARGET_COMPANY } from '../data/portfolioData';

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [activeChapter, setActiveChapter] = useState(0);
  const embedUrl = VIDEO_SHOWCASE.embedUrl || "https://www.youtube.com/embed/XAMGlwtadgw";
  const youtubeWatchUrl = VIDEO_SHOWCASE.videoUrl || "https://www.youtube.com/watch?v=XAMGlwtadgw";

  const chapterDetails = [
    {
      title: "Introduction & Academic Foundation at AIUB",
      time: "0:00",
      content: "Shafayat outlines his CSE undergraduate journey at AIUB, maintaining strong algorithmic thinking, systems design, and collaborative project experience under university faculty.",
      code: "// Academic Focus\nconst student = {\n  name: 'Shafayat Khan Shaan',\n  university: 'AIUB',\n  status: 'Undergraduate CSE (CGPA 3.02)',\n  core: ['Data Structures', 'OOP', 'Web Systems', 'Databases']\n};"
    },
    {
      title: "Shopify Theme Editor & Liquid Dynamic Sections",
      time: "0:45",
      content: "Demonstration of modular Liquid schema architecture, responsive drawer sections, JSON templates, and custom hero components crafted specifically for high-velocity activewear storefronts like Turaag Active.",
      code: "{% schema %}\n{\n  'name': 'Turaag Dynamic Banner',\n  'settings': [\n    { 'type': 'text', 'id': 'title', 'label': 'Headline' },\n    { 'type': 'collection', 'id': 'active_collection', 'label': 'Target Activewear' }\n  ]\n}\n{% endschema %}"
    },
    {
      title: "Metafields Architecture for Activewear Products",
      time: "1:50",
      content: "Walkthrough of custom Shopify Metafield namespaces: mapping athletic fabric compression levels, sweat-wicking ratings, and dynamic size chart drawers dynamically without bloated apps.",
      code: "// Binding Metafields\nconst fabricSpecs = product.metafields.turaag.compression.value;\nconsole.log(`Activewear Spec: ${fabricSpecs} | Ultra-lightweight`);"
    },
    {
      title: "React Component State & Responsive Best Practices",
      time: "2:40",
      content: "Deep dive into reactive state containers, mobile viewport adaptation, custom hooks, and Tailwind CSS utility design systems ensuring fast first-contentful paint (FCP).",
      code: "const useCartDrawer = () => {\n  const [isOpen, setIsOpen] = useState(false);\n  const toggle = () => setIsOpen(prev => !prev);\n  return { isOpen, toggle };\n};"
    },
    {
      title: "Coffee Shop POS & Pathao Clone Deep Dive",
      time: "3:30",
      content: "Breakdown of the Coffee Shop Management & Billing Web App (under Prof. K. M. Imtiaz-Ud-Din) and Pathao SuperApp Clone (under Prof. Aminun Nahar) demonstrating end-to-end full-stack mastery.",
      code: "// SQL Transaction integrity\nBEGIN TRANSACTION;\nINSERT INTO OrderLogs (OrderId, Customer, TotalAmount) VALUES (...);\nCOMMIT;"
    },
    {
      title: "Commitment to Wave Riders Limited (Turaag Active)",
      time: "4:00",
      content: "Direct commitment to full-time on-site work at Gulshan 1, Dhaka. Passionate about actively scaling Turaag Active's digital flagship store and collaborating with the in-house product team.",
      code: "// Commitment Ready\nconst candidateStatus = {\n  location: 'Kuril, Dhaka (Easy Commute to Gulshan 1)',\n  availability: 'Immediate Onboarding',\n  passion: 'eCommerce & Activewear Tech'\n};"
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/90">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-xl bg-red-500/10 text-red-400 border border-red-500/30">
              <Film className="w-4 h-4 fill-current" />
            </span>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white">
                Formal Video Resume || Shafayat Khan Shaan
              </h3>
              <span className="text-xs text-slate-400 font-mono">
                Shafayat Khan Shaan ➔ Wave Riders Limited (Turaag Active)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={youtubeWatchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-red-600/90 hover:bg-red-600 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <span>YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Real Embedded 16:9 Video Player */}
        <div className="relative aspect-video bg-black w-full overflow-hidden">
          <iframe
            className="w-full h-full"
            src={`${embedUrl}?autoplay=1&rel=0&modestbranding=1`}
            title="Formal Video Resume || Shafayat Khan Shaan"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        {/* Chapter Selection Bar */}
        <div className="p-4 sm:p-5 bg-slate-950 border-t border-slate-800 overflow-y-auto max-h-48">
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Video Walkthrough Topics &amp; Competencies:
            </span>
            <span className="text-[11px] font-mono text-cyan-400">
              Active: {chapterDetails[activeChapter].title}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {chapterDetails.map((ch, idx) => (
              <button
                key={ch.title}
                onClick={() => setActiveChapter(idx)}
                className={`p-2.5 rounded-xl text-left text-xs transition-all flex items-start gap-2 ${
                  activeChapter === idx
                    ? 'bg-blue-600/20 border border-blue-500/50 text-blue-300 font-semibold shadow-sm'
                    : 'bg-slate-900 border border-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <span className="font-mono text-cyan-400 shrink-0">{ch.time}</span>
                <span className="truncate">{ch.title}</span>
              </button>
            ))}
          </div>

          {/* Chapter Summary Snippet */}
          <div className="mt-3 p-3 rounded-xl bg-slate-900/90 border border-slate-800/90 text-xs text-slate-300">
            <span className="font-bold text-white mr-1.5">Overview:</span>
            {chapterDetails[activeChapter].content}
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Wave Riders Limited (Turaag Active) — Gulshan 1, Dhaka</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium"
          >
            Close Player
          </button>
        </div>

      </div>
    </div>
  );
}
