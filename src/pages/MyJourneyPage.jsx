import React, { useEffect } from 'react';
import SubCategoryLayout from '../components/common/SubCategoryLayout';
import { Link } from 'react-router-dom';

export default function MyJourneyPage() {

  useEffect(() => {
    const elements = document.querySelectorAll('.jm-reveal');

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

  const marquee = [
    'Architecture',
    'Interior Design',
    'Scenography',
    'Spatial Experiences',
    'India × Germany',
    'Wherever I go, I create',
  ];

  const chapters = [
    {
      year: '2016',
      location: 'Dehradun, India',
      title: 'The Foundation',
      desc: "Bachelor's degree in Architecture from Dehradun Institute of Technology, laying the groundwork for a multidisciplinary approach to design.",
      img: '/assets/images/expertise-hero.jpg',
      alt: 'Foundation in Architecture',
      imgStyle: { height: '135%', width: '100%', top: '-35%', left: '0', objectFit: 'cover' },
    },
    {
      year: '2017',
      location: 'Portugal & Germany',
      title: 'European Hospitality',
      desc: 'Conceptualizing spatial planning for luxury hospitality suites, including Vila Vita in Portugal and boutique service apartments in Frankfurt. A masterclass in international vendor networks and exquisite curation.',
      img: '/assets/images/residence/resi_15.jpg',
      alt: 'European Hospitality Design',
    },
    {
      year: '2020',
      location: 'India',
      title: 'Corporate Leadership',
      desc: 'Returning to India to lead high-end corporate fit-out projects for marquee multinational clients at Colliers International. This era honed her ability to balance striking aesthetics with large-scale operational efficiency.',
      img: '/assets/images/dvag-executive-lobby.jpg',
      alt: 'Corporate Interiors',
    },
    {
      year: '2024',
      location: 'Global',
      title: 'Jhanvi Mishra Design',
      desc: 'Establishing her own signature practice, spearheading the complete spatial architecture and turnkey execution for ultra-luxury residential sanctuaries and bespoke commercial projects across the nation.',
      img: '/assets/images/premium-quality-image-modern-living-room.jpg',
      alt: 'Jhanvi Mishra Design Studio',
    },
  ];

  const process = [
    {
      num: '01',
      title: 'Discovery',
      desc: 'Understanding the space, cultural background, and user experience to form the foundational narrative.',
    },
    {
      num: '02',
      title: 'Spatial Planning',
      desc: 'Applying design principles to ensure comfort, harmony, and optimal functionality.',
    },
    {
      num: '03',
      title: 'Design & Detailing',
      desc: 'Infusing European embedded designs and curating material richness for striking aesthetics.',
    },
    {
      num: '04',
      title: 'Turnkey Execution',
      desc: 'Managing the entire build phase to deliver the best value for your investment seamlessly.',
    },
  ];

  return (
    <SubCategoryLayout
      category="ABOUT US / STUDIO PROFILE"
      heroImage="/assets/images/130389f2-dcd5-4672-b5fe-1eb7f1cc2926.jpeg"
      title="The Studio & The Founder"
      subtitle={<span style={{ color: '#008f95' }}>Over a Decade of Design Innovation across India & Germany.</span>}
    >
      <style dangerouslySetInnerHTML={{
        __html: `
        /* =========================================================
           TOKENS
        ========================================================= */
        .jm-page {
          --jm-teal: #008f95;
          --jm-teal-dark: #006d72;
          --jm-aqua: #5fd6db;
          --jm-ink: #111111;
          --jm-body: #3f4747;
          --jm-line: #dde7e7;
          --jm-dark: #0b2b2d;
          --jm-dark-2: #0f3d40;
          --jm-gap: 18px;
          position: relative;
          overflow-x: hidden;
          color: var(--jm-ink);
          text-align: left;
          background: linear-gradient(135deg, #f8fafb 0%, #eef7f7 52%, #d9f5f5 100%);
        }
        .jm-page * { box-sizing: border-box; }


        /* =========================================================
           REVEAL
        ========================================================= */
        .jm-reveal { opacity: 0; transform: translateY(30px); transition: opacity .8s cubic-bezier(.16,1,.3,1), transform .8s cubic-bezier(.16,1,.3,1); }
        .jm-reveal.is-visible { opacity: 1; transform: none; }
        .jm-d1 { transition-delay: .08s; }
        .jm-d2 { transition-delay: .16s; }
        .jm-d3 { transition-delay: .24s; }
        .jm-d4 { transition-delay: .32s; }
        @media (prefers-reduced-motion: reduce) {
          .jm-reveal { opacity: 1; transform: none; transition: none; }
          .jm-marquee-track { animation: none !important; }
        }

        /* =========================================================
           SHARED
        ========================================================= */
        .jm-wrap { max-width: 1400px; margin: 0 auto; padding: 0 4%; }
        .jm-block { padding: 56px 0 0; }
        .jm-block:first-child { padding-top: 70px; }

        .jm-tag {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: .72rem;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--jm-teal-dark);
          margin-bottom: 16px;
        }
        .jm-tag::before { content: ""; width: 26px; height: 2px; background: currentColor; }

        .jm-text {
          font-size: 1rem;
          line-height: 1.8;
          margin: 0 0 16px 0;
        }
        .jm-text:last-child { margin-bottom: 0; }

        .jm-bento {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          gap: var(--jm-gap);
        }
        .jm-tile {
          position: relative;
          overflow: hidden;
          background: #ffffff;
          border: 1px solid var(--jm-line);
          padding: 34px 34px 32px;
          box-shadow: 0 14px 40px rgba(0,0,0,.04);
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: left;
          transition: transform .4s ease, box-shadow .4s ease;
        }
        .jm-tile:hover { transform: translateY(-5px); box-shadow: 0 26px 56px rgba(0,0,0,.09); }
        .jm-tile--teal { background: linear-gradient(135deg, var(--jm-teal) 0%, var(--jm-teal-dark) 100%); border-color: transparent; }
        .jm-tile--dark { background: linear-gradient(135deg, var(--jm-dark) 0%, var(--jm-dark-2) 100%); border-color: transparent; }

        /* =========================================================
           1. FOUNDER BENTO
        ========================================================= */
        .jm-founder-bento {
          grid-template-areas:
            "portrait portrait name   name   name   name"
            "portrait portrait intro  intro  intro  intro"
            "edu      edu      vision vision stats  stats"
            "quote    quote    quote  quote  quote  quote";
        }
        .jm-a-portrait { grid-area: portrait; padding: 0; min-height: 520px; }
        .jm-a-name     { grid-area: name; }
        .jm-a-intro    { grid-area: intro; }
        .jm-a-edu      { grid-area: edu; }
        .jm-a-vision   { grid-area: vision; }
        .jm-a-stats    { grid-area: stats; }
        .jm-a-quote    { grid-area: quote; }

        .jm-portrait-img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: center top;
          transition: transform .9s ease;
        }
        .jm-a-portrait:hover .jm-portrait-img { transform: scale(1.05); }
        .jm-portrait-cap {
          position: absolute; left: 0; right: 0; bottom: 0;
          padding: 70px 28px 26px;
          background: linear-gradient(180deg, transparent 0%, rgba(11,43,45,.92) 100%);
        }
        .jm-portrait-cap b { display: block; font-family: var(--font-heading, sans-serif); font-size: 1.4rem; font-weight: 600; letter-spacing: -.5px; color: #fff; }
        .jm-portrait-cap span { font-size: .72rem; letter-spacing: 3px; text-transform: uppercase; color: var(--jm-aqua); font-weight: 700; }

        .jm-name {
          font-family: var(--font-heading, sans-serif);
          font-size: clamp(2.6rem, 5vw, 4.6rem);
          font-weight: 600;
          line-height: 1;
          margin: 0 0 22px 0;
        }
        .jm-roles { display: flex; flex-wrap: wrap; gap: 10px; }
        .jm-role {
          font-size: .74rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 9px 16px;
          border: 1px solid var(--jm-teal);
          color: var(--jm-teal-dark);
          background: rgba(0,143,149,.07);
        }
        .jm-a-name::after {
          content: "JM";
          position: absolute;
          right: 26px; bottom: -34px;
          font-family: var(--font-heading, sans-serif);
          font-size: 9rem;
          font-weight: 700;
          letter-spacing: -6px;
          color: rgba(0,143,149,.08);
          pointer-events: none;
          line-height: 1;
        }

        .jm-lead {
          font-size: 1.25rem;
          line-height: 1.7;
          font-weight: 500;
          margin: 0 0 18px 0;
        }

        .jm-stat + .jm-stat { margin-top: 22px; padding-top: 22px; border-top: 1px solid rgba(255,255,255,.18); }
        .jm-stat-num {
          font-family: var(--font-heading, sans-serif);
          font-size: clamp(2.6rem, 4vw, 3.6rem);
          font-weight: 700;
          letter-spacing: -2px;
          line-height: 1;
          color: var(--jm-aqua);
        }
        .jm-stat-label { margin-top: 8px; font-size: .74rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: rgba(255,255,255,.85); }

        .jm-a-quote { flex-direction: row; align-items: center; justify-content: space-between; gap: 30px; padding: 30px 40px; }
        .jm-a-quote .jm-tag { margin-bottom: 8px; }
        .jm-quote-text {
          margin: 0;
          font-family: var(--font-heading, sans-serif);
          font-size: clamp(1.6rem, 3.2vw, 2.7rem);
          font-weight: 600;
          line-height: 1.15;
        }
        .jm-quote-mark { font-family: Georgia, serif; font-size: 9rem; line-height: .6; color: rgba(255,255,255,.2); flex-shrink: 0; }

        /* =========================================================
           MARQUEE
        ========================================================= */
        .jm-marquee { margin-top: 56px; background: var(--jm-ink); overflow: hidden; padding: 20px 0; }
        .jm-marquee-track { display: flex; width: max-content; animation: jmScroll 32s linear infinite; }
        .jm-marquee:hover .jm-marquee-track { animation-play-state: paused; }
        .jm-marquee-item {
          display: inline-flex; align-items: center; gap: 28px;
          padding-right: 28px;
          font-family: var(--font-heading, sans-serif);
          font-size: clamp(1.1rem, 2vw, 1.6rem);
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #fff;
          white-space: nowrap;
        }
        .jm-marquee-item i { font-style: normal; color: var(--jm-aqua); font-size: 1.1em; }
        @keyframes jmScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }

        /* =========================================================
           2. PHILOSOPHY BENTO
        ========================================================= */
        .jm-phil-bento {
          grid-template-areas:
            "head  head  p1    p1    p2    p2"
            "p3    p3    p3    quote quote quote"
            "p4    p4    p4    p5    p5    p5";
        }
        .jm-p-head  { grid-area: head; }
        .jm-p-1     { grid-area: p1; }
        .jm-p-2     { grid-area: p2; }
        .jm-p-3     { grid-area: p3; }
        .jm-p-quote { grid-area: quote; }
        .jm-p-4     { grid-area: p4; }
        .jm-p-5     { grid-area: p5; }

        .jm-h2 {
          font-family: var(--font-heading, sans-serif);
          font-size: clamp(2.2rem, 4vw, 3.6rem);
          font-weight: 600;
          line-height: 1.05;
          margin: 0;
        }

        .jm-big-quote {
          font-family: var(--font-heading, sans-serif);
          font-size: clamp(1.7rem, 2.8vw, 2.5rem);
          font-weight: 500;
          line-height: 1.2;
          margin: 0;
        }
        .jm-big-quote small { display: block; font-family: inherit; font-size: .72rem; letter-spacing: 3px; text-transform: uppercase; font-weight: 700; margin-bottom: 14px; }
        .jm-p-5 .jm-text { font-size: 1.2rem; font-weight: 600; line-height: 1.6; }

        /* =========================================================
           3. CHAPTERS (image cards 2x2)
        ========================================================= */
        .jm-section-title { display: flex; align-items: flex-end; justify-content: space-between; gap: 30px; margin-bottom: 26px; flex-wrap: wrap; }
        .jm-section-title .jm-tag { margin-bottom: 12px; }
        .jm-section-sub { max-width: 440px; margin: 0; font-size: .98rem; line-height: 1.7; }

        .jm-chapters { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: var(--jm-gap); }
        .jm-chap {
          position: relative;
          overflow: hidden;
          min-height: 500px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 34px;
          background: var(--jm-dark);
          text-align: left;
        }
        .jm-chap img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 1s ease;
        }
        .jm-chap:hover img { transform: scale(1.07); }
        /* strong overlay so text is always readable on bright photos */
        .jm-chap::before {
          content: "";
          position: absolute; inset: 0; z-index: 1;
          background: linear-gradient(
            180deg,
            rgba(5,25,27,.72) 0%,
            rgba(5,25,27,.35) 30%,
            rgba(5,25,27,.55) 55%,
            rgba(5,25,27,.95) 100%
          );
        }
        .jm-chap > * { position: relative; z-index: 2; }
        .jm-chap-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 20px; }
        .jm-chap-year {
          font-family: var(--font-heading, sans-serif);
          font-size: clamp(3.6rem, 7vw, 6.2rem);
          font-weight: 700;
          letter-spacing: -4px;
          line-height: .9;
        }
        .jm-chap-loc {
          font-size: .72rem; font-weight: 700; letter-spacing: 3px; text-transform: uppercase;
          padding: 9px 15px;
          background: rgba(5,25,27,.82);
          border: 1px solid rgba(95,214,219,.7);
          color: #ffffff;
          white-space: nowrap;
        }
        .jm-chap-title {
          font-family: var(--font-heading, sans-serif);
          font-size: clamp(1.6rem, 2.6vw, 2.2rem);
          font-weight: 600;
          line-height: 1.15;
          margin: 0 0 12px 0;
        }
        .jm-chap-title::before { content: ""; display: block; width: 44px; height: 3px; background: var(--jm-aqua); margin-bottom: 16px; }
        .jm-chap-desc { margin: 0; font-size: 1rem; line-height: 1.75; }

        /* =========================================================
           4. PROCESS + CTA
        ========================================================= */
        .jm-band { background: linear-gradient(135deg, var(--jm-dark) 0%, var(--jm-dark-2) 100%); margin-top: 56px; }
        .jm-band-inner { max-width: 1400px; margin: 0 auto; padding: 64px 4% 56px; }
        .jm-band-head { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: end; margin-bottom: 40px; }
        .jm-band-head .jm-text { margin: 0; font-size: 1.05rem; }

        .jm-steps { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); border-top: 1px solid rgba(255,255,255,.25); border-left: 1px solid rgba(255,255,255,.25); }
        .jm-step {
          position: relative;
          padding: 34px 28px 36px;
          border-right: 1px solid rgba(255,255,255,.25);
          border-bottom: 1px solid rgba(255,255,255,.25);
          text-align: left;
          transition: background .4s ease;
        }
        .jm-step:hover { background: rgba(95,214,219,.1); }
        .jm-step-num {
          font-family: var(--font-heading, sans-serif);
          font-size: 4rem;
          font-weight: 700;
          letter-spacing: -3px;
          line-height: 1;
          color: transparent;
          -webkit-text-stroke: 1.5px var(--jm-aqua);
          margin-bottom: 22px;
        }
        .jm-step:hover .jm-step-num { color: var(--jm-aqua); transition: color .4s ease; }
        .jm-step-title { font-family: var(--font-heading, sans-serif); font-size: 1.35rem; font-weight: 600; margin: 0 0 10px 0; }
        .jm-step-desc { margin: 0; font-size: .97rem; line-height: 1.7; }

        .jm-cta { display: flex; align-items: center; justify-content: space-between; gap: 30px; margin-top: 40px; flex-wrap: wrap; }
        .jm-cta h3 {
          margin: 0;
          font-family: var(--font-heading, sans-serif);
          font-size: clamp(1.5rem, 3vw, 2.4rem);
          font-weight: 600;
          line-height: 1.2;
        }
        .jm-cta h3 span { display: block; }
        .jm-cta-btn {
          display: inline-block;
          padding: 16px 38px;
          background: var(--jm-aqua);
          font-size: .8rem;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          text-decoration: none;
          transition: background .3s ease, transform .3s ease;
        }

        /* =========================================================
           TEXT SAFETY LAYER
           (site-wide h2/h4/p styles ko override karta hai:
            color, alignment, italic, uppercase, spacing)
        ========================================================= */
        .jm-page .jm-h2,
        .jm-page .jm-name,
        .jm-page .jm-lead,
        .jm-page .jm-text,
        .jm-page .jm-quote-text,
        .jm-page .jm-big-quote,
        .jm-page .jm-section-sub,
        .jm-page .jm-chap-title,
        .jm-page .jm-chap-desc,
        .jm-page .jm-step-title,
        .jm-page .jm-step-desc,
        .jm-page .jm-cta h3 {
          text-align: left !important;
          text-transform: none !important;
          font-style: normal !important;
          text-indent: 0 !important;
          word-spacing: normal !important;
          hyphens: none !important;
          text-shadow: none;
        }

        /* letter-spacing */
        .jm-page .jm-text, .jm-page .jm-lead, .jm-page .jm-section-sub,
        .jm-page .jm-chap-desc, .jm-page .jm-step-desc { letter-spacing: 0 !important; }
        .jm-page .jm-step-title { letter-spacing: 0 !important; }
        .jm-page .jm-chap-title { letter-spacing: -.5px !important; }
        .jm-page .jm-h2 { letter-spacing: -1.5px !important; }
        .jm-page .jm-name { letter-spacing: -2px !important; }
        .jm-page .jm-cta h3 { letter-spacing: -1px !important; }
        .jm-page .jm-quote-text, .jm-page .jm-big-quote { letter-spacing: -.5px !important; }

        /* quotes stay italic */
        .jm-page .jm-quote-text,
        .jm-page .jm-big-quote,
        .jm-page .jm-cta h3 span { font-style: italic !important; }
        .jm-page .jm-big-quote small { font-style: normal !important; text-transform: uppercase !important; letter-spacing: 3px !important; }

        /* ---- LIGHT TILES ---- */
        .jm-page .jm-text,
        .jm-page .jm-section-sub { color: var(--jm-body) !important; }
        .jm-page .jm-text strong { color: var(--jm-ink) !important; font-weight: 700; }
        .jm-page .jm-h2,
        .jm-page .jm-name { color: var(--jm-ink) !important; }
        .jm-page .jm-h2 em,
        .jm-page .jm-name em { color: var(--jm-teal) !important; font-style: normal !important; }
        .jm-page .jm-lead { color: var(--jm-ink) !important; }
        .jm-page .jm-lead strong { color: var(--jm-teal-dark) !important; }
        .jm-page .jm-tag { color: var(--jm-teal-dark) !important; }

        /* ---- DARK / TEAL TILES ---- */
        .jm-page .jm-tile--dark .jm-text,
        .jm-page .jm-tile--teal .jm-text { color: rgba(255,255,255,.9) !important; }
        .jm-page .jm-tile--dark .jm-text strong,
        .jm-page .jm-tile--teal .jm-text strong { color: #ffffff !important; }
        .jm-page .jm-tile--dark .jm-h2,
        .jm-page .jm-tile--teal .jm-h2 { color: #ffffff !important; }
        .jm-page .jm-tile--dark .jm-h2 em { color: var(--jm-aqua) !important; }
        .jm-page .jm-tile--dark .jm-tag,
        .jm-page .jm-tile--teal .jm-tag { color: var(--jm-aqua) !important; }
        .jm-page .jm-tile--teal .jm-tag { color: #d9ffff !important; }
        .jm-page .jm-tile--teal .jm-quote-text,
        .jm-page .jm-tile--teal .jm-big-quote,
        .jm-page .jm-tile--dark .jm-quote-text,
        .jm-page .jm-tile--dark .jm-big-quote {
          background: none !important;
          -webkit-text-fill-color: #ffffff !important;
          color: #ffffff !important;
        }
        .jm-page .jm-quote-text { color: #ffffff !important; }
        .jm-page .jm-big-quote { color: #ffffff !important; }
        .jm-page .jm-big-quote small { color: #d9ffff !important; }
        .jm-page .jm-p-5 .jm-text { color: #ffffff !important; }

        /* ---- CHAPTER CARDS (on photos) ---- */
        .jm-page .jm-chap-year {
          color: #ffffff !important;
          -webkit-text-stroke: 0 !important;
          text-shadow: 0 4px 28px rgba(0,0,0,.65), 0 1px 3px rgba(0,0,0,.6);
        }
        .jm-page .jm-chap-loc { color: #ffffff !important; }
        .jm-page .jm-chap-panel {
          background: rgba(5,25,27,.9);
          -webkit-backdrop-filter: blur(6px);
          backdrop-filter: blur(6px);
          padding: 24px 28px 26px;
          border-left: 4px solid var(--jm-aqua);
        }
        .jm-page .jm-chap-title {
          color: var(--jm-aqua) !important;
          text-shadow: none !important;
          margin-bottom: 10px !important;
        }
        .jm-page .jm-chap-title::before { display: none; }
        .jm-page .jm-chap-desc {
          color: #f1fbfb !important;
          text-shadow: none !important;
        }

        /* ---- PROCESS BAND ---- */
        .jm-page .jm-band .jm-tag { color: var(--jm-aqua) !important; }
        .jm-page .jm-band .jm-h2 { color: #ffffff !important; }
        .jm-page .jm-band .jm-h2 em { color: var(--jm-aqua) !important; }
        .jm-page .jm-band .jm-text { color: rgba(255,255,255,.92) !important; }
        .jm-page .jm-band .jm-text strong { color: #ffffff !important; }
        .jm-page .jm-step-title { color: #ffffff !important; }
        .jm-page .jm-step-desc { color: rgba(255,255,255,.85) !important; }
        .jm-page .jm-cta h3 { color: #ffffff !important; }
        .jm-page .jm-cta h3 span { color: var(--jm-aqua) !important; }
        .jm-page .jm-cta-btn { color: var(--jm-dark) !important; }
        .jm-page .jm-cta-btn:hover { background: #ffffff; transform: translateY(-3px); }

        /* =========================================================
           RESPONSIVE
        ========================================================= */
        @media (max-width: 1100px) {
          .jm-founder-bento {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            grid-template-areas:
              "portrait portrait"
              "name     name"
              "intro    intro"
              "edu      vision"
              "stats    stats"
              "quote    quote";
          }
          .jm-a-portrait { min-height: 560px; }
          .jm-a-stats { flex-direction: row; justify-content: space-around; gap: 30px; }
          .jm-a-stats .jm-stat + .jm-stat { margin-top: 0; padding-top: 0; border-top: 0; padding-left: 30px; border-left: 1px solid rgba(255,255,255,.18); }

          .jm-phil-bento {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            grid-template-areas:
              "head  head"
              "p1    p2"
              "p3    p3"
              "quote quote"
              "p4    p5";
          }
          .jm-steps { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .jm-band-head { grid-template-columns: 1fr; gap: 20px; }
        }

        @media (max-width: 760px) {
          .jm-wrap { padding: 0 5%; }
          .jm-tile { padding: 26px 22px; }
          .jm-founder-bento {
            grid-template-columns: 1fr;
            grid-template-areas:
              "portrait" "name" "intro" "edu" "vision" "stats" "quote";
          }
          .jm-a-portrait { min-height: 460px; }
          .jm-a-quote { flex-direction: column; align-items: flex-start; padding: 28px 22px; }
          .jm-quote-mark { display: none; }
          .jm-a-stats { flex-direction: column; }
          .jm-a-stats .jm-stat + .jm-stat { margin-top: 22px; padding-top: 22px; padding-left: 0; border-left: 0; border-top: 1px solid rgba(255,255,255,.18); }

          .jm-phil-bento {
            grid-template-columns: 1fr;
            grid-template-areas: "head" "p1" "p2" "p3" "quote" "p4" "p5";
          }
          .jm-chapters { grid-template-columns: 1fr; }
          .jm-chap { min-height: 460px; padding: 26px 22px; }
          .jm-chap-top { flex-direction: column; }
          .jm-steps { grid-template-columns: 1fr; }
          .jm-cta { flex-direction: column; align-items: flex-start; }
        }
      `}} />

      <div className="jm-page">

        {/* ================= 1. FOUNDER BENTO ================= */}
        <div className="jm-wrap jm-block">
          <div className="jm-bento jm-founder-bento">

            <div className="jm-tile jm-a-portrait jm-reveal">
              <img
                className="jm-portrait-img"
                src="/assets/images/jhanvi-mishra-portrait-new.jpeg"
                alt="Jhanvi Mishra — Principal Architect"
              />
              <div className="jm-portrait-cap">
                <b>Jhanvi Mishra</b>
                <span>Principal Architect &amp; Founder</span>
              </div>
            </div>

            <div className="jm-tile jm-a-name jm-reveal jm-d1">
              <span className="jm-tag">About Me</span>
              <h2 className="jm-name">Jhanvi <em>Mishra</em></h2>
              <div className="jm-roles">
                <span className="jm-role">Architect</span>
                <span className="jm-role">Interior Designer</span>
                <span className="jm-role">Scenographer</span>
              </div>
            </div>

            <div className="jm-tile jm-a-intro jm-reveal jm-d2">
              <p className="jm-lead">
                <strong>With 10+ years of global experience,</strong> she works across architecture, interior design, scenography and spatial experiences — bringing together design thinking, storytelling and a deep understanding of how people experience space.
              </p>
              <p className="jm-text">
                As a woman building her own path in the architectural world, I believe in questioning the <strong>expected, challenging conventions and creating with purpose.</strong> For me, architecture is not simply about how a space looks; it is about how it feels, functions and lives.
              </p>
            </div>

            <div className="jm-tile jm-a-edu jm-reveal">
              <span className="jm-tag">Education &amp; Roots</span>
              <p className="jm-text">
                She holds a <strong>Bachelor’s degree in Architecture from Dehradun Institute of Technology, India, and a Master’s in Scenography and Communication from Fachhochschule Dortmund, Germany.</strong> Her international journey across Europe and beyond has shaped the way she sees design — <strong>where architecture is rooted in context, refined through detail and elevated by experience.</strong>
              </p>
            </div>

            <div className="jm-tile jm-a-vision jm-reveal jm-d1">
              <span className="jm-tag">The Vision</span>
              <p className="jm-text">
                Today, through Jhanvi Mishra Design, her vision is to bring this global design sensibility to India — <strong>blending European design principles with Indian context,</strong> culture and craftsmanship to create spaces that feel contemporary, timeless and deeply personal.
              </p>
            </div>

            <div className="jm-tile jm-tile--dark jm-a-stats jm-reveal jm-d2">
              <div className="jm-stat">
                <div className="jm-stat-num">15+</div>
                <div className="jm-stat-label">Countries explored</div>
              </div>
              <div className="jm-stat">
                <div className="jm-stat-num">10+</div>
                <div className="jm-stat-label">Years of experience</div>
              </div>
            </div>

            <div className="jm-tile jm-tile--teal jm-a-quote jm-reveal">
              <div>
                <span className="jm-tag">My philosophy is simple</span>
                <p className="jm-quote-text">“Wherever I go, I create.”</p>
              </div>
              <div className="jm-quote-mark">”</div>
            </div>

          </div>
        </div>


        {/* ================= MARQUEE STRIP ================= */}
        <div className="jm-marquee" aria-hidden="true">
          <div className="jm-marquee-track">
            {[0, 1].map((dup) => (
              <div className="jm-marquee-group" style={{ display: 'flex' }} key={dup}>
                {marquee.map((m) => (
                  <span className="jm-marquee-item" key={`${dup}-${m}`}>
                    {m} <i>✦</i>
                  </span>
                ))}
                {marquee.map((m) => (
                  <span className="jm-marquee-item" key={`${dup}-b-${m}`}>
                    {m} <i>✦</i>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>


        {/* ================= 2. PHILOSOPHY BENTO ================= */}
        <div className="jm-wrap jm-block">
          <div className="jm-bento jm-phil-bento">

            <div className="jm-tile jm-tile--dark jm-p-head jm-reveal">
              <span className="jm-tag">What Drives Us</span>
              <h2 className="jm-h2">Our <em>Philosophy</em></h2>
            </div>

            <div className="jm-tile jm-p-1 jm-reveal jm-d1">
              <p className="jm-text">
                I believe architecture is more than creating beautiful spaces — it is about creating spaces that <strong>make us feel something.</strong>
              </p>
            </div>

            <div className="jm-tile jm-p-2 jm-reveal jm-d2">
              <p className="jm-text">
                We spend a significant part of our lives surrounded by the environments we create. Whether it is a workplace, a home, a hotel or an experiential space, design has the power to influence how we think, work, connect, rest and simply feel.
              </p>
            </div>

            <div className="jm-tile jm-p-3 jm-reveal">
              <p className="jm-text">
                My approach begins with people. I look beyond aesthetics to understand the individual, the culture, the context and the emotions that a space needs to evoke. <strong>I believe good design should feel intuitive — creating a balance between function, beauty, comfort and experience.</strong>
              </p>
            </div>

            <div className="jm-tile jm-tile--teal jm-p-quote jm-reveal jm-d1">
              <p className="jm-big-quote">
                <small>And perhaps, that is what design means to me</small>
                Wherever I go, I create.
              </p>
            </div>

            <div className="jm-tile jm-p-4 jm-reveal">
              <p className="jm-text">
                With an inclusive and holistic approach, I bring together <strong>architecture, interiors, scenography, materiality and storytelling</strong> to create spaces that are purposeful yet expressive.
              </p>
            </div>

            <div className="jm-tile jm-tile--dark jm-p-5 jm-reveal jm-d1">
              <p className="jm-text">
                For me, every project is an opportunity to make life a little more beautiful, meaningful and human.
              </p>
            </div>

          </div>
        </div>


        {/* ================= 3. STUDIO EVOLUTION ================= */}
        <div className="jm-wrap jm-block">
          <div className="jm-section-title jm-reveal">
            <div>
              <span className="jm-tag">The Journey</span>
              <h2 className="jm-h2">Studio <em>Evolution</em></h2>
            </div>
            <p className="jm-section-sub">
              Four chapters, two continents — from the drawing boards of Dehradun to a signature practice built on European detail and Indian soul.
            </p>
          </div>

          <div className="jm-chapters">
            {chapters.map((c, i) => (
              <article className={`jm-chap jm-reveal jm-d${(i % 2) + 1}`} key={c.year}>
                <img src={c.img} alt={c.alt} loading="lazy" style={c.imgStyle || {}} />
                <div className="jm-chap-top">
                  <div className="jm-chap-year">{c.year}</div>
                  <div className="jm-chap-loc">{c.location}</div>
                </div>
                <div className="jm-chap-panel">
                  <h4 className="jm-chap-title">{c.title}</h4>
                  <p className="jm-chap-desc">{c.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>


        {/* ================= 4. PROCESS + CTA ================= */}
        <div className="jm-band">
          <div className="jm-band-inner">
            <div className="jm-band-head jm-reveal">
              <div>
                <span className="jm-tag">How We Work</span>
                <h2 className="jm-h2">Our <em>Process</em></h2>
              </div>
              <p className="jm-text">
                A meticulous <strong>end-to-end project management</strong> methodology, guaranteeing that every design is executed with precision from the initial sketch to the final handover.
              </p>
            </div>

            <div className="jm-steps">
              {process.map((s, i) => (
                <div className={`jm-step jm-reveal jm-d${i + 1}`} key={s.num}>
                  <div className="jm-step-num">{s.num}</div>
                  <h4 className="jm-step-title">{s.title}</h4>
                  <p className="jm-step-desc">{s.desc}</p>
                </div>
              ))}
            </div>

            <div className="jm-cta jm-reveal">
              <h3>
                Have a space in mind?
                <span>Let’s create something together.</span>
              </h3>
              <Link to="/contact" className="jm-cta-btn">Get in Touch</Link>
            </div>
          </div>
        </div>

      </div>
    </SubCategoryLayout>
  );
}