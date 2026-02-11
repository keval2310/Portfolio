'use client';

import IntroSection from '@/components/sections/IntroSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import TechnologiesSection from '@/components/sections/TechnologiesSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <div className="pt-24">
      <IntroSection />
      <ProjectsSection />
      <TechnologiesSection />
      <ContactSection />
    </div>
  );
}
