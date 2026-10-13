import React from "react";

export default function GlobalPerspective() {
  return (
    <>
      <section className="global-perspective-section">
        {/* Left image */}
        <div
          className="global-perspective-image"
          role="img"
          aria-label="European architecture and travel"
        />

        {/* Right content */}
        <div className="global-perspective-content">
          <div className="global-perspective-inner">
            <span className="global-perspective-label">
              Global Perspective
            </span>

            <h2 className="global-perspective-title">
              <span>Designs</span>
              <span>Influenced By</span>
              <span>European</span>
              <span>Embedded</span>
              <span>Aesthetics</span>
            </h2>

            <p className="global-perspective-description">
              Having travelled across 15+ countries and studied in Germany,
              Jhanvi brings a uniquely global perspective to every project —
              blending European precision with Indian warmth and craftsmanship.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        .global-perspective-section,
        .global-perspective-section *,
        .global-perspective-section *::before,
        .global-perspective-section *::after {
          box-sizing: border-box;
        }

        .global-perspective-section {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          width: 100%;
          min-height: 780px;
          overflow: hidden;
          background-color: #080808;
        }

        /* LEFT IMAGE */
        .global-perspective-image {
          width: 100%;
          min-height: 780px;
          background-image: url("/assets/images/euro-indian-architecture.jpg");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        /* RIGHT CONTENT */
        .global-perspective-content {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          width: 100%;
          min-width: 0;
          min-height: 780px;
          padding: 70px clamp(38px, 5vw, 90px);
          background-color: #080808 !important;
          text-align: left !important;
        }

        .global-perspective-inner {
          width: 100%;
          max-width: 680px;
          margin: 0 !important;
          padding: 0 !important;
          text-align: left !important;
        }

        /* SMALL LABEL (kills external highlight/background) */
        .global-perspective-section .global-perspective-label {
          display: flex !important;
          align-items: center;
          gap: 14px;
          margin: 0 0 28px !important;
          padding: 0 !important;
          background: none !important;
          background-color: transparent !important;
          border: none !important;
          box-shadow: none !important;
          color: #29d4f6 !important;
          -webkit-text-fill-color: #29d4f6 !important;
          font-family: Arial, sans-serif;
          font-size: 13px;
          font-weight: 700;
          line-height: 1.4;
          letter-spacing: 4px;
          text-transform: uppercase;
          text-align: left !important;
        }

        .global-perspective-section .global-perspective-label::before {
          content: "";
          display: block;
          flex-shrink: 0;
          width: 42px;
          height: 2px;
          background: #29d4f6 !important;
          box-shadow: 0 0 10px rgba(41, 212, 246, 0.75);
        }

        /* HEADING */
        .global-perspective-section .global-perspective-title {
          display: flex !important;
          flex-direction: column;
          align-items: flex-start;
          margin: 0 0 32px !important;
          padding: 0 !important;
          background: none !important;
          font-family: "Montserrat", "Arial Black", Arial, sans-serif !important;
          font-size: clamp(44px, 4.8vw, 78px) !important;
          font-weight: 800 !important;
          line-height: 1.05 !important;
          letter-spacing: -1.5px !important;
          text-transform: uppercase;
          text-align: left !important;
        }

        .global-perspective-section .global-perspective-title span {
          display: block;
          max-width: 100%;
          font-weight: 800 !important;
          color: transparent !important;
          background-image: linear-gradient(
            105deg,
            #d9ffff 0%,
            #92f8f8 20%,
            #42eced 45%,
            #00dce5 68%,
            #7fd6da 100%
          ) !important;
          background-size: 100% 100%;
          background-repeat: no-repeat;
          -webkit-background-clip: text !important;
          background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          filter: drop-shadow(0 0 10px rgba(41, 212, 246, 0.18));
        }

        /* DESCRIPTION */
        .global-perspective-section .global-perspective-description {
          max-width: 560px !important;
          margin: 0 !important;
          padding: 0 !important;
          color: #c5ced0 !important;
          font-family: Arial, sans-serif;
          font-size: 17px !important;
          font-weight: 400 !important;
          line-height: 1.8 !important;
          letter-spacing: 0.1px;
          text-align: left !important;
        }

        /* SMALL DESKTOP */
        @media (max-width: 1200px) {
          .global-perspective-section,
          .global-perspective-image,
          .global-perspective-content {
            min-height: 700px;
          }

          .global-perspective-content {
            padding: 60px 42px;
          }

          .global-perspective-section .global-perspective-title {
            font-size: clamp(40px, 4.6vw, 60px) !important;
          }
        }

        /* TABLET */
        @media (max-width: 900px) {
          .global-perspective-section {
            grid-template-columns: 45% 55%;
          }

          .global-perspective-section,
          .global-perspective-image,
          .global-perspective-content {
            min-height: 640px;
          }

          .global-perspective-content {
            padding: 50px 28px;
          }

          .global-perspective-section .global-perspective-label {
            margin-bottom: 22px !important;
            font-size: 11px;
            letter-spacing: 3px;
          }

          .global-perspective-section .global-perspective-title {
            margin-bottom: 26px !important;
            font-size: clamp(34px, 5vw, 48px) !important;
            letter-spacing: -1px !important;
          }

          .global-perspective-section .global-perspective-description {
            font-size: 15px !important;
            line-height: 1.7 !important;
          }
        }

        /* MOBILE */
        @media (max-width: 700px) {
          .global-perspective-section {
            display: flex;
            flex-direction: column;
            min-height: auto;
          }

          .global-perspective-image {
            width: 100%;
            min-height: 0;
            aspect-ratio: 4 / 4.6;
            background-position: center top;
          }

          .global-perspective-content {
            min-height: auto;
            padding: 52px 22px 60px;
          }

          .global-perspective-inner {
            max-width: 100%;
          }

          .global-perspective-section .global-perspective-label {
            margin-bottom: 22px !important;
            font-size: 11px;
            letter-spacing: 2.8px;
          }

          .global-perspective-section .global-perspective-label::before {
            width: 32px;
          }

          .global-perspective-section .global-perspective-title {
            margin-bottom: 24px !important;
            font-size: clamp(36px, 11vw, 54px) !important;
            letter-spacing: -1px !important;
          }

          .global-perspective-section .global-perspective-description {
            max-width: 100% !important;
            font-size: 15px !important;
            line-height: 1.75 !important;
          }
        }

        /* SMALL MOBILE */
        @media (max-width: 420px) {
          .global-perspective-content {
            padding: 46px 18px 54px;
          }

          .global-perspective-section .global-perspective-label {
            gap: 10px;
            font-size: 10px;
            letter-spacing: 2.2px;
          }

          .global-perspective-section .global-perspective-title {
            font-size: clamp(31px, 10.5vw, 42px) !important;
            letter-spacing: -0.5px !important;
          }

          .global-perspective-section .global-perspective-description {
            font-size: 14px !important;
          }
        }

        @media (max-width: 340px) {
          .global-perspective-section .global-perspective-title {
            font-size: 28px !important;
          }

          .global-perspective-content {
            padding-inline: 14px;
          }
        }
      `}</style>
    </>
  );
}