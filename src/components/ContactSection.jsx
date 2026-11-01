import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageCircle, ExternalLink } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO, TARGET_COMPANY } from '../data/portfolioData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Web Developer Opportunity — Wave Riders Limited (Turaag Active)',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({ particleCount: 50, spread: 70, origin: { y: 0.6 } });
    }, 800);
  };

  return (
    <section id="contact" className="py-14 sm:py-20 bg-[#f8f9fa] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header matching Demo Page 7 */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800">
            Need help?
          </h2>
          <div className="mt-1 text-2xl sm:text-4xl font-extrabold text-slate-800">
            Feel free to <span className="font-script text-3xl sm:text-5xl text-blue-600 font-bold ml-1">contact</span> me anytime!
          </div>
        </div>

        {/* Big WhatsApp Banner matching Demo Page 7 */}
        <div className="max-w-md mx-auto mb-12 text-center">
          <a
            href="https://wa.me/8801875261071?text=Hello%20Shafayat,%20we%20reviewed%20your%20application%20for%20Wave%20Riders%20Limited"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-300 hover:border-emerald-500 shadow-sm hover:shadow-md transition-all group"
          >
            {/* WhatsApp Green Icon */}
            <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <MessageCircle className="w-7 h-7 fill-current" />
            </div>

            <div className="text-left">
              <span className="text-[11px] font-mono text-slate-400 block uppercase">Direct WhatsApp</span>
              <span className="text-xl sm:text-2xl font-bold font-mono text-slate-900 group-hover:text-emerald-600 transition-colors">
                01875261071
              </span>
            </div>
          </a>
        </div>

        {/* Split Card matching Demo Page 7:
            - Left: Dark sidebar with contact details & socials
            - Right: Clean form with "Feel free to ask any Question!"
        */}
        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-xl border border-slate-300 bg-white grid grid-cols-1 md:grid-cols-12">
          
          {/* Left Dark Sidebar matching Demo Page 7 (4 Cols) */}
          <div className="md:col-span-4 bg-[#1e293b] text-white p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-700 pb-3">
                Contact
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div>
                  <span className="text-slate-400 block text-[11px] font-mono">Phone:</span>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="font-semibold text-white hover:text-blue-400">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>

                <div>
                  <span className="text-slate-400 block text-[11px] font-mono">Email:</span>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="font-semibold text-white hover:text-blue-400 break-all">
                    {PERSONAL_INFO.email}
                  </a>
                </div>

                <div>
                  <span className="text-slate-400 block text-[11px] font-mono">Address:</span>
                  <span className="font-semibold text-white">
                    Kuril, Dhaka, Bangladesh
                  </span>
                  <span className="block text-[11px] text-slate-400 mt-0.5">
                    District: Tangail, Bangladesh
                  </span>
                </div>
              </div>
            </div>

            {/* Social Icons row matching Demo Page 7 */}
            <div className="pt-4 border-t border-slate-700">
              <span className="text-xs text-slate-400 block mb-2 font-mono">Connect Online:</span>
              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 text-white flex items-center justify-center transition-colors"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 text-white flex items-center justify-center transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-emerald-600 text-white flex items-center justify-center transition-colors"
                  title="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Clean Form matching Demo Page 7 (8 Cols) */}
          <div className="md:col-span-8 p-6 sm:p-8 bg-white">
            <div className="border-b border-slate-200 pb-3 mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                Feel free to ask any Question!
              </h3>
              <p className="text-xs text-slate-500 font-mono mt-0.5">
                Looking forward to hearing from you!
              </p>
              <div className="text-[11px] text-blue-600 font-mono mt-1">
                Recipient: <span className="font-semibold">{PERSONAL_INFO.email}</span>
              </div>
            </div>

            {isSubmitted ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900">Inquiry Dispatched!</h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Thank you! Shafayat Khan Shaan has received your message and will reply to <span className="font-mono text-blue-600">{formData.email}</span> shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-3 px-4 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-700"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. HR Team / Wave Riders Limited"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. recruitment@waveridersbd.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Subject Line
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Message / Inquiry Details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows="3"
                    required
                    placeholder="Write your inquiry or interview invite..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-blue-500"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 px-4 rounded-lg font-bold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Question / Inquiry</span>
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
