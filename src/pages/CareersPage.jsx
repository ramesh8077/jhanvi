import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SubCategoryLayout from '../components/common/SubCategoryLayout';
import { FaArrowRightLong } from 'react-icons/fa6';

const roles = [
  'Architects',
  'Interior Designers',
  'Project Managers',
  'Execution Specialists',
];

const lookFor = [
  {
    num: '01',
    title: 'Visionary Architects',
    desc: 'Spatial thinkers who bring European structural rigor to every plan and carry an idea from first sketch to built form.',
  },
  {
    num: '02',
    title: 'Interior Designers',
    desc: 'Detail-obsessed designers who understand that true luxury lies in the unseen details, materials and finishes.',
  },
  {
    num: '03',
    title: 'Project & Execution Leads',
    desc: 'Leaders who protect structural integrity and deliver scenographic spatial drama on-site, exactly as designed.',
  },
];

const steps = [
  {
    num: '01',
    title: 'Portfolio Review',
    desc: 'We review your CV and portfolio to understand your design sensibility and technical rigor.',
  },
  {
    num: '02',
    title: 'Creative Task',
    desc: 'A short design exercise to see how you approach a real-world spatial challenge.',
  },
  {
    num: '03',
    title: 'Studio Interview',
    desc: 'A deep dive into your design philosophy with our Principal Architect and Lead Designers.',
  },
  {
    num: '04',
    title: 'The Offer',
    desc: 'Welcome to the atelier. We prepare an onboarding plan tailored to your career trajectory.',
  },
];

export default function CareersPage() {

  useEffect(() => {
    const elements = document.querySelectorAll('.cr-reveal');

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
  }, []);

  return (
    <SubCategoryLayout
      title="Careers"
      category="JOIN THE STUDIO"
      heroImage="/assets/images/offices/logix_park_2.jpg"
      subtitle="Shape the Future of Spatial Design"
      conceptTitle="Build with Purpose"
      conceptDescription="We are always seeking visionary architects, interior designers, and project managers. Join a multidisciplinary team where European structural rigor meets scenographic spatial drama."
    >
      <style dangerouslySetInnerHTML={{
        __html: `
        /* =========================================================
           TOKENS
        ========================================================= */
        .cr-page {
          --cr-teal: #008f95;
          --cr-teal-dark: #006d72;
          --cr-aqua: #5fd6db;
          --cr-ink: #111111;
          --cr-body: #3f4747;
          --cr-line: #dde7e7;
          --cr-dark: #0b2b2d;
          --cr-dark-2: #0f3d40;
          --cr-gap: 22px;
          text-align: left;
          color: var(--cr-ink);
        }
        .cr-page * { box-sizing: border-box; }
        .cr-wrap { max-width: 1400px; margin: 0 auto; padding: 0 4%; }
        .cr-block { padding: 64px 0 0; }
        .cr-block:last-child { padding-bottom: 90px; }

        /* =========================================================
           REVEAL
        ========================================================= */
        .cr-reveal { opacity: 0; transform: translateY(28px); transition: opacity .8s cubic-bezier(.16,1,.3,1), transform .8s cubic-bezier(.16,1,.3,1); }
        .cr-reveal.is-visible { opacity: 1; transform: none; }
        .cr-d1 { transition-delay: .08s; }
        .cr-d2 { transition-delay: .16s; }
        .cr-d3 { transition-delay: .24s; }
        .cr-d4 { transition-delay: .32s; }
        @media (prefers-reduced-motion: reduce) {
          .cr-reveal { opacity: 1; transform: none; transition: none; }
        }

        /* =========================================================
           SHARED
        ========================================================= */
        .cr-tag {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: .72rem; font-weight: 700; letter-spacing: 3px; text-transform: uppercase;
          margin-bottom: 14px;
        }
        .cr-tag::before { content: ""; width: 26px; height: 2px; background: currentColor; }

        .cr-h2 {
          font-family: var(--font-heading, sans-serif);
          font-size: clamp(2.2rem, 4vw, 3.4rem);
          font-weight: 600; line-height: 1.05; margin: 0;
        }
        .cr-section-top { display: flex; align-items: flex-end; justify-content: space-between; flex-wrap: wrap; gap: 24px; margin-bottom: 28px; }
        .cr-section-sub { max-width: 460px; margin: 0; font-size: .98rem; line-height: 1.7; }

        .cr-grid { display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: var(--cr-gap); }
        .cr-tile {
          position: relative; overflow: hidden;
          background: #ffffff;
          border: 1px solid var(--cr-line);
          padding: 38px 36px 36px;
          box-shadow: 0 14px 40px rgba(0,0,0,.05);
          display: flex; flex-direction: column; justify-content: center;
          text-align: left;
          transition: transform .4s ease, box-shadow .4s ease;
        }
        .cr-tile:hover { transform: translateY(-5px); box-shadow: 0 26px 56px rgba(0,0,0,.09); }
        .cr-tile--dark { background: linear-gradient(135deg, var(--cr-dark) 0%, var(--cr-dark-2) 100%); border-color: transparent; }
        .cr-tile--teal { background: linear-gradient(135deg, var(--cr-teal) 0%, var(--cr-teal-dark) 100%); border-color: transparent; }
        .cr-span-4 { grid-column: span 4; }
        .cr-span-2 { grid-column: span 2; }

        /* =========================================================
           1. MANIFESTO + ALWAYS HIRING
        ========================================================= */
        .cr-quote-tile { padding: 56px 56px 52px; min-height: 360px; }
        .cr-quote-mark {
          position: absolute; top: -10px; right: 36px;
          font-family: Georgia, serif; font-size: 16rem; line-height: 1;
          color: rgba(255,255,255,.07); pointer-events: none;
        }
        .cr-quote {
          position: relative; z-index: 1;
          font-family: var(--font-heading, sans-serif);
          font-size: clamp(1.7rem, 3vw, 2.7rem);
          font-weight: 600; line-height: 1.25; margin: 0;
        }
        .cr-quote em { font-style: normal; }

        .cr-roles { display: flex; flex-wrap: wrap; gap: 10px; margin: 6px 0 26px; }
        .cr-role {
          padding: 9px 16px;
          font-size: .74rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase;
          border: 1px solid rgba(255,255,255,.7);
          background: rgba(255,255,255,.1);
        }
        .cr-mini-link {
          display: inline-flex; align-items: center; gap: 12px;
          font-size: .78rem; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; text-decoration: none;
          padding-bottom: 6px; border-bottom: 2px solid currentColor; align-self: flex-start;
          transition: gap .3s ease;
        }
        .cr-mini-link:hover { gap: 18px; }
        .cr-side-text { font-size: 1.02rem; line-height: 1.75; margin: 0 0 20px 0; }

        /* who we look for */
        .cr-look-num {
          font-family: var(--font-heading, sans-serif);
          font-size: 3.4rem; font-weight: 700; letter-spacing: -3px; line-height: 1;
          color: rgba(0,143,149,.25); margin-bottom: 18px;
        }
        .cr-tile--look { border-top: 4px solid var(--cr-teal); justify-content: flex-start; }
        .cr-tile-title { font-family: var(--font-heading, sans-serif); font-size: 1.45rem; font-weight: 600; line-height: 1.2; margin: 0 0 12px 0; }
        .cr-tile-desc { font-size: .98rem; line-height: 1.75; margin: 0; }

        /* =========================================================
           2. HOW WE HIRE (stepper)
        ========================================================= */
        .cr-steps { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: var(--cr-gap); position: relative; }
        .cr-steps::before {
          content: ""; position: absolute; top: 66px; left: 8%; right: 8%; height: 2px;
          background: repeating-linear-gradient(90deg, rgba(0,143,149,.45) 0 8px, transparent 8px 16px);
          z-index: 0;
        }
        .cr-step {
          position: relative; z-index: 1;
          background: #ffffff; border: 1px solid var(--cr-line);
          padding: 34px 30px 36px;
          box-shadow: 0 14px 40px rgba(0,0,0,.04);
          text-align: left;
          transition: transform .4s ease, box-shadow .4s ease;
        }
        .cr-step:hover { transform: translateY(-6px); box-shadow: 0 26px 52px rgba(0,0,0,.09); }
        .cr-step-num {
          width: 64px; height: 64px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: var(--cr-teal); color: #fff;
          font-family: var(--font-heading, sans-serif); font-size: 1.3rem; font-weight: 700;
          margin-bottom: 26px;
          box-shadow: 0 0 0 8px rgba(0,143,149,.14);
        }
        .cr-step-title { font-family: var(--font-heading, sans-serif); font-size: 1.3rem; font-weight: 600; margin: 0 0 10px 0; }
        .cr-step-desc { font-size: .97rem; line-height: 1.75; margin: 0; }

        /* =========================================================
           3. CTA BAND
        ========================================================= */
        .cr-cta {
          position: relative; overflow: hidden;
          display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 40px;
          padding: 70px 64px;
          background: linear-gradient(135deg, var(--cr-dark) 0%, var(--cr-dark-2) 100%);
        }
        .cr-cta::after {
          content: "APPLY";
          position: absolute; right: 24px; bottom: -44px;
          font-family: var(--font-heading, sans-serif); font-size: 12rem; font-weight: 700; letter-spacing: -8px; line-height: 1;
          color: rgba(255,255,255,.04); pointer-events: none;
        }
        .cr-cta-left { flex: 1 1 480px; max-width: 700px; position: relative; z-index: 1; }
        .cr-cta-title { font-family: var(--font-heading, sans-serif); font-size: clamp(2.2rem, 4vw, 3.4rem); font-weight: 600; line-height: 1.1; margin: 0 0 20px 0; }
        .cr-cta-text { font-size: 1.08rem; line-height: 1.8; margin: 0; }
        .cr-cta-actions { position: relative; z-index: 1; display: flex; flex-wrap: wrap; gap: 14px; }
        .cr-btn {
          display: inline-flex; align-items: center; gap: 14px;
          padding: 18px 38px;
          font-size: .8rem; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; text-decoration: none;
          transition: background .3s ease, color .3s ease, transform .3s ease;
        }
        .cr-btn--solid { background: var(--cr-aqua); }
        .cr-btn--solid:hover { background: #ffffff; transform: translateY(-3px); }
        .cr-btn--ghost { border: 1px solid var(--cr-aqua); background: transparent; }
        .cr-btn--ghost:hover { background: rgba(95,214,219,.15); transform: translateY(-3px); }

        /* =========================================================
           TEXT SAFETY LAYER
           (site-wide h2/h3/h4/p/a styles ko override karta hai)
        ========================================================= */
        .cr-page .cr-h2,
        .cr-page .cr-quote,
        .cr-page .cr-section-sub,
        .cr-page .cr-side-text,
        .cr-page .cr-tile-title,
        .cr-page .cr-tile-desc,
        .cr-page .cr-step-title,
        .cr-page .cr-step-desc,
        .cr-page .cr-cta-title,
        .cr-page .cr-cta-text {
          text-align: left !important;
          text-transform: none !important;
          font-style: normal !important;
          text-indent: 0 !important;
          word-spacing: normal !important;
          hyphens: none !important;
        }

        .cr-page .cr-tag { color: var(--cr-teal-dark) !important; }
        .cr-page .cr-h2 { letter-spacing: -1.5px !important; color: var(--cr-ink) !important; }
        .cr-page .cr-section-sub { letter-spacing: 0 !important; color: var(--cr-body) !important; }

        /* dark / teal tiles */
        .cr-page .cr-tile--dark .cr-tag { color: var(--cr-aqua) !important; }
        .cr-page .cr-tile--teal .cr-tag { color: #d9ffff !important; }
        .cr-page .cr-quote { letter-spacing: -.5px !important; color: #ffffff !important; }
        .cr-page .cr-quote em { color: var(--cr-aqua) !important; }
        .cr-page .cr-side-text { letter-spacing: 0 !important; color: rgba(255,255,255,.95) !important; }
        .cr-page .cr-role { color: #ffffff !important; }
        .cr-page .cr-mini-link { color: #ffffff !important; }

        /* light tiles */
        .cr-page .cr-tile-title { letter-spacing: -.3px !important; color: var(--cr-ink) !important; }
        .cr-page .cr-tile-desc { letter-spacing: 0 !important; color: var(--cr-body) !important; }
        .cr-page .cr-step-title { letter-spacing: 0 !important; color: var(--cr-ink) !important; }
        .cr-page .cr-step-desc { letter-spacing: 0 !important; color: var(--cr-body) !important; }
        .cr-page .cr-step-num { color: #ffffff !important; }

        /* CTA */
        .cr-page .cr-cta .cr-tag { color: var(--cr-aqua) !important; }
        .cr-page .cr-cta-title { letter-spacing: -1px !important; color: #ffffff !important; }
        .cr-page .cr-cta-text { letter-spacing: 0 !important; color: rgba(255,255,255,.92) !important; }
        .cr-page .cr-btn--solid { color: var(--cr-dark) !important; }
        .cr-page .cr-btn--ghost { color: #ffffff !important; }

        /* =========================================================
           RESPONSIVE
        ========================================================= */
        @media (max-width: 1100px) {
          .cr-span-4, .cr-span-2 { grid-column: span 6; }
          .cr-grid .cr-tile--look { grid-column: span 6; }
          .cr-steps { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .cr-steps::before { display: none; }
        }
        @media (max-width: 760px) {
          .cr-wrap { padding: 0 5%; }
          .cr-tile { padding: 28px 22px; }
          .cr-quote-tile { padding: 40px 24px; min-height: 0; }
          .cr-quote-mark { font-size: 10rem; right: 14px; }
          .cr-steps { grid-template-columns: 1fr; }
          .cr-cta { padding: 46px 26px; }
          .cr-cta::after { font-size: 7rem; }
          .cr-cta-actions { width: 100%; }
          .cr-btn { width: 100%; justify-content: center; padding: 17px 20px; }
        }
      `}} />

      <div className="cr-page">

        {/* ================= 1. MANIFESTO + ALWAYS HIRING + WHO WE LOOK FOR ================= */}
        <div className="cr-wrap cr-block">
          <div className="cr-grid">

            <div className="cr-tile cr-tile--dark cr-span-4 cr-quote-tile cr-reveal">
              <div className="cr-quote-mark">“</div>
              <span className="cr-tag">Our Manifesto</span>
              <p className="cr-quote">
                We don’t just hire designers. We bring <em>visionaries</em> who understand that true luxury lies in the unseen details and structural integrity.
              </p>
            </div>

            <div className="cr-tile cr-tile--teal cr-span-2 cr-reveal cr-d1">
              <span className="cr-tag">Always Hiring</span>
              <p className="cr-side-text">
                We are always on the lookout for exceptional talent across the studio.
              </p>
              <div className="cr-roles">
                {roles.map((r) => (
                  <span className="cr-role" key={r}>{r}</span>
                ))}
              </div>
              <a href="mailto:info@jhanvimishradesign.com" className="cr-mini-link">
                Send Your Portfolio <FaArrowRightLong />
              </a>
            </div>

            {lookFor.map((item, i) => (
              <div className={`cr-tile cr-tile--look cr-span-2 cr-reveal cr-d${i + 1}`} key={item.num}>
                <div className="cr-look-num">{item.num}</div>
                <h4 className="cr-tile-title">{item.title}</h4>
                <p className="cr-tile-desc">{item.desc}</p>
              </div>
            ))}

          </div>
        </div>


        {/* ================= 2. HOW WE HIRE ================= */}
        <div className="cr-wrap cr-block">
          <div className="cr-section-top cr-reveal">
            <div>
              <span className="cr-tag">The Journey To Join Us</span>
              <h2 className="cr-h2">How We Hire</h2>
            </div>
            <p className="cr-section-sub">
              Four simple steps — from your portfolio to your first day in the atelier.
            </p>
          </div>

          <div className="cr-steps">
            {steps.map((s, i) => (
              <div className={`cr-step cr-reveal cr-d${i + 1}`} key={s.num}>
                <div className="cr-step-num">{s.num}</div>
                <h4 className="cr-step-title">{s.title}</h4>
                <p className="cr-step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>


        {/* ================= 3. CTA ================= */}
        <div className="cr-wrap cr-block">
          <div className="cr-cta cr-reveal">
            <div className="cr-cta-left">
              <span className="cr-tag">General Application</span>
              <h3 className="cr-cta-title">Think you’d be a great fit?</h3>
              <p className="cr-cta-text">
                We are always on the lookout for exceptional talent. If you believe your vision aligns with our studio's ethos, send us your portfolio and CV.
              </p>
            </div>

            <div className="cr-cta-actions">
              <a href="mailto:info@jhanvimishradesign.com" className="cr-btn cr-btn--solid">
                Email Portfolio &amp; CV <FaArrowRightLong />
              </a>
              <Link to="/team" className="cr-btn cr-btn--ghost">
                Meet The Team
              </Link>
            </div>
          </div>
        </div>

      </div>
    </SubCategoryLayout>
  );
}