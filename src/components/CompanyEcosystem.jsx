import React from 'react';

export default function CompanyEcosystem() {
  const partners = [
    { name: "Wave Riders Limited", sub: "Parent Organization" },
    { name: "Turaag Active", sub: "Activewear Storefront" },
    { name: "Shopify Theme 2.0", sub: "Liquid & Dynamic Sections" },
    { name: "React.js", sub: "Frontend Architecture" },
    { name: "Tailwind CSS", sub: "Responsive Design" },
    { name: "SQL Databases", sub: "Data Persistence" },
    { name: "Python Logic", sub: "Algorithmic Pipelines" },
    { name: "Git & GitHub", sub: "Version Control" },
    { name: "AIUB CSE", sub: "Academic Rigor" },
  ];

  return (
    <section className="py-12 bg-[#f8f9fa] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Title matching Demo Page 3 with blue script accent */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">
          Target Organization &amp; Tech <span className="font-script text-3xl sm:text-4xl text-blue-600 font-bold ml-1">Ecosystem</span>
        </h2>
        
        <p className="mt-2 text-xs sm:text-sm text-slate-500 font-mono">
          Technologies and enterprise ecosystems mapped for Wave Riders Limited (Turaag Active), Gulshan 1
        </p>

        {/* Logo Badges Grid matching Demo Page 3 */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {partners.map((p) => (
            <div
              key={p.name}
              className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-400 transition-all flex flex-col items-center justify-center text-center group"
            >
              <span className="font-bold text-slate-800 text-sm group-hover:text-blue-600 transition-colors">
                {p.name}
              </span>
              <span className="text-[11px] text-slate-400 font-mono mt-0.5">
                {p.sub}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
