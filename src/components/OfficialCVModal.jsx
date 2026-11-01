import React from 'react';
import { X, Printer, Download, Check, FileText } from 'lucide-react';
import { CV_DOCUMENT, PERSONAL_INFO, TARGET_COMPANY } from '../data/portfolioData';

export default function OfficialCVModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/80 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-4xl rounded-2xl bg-white shadow-2xl border border-slate-300 my-auto flex flex-col max-h-[94vh] overflow-hidden">
        
        {/* Top Control Bar */}
        <div className="bg-slate-800 text-white px-5 py-3.5 flex items-center justify-between border-b border-slate-700">
          <div className="flex items-center gap-2.5">
            <span className="p-1.5 rounded-lg bg-blue-600/30 text-blue-400 border border-blue-500/40">
              <FileText className="w-4 h-4" />
            </span>
            <div>
              <h3 className="text-sm font-semibold text-white">
                Official Curriculum Vitae — Shafayat Khan Shaan
              </h3>
              <p className="text-[11px] text-slate-300 font-mono">
                Authentic AIUB Student CV • 26 October 2026
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs text-white font-medium transition-colors flex items-center gap-1.5 shadow"
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

        {/* Paper Document Container matching exact 2-Page PDF layout */}
        <div className="p-4 sm:p-10 overflow-y-auto bg-slate-100/70 flex justify-center">
          <div 
            id="printable-document" 
            className="w-full max-w-3xl bg-white shadow-md border border-slate-200 p-6 sm:p-12 text-black font-sans text-xs sm:text-sm leading-normal space-y-5"
          >
            
            {/* Top Section: Personal Information + Photo Box */}
            <div className="flex items-start justify-between gap-6 pb-2">
              <div className="space-y-1">
                <h2 className="font-bold text-base sm:text-lg text-black underline decoration-slate-400 underline-offset-4 mb-2">
                  Personal Information
                </h2>
                <div><span className="font-semibold">Name:</span> {CV_DOCUMENT.header.name}</div>
                <div><span className="font-semibold">Address:</span> {CV_DOCUMENT.header.address}</div>
                <div><span className="font-semibold">District:</span> {CV_DOCUMENT.header.district}</div>
                <div><span className="font-semibold">Mobile:</span> {CV_DOCUMENT.header.mobile}</div>
                <div><span className="font-semibold">Email:</span> {CV_DOCUMENT.header.email}</div>
                <div><span className="font-semibold">Date of Birth:</span> {CV_DOCUMENT.header.dob}</div>
                <div><span className="font-semibold">Nationality:</span> {CV_DOCUMENT.header.nationality}</div>
                <div><span className="font-semibold">GitHub:</span> <a href={`https://${CV_DOCUMENT.header.github}`} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">{CV_DOCUMENT.header.github}</a></div>
              </div>

              {/* Exact Passport Photo Frame from PDF */}
              <div className="w-28 h-32 sm:w-32 sm:h-36 border-2 border-slate-700 p-1 bg-white shrink-0 shadow-sm">
                <img
                  src={PERSONAL_INFO.avatarUrl}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Career Objective */}
            <div className="pt-1">
              <h2 className="font-bold text-sm sm:text-base text-black underline decoration-slate-400 underline-offset-4 mb-1.5">
                Career Objective
              </h2>
              <p className="text-justify text-slate-800 leading-relaxed">
                {CV_DOCUMENT.careerObjective}
              </p>
            </div>

            {/* Educational Qualifications Table */}
            <div className="pt-1">
              <h2 className="font-bold text-sm sm:text-base text-black underline decoration-slate-400 underline-offset-4 mb-2">
                Educational Qualifications
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-slate-400 text-xs text-left">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="border border-slate-400 p-2 font-bold text-black">Degree</th>
                      <th className="border border-slate-400 p-2 font-bold text-black">Institution</th>
                      <th className="border border-slate-400 p-2 font-bold text-black">Board/University</th>
                      <th className="border border-slate-400 p-2 font-bold text-black">Group/Major</th>
                      <th className="border border-slate-400 p-2 font-bold text-black">Passing Year</th>
                      <th className="border border-slate-400 p-2 font-bold text-black">Result (CGPA/GPA)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CV_DOCUMENT.education.map((edu, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50">
                        <td className="border border-slate-400 p-2 font-medium">{edu.degree}</td>
                        <td className="border border-slate-400 p-2">{edu.institution}</td>
                        <td className="border border-slate-400 p-2">{edu.board}</td>
                        <td className="border border-slate-400 p-2">{edu.major}</td>
                        <td className="border border-slate-400 p-2">{edu.passingYear}</td>
                        <td className="border border-slate-400 p-2 font-semibold text-black">{edu.result}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Skills */}
            <div className="pt-1">
              <h2 className="font-bold text-sm sm:text-base text-black underline decoration-slate-400 underline-offset-4 mb-2">
                Skills
              </h2>
              <ul className="space-y-1 text-slate-800 list-disc list-inside">
                <li>
                  <span className="font-semibold text-black">Computer Skills:</span> {CV_DOCUMENT.skills.computerSkills.join(', ')}
                </li>
                <li>
                  <span className="font-semibold text-black">Technical Skills:</span> {CV_DOCUMENT.skills.technicalSkills.join(', ')}
                </li>
                <li>
                  <span className="font-semibold text-black">Language Skills:</span> {CV_DOCUMENT.skills.languageSkills.join(', ')}
                </li>
                <li>
                  <span className="font-semibold text-black">Soft Skills:</span> {CV_DOCUMENT.skills.softSkills.join(', ')}
                </li>
              </ul>
            </div>

            {/* Academic Projects / Web Applications */}
            <div className="pt-1 space-y-3">
              <h2 className="font-bold text-sm sm:text-base text-black underline decoration-slate-400 underline-offset-4 mb-2">
                Academic Projects / Web Applications
              </h2>

              {CV_DOCUMENT.projects.map((proj) => (
                <div key={proj.id} className="space-y-0.5 text-xs sm:text-sm">
                  <div>
                    <span className="font-bold text-black">Title:</span> {proj.title}
                  </div>
                  <div className="text-slate-800 text-justify">
                    <span className="font-bold text-black">Description:</span> {proj.description}
                  </div>
                  <div className="text-slate-700 italic">
                    <span className="font-bold not-italic text-black">Supervisor:</span> {proj.supervisor}
                  </div>
                </div>
              ))}
            </div>

            {/* References (Page 2 of PDF) */}
            <div className="pt-3 border-t border-slate-300">
              <h2 className="font-bold text-sm sm:text-base text-black underline decoration-slate-400 underline-offset-4 mb-3">
                References
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm">
                {CV_DOCUMENT.references.map((ref) => (
                  <div key={ref.name} className="space-y-0.5">
                    <div><span className="font-semibold">Name:</span> {ref.name}</div>
                    <div><span className="font-semibold">Designation:</span> {ref.designation}</div>
                    <div><span className="font-semibold">Organization:</span> {ref.organization}</div>
                    <div><span className="font-semibold">Email:</span> <a href={`mailto:${ref.email}`} className="text-blue-700 hover:underline">{ref.email}</a></div>
                  </div>
                ))}
              </div>

              {/* Signoff & Date */}
              <div className="mt-8 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
                <div>
                  <span className="font-semibold">Signature:</span> <span className="font-mono text-slate-600">{CV_DOCUMENT.signature}</span>
                </div>
                <div>
                  <span className="font-semibold">Date:</span> {CV_DOCUMENT.date}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-3 flex items-center justify-between text-xs text-slate-500 font-mono">
          <span>Shafayat Khan Shaan • AIUB CSE Undergraduate</span>
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
