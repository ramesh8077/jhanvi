import React from "react";
import { FaPlus } from "react-icons/fa6";
import ashishImg from "../../assets/images/team/ashish_color.png";

export default function CollaboratorSection() {
  return (
    <section className="collab-section">
      {/* Background watermark */}
      <div className="collab-watermark" aria-hidden="true">
        VISIONARY
      </div>

      <div className="collab-container">
        {/* Header */}
        <div className="collab-header">
          <h2 className="section-title collab-title">
            The Power of Partnership
          </h2>
        </div>

        {/* Cards */}
        <div className="collab-grid">
          {/* ───────── Jhanvi card ───────── */}
          <article className="collab-card">
            <div className="collab-card-image">
              <img
                src="/assets/images/Elegant Black Suit Portrait.png"
                alt="Jhanvi Mishra"
                className="collab-img-jhanvi"
              />
            </div>

            <div className="collab-card-body">
              <span className="collab-role">
                The Visionary / Founder
              </span>
              <h3 className="collab-name">Jhanvi Mishra</h3>

              <div className="collab-text">
                <p>
                  At the heart of the practice is Jhanvi Mishra — an architect,
                  interior designer, and scenographer who believes that every
                  space has a story waiting to be experienced.
                </p>
                <p>
                  Her philosophy is simple: <strong>“Wherever I go, I create.”</strong>
                  For Jhanvi, design is not merely about shaping spaces; it is
                  about shaping the way people feel, move, connect, and
                  remember them.
                </p>
                <p>
                  From the first idea to the final detail, she approaches every
                  project as a journey — exploring space, light, material,
                  movement, culture, and human experience to transform a vision
                  into something tangible.
                </p>
                <p>
                  Because for her, the most successful spaces are not simply
                  seen — <strong>they are felt.</strong>
                </p>
              </div>

              <div className="collab-stats">
                <div className="collab-stat">M.Arch Germany</div>
                <div className="collab-stat">15+ Countries</div>
                <div className="collab-stat">10+ Years Exp.</div>
                <div className="collab-stat">51+ Projects</div>
              </div>
            </div>
          </article>

          {/* Plus badge */}
          <div className="collab-plus" aria-hidden="true">
            <FaPlus />
          </div>

          {/* ───────── Ashish card ───────── */}
          <article className="collab-card">
            <div className="collab-card-image">
              <img
                src={ashishImg}
                alt="Ashish Sharma"
                className="collab-img-ashish"
              />
            </div>

            <div className="collab-card-body">
              <span className="collab-role">
                Collaborator / Construction · Execution · Interiors
              </span>
              <h3 className="collab-name">Ashish Sharma</h3>

              <div className="collab-text">
                <p>
                  <strong>Ashish Sharma,</strong> with 24-plus years of
                  experience in the <strong>field of construction</strong>,
                  execution, and interiors, has successfully accomplished{" "}
                  <strong>more than 60 projects</strong>.
                  He has been commanding the construction team with full
                  dedication and sincerity.
                </p>
              </div>

              <div className="collab-stats">
                <div className="collab-stat">24+ Years Exp.</div>
                <div className="collab-stat">60+ Turnkey Projects</div>
              </div>
            </div>
          </article>
        </div>
      </div>

      <style>{`
        .collab-section,
        .collab-section *,
        .collab-section *::before,
        .collab-section *::after {
          box-sizing: border-box;
        }

        .collab-section {
          position: relative;
          width: 100%;
          background: #ffffff;
          padding: 16px 20px 40px;
          overflow: hidden;
        }

        /* Watermark */
        .collab-watermark {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: clamp(8rem, 25vw, 32rem);
          font-weight: 900;
          color: rgba(0, 139, 139, 0.025);
          white-space: nowrap;
          pointer-events: none;
          z-index: 0;
          font-family: var(--font-heading);
        }

        .collab-container {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1500px;
          margin: 0 auto;
        }

        /* Header */
        .collab-header {
          text-align: center;
          margin: 6px 0 22px;
        }
        .collab-section .collab-title {
          font-family: var(--font-heading);
          font-weight: 800;
          color: #111111;
          margin: 0 !important;
          line-height: 1.15;
          letter-spacing: -1px;
        }

        /* Grid */
        .collab-grid {
          position: relative;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 28px;
          align-items: stretch;
        }

        /* Card */
        .collab-card {
          display: flex;
          flex-direction: row;
          align-items: stretch;
          background: #ffffff;
          border: 1px solid rgba(0, 139, 139, 0.3);
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 16px 44px rgba(0, 139, 139, 0.08);
        }

        /* Bigger image portion */
        .collab-card-image {
          flex: 0 0 46%;
          position: relative;
          overflow: hidden;
          background: #f3f7f7;
          min-height: 100%;
        }
        .collab-card-image img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .collab-img-jhanvi { object-position: center 25%; }
        .collab-img-ashish { object-position: center 15%; }

        /* Body (compact) */
        .collab-card-body {
          flex: 1 1 0;
          min-width: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          padding: 22px 24px 22px 24px;
        }

        .collab-section .collab-role {
          display: block;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #008f95;
          margin: 0 0 6px;
          text-align: left;
          line-height: 1.4;
        }

        /* Name (overrides external h3 styles) */
        .collab-section .collab-name {
          font-family: var(--font-heading);
          font-size: clamp(1.8rem, 2.6vw, 2.8rem) !important;
          font-style: normal !important;
          font-weight: 800 !important;
          letter-spacing: -0.5px !important;
          text-transform: none !important;
          text-align: left !important;
          color: #111111 !important;
          -webkit-text-fill-color: #111111 !important;
          background: none !important;
          line-height: 1.1 !important;
          margin: 0 0 12px !important;
          padding: 0 !important;
          white-space: normal !important;
        }

        /* Text */
        .collab-text {
          width: 100%;
          text-align: left;
        }
        .collab-section .collab-text p {
          font-size: clamp(0.84rem, 0.95vw, 0.96rem) !important;
          line-height: 1.55 !important;
          color: #2b3a3b !important;
          font-weight: 400 !important;
          text-align: justify !important;
          max-width: 100% !important;
          margin: 0 0 9px !important;
          padding: 0 !important;
        }
        .collab-section .collab-text p:last-child {
          margin-bottom: 0 !important;
        }

        .text-highlight {
          background: transparent !important;
          color: #0a2a2d !important;
          font-weight: 700 !important;
          font-size: 1em !important;
        }

        /* Stats (pinned to bottom so both cards align) */
        .collab-stats {
          width: 100%;
          margin-top: auto;
          padding-top: 16px;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 8px;
        }
        .collab-stat {
          background: #f9f9f9;
          border: 1px solid rgba(0, 139, 139, 0.55);
          padding: 9px 6px;
          font-size: clamp(0.76rem, 0.85vw, 0.88rem);
          font-weight: 700;
          color: #111111;
          text-align: center;
          line-height: 1.25;
          box-shadow: 0 6px 14px rgba(0, 139, 139, 0.05);
        }

        /* Plus badge */
        .collab-plus {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: var(--accent-gradient, linear-gradient(135deg, #008f95, #00c2c7));
          border: 5px solid #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 12px 26px rgba(0, 139, 139, 0.25);
          z-index: 6;
        }
        .collab-plus svg {
          color: #ffffff;
          font-size: 1.3rem;
        }

        /* ───── Large laptops ───── */
        @media (max-width: 1366px) {
          .collab-grid { gap: 22px; }
          .collab-card-body { padding: 18px 18px; }
          .collab-card-image { flex-basis: 44%; }
          .collab-section .collab-text p { font-size: 0.82rem !important; line-height: 1.5 !important; }
          .collab-stat { padding: 8px 4px; font-size: 0.74rem; }
          .collab-plus { width: 52px; height: 52px; border-width: 4px; }
        }

        /* ───── Tablet: stack cards (image stays on side) ───── */
        @media (max-width: 1050px) {
          .collab-section { padding: 14px 16px 36px; }
          .collab-grid {
            grid-template-columns: 1fr;
            gap: 0;
          }
          .collab-card {
            width: 100%;
            max-width: 820px;
            margin: 0 auto;
          }
          .collab-card-image { flex-basis: 40%; }
          .collab-card-body { padding: 22px 24px; }
          .collab-section .collab-text p { font-size: 0.95rem !important; line-height: 1.6 !important; }
          .collab-stat { font-size: 0.85rem; padding: 10px 8px; }
          .collab-plus {
            position: relative;
            top: auto;
            left: auto;
            transform: none;
            margin: -28px auto;
            width: 56px;
            height: 56px;
          }
        }

        /* ───── Mobile: image on top ───── */
        @media (max-width: 700px) {
          .collab-section { padding: 12px 12px 32px; }
          .collab-header { margin-bottom: 16px; }
          .collab-header h2 { font-size: clamp(1.7rem, 8vw, 2.4rem) !important; }

          .collab-card { flex-direction: column; border-radius: 20px; }
          .collab-card-image {
            flex: none;
            width: 100%;
            height: auto;
            min-height: 0;
            aspect-ratio: 4 / 4.4;
          }
          .collab-card-body { padding: 20px 16px 18px; }
          .collab-section .collab-name { font-size: clamp(1.7rem, 8vw, 2.2rem) !important; }
          .collab-section .collab-text p { font-size: 0.92rem !important; }
          .collab-stat { font-size: 0.82rem; }
          .collab-plus { margin: -26px auto; width: 52px; height: 52px; }
        }

        @media (max-width: 390px) {
          .collab-stats { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}