import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoShowcase from './components/VideoShowcase';
import CompanyEcosystem from './components/CompanyEcosystem';
import CompetencyMatrix from './components/CompetencyMatrix';
import ProjectsSection from './components/ProjectsSection';
import LifeEventsSection from './components/LifeEventsSection';
import ResumeHub from './components/ResumeHub';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// Interactive & Exact Document Modals
import OfficialCVModal from './components/OfficialCVModal';
import OfficialCoverLetterModal from './components/OfficialCoverLetterModal';
import VideoModal from './components/VideoModal';
import ProjectDemoModal from './components/ProjectDemoModal';

export default function App() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [isCoverLetterModalOpen, setIsCoverLetterModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedDemoProject, setSelectedDemoProject] = useState(null);

  const handleScrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-800 flex flex-col font-sans selection:bg-blue-500 selection:text-white">
      
      {/* 1. Header & Sticky Navbar */}
      <Navbar 
        onOpenCV={() => setIsCVModalOpen(true)}
        onOpenCoverLetter={() => setIsCoverLetterModalOpen(true)} 
      />

      <main className="flex-grow">
        
        {/* 2. Hero Section matching Demo Page 1 */}
        <Hero 
          onOpenCV={() => setIsCVModalOpen(true)}
          onOpenCoverLetter={() => setIsCoverLetterModalOpen(true)}
          onScrollToSection={handleScrollToSection}
        />

        {/* 3. Quote & Formal Video Resume matching Demo Page 2 */}
        <VideoShowcase 
          onOpenVideoModal={() => setIsVideoModalOpen(true)}
        />

        {/* 4. Brands & Tech Ecosystem matching Demo Page 3 */}
        <CompanyEcosystem />

        {/* 5. Target Circular Match & Competency Matrix */}
        <CompetencyMatrix 
          onOpenCV={() => setIsCVModalOpen(true)}
          onOpenCoverLetter={() => setIsCoverLetterModalOpen(true)}
        />

        {/* 6. Recent Life Events (4 visual cards) matching Demo Page 4 */}
        <LifeEventsSection />

        {/* 7. Production Projects ("Enjoy the Creativity...") matching Demo Pages 5-6 */}
        <ProjectsSection 
          onOpenDemoModal={(proj) => setSelectedDemoProject(proj)}
        />

        {/* 8. Qualifications & Official Documents Hub */}
        <ResumeHub 
          onOpenCV={() => setIsCVModalOpen(true)}
          onOpenCoverLetter={() => setIsCoverLetterModalOpen(true)}
        />

        {/* 9. Contact Section matching Demo Page 7 (WhatsApp + Split Dark/Light Form) */}
        <ContactSection />

      </main>

      {/* Footer */}
      <Footer 
        onOpenCV={() => setIsCVModalOpen(true)}
        onOpenCoverLetter={() => setIsCoverLetterModalOpen(true)}
      />

      {/* EXACT OFFICIAL CV POPUP MODAL (From user's PDF) */}
      <OfficialCVModal 
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />

      {/* EXACT OFFICIAL COVER LETTER POPUP MODAL (From user's PDF) */}
      <OfficialCoverLetterModal 
        isOpen={isCoverLetterModalOpen}
        onClose={() => setIsCoverLetterModalOpen(false)}
      />

      {/* Interactive Video Walkthrough Presentation Modal */}
      <VideoModal 
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />

      {/* Interactive Live Project Demo Sandbox Modal */}
      <ProjectDemoModal 
        project={selectedDemoProject}
        isOpen={!!selectedDemoProject}
        onClose={() => setSelectedDemoProject(null)}
      />

    </div>
  );
}
