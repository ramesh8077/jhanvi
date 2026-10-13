import React from 'react';

export default function ProjectsVideoHero() {
  return (
    <section className="hero-section">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="hero-video" 
        poster="/assets/images/residence/resi_16.jpg"
      >
        <source src="/assets/videos/hero-showcase.mp4" type="video/mp4" />
        <source src="https://cdn.coverr.co/videos/coverr-modern-building-architecture-5353/1080p.mp4" type="video/mp4" />
      </video>
      <div className="hero-section-content">
        <span style={{ 
          display: 'block', 
          fontSize: '0.78rem', 
          fontWeight: 800, 
          letterSpacing: '3px', 
          textTransform: 'uppercase', 
          color: '#c084fc', 
          marginBottom: '10px' 
        }}>
          ARCHITECTURE & INTERIOR ARCHIVE
        </span>
        <h1 className="hero-title zha-hero-title">
          PROJECTS
        </h1>
      </div>
    </section>
  );
}
