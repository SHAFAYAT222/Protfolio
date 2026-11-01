import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  Code2, 
  Layers, 
  Database, 
  ShoppingBag,
  FileCode2
} from 'lucide-react';
import { COMPETENCY_MATRIX, TARGET_COMPANY } from '../data/portfolioData';

export default function CompetencyMatrix({ onOpenCoverLetter, onOpenCV }) {
  const [activeTab, setActiveTab] = useState('circular'); // 'circular', 'code'

  return (
    <section id="skills" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Target Job Circular Alignment</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800">
            Skills &amp; Circular <span className="font-script text-3xl sm:text-5xl text-blue-600 font-bold ml-1">Fit</span>
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
            Directly mapping Shafayat Khan Shaan's engineering capabilities against the Web Developer requirements published by <span className="font-semibold text-blue-700">{TARGET_COMPANY.companyName}</span> in Gulshan 1, Dhaka.
          </p>

          {/* Toggle */}
          <div className="mt-6 inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200">
            <button
              onClick={() => setActiveTab('circular')}
              className={`px-4 sm:px-5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'circular'
                  ? 'bg-white text-blue-700 shadow-sm border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Wave Riders Circular Fit
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`px-4 sm:px-5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'code'
                  ? 'bg-white text-blue-700 shadow-sm border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Liquid &amp; Section Demo
            </button>
          </div>
        </div>

        {/* Tab 1: Circular Fit Cards */}
        {activeTab === 'circular' && (
          <div className="space-y-6">
            
            {/* 4 Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {COMPETENCY_MATRIX.map((item, idx) => (
                <div 
                  key={item.skill}
                  className="p-6 rounded-2xl bg-[#f8f9fa] border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-white text-blue-700 border border-slate-200 font-mono">
                        {item.tag}
                      </span>
                      <span className="text-2xl font-extrabold font-mono text-blue-600">
                        {item.matchPercentage}%
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {item.skill}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed text-justify">
                      {item.description}
                    </p>

                    {/* Progress Bar */}
                    <div className="mt-4 h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full bg-blue-600 transition-all duration-1000"
                        style={{ width: `${item.matchPercentage}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Highlight pills */}
                  <div className="mt-4 pt-3 border-t border-slate-200 flex flex-wrap gap-1.5">
                    {item.highlights.map((hl) => (
                      <span 
                        key={hl}
                        className="px-2 py-0.5 rounded text-[11px] bg-white text-slate-700 border border-slate-200 flex items-center gap-1"
                      >
                        <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                        <span>{hl}</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick action bar */}
            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
              <span className="text-xs text-blue-950 font-medium">
                Want to review the complete verified qualifications and academic trajectory?
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={onOpenCV}
                  className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm transition-colors"
                >
                  Pop Up Official CV
                </button>
                <button
                  onClick={onOpenCoverLetter}
                  className="px-3.5 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs font-semibold transition-colors"
                >
                  Pop Up Cover Letter
                </button>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Liquid Section Architecture */}
        {activeTab === 'code' && (
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5 font-mono text-xs text-slate-200 overflow-x-auto shadow-xl">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-slate-400">
              <span className="text-blue-400 font-bold">sections/turaag-active-hero.liquid</span>
              <span className="text-slate-400 text-[11px]">Shopify Theme 2.0 Dynamic Section</span>
            </div>
            <pre className="text-slate-300 leading-relaxed font-mono">
{`{% comment %}
  Turaag Active — High-Performance Product Hero Section
  Author: Shafayat Khan Shaan (Tailored for Wave Riders Ltd)
{% endcomment %}

<section class="turaag-product-showcase relative py-12" id="section-{{ section.id }}">
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      
      {%- comment -%} Product Visual Gallery {%- endcomment -%}
      <div class="product-gallery">
        <img 
          src="{{ product.featured_image | image_url: width: 800 }}"
          alt="{{ product.title | escape }}"
          loading="lazy"
          class="rounded-2xl w-full h-auto object-cover shadow-xl"
        />
      </div>

      {%- comment -%} Dynamic Product Details & Metafields {%- endcomment -%}
      <div class="product-info space-y-4">
        <span class="badge text-xs uppercase tracking-wider text-blue-600">
          {{ product.metafields.turaag.fabric_type.value | default: "Breathable Aerodry" }}
        </span>

        <h1 class="text-3xl font-bold text-slate-900">{{ product.title }}</h1>
        <div class="price-box text-xl font-mono text-blue-600">
          {{ product.price | money_with_currency }}
        </div>

        {%- render 'turaag-variant-picker', product: product -%}

        {%- form 'product', product -%}
          <input type="hidden" name="id" value="{{ product.selected_or_first_available_variant.id }}">
          <button type="submit" class="w-full py-3.5 bg-blue-600 text-white font-bold rounded-xl shadow-lg">
            Add to Bag — Turaag Active
          </button>
        {%- endform -%}
      </div>

    </div>
  </div>
</section>`}
            </pre>
          </div>
        )}

      </div>
    </section>
  );
}
