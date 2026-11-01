import React from 'react';
import { ExternalLink, Maximize2, Sparkles, Video } from 'lucide-react';
import { VIDEO_SHOWCASE } from '../data/portfolioData';

export default function VideoShowcase({ onOpenVideoModal }) {
  const embedUrl = VIDEO_SHOWCASE.embedUrl || "https://www.youtube.com/embed/XAMGlwtadgw";
  const youtubeWatchUrl = VIDEO_SHOWCASE.videoUrl || "https://www.youtube.com/watch?v=XAMGlwtadgw";

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 2-Column Grid matching Page 2 of the demo UI */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Quote Card matching Demo Page 2 */}
          <div className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left">
            <blockquote className="space-y-4">
              <p className="text-2xl sm:text-4xl font-extrabold text-slate-800 leading-tight">
                "First, <span className="font-script text-3xl sm:text-5xl text-blue-600 font-bold block sm:inline">solve the problem.</span> Then, write the code."
              </p>

              <footer className="pt-2">
                <cite className="not-italic text-sm sm:text-base text-slate-500 font-medium font-sans">
                  — John Johnson
                </cite>
              </footer>
            </blockquote>

            <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto lg:mx-0 text-justify sm:text-left">
              Clean modular architecture, computational algorithmic clarity, and performance-first eCommerce development. Watch my real introduction video to learn more about my background, problem-solving mindset, and software engineering capabilities.
            </p>

            {/* Quick action buttons */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <button
                onClick={onOpenVideoModal}
                className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-blue-50 hover:text-blue-600 border border-slate-300 transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <Maximize2 className="w-3.5 h-3.5 text-blue-600" />
                <span>Modal Player &amp; Chapters</span>
              </button>

              <a
                href={youtubeWatchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-red-600 hover:bg-red-700 transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <span>Watch on YouTube</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Real Embedded YouTube Player (16:9 Responsive) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-300 shadow-xl group">

              {/* Top Bar Label */}
              <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
                  <span className="font-semibold text-white truncate">
                    Formal Video Resume || Shafayat Khan Shaan
                  </span>
                </div>
                <span className="text-[11px] font-mono text-blue-400 bg-blue-950/60 border border-blue-900 px-2 py-0.5 rounded">
                  Official Embed
                </span>
              </div>

              {/* 16:9 Responsive Video Container */}
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  className="w-full h-full"
                  src={`${embedUrl}?rel=0&modestbranding=1`}
                  title="Formal Video Resume || Shafayat Khan Shaan"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>

              {/* Bottom Caption Strip */}
              <div className="px-4 py-2 bg-slate-900/95 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Plays directly in portfolio • 1080p Supported</span>
                <button
                  onClick={onOpenVideoModal}
                  className="text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors"
                >
                  <span>View Structured Chapters</span>
                  <Sparkles className="w-3 h-3" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
