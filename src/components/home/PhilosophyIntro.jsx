import React from "react";

export default function PhilosophyIntro() {
  return (
    <section className="philosophy-intro reveal visible pi-section">
      <div className="pi-container">
        <div className="philosophy-intro-header">
          <h2 className="pi-title">WHEREVER I GO, I CREATE</h2>

          <div className="pi-divider" aria-hidden="true">
            <span />
            <i />
            <span />
          </div>

          <h3 className="pi-tagline">
            <span>We imagine</span>
            <b>•</b>
            <span>We create</span>
            <b>•</b>
            <span>We innovate</span>
          </h3>
        </div>

        <div className="philosophy-intro-grid">
          <div className="philosophy-intro-right pi-body">
            <p className="zha-manifesto-text pi-lead">
              From Gurgaon to Germany, London to Delhi, we turn your ordinary
              spaces into extraordinary ones.{" "}
              <strong className="pi-strong">
                As a decade-old design company tailoring spaces from Pin to
                Plane, we ensure timeless elegance and functional harmony.
              </strong>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .pi-section {
          background: linear-gradient(135deg, #f8fafb 0%, #eef7f7 52%, #d9f5f5 100%) !important;
          color: #102f32;
          padding: 10px 0 !important;
          margin: 0 !important;
        }
        .pi-container {
          width: 100%;
          max-width: 100%;
          margin: 0 !important;
          padding: 0 !important;
          text-align: center;
        }

        /* Kill external margins/padding */
        .pi-section .philosophy-intro-header,
        .pi-section .philosophy-intro-grid {
          margin: 0 !important;
          padding: 0 !important;
          gap: 0 !important;
        }

        /* Title */
        .pi-section .pi-title {
          color: #008f95 !important;
          background: none !important;
          -webkit-text-fill-color: #008f95 !important;
          font-size: clamp(2.4rem, 6vw, 5.6rem) !important;
          line-height: 1.1 !important;
          letter-spacing: 0.02em;
          font-weight: 800 !important;
          text-align: center !important;
          margin: 0 !important;
          padding: 0 !important;
        }

        /* Divider */
        .pi-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          margin: 1rem auto !important;
        }
        .pi-divider span {
          width: 90px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #008f95);
        }
        .pi-divider span:last-child {
          background: linear-gradient(270deg, transparent, #008f95);
        }
        .pi-divider i {
          width: 10px;
          height: 10px;
          background: #008f95;
          transform: rotate(45deg);
        }

        /* Tagline */
        .pi-section .pi-tagline {
          display: flex;
          flex-wrap: nowrap;
          justify-content: center;
          align-items: center;
          gap: 0.6rem 1.2rem;
          margin: 0 !important;
          padding: 0 !important;
          font-size: clamp(1.1rem, 2.2vw, 1.7rem) !important;
          font-style: italic;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(16, 47, 50, 0.8) !important;
          white-space: nowrap !important;
        }
        .pi-tagline b {
          color: #008f95;
          font-style: normal;
        }

        /* Body paragraph */
        .pi-body {
          grid-column: 1 / -1;
          width: 100%;
          max-width: 880px;
          margin: 1.2rem auto 0 !important;
          padding: 0 !important;
        }
        .pi-section .pi-lead {
          font-size: clamp(1.1rem, 1.8vw, 1.5rem) !important;
          line-height: 1.7 !important;
          color: #2b4a4d !important;
          font-weight: 400 !important;
          text-align: justify !important;
          text-align-last: left !important;
          text-justify: inter-word;
          hyphens: none;
          max-width: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
        }
        .pi-strong {
          font-weight: 700;
          color: #0a2a2d;
        }

        /* Mobile */
        @media (max-width: 768px) {
          .philosophy-intro-left { display: none; }
          .pi-divider span { width: 40px; }
          .pi-section .pi-tagline {
            flex-wrap: wrap;
            white-space: normal !important;
            font-size: 1rem !important;
            gap: 0.4rem 0.8rem;
          }
          .pi-tagline b { display: none; }
          .pi-section .pi-lead {
            text-align: left !important;
            text-align-last: left !important;
          }
        }
      `}</style>
    </section>
  );
}