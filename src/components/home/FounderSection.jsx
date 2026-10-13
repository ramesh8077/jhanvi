import React from "react";
import { Link } from "react-router-dom";

export default function FounderSection() {
  const highlightStyle = {
    color: "inherit",
    fontWeight: 700,
  };

  return (
    <section
      className="about-founder-section"
      id="founder"
      style={{
        background:
          "linear-gradient(135deg, #f8fafb 0%, #eef7f7 52%, #d9f5f5 100%)",
        color: "#102f32",
      }}
    >
      {/* Force existing dark styles to change */}
      <style>{`
        .about-founder-section {
          background: linear-gradient(
            135deg,
            #f8fafb 0%,
            #eef7f7 52%,
            #d9f5f5 100%
          ) !important;
        }

        .about-founder-section .founder-info-column {
          background: transparent !important;
          color: #102f32 !important;
        }

        .about-founder-section .founder-description {
          color: #102f32 !important;
          text-align: justify !important;
        }

        .about-founder-section .founder-description strong {
          color: #102f32 !important;
          font-weight: 700;
        }

        .about-founder-section .founder-kicker {
          color: #008f95 !important;
          text-align: left !important;
        }

        .about-founder-section .kicker-spark {
          color: #00aeb5 !important;
        }

        .about-founder-section .metric-val {
          color: #102f32 !important;
        }

        .about-founder-section .metric-lbl {
          color: #497174 !important;
        }

        .about-founder-section .metric-divider {
          background: rgba(0, 143, 149, 0.3) !important;
        }
      `}</style>

      <div className="founder-bg-ambient">
        <div className="ambient-glow glow-1"></div>
        <div className="ambient-glow glow-2"></div>
      </div>

      <div className="about-founder-container">
        {/* LEFT: Portrait */}
        <div className="founder-portrait-column reveal visible">
          <div className="founder-card-frame">
            <div className="founder-card-border"></div>

            <div className="founder-photo-container">
              <img
                src="/assets/images/jhanvi-notebook-portrait1.png"
                alt="Jhanvi Mishra - Principal Interior Designer & Architect"
                loading="lazy"
              />

              <div className="founder-photo-shimmer"></div>
            </div>

            <div className="founder-experience-tag">
              <span className="exp-dot"></span>
              <span className="exp-num">15+</span>
              <span className="exp-txt">Countries Explored</span>
            </div>
          </div>
        </div>

        {/* RIGHT: Content */}
        <div className="founder-info-column reveal visible reveal-delay-1">
          <div className="founder-header-group">
          </div>

          <p className="founder-description">
            <strong>Jhanvi Mishra</strong> —{" "}
            <span style={highlightStyle}>
              A multifaceted Interior Designer, Architect, and Scenic Designer,
              with a German
            </span>{" "}
            return, coming back to roots to curate design from all over the
            globe.
          </p>

          <p className="founder-description" style={{ marginTop: "12px" }}>
            <span style={highlightStyle}>
              Architect and interior designer
            </span>{" "}
            with <span style={highlightStyle}>a decade of work experience - nationally and internationally</span> in
            designing and managing{" "}
            <span style={highlightStyle}>end-to-end projects</span>. For me,
            architecture is more than just design—it is a{" "}
            <span style={highlightStyle}>
              responsibility and a way to make the world a better place.
            </span>
          </p>

          <p className="founder-description" style={{ marginTop: "12px" }}>
            I believe that the spaces we inhabit have the power to shape how we feel, connect, experience, and live. Whether it is a home, workplace, hospitality environment, retail space, or an immersive experience, thoughtful design can create a sense of comfort, belonging, inspiration, and harmony.
          </p>

          <p className="founder-description" style={{ marginTop: "12px" }}>
            My design approach is rooted in understanding people and the stories behind each space. I explore the relationship between architecture, interiors, scenography, culture, materiality, and human experience to create environments that are meaningful, inclusive, and responsive to their context. For me, design is not simply about creating beautiful spaces—it is about creating experiences that are functional, purposeful, and emotionally engaging, while delivering lasting value to my clients and the people who inhabit them.
          </p>

          <p className="founder-description" style={{ marginTop: "12px" }}>
            My aim is to establish a landmark interior design practice in India and Europe to exchange design, warmth, and connections and emerges two design worlds to One through craftsmanship and exchange culture.
          </p>

          <div className="founder-metrics-row">
            <div className="metric-box">
              <div className="metric-val">FH Dortmund</div>
              <div className="metric-lbl">M.Arch Germany</div>
            </div>

            <div className="metric-divider"></div>

            <div className="metric-box">
              <div className="metric-val">15+</div>
              <div className="metric-lbl">European Countries</div>
            </div>

            <div className="metric-divider"></div>

            <div className="metric-box">
              <div className="metric-val">DIT</div>
              <div className="metric-lbl">B.Arch India</div>
            </div>
          </div>

          <div className="founder-action-area">
            <Link to="/my-journey" className="founder-primary-btn">
              <span>EXPLORE MY JOURNEY</span>
              <i className="fa-solid fa-arrow-right-long"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}