import React from "react";
import { testimonialsData } from "../../data/testimonialsData";

const getInitials = (name = "") =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0].toUpperCase())
    .join("");

export default function Testimonials() {
  return (
    <section className="tm-section">
      <div className="tm-container">
        {/* Header */}
        <div className="tm-header">
          <span className="tm-kicker">Client Stories</span>
          <h2 className="section-title tm-title">Testimonials</h2>

          <div className="tm-divider" aria-hidden="true">
            <span />
            <i />
            <span />
          </div>

          <p className="tm-intro">
            Hear from the people who have experienced our design philosophy
            firsthand.
          </p>
        </div>

        {/* Cards */}
        <div className="tm-grid">
          {testimonialsData.map((item, idx) => (
            <article key={idx} className="tm-card">
              <div className="tm-quote-mark" aria-hidden="true">
                &ldquo;
              </div>

              <p className="tm-quote">{item.quote}</p>

              <div className="tm-author">
                <div className="tm-avatar" aria-hidden="true">
                  {getInitials(item.author)}
                </div>
                <div className="tm-author-info">
                  <h4 className="tm-name">{item.author}</h4>
                  <span className="tm-role">{item.title}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .tm-section,
        .tm-section *,
        .tm-section *::before,
        .tm-section *::after {
          box-sizing: border-box;
        }

        .tm-section {
          width: 100%;
          padding: 40px 24px 80px;
          background: linear-gradient(180deg, #ffffff 0%, #f4fafa 100%);
        }

        .tm-container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
        }

        /* Header */
        .tm-header {
          text-align: center;
          margin-bottom: 48px;
        }
        .tm-section .tm-kicker {
          display: block;
          margin: 0 0 12px !important;
          padding: 0 !important;
          background: none !important;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: #008f95 !important;
          text-align: center !important;
        }
        .tm-section .tm-title {
          margin: 0 !important;
          line-height: 1.1;
          text-align: center !important;
        }
        .tm-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.7rem;
          margin: 18px auto;
        }
        .tm-divider span {
          width: 80px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #008f95);
        }
        .tm-divider span:last-child {
          background: linear-gradient(270deg, transparent, #008f95);
        }
        .tm-divider i {
          width: 9px;
          height: 9px;
          background: #008f95;
          transform: rotate(45deg);
        }
        .tm-section .tm-intro {
          max-width: 560px !important;
          margin: 0 auto !important;
          padding: 0 !important;
          font-size: 1.05rem !important;
          line-height: 1.7 !important;
          color: #4b5d5f !important;
          font-weight: 400 !important;
          text-align: center !important;
        }

        /* Grid: 3 equal cards */
        .tm-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 28px;
          align-items: stretch;
        }

        /* Card */
        .tm-card {
          position: relative;
          display: flex;
          flex-direction: column;
          height: 100%;
          padding: 34px 30px 28px;
          background: #ffffff !important;
          border: 1px solid rgba(0, 143, 149, 0.2) !important;
          border-radius: 22px !important;
          box-shadow: 0 16px 40px rgba(0, 139, 139, 0.08) !important;
          overflow: hidden;
          text-align: left !important;
          transition: transform 0.3s ease, box-shadow 0.3s ease,
            border-color 0.3s ease;
        }
        .tm-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #008f95, #00c2c7);
        }
        .tm-card:hover {
          transform: translateY(-6px);
          border-color: rgba(0, 143, 149, 0.5) !important;
          box-shadow: 0 24px 54px rgba(0, 139, 139, 0.16) !important;
        }

        /* Quote mark */
        .tm-section .tm-quote-mark {
          margin: 0 0 6px !important;
          padding: 0 !important;
          height: 52px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 5.5rem;
          font-weight: 700;
          line-height: 0.9;
          color: #008f95 !important;
          opacity: 0.9;
          text-align: left !important;
          position: static !important;
        }

        /* Quote text */
        .tm-section .tm-quote {
          flex: 1 1 auto;
          margin: 0 0 26px !important;
          padding: 0 !important;
          font-size: 1.05rem !important;
          font-style: normal !important;
          font-weight: 400 !important;
          line-height: 1.75 !important;
          color: #243b3d !important;
          text-align: left !important;
          max-width: 100% !important;
        }

        /* Author */
        .tm-author {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: auto;
          padding-top: 20px;
          border-top: 1px solid rgba(0, 143, 149, 0.2);
          text-align: left !important;
        }
        .tm-avatar {
          flex-shrink: 0;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #008f95, #00c2c7);
          color: #ffffff;
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          box-shadow: 0 8px 18px rgba(0, 143, 149, 0.3);
        }
        .tm-author-info {
          min-width: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 4px;
        }
        .tm-section .tm-name {
          margin: 0 !important;
          padding: 0 !important;
          font-size: 1.1rem !important;
          font-style: normal !important;
          font-weight: 700 !important;
          letter-spacing: 0 !important;
          text-transform: none !important;
          color: #111111 !important;
          -webkit-text-fill-color: #111111 !important;
          background: none !important;
          line-height: 1.2 !important;
          text-align: left !important;
        }
        .tm-section .tm-role {
          display: block;
          margin: 0 !important;
          padding: 0 !important;
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #008f95 !important;
          line-height: 1.4;
          text-align: left !important;
        }

        /* Laptops */
        @media (max-width: 1200px) {
          .tm-grid { gap: 20px; }
          .tm-card { padding: 30px 22px 24px; }
          .tm-section .tm-quote { font-size: 0.98rem !important; }
        }

        /* Tablet: single column */
        @media (max-width: 960px) {
          .tm-section { padding: 36px 20px 64px; }
          .tm-header { margin-bottom: 36px; }
          .tm-grid {
            grid-template-columns: 1fr;
            gap: 20px;
            max-width: 720px;
            margin: 0 auto;
          }
          .tm-card { padding: 30px 26px 26px; }
          .tm-section .tm-quote { font-size: 1.05rem !important; }
        }

        /* Mobile */
        @media (max-width: 600px) {
          .tm-section { padding: 24px 14px 52px; }
          .tm-section .tm-kicker { letter-spacing: 0.24em; font-size: 0.72rem; }
          .tm-section .tm-intro { font-size: 0.98rem !important; }
          .tm-card { padding: 26px 20px 22px; border-radius: 18px !important; }
          .tm-section .tm-quote-mark { font-size: 4.5rem; height: 42px; }
          .tm-section .tm-quote { font-size: 0.98rem !important; line-height: 1.7 !important; }
          .tm-avatar { width: 46px; height: 46px; font-size: 0.92rem; }
          .tm-section .tm-name { font-size: 1.02rem !important; }
        }
      `}</style>
    </section>
  );
}