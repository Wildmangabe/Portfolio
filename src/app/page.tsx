'use client'

import { useState } from 'react';
import { VantaTopology } from '@/components/ui/vanta-topology';
import { Navbar } from '@/components/ui/nav-bar';
import { LoadingScreen } from '@/components/ui/loading';
import { HomeSection } from '@/components/sections/home';
import { AboutSection } from '@/components/sections/about';
import { ExperienceSection } from '@/components/sections/experience';
import { ProjectsSection } from '@/components/sections/projects';
import { LeadershipSection } from '@/components/sections/leadership';
import { TechStackSection } from '@/components/sections/tech-stack';
import { ContactSection } from '@/components/sections/contact';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [vantaProgress, setVantaProgress] = useState(0);

  return (
    <>
      {isLoading && (
        <LoadingScreen 
          onLoadingComplete={() => setIsLoading(false)} 
          vantaProgress={vantaProgress}
        />
      )}
      
      <main>
        <VantaTopology onProgress={setVantaProgress} />
        <Navbar />
        <HomeSection isLoadingComplete={!isLoading} />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <TechStackSection />
        <LeadershipSection />
        <ContactSection />
      </main>
    </>
  );
}