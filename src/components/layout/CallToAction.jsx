import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function CallToAction() {
  const location = useLocation();

  const handleCtaClick = (event) => {
    if (location.pathname === "/contact") {
      event.preventDefault();
      const form = document.querySelector(".contact-form-wrapper");
      if (form) {
        form.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  };

  return (
    <section id="site-cta">
      <style>{`
        #site-cta,
        #site-cta *,
        #site-cta *::before,
        #site-cta *::after {
          box-sizing: border-box;
        }

        #site-cta {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 24px 24px 0;
          background: #30302e;
          font-family: "Century Gothic", "Montserrat", "Inter", sans-serif;
          border-top: none;
          border-bottom: none;
        }

        /* Faded watermark */
        #site-cta .cta-watermark {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: clamp(6rem, 18vw, 16rem);
          font-weight: 900;
          letter-spacing: 0.04em;
          white-space: nowrap;
          color: rgba(255, 255, 255, 0.22);
          pointer-events: none;
          user-select: none;
          z-index: 0;
        }

        #site-cta .cta-inner {
          position: relative;
          z-index: 2;
          max-width: 860px;
          margin: 0 auto;
          text-align: center;
        }

        /* Kicker */
        #site-cta .cta-kicker {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin: 0 0 8px !important;
          padding: 0 !important;
          background: none !important;
          font-size: 0.78rem !important;
          font-weight: 700 !important;
          letter-spacing: 0.3em !important;
          text-transform: uppercase;
          color: #00595e !important;
          -webkit-text-fill-color: #00595e !important;
          text-align: center !important;
        }
        #site-cta .cta-kicker::before,
        #site-cta .cta-kicker::after {
          content: "";
          display: block;
          width: 30px;
          height: 1px;
          background: #00595e;
        }

        /* Heading */
        #site-cta .cta-title {
          margin: 0 0 8px !important;
          padding: 0 !important;
          font-size: clamp(1.4rem, 2.5vw, 2.2rem) !important;
          font-weight: 800 !important;
          font-style: normal !important;
          line-height: 1.2 !important;
          letter-spacing: 0.02em !important;
          text-transform: uppercase;
          text-align: center !important;
          text-wrap: balance;
          background: none !important;
          background-clip: initial !important;
          -webkit-background-clip: initial !important;
          -webkit-text-fill-color: #d6d6d2 !important;
          text-shadow: none !important;
          filter: none !important;
          color: #d6d6d2 !important;
        }

        /* Divider */
        #site-cta .cta-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.7rem;
          margin: 0 auto 12px;
        }
        #site-cta .cta-divider span {
          width: 70px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #00595e);
        }
        #site-cta .cta-divider span:last-child {
          background: linear-gradient(270deg, transparent, #00595e);
        }
        #site-cta .cta-divider i {
          width: 8px;
          height: 8px;
          background: #00595e;
          transform: rotate(45deg);
        }

        /* Text */
        #site-cta .cta-text {
          max-width: 600px;
          margin: 0 auto 16px !important;
          padding: 0 !important;
          font-size: 0.95rem !important;
          font-weight: 400 !important;
          line-height: 1.7 !important;
          text-align: center !important;
          background: none !important;
          text-shadow: none !important;
          filter: none !important;
          -webkit-text-fill-color: #1d4649 !important;
          color: #1d4649 !important;
        }

        /* Buttons */
        #site-cta .cta-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 14px;
        }

        #site-cta .cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 42px;
          padding: 10px 24px;
          border-radius: 999px;
          font-size: 0.85rem;
          font-weight: 700;
          line-height: 1;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          text-decoration: none;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease,
            background-color 0.3s ease, color 0.3s ease,
            border-color 0.3s ease;
        }

        #site-cta .cta-btn-primary {
          background: rgba(255, 255, 255, 0.1) !important;
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff !important;
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
        #site-cta .cta-btn-primary:hover {
          background: rgba(255, 255, 255, 0.2) !important;
          transform: translateY(-3px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
        }
        #site-cta .cta-btn-primary .cta-arrow {
          display: inline-block;
          transition: transform 0.3s ease;
        }
        #site-cta .cta-btn-primary:hover .cta-arrow {
          transform: translateX(4px);
        }

        #site-cta .cta-btn-secondary {
          background: transparent !important;
          color: #d6d6d2 !important;
          -webkit-text-fill-color: #d6d6d2 !important;
          border: 1px solid rgba(214, 214, 210, 0.4);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
        #site-cta .cta-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1) !important;
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff !important;
          border-color: rgba(255, 255, 255, 0.6);
          transform: translateY(-3px);
        }

        /* Trust row */
        #site-cta .cta-trust {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 10px 34px;
          margin: 16px 0 0;
          padding: 0;
          list-style: none;
        }
        #site-cta .cta-trust li {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          margin: 0;
          padding: 0;
          font-size: 0.88rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          color: #123b3e;
        }
        #site-cta .cta-trust li::before {
          content: "\\2713";
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #006b70;
          color: #ffffff;
          font-size: 0.7rem;
          font-weight: 800;
        }

        /* Tablet */
        @media (max-width: 900px) {
          #site-cta { padding: 48px 22px 0; }
        }

        /* Mobile */
        @media (max-width: 600px) {
          #site-cta { padding: 40px 16px 0; }
          #site-cta .cta-kicker { font-size: 0.7rem !important; letter-spacing: 0.22em !important; }
          #site-cta .cta-kicker::before,
          #site-cta .cta-kicker::after { width: 18px; }
          #site-cta .cta-title { font-size: 1.55rem !important; }
          #site-cta .cta-text { font-size: 0.97rem !important; margin-bottom: 26px !important; }
          #site-cta .cta-actions { flex-direction: column; gap: 12px; }
          #site-cta .cta-btn { width: 100%; max-width: 320px; }
        }
      `}</style>

      <div className="cta-inner">
        <h2 className="cta-title">Ready to build your dream space?</h2>

        <div className="cta-actions">
          <Link
            to="/contact"
            className="cta-btn cta-btn-primary"
            onClick={handleCtaClick}
          >
            Book a consultation
            <span className="cta-arrow" aria-hidden="true">
              &rarr;
            </span>
          </Link>

          <Link to="/projects" className="cta-btn cta-btn-secondary">
            View our projects
          </Link>
        </div>
      </div>
    </section>
  );
}