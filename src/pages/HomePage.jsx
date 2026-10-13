import React from 'react';
import HeroSlideshow from '../components/home/HeroSlideshow';
import BrandBanner from '../components/home/BrandBanner';
import PhilosophyIntro from '../components/home/PhilosophyIntro';
import FounderSection from '../components/home/FounderSection';
import CollaboratorSection from '../components/home/CollaboratorSection';
import FeaturedProjectsGrid from '../components/home/FeaturedProjectsGrid';
import TeamSection from '../components/home/TeamSection';
import TrustSection from '../components/home/TrustSection';
import GlobalPerspective from '../components/home/GlobalPerspective';
import ExpertiseGrid from '../components/home/ExpertiseGrid';
import Testimonials from '../components/home/Testimonials';

export default function HomePage() {
  return (
    <main className="homepage">
      <HeroSlideshow />
      <PhilosophyIntro />
      <BrandBanner />
      <ExpertiseGrid />
      <FeaturedProjectsGrid />
      <FounderSection />
      <CollaboratorSection />
      <TeamSection />
      <TrustSection />
      <Testimonials />
      <GlobalPerspective />
    </main>
  );
}
