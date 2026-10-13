import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';

import HomePage from './pages/HomePage';
import ClientelePage from './pages/ClientelePage';
import ContactPage from './pages/ContactPage';
import CulturePage from './pages/CulturePage';
import CareersPage from './pages/CareersPage';
import MyJourneyPage from './pages/MyJourneyPage';
import OurStoryPage from './pages/OurStoryPage';
import ProjectsPage from './pages/ProjectsPage';
import TeamPage from './pages/TeamPage';
import ExpertisePage from './pages/ExpertisePage';

// --- LEGAL PAGES ---
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/index.html" element={<HomePage />} />

        <Route path="/team" element={<TeamPage />} />
        <Route path="/team.html" element={<TeamPage />} />

        <Route path="/clientele" element={<ClientelePage />} />
        <Route path="/clientele.html" element={<ClientelePage />} />

        <Route path="/contact" element={<ContactPage />} />
        <Route path="/contact.html" element={<ContactPage />} />

        <Route path="/culture" element={<CulturePage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/careers.html" element={<CareersPage />} />

        <Route path="/my-journey" element={<MyJourneyPage />} />
        <Route path="/my-journey.html" element={<MyJourneyPage />} />

        <Route path="/our-story" element={<OurStoryPage />} />
        <Route path="/our-story.html" element={<OurStoryPage />} />

        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects.html" element={<ProjectsPage />} />

        <Route path="/expertise" element={<ExpertisePage />} />
        <Route path="/expertise.html" element={<ExpertisePage />} />

        {/* LEGAL PAGES */}
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/privacy-policy.html" element={<PrivacyPolicyPage />} />

        <Route path="/terms" element={<TermsPage />} />
        <Route path="/terms.html" element={<TermsPage />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
