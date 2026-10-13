export default function PageHero({
  title = "",
  category,
  subtitle,
  bgImage,
  imagePosition = "center center",
  renderBackground,
}) {
  const words = title.trim().split(" ");
  const highlightedWord = words.pop();
  const firstWords = words.join(" ");

  return (
    <section className="page-hero">
      {/* Background image */}
      {renderBackground ? (
        renderBackground()
      ) : (
        <div
          className="page-hero-image"
          style={{
            backgroundImage: `url("${bgImage}")`,
            backgroundPosition: imagePosition,
          }}
        />
      )}

      {/* Overlay */}
      <div className="page-hero-overlay" />

      {/* Content */}
      <div className="page-hero-container">
        <div className="page-hero-content">
          {category && (
            <div className="page-hero-category">
              <span className="category-line" />
              <span>{category}</span>
            </div>
          )}

          <h1 className="page-hero-title">
            {firstWords && (
              <span className="title-main">
                {firstWords}
              </span>
            )}

            <span className="title-highlight">
              {highlightedWord}
            </span>
          </h1>

          {subtitle && (
            <div className="page-hero-subtitle">
              <span className="subtitle-line" />

              <p>{subtitle}</p>
            </div>
          )}
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="page-hero-bottom-line" />

      <style>{`
        .page-hero {
          position: relative;
          display: flex;
          align-items: flex-end;
          width: 100%;
          min-height: clamp(580px, 76vh, 780px);
          overflow: hidden;
          isolation: isolate;
          background: #101414;
        }

    .page-hero-image {
  position: absolute;
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  filter: brightness(1.12) saturate(1.08);
  transform: scale(1.01);
  animation: heroImageReveal 1.3s ease forwards;
}
.page-hero-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;

  background:
    linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.62) 0%,
      rgba(0, 0, 0, 0.32) 38%,
      rgba(0, 0, 0, 0.08) 70%,
      transparent 100%
    ),
    linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.08) 0%,
      transparent 55%,
      rgba(0, 0, 0, 0.25) 100%
    );
}

        .page-hero-container {
          position: relative;
          z-index: 2;
          width: min(100% - 80px, 1500px);
          margin: 0 auto;
          padding-bottom: clamp(65px, 9vh, 100px);
        }

       .page-hero-content {
  position: relative;
  width: fit-content;
  max-width: 970px;
  padding: 20px 32px;
  border-left: 3px solid #16aeb1;

  background: rgba(0, 0, 0, 0.12);
  box-shadow: none;

  backdrop-filter: none;
  -webkit-backdrop-filter: none;

  animation: heroContentReveal 0.9s ease forwards;
}

        .page-hero-category {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 20px;
          color: #20b9bb;
          font-size: 0.78rem;
          font-weight: 700;
          line-height: 1.4;
          letter-spacing: 4px;
          text-transform: uppercase;
        }

        .category-line {
          display: block;
          width: 42px;
          height: 1px;
          background: #20b9bb;
        }

        .page-hero-title {
          display: flex;
          flex-wrap: wrap;
          align-items: baseline;
          gap: 0 20px;
          max-width: 100%;
          margin: 0;
          font-family: var(--font-heading, sans-serif);
          font-size: clamp(4rem, 7vw, 7.2rem);
          font-weight: 700;
          line-height: 0.96;
          letter-spacing: -3px;
          text-transform: uppercase;
          background: none !important;
          -webkit-text-fill-color: initial !important;
        }

        .title-main {
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff !important;
          background: none !important;
        }

        .title-highlight {
          color: #16aeb1 !important;
          -webkit-text-fill-color: #16aeb1 !important;
          background: none !important;
          position: relative;
        }

        .title-highlight::after {
          content: "";
          position: absolute;
          right: 2px;
          bottom: -12px;
          width: 36%;
          height: 4px;
          background: #16aeb1;
        }

        .page-hero-subtitle {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 34px;
        }

        .subtitle-line {
          display: block;
          width: 55px;
          height: 1px;
          flex-shrink: 0;
          background: rgba(255, 255, 255, 0.65);
        }

        .page-hero-subtitle p {
          margin: 0;
          color: rgba(255, 255, 255, 0.9) !important;
          -webkit-text-fill-color: rgba(255, 255, 255, 0.9) !important;
          background: none !important;
          font-size: clamp(1rem, 1.35vw, 1.22rem);
          line-height: 1.6;
          font-weight: 400;
          letter-spacing: 0.3px;
          text-align: left !important;
        }

        .page-hero-bottom-line {
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 3;
          height: 2px;
          background: linear-gradient(
            90deg,
            #008c90 0%,
            #22c4c7 48%,
            transparent 100%
          );
        }

        @keyframes heroImageReveal {
          from {
            opacity: 0;
            transform: scale(1.08);
          }

          to {
            opacity: 1;
            transform: scale(1.02);
          }
        }

        @keyframes heroContentReveal {
          from {
            opacity: 0;
            transform: translateY(28px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 900px) {
          .page-hero {
            min-height: 650px;
          }

          .page-hero-container {
            width: calc(100% - 48px);
            padding-bottom: 60px;
          }

          .page-hero-content {
            max-width: 760px;
          }

          .page-hero-title {
            font-size: clamp(3.5rem, 9vw, 5.5rem);
          }
        }

        @media (max-width: 600px) {
          .page-hero {
            min-height: 600px;
          }

          .page-hero-image {
            background-position: center center !important;
          }

          .page-hero-overlay {
            background:
              linear-gradient(
                180deg,
                rgba(3, 8, 9, 0.25) 0%,
                rgba(3, 8, 9, 0.45) 42%,
                rgba(3, 8, 9, 0.9) 100%
              );
          }

          .page-hero-container {
            width: calc(100% - 28px);
            padding-bottom: 28px;
          }

          .page-hero-content {
            width: 100%;
            padding: 25px 20px;
            border-left-width: 2px;
          }

          .page-hero-category {
            gap: 10px;
            margin-bottom: 16px;
            font-size: 0.65rem;
            letter-spacing: 2.3px;
          }

          .category-line {
            width: 25px;
          }

          .page-hero-title {
            display: block;
            font-size: clamp(2.75rem, 13vw, 4.1rem);
            line-height: 1;
            letter-spacing: -1.5px;
          }

          .title-main,
          .title-highlight {
            display: block;
          }

          .title-highlight::after {
            bottom: -8px;
            height: 3px;
          }

          .page-hero-subtitle {
            gap: 10px;
            margin-top: 27px;
          }

          .subtitle-line {
            width: 28px;
          }

          .page-hero-subtitle p {
            font-size: 0.9rem;
            line-height: 1.5;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .page-hero-image,
          .page-hero-content {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}