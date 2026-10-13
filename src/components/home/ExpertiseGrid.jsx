import React from 'react';
import { Link } from 'react-router-dom';

const homeExpertiseItems = [
  {
    title: "Commercial Projects",
    image: "/assets/images/commercial/VIEW 1 FINAL.jpg",
    link: "/projects"
  },
  {
    title: "Hospitals",
    image: "/assets/images/hospital/exterior_1.jpg",
    link: "/projects"
  },
  {
    title: "Offices",
    image: "/assets/images/offices/minda_office_1.jpg",
    link: "/projects"
  },
  {
    title: "Farm Houses",
    image: "/assets/images/farmhouse/drawing1.png",
    link: "/projects"
  },
  {
    title: "Scenic Designs",
    image: "/assets/images/scenic/scenic_1.jpg",
    link: "/projects"
  },
  {
    title: "Restaurants",
    image: "/assets/images/restaurants/rest_michigan_taps_32.jpg",
    link: "/projects"
  },
  {
    title: "Residence Projects",
    image: "/assets/images/residence/luxury_villa_exterior.jpeg",
    link: "/projects"
  },
  {
    title: "Space Planning",
    image: "/assets/images/premium-quality-image-modern-living-room.jpg",
    link: "/projects"
  }
];

const REPEAT_COUNT = 8;
const singleRowMarquee = Array.from({ length: REPEAT_COUNT }, () => homeExpertiseItems).flat();

export default function ExpertiseGrid() {
  return (
    <section className="section-edge-to-edge zha-expertise-section" id="featuredExpertise">
      <style>{`
        .zha-expertise-section {
          padding: 60px 0;
          background: #fff;
          overflow: hidden;
        }

        .section-label {
          display: block;
          color: #555555;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          font-size: 14px;
          margin-bottom: 12px;
          text-align: center;
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 3.6rem) !important;
        }

        .section-line {
          display: none !important;
        }

        .zha-expertise-marquee-viewport {
          overflow: hidden;
          width: 100%;
          position: relative;
          margin-bottom: 24px;
        }

        .zha-expertise-marquee-track {
          display: flex;
          gap: 24px;
          width: max-content;
        }

        .zha-expertise-marquee-track.row-1 {
          animation: zha-marquee-left 60s linear infinite;
        }

        .zha-expertise-marquee-viewport:hover .zha-expertise-marquee-track {
          animation-play-state: paused;
        }

        .zha-expertise-cell {
          flex: 0 0 280px;
          position: relative;
          display: block;
          text-decoration: none;
        }

        .zha-expertise-image-wrapper {
          width: 100%;
          height: 320px;
          overflow: hidden;
        }

        .zha-expertise-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .zha-expertise-cell:hover .zha-expertise-image-wrapper img {
          transform: scale(1.08);
        }

        .zha-expertise-info {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 4px;
        }

        .zha-expertise-title {
          color: #000 !important;
          font-weight: 600 !important;
          font-size: 17px !important;
          font-style: normal !important;
          text-align: left !important;
          margin: 0;
        }

        .zha-expertise-arrow {
          color: #2e7d32;
          font-size: 18px;
          transition: transform 0.3s ease;
        }

        .zha-expertise-cell:hover .zha-expertise-arrow {
          transform: translateX(6px);
        }

        .btn {
          display: inline-block;
          padding: 12px 32px;
          background: #2e7d32;
          color: #fff;
          font-weight: 600;
          text-decoration: none;
          border-radius: 4px;
          transition: background 0.3s ease;
        }

        .btn:hover {
          background: #1b5e20;
        }

        @keyframes zha-marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-100% / ${REPEAT_COUNT})); }
        }

        @media (max-width: 768px) {
          .zha-expertise-cell {
            flex: 0 0 220px;
          }
          .zha-expertise-image-wrapper {
            height: 240px;
          }
          .section-title {
            font-size: clamp(1.2rem, 7vw, 26px) !important;
            word-break: break-word !important;
            text-align: center !important;
          }
          .section-header {
            padding: 0 20px !important;
          }
        }
      `}</style>

      <div
        className="section-header reveal visible"
        style={{ maxWidth: '1200px', margin: '0 auto 40px', padding: '0 40px' }}
      >
        <span className="section-label">What We Do</span>
        <h2 className="section-title">Areas of Expertise</h2>
        <div className="section-line"></div>
      </div>

      <div className="zha-expertise-marquee-viewport">
        <div className="zha-expertise-marquee-track row-1">
          {singleRowMarquee.map((item, idx) => (
            <Link
              key={idx}
              to={item.link}
              className="zha-expertise-cell reveal visible"
            >
              <div className="zha-expertise-image-wrapper">
                <img src={item.image} alt={item.title} loading="lazy" />
              </div>
              <div className="zha-expertise-info">
                <h3 className="zha-expertise-title">{item.title}</h3>
                <span className="zha-expertise-arrow">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '30px' }} className="reveal visible">
        <Link to="/projects" className="btn">Explore All Projects</Link>
      </div>
    </section>
  );
}