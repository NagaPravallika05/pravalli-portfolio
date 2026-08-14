import React, { useState } from 'react';
import { initialProfile, skillsData, projectsData, learningJourneyData } from './data/portfolioData';
import { ProfileConfig, Project, SkillItem, LearningMilestone } from './types/portfolio';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { WhatIDo } from './components/WhatIDo';
import { Projects } from './components/Projects';
import { LearningJourney } from './components/LearningJourney';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { CustomizeDrawer } from './components/CustomizeDrawer';

export default function App() {
  const [profile, setProfile] = useState<ProfileConfig>(initialProfile);
  const [skills] = useState<SkillItem[]>(skillsData);
  const [projects] = useState<Project[]>(projectsData);
  const [milestones] = useState<LearningMilestone[]>(learningJourneyData);

  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCustomizeOpen, setIsCustomizeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080C14] text-slate-100 font-sans antialiased flex flex-col selection:bg-cyan-500 selection:text-slate-950 relative overflow-x-hidden">
      {/* 1. Navbar with 3D Glass Dock */}
      <Navbar
        profile={profile}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenCustomize={() => setIsCustomizeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section with 3D Live Sandbox & Interactive Particle Mesh */}
        <Hero profile={profile} />

        {/* 3. About Section with 3D Illuminated Principles */}
        <About profile={profile} />

        {/* 4. Skills Section with Staggered 3D Cards & Interactive Tech Lab */}
        <Skills skills={skills} />

        {/* 5. What I Do Section with 3D Floating Capability Cards */}
        <WhatIDo />

        {/* 6. Projects Section with 3D Perspective Card Tilt */}
        <Projects projects={projects} />

        {/* 7. Learning Journey / 3D Neon Timeline */}
        <LearningJourney milestones={milestones} />

        {/* 8. Contact Section with 3D Cyber-Glass Form */}
        <Contact profile={profile} />
      </main>

      {/* 9. Footer with 3D Grid Reflection */}
      <Footer profile={profile} />

      {/* Helper Modals with 3D Glassmorphic Overlays */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        profile={profile}
        skills={skills}
        projects={projects}
        milestones={milestones}
      />

      <CustomizeDrawer
        isOpen={isCustomizeOpen}
        onClose={() => setIsCustomizeOpen(false)}
        profile={profile}
        onUpdateProfile={setProfile}
      />
    </div>
  );
}
