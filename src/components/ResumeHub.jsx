import React from 'react';
import { FileText, Download, Printer, UserCheck, GraduationCap, CheckCircle } from 'lucide-react';
import { CV_DOCUMENT, COVER_LETTER_DOCUMENT, PERSONAL_INFO, TARGET_COMPANY } from '../data/portfolioData';

export default function ResumeHub({ onOpenCV, onOpenCoverLetter }) {
  return (
    <section id="resume" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800">
            Qualifications &amp; Official <span className="font-script text-3xl sm:text-5xl text-blue-600 font-bold ml-1">Documents</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 font-mono">
            Click either document below to pop up the exact authentic file prepared for Wave Riders Limited.
          </p>

          {/* TWO PROMINENT DIRECT POPUP CARDS */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            
            {/* Pop Up CV Card */}
            <div 
              onClick={onOpenCV}
              className="p-5 rounded-2xl bg-blue-50/60 hover:bg-blue-100/70 border-2 border-blue-200 hover:border-blue-500 shadow-sm transition-all cursor-pointer text-left group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="p-2.5 rounded-xl bg-blue-600 text-white shadow-md group-hover:scale-105 transition-transform">
                  <FileText className="w-5 h-5" />
                </span>
                <span className="text-[11px] font-mono text-blue-700 bg-white px-2 py-0.5 rounded border border-blue-200">
                  2 Pages • Formal AIUB
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                Official Curriculum Vitae (CV)
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Personal Info with photo, Education Qualifications table, Skills, Projects &amp; AIUB References.
              </p>
              <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:underline">
                <span>Click to Pop Up Exact CV &rarr;</span>
              </div>
            </div>

            {/* Pop Up Cover Letter Card */}
            <div 
              onClick={onOpenCoverLetter}
              className="p-5 rounded-2xl bg-emerald-50/60 hover:bg-emerald-100/70 border-2 border-emerald-200 hover:border-emerald-500 shadow-sm transition-all cursor-pointer text-left group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="p-2.5 rounded-xl bg-emerald-600 text-white shadow-md group-hover:scale-105 transition-transform">
                  <FileText className="w-5 h-5" />
                </span>
                <span className="text-[11px] font-mono text-emerald-700 bg-white px-2 py-0.5 rounded border border-emerald-200">
                  14 Oct 2026 • Circular Fit
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                Target Cover Letter
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Addressed to The Hiring Manager, Wave Riders Limited (Turaag Active), Gulshan 1, Dhaka.
              </p>
              <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 group-hover:underline">
                <span>Click to Pop Up Exact Letter &rarr;</span>
              </div>
            </div>

          </div>
        </div>

        {/* Embedded Exact Educational Qualifications Table */}
        <div className="bg-[#f8f9fa] rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
          
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-blue-600" />
              <span>Educational Qualifications (Direct from Official CV)</span>
            </h3>
            <button
              onClick={onOpenCV}
              className="text-xs font-bold text-blue-600 hover:underline font-mono"
            >
              Open Full CV &rarr;
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-slate-300 text-xs sm:text-sm text-left bg-white shadow-sm rounded-lg overflow-hidden">
              <thead className="bg-slate-100 text-slate-800">
                <tr>
                  <th className="border border-slate-300 p-2.5 font-bold">Degree</th>
                  <th className="border border-slate-300 p-2.5 font-bold">Institution</th>
                  <th className="border border-slate-300 p-2.5 font-bold">Board/University</th>
                  <th className="border border-slate-300 p-2.5 font-bold">Group/Major</th>
                  <th className="border border-slate-300 p-2.5 font-bold">Passing Year</th>
                  <th className="border border-slate-300 p-2.5 font-bold">Result (CGPA/GPA)</th>
                </tr>
              </thead>
              <tbody>
                {CV_DOCUMENT.education.map((edu, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="border border-slate-300 p-2.5 font-semibold text-blue-900">{edu.degree}</td>
                    <td className="border border-slate-300 p-2.5">{edu.institution}</td>
                    <td className="border border-slate-300 p-2.5 font-mono">{edu.board}</td>
                    <td className="border border-slate-300 p-2.5">{edu.major}</td>
                    <td className="border border-slate-300 p-2.5 font-mono">{edu.passingYear}</td>
                    <td className="border border-slate-300 p-2.5 font-bold text-blue-700 font-mono">{edu.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* AIUB References */}
          <div className="pt-4 border-t border-slate-200">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-3 flex items-center gap-1.5">
              <UserCheck className="w-4 h-4 text-blue-600" />
              <span>AIUB Academic References</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CV_DOCUMENT.references.map((ref) => (
                <div key={ref.name} className="p-4 rounded-xl bg-white border border-slate-200 text-xs shadow-sm">
                  <div className="font-bold text-slate-900 text-sm">{ref.name}</div>
                  <div className="text-blue-600 font-medium">{ref.designation}</div>
                  <div className="text-slate-500">{ref.organization}</div>
                  <div className="mt-1 font-mono text-slate-600">Email: {ref.email}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
