import React from 'react';
import { Link } from 'react-router-dom';
import SubCategoryLayout from '../components/common/SubCategoryLayout';

export default function ExpertisePage() {
  const domains = [
    {
      title: 'Luxury Farm Houses',
      link: '/projects',
      image: '/assets/images/farmhouse/dining_1.jpg',
      desc: 'Expansive private retreats blending natural surroundings with bespoke luxury.'
    },
    {
      title: 'Commercial Projects',
      link: '/projects',
      image: '/assets/images/commercial/VIEW 1 FINAL.jpg',
      desc: 'High-end retail environments and premium commercial spaces designed for maximum brand impact.'
    },
    {
      title: 'Hospital Architecture',
      link: '/projects',
      image: '/assets/images/hospital/exterior_1.jpg',
      desc: 'State-of-the-art medical facilities combining functional efficiency with healing environments.'
    },
    {
      title: 'Corporate Offices',
      link: '/projects',
      image: '/assets/images/offices/logix_park_1.jpg',
      desc: 'Innovative workspaces engineered to foster teamwork and corporate identity.'
    },
    {
      title: 'Scenic Design',
      link: '/projects',
      image: '/assets/images/scenic/scenic_1.jpg',
      desc: 'Theatrical environments and immersive sets crafted for storytelling and spatial drama.'
    },
    {
      title: 'Restaurants & Clubs',
      link: '/projects',
      image: '/assets/images/restaurants/rest_norenj_61.jpg',
      desc: 'Experiential dining and hospitality venues with distinctive atmospheric identities.'
    },
    {
      title: 'Premium Residences',
      link: '/projects',
      image: '/assets/images/residence/resi_10.jpg',
      desc: 'Bespoke residential interiors focused on personalized luxury and refined aesthetics.'
    }
  ];

  return (
    <SubCategoryLayout
      title="Our Expertise"
      category="DOMAINS OF PRACTICE"
      heroImage="/assets/images/expertise-hero.jpg"
      imagePosition="center 58%"
      subtitle="Creating Spaces, Shaping Experiences"
      conceptTitle="Multidisciplinary Excellence"
      conceptDescription={
        <>
          <span style={{ display: 'block', fontSize: '1.25rem', fontWeight: 600, fontStyle: 'italic', marginBottom: '20px' }}>
            "Wherever I go, I create."
          </span>
          From architecture and interiors to scenography and experiential design, my work moves freely across disciplines. I see every space as a canvas — one where form, light, material, movement and emotion come together to create an experience.<br /><br />
          The result is design that is thoughtful in detail, expressive in character and deeply connected to the people who inhabit it.
        </>
      }
    >
      <style dangerouslySetInnerHTML={{ __html: EXPERTISE_CSS }} />
      <section className="expertise-grid-section">
        <div className="expertise-grid">
          {domains.map((domain, idx) => (
            <Link to={domain.link} className={`expertise-card ${idx === 0 || idx === 3 ? 'large' : 'regular'}`} key={idx}>
              <div className="expertise-card-img">
                <img src={domain.image} alt={domain.title} loading="lazy" />
                <div className="expertise-overlay"></div>
              </div>
              <div className="expertise-card-content">
                <h3>{domain.title}</h3>
                <p>{domain.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* DESIGN METHODOLOGY SECTION */}
      <section className="methodology-section">
        <div className="methodology-header">
          <h2>Our Methodology</h2>
          <p>A rigorous, research-driven approach to spatial design, ensuring every project is unique, functional, and timeless.</p>
        </div>
        <div className="methodology-steps">
          <div className="step-card">
            <span className="step-num">01</span>
            <h4>Conceptualization</h4>
            <p>We begin with deep research into the site context, client vision, and programmatic requirements to forge a strong design narrative.</p>
          </div>
          <div className="step-card">
            <span className="step-num">02</span>
            <h4>Schematic Design</h4>
            <p>Translating concepts into spatial realities through sketches, 3D modeling, and material palette curation.</p>
          </div>
          <div className="step-card">
            <span className="step-num">03</span>
            <h4>Technical Detailing</h4>
            <p>Producing comprehensive architectural blueprints, MEP layouts, and bespoke furniture details for precise execution.</p>
          </div>
          <div className="step-card">
            <span className="step-num">04</span>
            <h4>Execution & Delivery</h4>
            <p>Rigorous site supervision and quality control to ensure the built environment perfectly matches the envisioned design.</p>
          </div>
        </div>
      </section>

    </SubCategoryLayout>
  );
}

const EXPERTISE_CSS = `
.expertise-grid-section {
  padding: 60px 4% 40px 4%;
  background: #ffffff;
}

.expertise-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 400px;
  gap: 24px;
  max-width: 1400px;
  margin: 0 auto;
}

.expertise-card {
  position: relative;
  overflow: hidden;
  display: block;
  background: #000;
  border-radius: 2px;
  cursor: pointer;
  text-decoration: none;
}

.expertise-card.large {
  grid-column: span 2;
  grid-row: span 1;
}

.expertise-card-img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.expertise-card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.expertise-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%);
  transition: opacity 0.5s ease;
}

.expertise-card:hover .expertise-card-img img {
  transform: scale(1.06);
}
.expertise-card:hover .expertise-overlay {
  background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%);
}

.expertise-card-content {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 40px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  color: #ffffff;
}

.expertise-number {
  font-family: var(--font-heading, sans-serif);
  font-size: 0.8rem;
  letter-spacing: 2px;
  color: #ffffff;
  margin-bottom: 12px;
  opacity: 0.8;
}

.expertise-card h3 {
  font-family: var(--font-heading, sans-serif);
  font-size: 1.8rem;
  font-weight: 500;
  margin: 0 0 12px 0;
  letter-spacing: 0.5px;
  text-transform: capitalize;
  transform: translateY(10px);
  transition: transform 0.4s ease;
  color: #ffffff !important;
  -webkit-text-fill-color: #ffffff !important;
  background: none !important;
}

.expertise-card p {
  font-family: 'Inter', var(--font-body, sans-serif);
  font-size: 0.95rem;
  line-height: 1.6;
  color: #ffffff !important;
  margin: 0 0 24px 0;
  max-width: 90%;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.4s ease, transform 0.4s ease;
}

/* Hover Animations */
.expertise-card:hover h3 {
  transform: translateY(0);
}
.expertise-card:hover p {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.1s;
}

/* Responsive */
@media (max-width: 1024px) {
  .expertise-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .expertise-card.large {
    grid-column: span 2;
  }
}

@media (max-width: 768px) {
  .expertise-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: 350px;
  }
  .expertise-card.large {
    grid-column: 1;
  }
  .expertise-card-content {
    padding: 24px;
  }
  .expertise-card h3 {
    font-size: 1.5rem;
    transform: translateY(0);
  }
  .expertise-card p {
    font-size: 0.85rem;
    opacity: 1;
    transform: translateY(0);
    display: none; /* Hide description on very small screens to save space */
  }
}

/* Methodology Section */
.methodology-section {
  padding: 40px 6% 80px 6%;
  background: #fdfdfd;
  border-top: 1px solid #eaeaea;
}

.methodology-header {
  max-width: 800px;
  margin: 0 auto 60px auto;
  text-align: center;
}

.methodology-header h2 {
  font-family: var(--font-heading, sans-serif);
  font-size: 2.8rem;
  color: #006b70;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.methodology-header p {
  font-family: 'Inter', var(--font-body, sans-serif);
  font-size: 1.1rem;
  color: #666666;
  line-height: 1.6;
}

.methodology-steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  max-width: 1400px;
  margin: 0 auto;
}

.step-card {
  background: #ffffff;
  padding: 40px 30px;
  border: 1px solid #eaeaea;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.step-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.05);
}

.step-num {
  font-family: var(--font-heading, sans-serif);
  font-size: 2.5rem;
  color: #006b70;
  opacity: 0.2;
  font-weight: 800;
  display: block;
  margin-bottom: 20px;
}

.step-card h4 {
  font-family: var(--font-heading, sans-serif);
  font-size: 1.3rem;
  font-weight: 700;
  color: #006b70;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-style: normal !important;
}

.step-card p {
  font-family: 'Inter', var(--font-body, sans-serif);
  font-size: 0.9rem;
  font-weight: 400;
  color: #555555;
  line-height: 1.6;
  text-align: justify !important;
}

/* Call To Action */
.expertise-cta {
  padding: 100px 4%;
  background: #111111;
  text-align: center;
  color: #ffffff;
}

.expertise-cta h2 {
  font-family: var(--font-heading, sans-serif);
  font-size: 2.8rem;
  margin-bottom: 20px;
}

.expertise-cta p {
  font-family: 'Inter', var(--font-body, sans-serif);
  font-size: 1.1rem;
  color: #cccccc;
  margin-bottom: 40px;
}

.expertise-cta-btn {
  display: inline-block;
  padding: 16px 40px;
  background: var(--accent-gradient);
  color: #111111;
  font-family: var(--font-heading, sans-serif);
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-decoration: none;
  transition: background 0.3s ease, transform 0.3s ease;
}

.expertise-cta-btn:hover {
  background: #ffffff;
  transform: translateY(-2px);
}

@media (max-width: 1024px) {
  .methodology-steps {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .methodology-steps {
    grid-template-columns: 1fr;
  }
  .methodology-header h2, .expertise-cta h2 {
    font-size: 2rem;
  }
}
`;
