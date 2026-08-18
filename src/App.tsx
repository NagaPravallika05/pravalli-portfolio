import React, { useState } from 'react';
import { initialProfile, skillsData, projectsData, learningJourneyData } from './data/portfolioData';
import { ProfileConfig, Project, SkillItem, LearningMilestone } from './types/portfolio';
import { SmoothScrollProvider } from './components/SmoothScrollProvider';
import { ScrollProgress } from './components/ScrollProgress';
import { CustomCursor } from './components/CustomCursor';
import { ThreeCanvas } from './components/ThreeCanvas';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { LearningJourney } from './components/LearningJourney';
import { Achievements } from './components/Achievements';
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
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  return (
    <SmoothScrollProvider>
      {/* 1. Introductory Luxury Loading Reveal */}
      <LoadingScreen
        name={profile.name}
        onComplete={() => setIsLoadingComplete(true)}
      />

      {/* 2. Top Scroll Progress Line */}
      <ScrollProgress />

      {/* 3. Smooth Desktop Custom Cursor */}
      <CustomCursor />

      {/* 4. Main 3D WebGL Storytelling Scene Canvas */}
      <ThreeCanvas />

      {/* Background Ambience & Noise Gradient */}
      <div className="fixed inset-0 bg-[#06080F] -z-20 pointer-events-none" />
      <div className="fixed inset-0 bg-radial-gradient -z-10 pointer-events-none opacity-60" />
      <div className="fixed inset-0 bg-grid-pattern -z-10 pointer-events-none opacity-40" />

      {/* Main Container */}
      <div className="min-h-screen text-slate-100 font-sans antialiased flex flex-col relative selection:bg-cyan-500 selection:text-slate-950 overflow-x-hidden">
        {/* Floating Navbar */}
        <Navbar
          profile={profile}
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenCustomize={() => setIsCustomizeOpen(true)}
        />

        {/* Continuous Storytelling Sections */}
        <main className="flex-1 relative z-10">
          {/* Section 1: Hero */}
          <Hero profile={profile} />

          {/* Section 2: About */}
          <About profile={profile} />

          {/* Section 3: Skills */}
          <Skills skills={skills} />

          {/* Section 4: Projects (Selected Work) */}
          <Projects projects={projects} />

          {/* Section 5: Experience / Learning Journey */}
          <LearningJourney milestones={milestones} />

          {/* Section 6: Achievements */}
          <Achievements />

          {/* Section 7: Contact */}
          <Contact profile={profile} />
        </main>

        {/* Section 8: Footer */}
        <Footer profile={profile} />

        {/* Helper Modals */}
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
    </SmoothScrollProvider>
  );
}
