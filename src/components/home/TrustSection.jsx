import React from "react";
import {
  FaBrain,
  FaBolt,
  FaFileInvoiceDollar,
  FaCube,
  FaSync,
  FaKey,
} from "react-icons/fa";

export default function TrustSection() {
  const processSteps = [
    {
      id: 1,
      title: "Site visit and understand the requirement in detail",
      icon: <FaBrain />,
    },
    {
      id: 2,
      title: "Provide designs and discuss theme at lightning-fast speed",
      icon: <FaBolt />,
    },
    {
      id: 3,
      title: "Estimate cost suitable to your budget",
      icon: <FaFileInvoiceDollar />,
    },
    {
      id: 4,
      title: "Close 3D designs",
      icon: <FaCube />,
    },
    {
      id: 5,
      title: "Manage seamless execution of project",
      icon: <FaSync />,
    },
    {
      id: 6,
      title: "On-time delivery with hassle-free experience",
      icon: <FaKey />,
    },
  ];

  return (
    <section className="ps-section">
      <div className="ps-container">
        {/* Header */}
        <div className="ps-header">
          <h2 className="section-title ps-heading">Our 6 Step Process</h2>

          <div className="ps-divider" aria-hidden="true">
            <span />
            <i />
            <span />
          </div>

          <p className="ps-subtitle">
            From the first site visit to the final handover, every project
            follows a clear and transparent process, so you always know what
            happens next.
          </p>
        </div>

        {/* Timeline */}
        <ol className="ps-list">
          {processSteps.map((step) => (
            <li key={step.id} className="ps-item">
              <div className="ps-node">
                <span className="ps-icon">{step.icon}</span>
                <span className="ps-num">{step.id}</span>
              </div>

              <div className="ps-card">
                <div className="ps-step-label">
                  Step {String(step.id).padStart(2, "0")}
                </div>
                <div className="ps-title">{step.title}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <style>{`
        .ps-section,
        .ps-section *,
        .ps-section *::before,
        .ps-section *::after {
          box-sizing: border-box;
        }

        .ps-section {
          position: relative;
          width: 100%;
          background: #ffffff;
          padding: 20px 20px 20px;
        }

        .ps-container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
        }

        /* Header */
        .ps-header {
          text-align: center;
          margin-bottom: 56px;
        }
        .ps-section .ps-heading {
          margin: 0 !important;
          line-height: 1.1;
        }
        .ps-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.7rem;
          margin: 18px auto 18px;
        }
        .ps-divider span {
          width: 80px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #008f95);
        }
        .ps-divider span:last-child {
          background: linear-gradient(270deg, transparent, #008f95);
        }
        .ps-divider i {
          width: 9px;
          height: 9px;
          background: #008f95;
          transform: rotate(45deg);
        }
        .ps-section .ps-subtitle {
          max-width: 720px !important;
          margin: 0 auto !important;
          padding: 0 !important;
          font-size: 1.05rem !important;
          line-height: 1.7 !important;
          color: #4b5d5f !important;
          font-weight: 400 !important;
          text-align: center !important;
        }

        /* List / timeline */
        .ps-list {
          --ps-gap: 20px;
          --ps-node: 76px;
          position: relative;
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          gap: var(--ps-gap);
          list-style: none !important;
          margin: 0 !important;
          padding: 0 !important;
        }

        /* Horizontal line through all icons */
        .ps-list::before {
          content: "";
          position: absolute;
          top: calc(var(--ps-node) / 2 - 1px);
          left: calc((100% - 5 * var(--ps-gap)) / 12);
          right: calc((100% - 5 * var(--ps-gap)) / 12);
          height: 2px;
          background: repeating-linear-gradient(
            90deg,
            rgba(0, 143, 149, 0.5) 0 8px,
            transparent 8px 14px
          );
          z-index: 0;
        }

        .ps-item {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 0 !important;
          padding: 0 !important;
          list-style: none !important;
        }

        /* Node (icon + number badge) */
        .ps-node {
          position: relative;
          flex-shrink: 0;
          width: var(--ps-node);
          height: var(--ps-node);
          border-radius: 50%;
          background: #ffffff;
          box-shadow: 0 0 0 8px #ffffff;
        }
        .ps-icon {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.6rem;
          color: #008f95;
          background: #eaf6f6;
          border: 1px solid rgba(0, 143, 149, 0.35);
          transition: background 0.3s ease, color 0.3s ease,
            box-shadow 0.3s ease, transform 0.3s ease;
        }
        .ps-num {
          position: absolute;
          top: -4px;
          right: -4px;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #0a2a2d;
          color: #ffffff;
          font-size: 0.78rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #ffffff;
        }

        /* Card */
        .ps-card {
          width: 100%;
          flex: 1 1 auto;
          margin-top: 24px;
          padding: 22px 16px 24px;
          text-align: center;
          background: #ffffff;
          border: 1px solid rgba(0, 143, 149, 0.2);
          border-radius: 18px;
          box-shadow: 0 12px 30px rgba(0, 139, 139, 0.07);
          transition: transform 0.3s ease, box-shadow 0.3s ease,
            border-color 0.3s ease;
        }
        .ps-step-label {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #008f95;
          margin-bottom: 10px;
        }
        .ps-title {
          font-size: 1rem;
          font-weight: 600;
          line-height: 1.5;
          color: #123234;
        }

        /* Hover */
        .ps-item:hover .ps-icon {
          background: linear-gradient(135deg, #008f95, #00c2c7);
          color: #ffffff;
          border-color: transparent;
          box-shadow: 0 10px 24px rgba(0, 143, 149, 0.35);
          transform: translateY(-3px);
        }
        .ps-item:hover .ps-card {
          transform: translateY(-5px);
          border-color: rgba(0, 143, 149, 0.55);
          box-shadow: 0 18px 40px rgba(0, 139, 139, 0.15);
        }

        /* Laptops */
        @media (max-width: 1280px) {
          .ps-list { --ps-gap: 14px; --ps-node: 68px; }
          .ps-icon { font-size: 1.4rem; }
          .ps-card { padding: 20px 12px 22px; }
          .ps-title { font-size: 0.92rem; }
        }

        /* Tablet: 3 x 2 grid */
        @media (max-width: 1100px) {
          .ps-list {
            --ps-gap: 22px;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            row-gap: 36px;
          }
          .ps-list::before { display: none; }
          .ps-title { font-size: 0.98rem; }
        }

        /* Mobile: vertical timeline */
        @media (max-width: 700px) {
          .ps-section { padding: 24px 16px 20px; }
          .ps-header { margin-bottom: 36px; }
          .ps-section .ps-subtitle { font-size: 0.98rem !important; }

          .ps-list {
            --ps-node: 60px;
            grid-template-columns: 1fr;
            row-gap: 22px;
          }
          .ps-list::before {
            display: block;
            top: calc(var(--ps-node) / 2);
            bottom: calc(var(--ps-node) / 2);
            left: calc(var(--ps-node) / 2 - 1px);
            right: auto;
            width: 2px;
            height: auto;
            background: repeating-linear-gradient(
              180deg,
              rgba(0, 143, 149, 0.5) 0 8px,
              transparent 8px 14px
            );
          }

          .ps-item {
            flex-direction: row;
            align-items: center;
          }
          .ps-icon { font-size: 1.25rem; }
          .ps-num { width: 24px; height: 24px; font-size: 0.7rem; }
          .ps-card {
            margin-top: 0;
            margin-left: 18px;
            padding: 16px 16px 18px;
            text-align: left;
          }
          .ps-step-label { margin-bottom: 6px; }
          .ps-title { font-size: 0.98rem; }
        }
      `}</style>
    </section>
  );
}