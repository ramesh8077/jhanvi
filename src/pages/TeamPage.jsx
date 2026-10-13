import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRightLong, FaCircleCheck } from 'react-icons/fa6';
import { partners } from '../data/teamData';
import SubCategoryLayout from '../components/common/SubCategoryLayout';

// Site / execution people vs design-studio people (based on subtitle text)
const isSiteMember = (m) => /execution|site|supervis/i.test(String(m.subtitle || ''));

// "Interior Design Lead | High-End ..."  ->  { role, focus }
const splitSubtitle = (subtitle = '') => {
  const parts = String(subtitle).split('|');
  return {
    role: (parts[0] || '').trim(),
    focus: parts.slice(1).join('|').trim(),
  };
};

const workflow = [
  {
    num: '01',
    title: 'Direction',
    desc: "Jhanvi Mishra leads the overarching spatial philosophy and luxury aesthetics for every project.",
  },
  {
    num: '02',
    title: 'Design Studio',
    desc: 'Interior designers handle detail engineering and bespoke material curation under her guidance.',
  },
  {
    num: '03',
    title: 'Site & Execution',
    desc: 'Site supervisors and execution leads bring each layout to life on-site with uncompromising precision.',
  },
];

export default function TeamPage() {
  const [filter, setFilter] = useState('all');

  const counts = useMemo(() => {
    const site = partners.filter(isSiteMember).length;
    return { all: partners.length, site, design: partners.length - site };
  }, []);

  const filteredMembers = useMemo(() => {
    if (filter === 'site') return partners.filter(isSiteMember);
    if (filter === 'design') return partners.filter((m) => !isSiteMember(m));
    return partners;
  }, [filter]);

  // Card width pattern on desktop (6-col grid, normal card = span 2):
  // remainder 1 -> last card full row, remainder 2 -> last two cards half row each.
  const total = filteredMembers.length;
  const remainder = total % 3;
  const cardClass = (index) => {
    if (remainder === 1 && index === total - 1) return 'tp-card--full';
    if (remainder === 2 && index >= total - 2) return 'tp-card--wide';
    return '';
  };

  useEffect(() => {
    const elements = document.querySelectorAll('.tp-reveal:not(.is-visible)');

    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filter]);

  const tabs = [
    { key: 'all', label: 'All Team', count: counts.all },
    { key: 'design', label: 'Design Studio', count: counts.design },
    { key: 'site', label: 'Site & Execution', count: counts.site },
  ].filter((t) => t.key === 'all' || t.count > 0);

  const renderHeroBackground = () => (
    <div className="page-hero-image team-collage-bg-wrapper">
      <div className="team-collage-bg">
        {partners.slice(0, 5).map((member, i) => {
          // Hero-specific overrides to fix face sizes/cropping in the Seamless Mural
          // without affecting the profile cards lower down on the page.
          let heroObjectPosition = member.objectPosition || 'center top';
          let heroTransform = member.imageTransform || 'none';
          
          if (i === 0) { // Isha (Transparent PNG, needs scaling up)
             heroObjectPosition = 'center 10%';
             heroTransform = 'scale(1.3) translateY(6%)';
          } else if (i === 1) { // Taniya (Transparent PNG, needs scaling up)
             heroObjectPosition = 'center 10%';
             heroTransform = 'scale(1.2) translateY(6%)';
          } else if (i === 2) { // Devang
             heroObjectPosition = 'center top';
             heroTransform = 'scale(1.1) translateY(12%)';
          } else if (i === 3) { // Brijesh
             heroObjectPosition = 'center top';
             heroTransform = 'scale(1.1) translateY(12%)';
          } else if (i === 4) { // Rishipal
             heroObjectPosition = 'center 5%';
             heroTransform = 'scale(1.15) translateY(5%)';
          }

          return (
            <div key={member.id} className="team-bg-stripe">
              <img 
                src={member.image} 
                alt="" 
                style={{ 
                  objectPosition: heroObjectPosition,
                  transform: heroTransform
                }} 
              />
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <SubCategoryLayout
      title="Our Team"
      category="OUR TEAM"
      renderHeroBackground={renderHeroBackground}
      conceptTitle="Our Creative Pillars"
      conceptDescription="At Jhanvi Mishra Design, landmark interior environments are delivered by a dedicated in-house team working under Jhanvi Mishra's direction. She leads the overarching spatial philosophy and luxury aesthetics, while her interior designers and site supervisors handle detail engineering, bespoke material curation, and project execution under her guidance."
    >
      <style>{`
        /* =========================================================
           TOKENS
        ========================================================= */
        .tp-page {
          --tp-teal: #008f95;
          --tp-teal-dark: #006d72;
          --tp-aqua: #5fd6db;
          --tp-ink: #111111;
          --tp-body: #3f4747;
          --tp-line: #dde7e7;
          --tp-dark: #0b2b2d;
          --tp-dark-2: #0f3d40;
          --tp-gap: 22px;
          text-align: left;
          color: var(--tp-ink);
        }

        /* =========================================================
           DYNAMIC DIAGONAL SLICES BACKGROUND
        ========================================================= */
        .team-collage-bg-wrapper {
          position: absolute;
          inset: 0;
          overflow: hidden;
          background: #030809; 
        }
        .team-collage-bg {
          display: flex;
          width: 110%; /* Extra width to compensate for slants */
          height: 100%;
          margin-left: -5%; /* Center it */
        }
        .team-bg-stripe {
          flex: 1;
          position: relative;
          height: 100%;
          clip-path: polygon(8% 0, 100% 0, 92% 100%, 0 100%);
          margin-left: -1%; /* Slight overlap */
          transition: flex 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), filter 0.5s ease;
          border-right: 2px solid rgba(0, 143, 149, 0.5); /* Sleek teal divider */
          overflow: hidden;
          cursor: pointer;
        }
        .team-bg-stripe img {
          width: 100%; height: 100%; object-fit: cover;
          filter: grayscale(60%) contrast(1.1) brightness(0.8);
          transition: filter 0.5s ease, transform 0.5s ease;
          /* Ensure images aren't distorted by flex changes */
          min-width: 100%;
        }

        /* Hover Expansion */
        .team-bg-stripe:hover {
          flex: 1.6; /* Expands dynamically! */
          z-index: 10;
        }
        .team-bg-stripe:hover img {
          filter: grayscale(0%) contrast(1.05) brightness(1);
        }

        @media (max-width: 768px) {
          .team-bg-stripe:nth-child(4), .team-bg-stripe:nth-child(5) { display: none; }
          .team-bg-stripe { clip-path: polygon(12% 0, 100% 0, 88% 100%, 0 100%); }
          .team-bg-stripe:hover { flex: 1.4; }
        }
        .tp-page * { box-sizing: border-box; }
        .tp-wrap { max-width: 1400px; margin: 0 auto; padding: 0 4%; }
        .tp-block { padding: 64px 0 0; }
        .tp-block:last-child { padding-bottom: 90px; }

        /* =========================================================
           REVEAL
        ========================================================= */
        .tp-reveal { opacity: 0; transform: translateY(28px); transition: opacity .8s cubic-bezier(.16,1,.3,1), transform .8s cubic-bezier(.16,1,.3,1); }
        .tp-reveal.is-visible { opacity: 1; transform: none; }
        .tp-d1 { transition-delay: .08s; }
        .tp-d2 { transition-delay: .16s; }
        .tp-d3 { transition-delay: .24s; }
        @media (prefers-reduced-motion: reduce) {
          .tp-reveal { opacity: 1; transform: none; transition: none; }
        }

        /* =========================================================
           HEADER + FILTER TABS
        ========================================================= */
        .tp-tag {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: .72rem; font-weight: 700; letter-spacing: 3px; text-transform: uppercase;
          margin-bottom: 14px;
        }
        .tp-tag::before { content: ""; width: 26px; height: 2px; background: currentColor; }

        .tp-head {
          display: flex; align-items: flex-end; justify-content: space-between;
          flex-wrap: wrap; gap: 24px;
          padding-bottom: 24px; margin-bottom: 30px;
          border-bottom: 1px solid var(--tp-line);
        }
        .tp-h2 {
          font-family: var(--font-heading, sans-serif);
          font-size: clamp(2.2rem, 4vw, 3.4rem);
          font-weight: 600; line-height: 1.05; margin: 0;
        }
        .tp-tabs { display: flex; flex-wrap: wrap; gap: 10px; }
        .tp-tab {
          appearance: none; cursor: pointer;
          display: inline-flex; align-items: center; gap: 10px;
          padding: 12px 22px;
          font-family: inherit; font-size: .76rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase;
          background: #ffffff; color: var(--tp-ink);
          border: 1px solid var(--tp-ink);
          transition: all .3s ease;
        }
        .tp-tab span {
          font-size: .7rem; padding: 2px 8px; background: rgba(0,143,149,.12); color: var(--tp-teal-dark); letter-spacing: 0;
        }
        .tp-tab:hover { border-color: var(--tp-teal); color: var(--tp-teal-dark); }
        .tp-tab.is-active { background: var(--tp-dark); border-color: var(--tp-dark); color: #ffffff; }
        .tp-tab.is-active span { background: var(--tp-aqua); color: var(--tp-dark); }

        /* =========================================================
           MEMBER GRID (6-col, no empty slots)
        ========================================================= */
        .tp-grid { display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: var(--tp-gap); }
        .tp-card {
          grid-column: span 2;
          display: flex; flex-direction: column;
          background: #ffffff;
          border: 1px solid var(--tp-line);
          box-shadow: 0 14px 40px rgba(0,0,0,.05);
          overflow: hidden;
          transition: transform .4s ease, box-shadow .4s ease;
          text-align: left;
        }
        .tp-card:hover { transform: translateY(-6px); box-shadow: 0 28px 56px rgba(0,0,0,.1); }
        .tp-card--wide { grid-column: span 3; flex-direction: row; }
        .tp-card--full { grid-column: span 6; flex-direction: row; }

        .tp-media { position: relative; aspect-ratio: 4 / 5; background: #eef3f3; overflow: hidden; }
        .tp-card--wide .tp-media, .tp-card--full .tp-media { aspect-ratio: auto; flex: 0 0 42%; min-height: 380px; }
        .tp-media img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          transform-origin: center center;
          transition: filter .6s ease;
        }
        .tp-chip {
          position: absolute; top: 16px; left: 16px; z-index: 2;
          padding: 7px 13px;
          font-size: .68rem; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase;
          background: rgba(5,25,27,.88);
          border: 1px solid rgba(95,214,219,.6);
        }
        .tp-exp {
          position: absolute; left: 0; right: 0; bottom: 0; z-index: 2;
          padding: 40px 18px 14px;
          background: linear-gradient(180deg, transparent 0%, rgba(5,25,27,.92) 100%);
          font-size: .7rem; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase;
        }

        .tp-body { display: flex; flex-direction: column; flex: 1; padding: 28px 28px 30px; }
        .tp-name {
          font-family: var(--font-heading, sans-serif);
          font-size: clamp(1.6rem, 2.4vw, 2rem);
          font-weight: 800; line-height: 1.15; margin: 0 0 4px 0;
          color: var(--tp-ink);
        }
        .tp-role { font-size: .78rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin: 0 0 12px 0; color: var(--tp-teal-dark); }
        .tp-focus { font-size: 1rem; font-weight: 700; line-height: 1.4; margin: 0 0 14px 0; color: #222222; }
        .tp-bio { font-size: .95rem; line-height: 1.7; margin: 0 0 22px 0; font-weight: 400; color: #555555; text-align: justify; }

        .tp-list { margin: auto 0 0 0; padding: 18px 0 0 0; list-style: none; border-top: 1px solid var(--tp-line); display: flex; flex-direction: column; gap: 10px; }
        .tp-list li { display: flex; align-items: flex-start; gap: 12px; font-size: .88rem; font-weight: 500; line-height: 1.45; color: #333333; }
        .tp-radio-dot { flex-shrink: 0; width: 10px; height: 10px; border-radius: 50%; border: 3px solid var(--tp-teal); background: transparent; margin-top: 6px; }

        /* =========================================================
           HOW THE TEAM WORKS (3 tiles)
        ========================================================= */
        .tp-section-top { display: flex; align-items: flex-end; justify-content: space-between; flex-wrap: wrap; gap: 24px; margin-bottom: 28px; }
        .tp-flow { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: var(--tp-gap); }
        .tp-flow-tile {
          position: relative; overflow: hidden;
          padding: 36px 32px 34px;
          background: #ffffff; border: 1px solid var(--tp-line);
          border-top: 4px solid var(--tp-teal);
          box-shadow: 0 14px 40px rgba(0,0,0,.04);
          transition: transform .4s ease, box-shadow .4s ease;
        }
        .tp-flow-tile:hover { transform: translateY(-6px); box-shadow: 0 26px 52px rgba(0,0,0,.09); }
        .tp-flow-num {
          font-family: var(--font-heading, sans-serif);
          font-size: 3.6rem; font-weight: 700; letter-spacing: -3px; line-height: 1;
          color: rgba(0,143,149,.25); margin-bottom: 20px;
        }
        .tp-flow-title { font-family: var(--font-heading, sans-serif); font-size: 1.4rem; font-weight: 600; margin: 0 0 10px 0; }
        .tp-flow-desc { font-size: .98rem; line-height: 1.75; margin: 0; }

        /* =========================================================
           CTA BAND
        ========================================================= */
        .tp-cta {
          display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 40px;
          padding: 64px 60px;
          background: linear-gradient(135deg, var(--tp-dark) 0%, var(--tp-dark-2) 100%);
          position: relative; overflow: hidden;
        }
        .tp-cta::after {
          content: "JOIN";
          position: absolute; right: 30px; bottom: -40px;
          font-family: var(--font-heading, sans-serif); font-size: 12rem; font-weight: 700; letter-spacing: -8px; line-height: 1;
          color: rgba(255,255,255,.04); pointer-events: none;
        }
        .tp-cta-left { flex: 1 1 480px; max-width: 700px; position: relative; z-index: 1; }
        .tp-cta-title {
          font-family: var(--font-heading, sans-serif);
          font-size: clamp(2.2rem, 4vw, 3.4rem); font-weight: 600; line-height: 1.1; margin: 0 0 20px 0;
        }
        .tp-cta-text { font-size: 1.08rem; line-height: 1.8; margin: 0; }
        .tp-btn {
          position: relative; z-index: 1;
          display: inline-flex; align-items: center; gap: 14px;
          padding: 18px 42px;
          background: var(--tp-aqua);
          font-size: .8rem; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; text-decoration: none;
          transition: background .3s ease, transform .3s ease;
        }
        .tp-btn:hover { background: #ffffff; transform: translateY(-3px); }

        /* =========================================================
           TEXT SAFETY LAYER
           (site-wide h2/h3/h4/p styles ko override karta hai)
        ========================================================= */
        .tp-page .tp-h2,
        .tp-page .tp-name,
        .tp-page .tp-role,
        .tp-page .tp-focus,
        .tp-page .tp-bio,
        .tp-page .tp-flow-title,
        .tp-page .tp-flow-desc,
        .tp-page .tp-cta-title,
        .tp-page .tp-cta-text {
          text-align: left !important;
          font-style: normal !important;
          text-indent: 0 !important;
          word-spacing: normal !important;
          hyphens: none !important;
        }
        .tp-page .tp-h2, .tp-page .tp-name, .tp-page .tp-flow-title, .tp-page .tp-cta-title,
        .tp-page .tp-focus, .tp-page .tp-bio, .tp-page .tp-flow-desc, .tp-page .tp-cta-text {
          text-transform: none !important;
        }
        .tp-page .tp-role { text-transform: uppercase !important; }

        .tp-page .tp-h2 { letter-spacing: -1.5px !important; color: var(--tp-ink) !important; }
        .tp-page .tp-name { letter-spacing: -.5px !important; color: var(--tp-ink) !important; }
        .tp-page .tp-role { letter-spacing: 2px !important; color: var(--tp-teal-dark) !important; }
        .tp-page .tp-focus { letter-spacing: 0 !important; color: var(--tp-ink) !important; }
        .tp-page .tp-bio { letter-spacing: 0 !important; color: var(--tp-body) !important; }
        .tp-page .tp-list li { color: var(--tp-ink) !important; text-align: left !important; }
        .tp-page .tp-tag { color: var(--tp-teal-dark) !important; }

        .tp-page .tp-chip { color: #ffffff !important; }
        .tp-page .tp-exp { color: var(--tp-aqua) !important; }

        .tp-page .tp-flow-title { letter-spacing: 0 !important; color: var(--tp-ink) !important; }
        .tp-page .tp-flow-desc { letter-spacing: 0 !important; color: var(--tp-body) !important; }

        .tp-page .tp-cta .tp-tag { color: var(--tp-aqua) !important; }
        .tp-page .tp-cta-title { letter-spacing: -1px !important; color: #ffffff !important; }
        .tp-page .tp-cta-text { letter-spacing: 0 !important; color: rgba(255,255,255,.9) !important; }
        .tp-page .tp-btn { color: var(--tp-dark) !important; }
        .tp-page .tp-tab { text-transform: uppercase !important; }

        /* =========================================================
           RESPONSIVE
        ========================================================= */
        @media (max-width: 1100px) {
          .tp-card, .tp-card--wide, .tp-card--full { grid-column: span 3; flex-direction: column; }
          .tp-card--wide .tp-media, .tp-card--full .tp-media { aspect-ratio: 4 / 5; flex: none; min-height: 0; }
          /* odd one out -> full row, horizontal */
          .tp-card:last-child:nth-child(odd) { grid-column: span 6; flex-direction: row; }
          .tp-card:last-child:nth-child(odd) .tp-media { aspect-ratio: auto; flex: 0 0 42%; min-height: 380px; }
          .tp-flow { grid-template-columns: 1fr; }
        }
        @media (max-width: 760px) {
          .tp-wrap { padding: 0 5%; }
          .tp-card, .tp-card--wide, .tp-card--full,
          .tp-card:last-child:nth-child(odd) { grid-column: span 6; flex-direction: column; }
          .tp-card:last-child:nth-child(odd) .tp-media,
          .tp-card--wide .tp-media, .tp-card--full .tp-media { aspect-ratio: 4 / 5; flex: none; min-height: 0; }
          .tp-body { padding: 24px 22px 26px; }
          .tp-cta { padding: 44px 26px; }
          .tp-cta::after { font-size: 7rem; }
          .tp-tabs { width: 100%; }
          .tp-tab { flex: 1 1 auto; justify-content: center; padding: 11px 14px; }
        }
      `}</style>

      <div className="tp-page">

        {/* ================= 1. TEAM GRID ================= */}
        <div className="tp-wrap tp-block">
          <div className="tp-head tp-reveal is-visible">
            <div>
              <span className="tp-tag">The People Behind The Spaces</span>
              <h2 className="tp-h2">Meet Jhanvi's Team</h2>
            </div>

            <div className="tp-tabs" role="tablist" aria-label="Filter team members">
              {tabs.map((t) => (
                <button
                  key={t.key}
                  type="button"
                  role="tab"
                  aria-selected={filter === t.key}
                  className={`tp-tab ${filter === t.key ? 'is-active' : ''}`}
                  onClick={() => setFilter(t.key)}
                >
                  {t.label} <span>{t.count}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="tp-grid">
            {filteredMembers.map((member, index) => {
              const { role, focus } = splitSubtitle(member.subtitle);
              return (
                <article
                  key={member.id}
                  className={`tp-card tp-reveal tp-d${(index % 3) + 1} ${cardClass(index)}`}
                >
                  <div className="tp-media">
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      style={{
                        objectPosition: member.objectPosition || 'center top',
                        transform: member.imageTransform || 'none',
                      }}
                    />
                    {member.projectsCompleted && (
                      <div className="tp-chip">{member.projectsCompleted}</div>
                    )}
                    {member.experience && (
                      <div className="tp-exp">{member.experience} Exp</div>
                    )}
                  </div>

                  <div className="tp-body">
                    <h3 className="tp-name">{member.name}</h3>
                    {role && <p className="tp-role">{role}</p>}
                    {focus && <p className="tp-focus">{focus}</p>}
                    {member.bio && <p className="tp-bio">{member.bio}</p>}

                    {member.highlights && member.highlights.length > 0 && (
                      <ul className="tp-list">
                        {member.highlights.slice(0, 3).map((hl, hIdx) => (
                          <li key={hIdx}>
                            <div className="tp-radio-dot"></div>
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>


        {/* ================= 2. HOW THE TEAM WORKS ================= */}
        <div className="tp-wrap tp-block">
          <div className="tp-section-top tp-reveal">
            <div>
              <span className="tp-tag">Our Structure</span>
              <h2 className="tp-h2">How The Team Works</h2>
            </div>
          </div>

          <div className="tp-flow">
            {workflow.map((w, i) => (
              <div className={`tp-flow-tile tp-reveal tp-d${i + 1}`} key={w.num}>
                <div className="tp-flow-num">{w.num}</div>
                <h4 className="tp-flow-title">{w.title}</h4>
                <p className="tp-flow-desc">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>


        {/* ================= 3. CAREERS CTA ================= */}
        <div className="tp-wrap tp-block">
          <div className="tp-cta tp-reveal">
            <div className="tp-cta-left">
              <span className="tp-tag">Career Opportunities</span>
              <h3 className="tp-cta-title">Join Our Team.</h3>
              <p className="tp-cta-text">
                Are you a passionate interior designer, structural engineer, or execution specialist? Join Jhanvi Mishra Design to help build landmark luxury spaces across the globe.
              </p>
            </div>

            <Link to="/careers" className="tp-btn">
              View Openings <FaArrowRightLong />
            </Link>
          </div>
        </div>

      </div>
    </SubCategoryLayout>
  );
}