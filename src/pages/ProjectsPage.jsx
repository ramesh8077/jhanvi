import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageHero from "../components/common/PageHero";

// ─── CURATED PROJECT DATA WITH SINGLE IMAGES ────────────────────────────────
const ALL_PROJECTS = [
  // MIXED (TOP 9)
  { id: 'c1', title: 'Premium Showroom', location: 'gurugram', category: 'commercial', image: '/assets/images/commercial/VIEW 1 FINAL.jpg' },
  { id: 'f1', title: 'Double-Height Dining', location: 'delhi ncr', category: 'farmhouse', image: '/assets/images/farmhouse/dining_1.jpg' },
  { id: 'h1', title: 'Architectural Elevation', location: 'gurugram', category: 'hospital', image: '/assets/images/hospital/exterior_1.jpg' },
  { id: 'resi1', title: 'Exterior View', location: 'new delhi', category: 'residential', image: '/assets/images/residence/luxury_villa_exterior.jpeg' },
  { id: 's1', title: 'Spatial Concept', location: 'germany / india', category: 'scenic', image: '/assets/images/scenic/scenic_1.jpg' },
  { id: 'r1', title: 'Contemporary Exterior', location: 'bestech, gurugram', category: 'restaurants', image: '/assets/images/restaurants/rest_norenj_103.jpg' },
  { id: 'o6', title: 'Collaborative Office Lounge', category: 'offices', image: '/assets/images/offices/logix_park_1.jpg' },
  { id: 'f2', title: 'Statement Living Room', location: 'delhi ncr', category: 'farmhouse', image: '/assets/images/farmhouse/dining_2.jpg' },
  { id: 'c2', title: 'Commercial Façade', location: 'gurugram', category: 'commercial', image: '/assets/images/commercial/VIEW 2 FINAL.jpg' },

  // RESTAURANTS
  { id: 'r2', title: 'Open-Air Bar & Lounge', location: 'bestech, gurugram', category: 'restaurants', image: '/assets/images/restaurants/rest_norenj_105.jpg' },
  { id: 'r3', title: 'Fine Dining Area', location: 'bestech, gurugram', category: 'restaurants', image: '/assets/images/restaurants/rest_norenj_108.jpg' },
  { id: 'r4', title: 'Rustic Courtyard', location: 'delhi ncr', category: 'restaurants', image: '/assets/images/restaurants/rest_green_house_10.jpeg' },
  { id: 'r7', title: 'Statement Bar Interior', location: 'gurugram', category: 'restaurants', image: '/assets/images/restaurants/rest_michigan_taps_32.jpg' },
  { id: 'r8', title: 'Luxury Bar Counter', location: 'gurugram', category: 'restaurants', image: '/assets/images/restaurants/rest_michigan_taps_33.jpg' },
  { id: 'r9', title: 'Eclectic Dining Lounge', location: 'new delhi', category: 'restaurants', image: '/assets/images/restaurants/rest_brew_window_1.png' },

  // OFFICES
  { id: 'o7', title: 'Modern Workspace', category: 'offices', image: '/assets/images/offices/logix_park_2.jpg' },
  { id: 'o8', title: 'Modern Office Pantry', category: 'offices', image: '/assets/images/offices/electrolux_1.jpg' },

  // HOSPITAL
  { id: 'h2', title: 'Night View', location: 'gurugram', category: 'hospital', image: '/assets/images/hospital/exterior_2.jpg' },
  { id: 'h3', title: 'Emergency Entrance', location: 'gurugram', category: 'hospital', image: '/assets/images/hospital/exterior_3.jpg' },
  { id: 'h4', title: 'Deluxe Patient Room', location: 'gurugram', category: 'hospital', image: '/assets/images/hospital/deluxe_1.jpg' },
  { id: 'h5', title: 'Premium Patient Suite', location: 'gurugram', category: 'hospital', image: '/assets/images/hospital/presidential_1.jpg' },
  { id: 'h6', title: 'Premium Café', location: 'gurugram', category: 'hospital', image: '/assets/images/hospital/cafe_1.jpg' },
  { id: 'h7', title: 'Executive Lounge', location: 'gurugram', category: 'hospital', image: '/assets/images/hospital/waiting_1.jpg' },
  { id: 'h8', title: 'Private Patient Room', location: 'gurugram', category: 'hospital', image: '/assets/images/hospital/mock_room_1.jpg' },

  // RESIDENCE
  { id: 'resi2', title: 'Contemporary Staircase', location: 'delhi ncr', category: 'residential', image: '/assets/images/residence/resi_10.jpg' },
  { id: 'resi3', title: 'Floating Staircase', location: 'delhi ncr', category: 'residential', image: '/assets/images/residence/resi_11.jpg' },
  { id: 'resi4', title: 'Elegant Vanity Area', location: 'delhi ncr', category: 'residential', image: '/assets/images/residence/resi_12.jpg' },
  { id: 'resi5', title: 'Pergola Courtyard', location: 'delhi ncr', category: 'residential', image: '/assets/images/residence/resi_13.jpg' },
  { id: 'resi6', title: 'Garden Lounge', location: 'delhi ncr', category: 'residential', image: '/assets/images/residence/gardenlounge.jpg' },
  { id: 'resi7', title: 'Living Space Setup', location: 'delhi ncr', category: 'residential', image: '/assets/images/residence/resi_15.jpg' },
  { id: 'resi8', title: 'Home interior', location: 'delhi ncr', category: 'residential', image: '/assets/images/residence/resi_16.jpg' },

  // FARMHOUSE
  { id: 'f4', title: 'Formal Drawing Room', location: 'delhi ncr', category: 'farmhouse', image: '/assets/images/farmhouse/drawing_1.jpg' },

  // SCENIC
  { id: 's2', title: 'Light and Screen Study', location: 'germany / india', category: 'scenic', image: '/assets/images/scenic/scenic_2.jpg' },
  { id: 's3', title: 'Theatrical Composition', location: 'germany / india', category: 'scenic', image: '/assets/images/scenic/scenic_3.jpg' },
];

const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'commercial', label: 'Commercial Projects' },
  { id: 'hospital', label: 'Hospital' },
  { id: 'offices', label: 'Offices' },
  { id: 'farmhouse', label: 'Farm Houses' },
  { id: 'scenic', label: 'Scenic Designs' },
  { id: 'restaurants', label: 'Restaurants' },
  { id: 'residential', label: 'Residence Projects' },
];

const CATEGORY_DESC = {
  all: 'Explore our complete portfolio of projects across all categories — from residential sanctuaries to commercial landmarks and scenic design excellence.',
  commercial: 'Strategic commercial spaces, showrooms, and landmark retail environments crafted with European precision.',
  hospital: 'Healing environments designed for patient dignity and clinical excellence — where care meets design.',
  offices: 'Dynamic corporate workspaces, headquarters, and executive interiors tailored to brand identity.',
  farmhouse: 'Premium farmhouse retreats and weekend homes blending nature with bespoke luxury interiors.',
  scenic: 'Theatrical set compositions, scenography, and spatial narratives for premier European productions.',
  restaurants: 'Fine dining and hospitality spaces where atmosphere, materiality, and experience converge.',
  residential: 'Bespoke luxury residences blending European aesthetics with artisanal craftsmanship.',
};

export default function ProjectsPage() {

  const [activeCategory, setActiveCategory] = useState('all');
  const [showAllProjects, setShowAllProjects] = useState(false);
  const location = useLocation();

  // Force navbar dark on this white-bg page (no hero section)
  useEffect(() => {
    const navbar = document.getElementById('navbar') || document.querySelector('.navbar');
    if (navbar) navbar.classList.add('scrolled');
    return () => {
      if (navbar) navbar.classList.remove('scrolled');
    };
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get('cat');
    if (cat && CATEGORIES.some(c => c.id === cat)) {
      setActiveCategory(cat);
    } else {
      setActiveCategory('all');
    }

    // Always return to the first 9 projects when the category changes.
    setShowAllProjects(false);
  }, [location.search]);

  const filtered = activeCategory === 'all'
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter(p => p.category === activeCategory);

  const visibleProjects = showAllProjects
    ? filtered
    : filtered.slice(0, 9);

  const activeLabel = CATEGORIES.find(c => c.id === activeCategory)?.label || 'All Projects';

  // Heading split: last word gets teal accent (no italic)
  const labelWords = activeLabel.split(' ');
  const headingLast = labelWords[labelWords.length - 1];
  const headingFirst = labelWords.slice(0, -1).join(' ');

  return (
    <main style={{ background: '#ffffff', minHeight: '100vh' }}>

      {/* HERO SECTION */}
      <PageHero
        title="Our Projects"
        subtitle="From luxury residences to landmark hospitality — a complete showcase of our design excellence."
        bgImage="/assets/images/expertise-showcase-bg.jpg"
      />

      {/* FILTERS + CONTENT */}
      <div className="proj-top" style={{ padding: '36px 60px 20px 60px' }}>

        {/* FILTER PILLS */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '36px' }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setShowAllProjects(false);
              }}
              style={{
                padding: '10px 24px',
                borderRadius: '999px',
                border: activeCategory === cat.id ? '1px solid #111111' : '1px solid #cccccc',
                background: activeCategory === cat.id ? '#111111' : '#ffffff',
                color: activeCategory === cat.id ? '#ffffff' : '#555555',
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* CATEGORY INTRO — EDITORIAL TWO COLUMN (heading centered in its column, text justified) */}
        <section key={activeCategory} className="proj-intro">

          <div className="proj-intro-body">
            <div className="proj-intro-head">
              <h2 className="proj-cat-title">
                {headingFirst && <>{headingFirst} </>}
                <span className="proj-cat-accent">{headingLast}</span>
              </h2>
            </div>

            <div className="proj-intro-side">
              <p className="proj-intro-desc">{CATEGORY_DESC[activeCategory]}</p>

              <div className="proj-intro-count">
                <b>{String(filtered.length).padStart(2, '0')}</b>
                <span>{filtered.length === 1 ? 'project' : 'projects'}</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* PROJECTS GRID */}
      <div className="proj-grid" style={{
        padding: '0 60px 80px 60px',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '36px 24px',
      }}>
        {visibleProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}

        {filtered.length > 9 && (
          <div style={{
            gridColumn: '1 / -1',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '20px',
          }}>
            <button
              type="button"
              onClick={() => setShowAllProjects(current => !current)}
              style={{
                minWidth: '190px',
                padding: '13px 28px',
                border: '1px solid #111111',
                borderRadius: '999px',
                background: showAllProjects ? '#ffffff' : '#111111',
                color: showAllProjects ? '#111111' : '#ffffff',
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                fontWeight: 600,
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
            >
              {showAllProjects ? 'Show Less' : 'View All Projects'}
            </button>
          </div>
        )}

        {filtered.length === 0 && (
          <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '80px 0' }}>
            <p style={{ color: '#999', fontSize: '1.1rem' }}>No projects in this category yet.</p>
          </div>
        )}
      </div>

      <style>{`
        /* ── CATEGORY INTRO (EDITORIAL TWO COLUMN) ────────────── */
        .proj-intro {
          margin-bottom: 32px;
          padding: 40px;
          background: rgba(11, 122, 122, 0.05); /* Soft cyan background for the entire section */
          border: 1px solid #d0e3e3;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(11, 122, 122, 0.03);
          animation: projIntroFade 0.5s ease both;
        }
        @keyframes projIntroFade {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Label with rule */
        .proj-intro-label {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 36px;
        }
        .proj-intro-label span {
          flex-shrink: 0;
          font-family: var(--font-body);
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 3.5px;
          text-transform: uppercase;
          color: #0b7a7a;
        }
        .proj-intro-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: #d9e6e5;
        }

        /* Two columns */
        .proj-intro-body {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 72px;
          align-items: center;
        }

        /* Left column: heading centered */
        .proj-intro-head {
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          height: 100%;
        }

        /* Override global h2 styles */
        .proj-cat-title {
          font-family: var(--font-heading, var(--font-body)) !important;
          font-size: clamp(2.4rem, 4.8vw, 4.1rem) !important;
          font-weight: 500 !important;
          color: #12201f !important;
          text-transform: none !important;
          font-style: normal !important;
          letter-spacing: -0.6px !important;
          text-align: center !important;
          line-height: 1.25 !important;
          padding-bottom: 0.1em !important;
          margin: 0 !important;
        }
        .proj-cat-accent {
          color: #0b7a7a !important;
          font-style: normal !important;
        }

        /* Right column: justified text */
        .proj-intro-side {
          padding-left: 28px;
          border-left: 2px solid #0b7a7a;
        }
        .proj-intro-desc {
          font-family: var(--font-body);
          font-size: 1.05rem;
          line-height: 1.85;
          color: #4a5857;
          margin: 0 0 22px;
          width: 100%;
          max-width: none;
          text-align: justify !important;
          text-justify: inter-word;
        }
        .proj-intro-count {
          display: flex;
          align-items: baseline;
          gap: 10px;
        }
        .proj-intro-count b {
          font-family: var(--font-heading, var(--font-body));
          font-size: 2.2rem;
          font-weight: 500;
          line-height: 1;
          color: #12201f;
        }
        .proj-intro-count span {
          font-family: var(--font-body);
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #8a9a99;
        }

        /* ── CARD TITLE (override global h3) ──────────────────── */
        .proj-card-title {
          font-size: 1rem !important;
          font-weight: 600 !important;
          color: #111111 !important;
          text-transform: uppercase !important;
          font-style: normal !important;
          letter-spacing: 0.2px !important;
          text-align: left !important;
          line-height: 1.3 !important;
        }

        @media (max-width: 1024px) {
          .proj-top { padding: 30px 30px 16px !important; }
          .proj-grid { grid-template-columns: repeat(2,1fr) !important; padding: 0 30px 60px !important; }
          .proj-intro-body { grid-template-columns: 1fr; gap: 28px; align-items: start; }
        }
        @media (max-width: 640px) {
          .proj-top { padding: 24px 16px 12px !important; }
          .proj-grid { grid-template-columns: 1fr !important; padding: 0 16px 40px !important; }
          .proj-intro { padding-bottom: 32px; }
          .proj-intro-label { margin-bottom: 24px; }
          .proj-intro-label span { letter-spacing: 2.5px; font-size: 0.68rem; }
          .proj-intro-side { padding-left: 18px; }
          .proj-intro-desc {
            font-size: 0.97rem;
            line-height: 1.75;
            text-align: left !important;
            text-align-last: left !important;
          }
        }
      `}</style>
    </main>
  );
}

function ProjectCard({ project }) {
  const [hov, setHov] = useState(false);
  const catLabel = CATEGORIES.find(c => c.id === project.category)?.label || project.category;

  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      {/* IMAGE */}
      <div style={{
        width: '100%', aspectRatio: '4/3', overflow: 'hidden',
        borderRadius: '3px', marginBottom: '12px', background: '#eeeeee'
      }}>
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            objectPosition: 'center',
            transform: hov ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.5s ease',
            display: 'block'
          }}
        />
      </div>

      {/* TITLE */}
      <h3
        className="proj-card-title"
        style={{
          fontFamily: 'var(--font-body)', fontSize: '1rem', fontWeight: 600,
          color: '#111111', margin: '0 0 6px 0', lineHeight: 1.3,
          textTransform: 'uppercase', textAlign: 'left'
        }}
      >
        {project.title}
      </h3>

      {/* CATEGORY TAG */}
      <span style={{
        display: 'inline-block', padding: '3px 10px',
        background: '#f0f0f0', color: '#555555',
        fontSize: '0.72rem', fontWeight: 600,
        fontFamily: 'var(--font-body)', borderRadius: '3px',
        letterSpacing: '0.2px', textTransform: 'lowercase'
      }}>
        {catLabel.toLowerCase()}
      </span>
    </div>
  );
}