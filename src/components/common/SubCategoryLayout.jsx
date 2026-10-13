import React from "react";
import PageHero from "./PageHero";
import ProjectCard from "../projects/ProjectCard";

export default function SubCategoryLayout({
  title,
  category = "EXPERTISE",
  heroImage,
  subtitle,
  conceptTitle,
  conceptDescription,
  projects = [],
  children,
  imagePosition,
  renderHeroBackground,
}) {
  return (
    <main className="page-dark zha-category-page">
      {/* Override existing black concept-section styles */}
      <style>{`
        .zha-category-page {
          background: linear-gradient(
            135deg,
            #f8fafb 0%,
            #eef7f7 52%,
            #d9f5f5 100%
          ) !important;
        }

        /* Slight brightness bump, remove extreme filters */
        .zha-category-page .page-hero-image {
          filter: brightness(1.05) saturate(1.05) !important;
          image-rendering: -webkit-optimize-contrast;
        }

        /* Reduce the black overlay so the face is clearly visible */
        .zha-category-page .page-hero-overlay {
          background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.15) 0%,
            transparent 30%,
            transparent 100%
          ) !important;
        }

        .zha-category-page .philosophy-intro {
          background: linear-gradient(
            135deg,
            #f8fafb 0%,
            #eef7f7 52%,
            #d9f5f5 100%
          ) !important;
          color: #102f32 !important;
          position: relative;
          z-index: 2;
          padding: 40px 6% 50px 6% !important;
          display: block !important;
        }

        /* Centered hero-style heading */
        .zha-category-page .philosophy-intro-header {
          display: block !important;
          width: 100% !important;
          max-width: 1100px !important;
          margin: 0 auto !important;
          text-align: center !important;
        }

        .zha-category-page .philosophy-intro-header h2 {
          display: block !important;
          width: 100% !important;
          color: #008f95 !important;
          -webkit-text-fill-color: #008f95 !important;
          background: none !important;
          text-align: center !important;
          font-size: clamp(2.2rem, 5vw, 4rem) !important;
          font-weight: 800 !important;
          letter-spacing: 1px;
          margin: 0 0 24px 0 !important;
          line-height: 1.15;
        }

        /* Small diamond divider under heading */
        .zha-category-page .philosophy-intro-header::after {
          content: "";
          display: block;
          width: 10px;
          height: 10px;
          margin: 0 auto 24px auto;
          background: #008f95;
          transform: rotate(45deg);
        }

        .zha-category-page .philosophy-intro-grid {
          display: block !important;
          width: 100% !important;
          max-width: 850px;
          margin: 0 auto !important;
          text-align: center !important;
        }

        .zha-category-page .philosophy-intro-left {
          display: block !important;
          text-align: center !important;
          margin-bottom: 0px !important;
        }

        .zha-category-page .philosophy-intro-left h3 {
          color: #29494c !important;
          -webkit-text-fill-color: #29494c !important;
          text-align: center !important;
          font-size: 0.95rem !important; /* Smaller italic subtitle */
          font-weight: 600 !important;
          font-style: italic !important;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin: 0;
        }

        .zha-category-page .philosophy-intro-right {
          text-align: center !important;
          margin-top: 0 !important;
        }

        .zha-category-page .philosophy-intro-right p,
        .zha-category-page .zha-manifesto-text {
          color: #4a5857 !important;
          -webkit-text-fill-color: #4a5857 !important;
          text-align: justify !important;
          text-justify: inter-word;
          font-family: var(--font-body, sans-serif);
          font-size: 1.25rem !important;
          line-height: 1.3 !important;
          margin: 0 auto !important;
          max-width: 750px !important;
        }

        /* Opening quote line */
        .zha-category-page .zha-manifesto-text > span:first-child {
          display: block !important;
          width: 100% !important;
          margin: 0 auto 8px auto !important;
          padding: 0 !important;
          text-align: center !important;
          font-size: 1rem !important;
          font-weight: 600 !important;
          font-style: italic !important;
          color: #0b4e52 !important;
          -webkit-text-fill-color: #0b4e52 !important;
        }

        @media (max-width: 768px) {
          .philosophy-intro-header h2 {
            word-break: normal !important;
            overflow-wrap: normal !important;
            hyphens: none !important;
            -webkit-hyphens: none !important;
          }
          .zha-category-page .philosophy-intro {
            padding: 55px 5% 65px 5% !important;
          }
          .zha-category-page .philosophy-intro-right p,
          .zha-category-page .zha-manifesto-text {
            font-size: 0.85rem !important;
            text-align: center !important;
          }
        }
      `}</style>

      <PageHero
        title={title}
        category={category}
        subtitle={subtitle}
        bgImage={heroImage}
        imagePosition={imagePosition}
        renderBackground={renderHeroBackground}
      />

      {(conceptTitle || conceptDescription) && (
        <section
          className="philosophy-intro reveal visible"
          style={{
            background:
              "linear-gradient(135deg, #f8fafb 0%, #eef7f7 52%, #d9f5f5 100%)",
          }}
        >
          <div className="philosophy-intro-header">
            <h2
              style={{
                textTransform: "uppercase",
                color: "#008f95",
              }}
            >
              {conceptTitle || title}
            </h2>
          </div>

          <div className="philosophy-intro-grid">
            <div className="philosophy-intro-left">
              <h3 style={{ color: "#29494c" }}>{subtitle}</h3>
            </div>

            <div className="philosophy-intro-right">
              <div
                className="zha-manifesto-text"
                style={{ color: "#27484b" }}
              >
                {conceptDescription}
              </div>
            </div>
          </div>
        </section>
      )}

      {children}

      {projects.length > 0 && (
        <section
          className="section-edge-to-edge"
          style={{ padding: "0 0 60px 0" }}
        >
          {(() => {
            const hasFolders = projects.some((project) => project.folder);

            if (hasFolders) {
              const groupedProjects = projects.reduce((acc, project) => {
                const key = project.folder || "Other Projects";

                if (!acc[key]) {
                  acc[key] = [];
                }

                acc[key].push(project);
                return acc;
              }, {});

              const entries = Object.entries(groupedProjects);
              const largeCategories = [];
              const smallCategories = [];

              entries.forEach((entry) => {
                if (entry[1].length >= 5) {
                  largeCategories.push(entry);
                } else {
                  smallCategories.push(entry);
                }
              });

              smallCategories.sort((a, b) => b[1].length - a[1].length);

              return [...largeCategories, ...smallCategories].map(
                ([folderName, folderProjects]) => (
                  <div
                    key={folderName}
                    className="project-group"
                    style={{ marginBottom: "80px" }}
                  >
                    {folderName !== "Other Projects" && (
                      <div
                        className="project-group-header"
                        style={{
                          width: "100%",
                          padding: "0 20px",
                        }}
                      >
                        <h3
                          className="project-group-heading"
                          style={{
                            color: "#008f95",
                            fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)",
                            marginTop: "100px",
                            marginBottom: "15px",
                            borderBottom:
                              "2px solid rgba(0, 143, 149, 0.18)",
                            paddingBottom: "5px",
                            textTransform: "uppercase",
                            letterSpacing: "2px",
                            fontWeight: 600,
                            textAlign: "left",
                          }}
                        >
                          {folderName}
                        </h3>
                      </div>
                    )}

                    <div className="projects-grid">
                      {folderProjects.map((project, index) => (
                        <ProjectCard
                          key={project.id || index}
                          project={project}
                        />
                      ))}
                    </div>
                  </div>
                ),
              );
            }

            return (
              <div className="projects-grid">
                {projects.map((project, index) => (
                  <ProjectCard
                    key={project.id || index}
                    project={project}
                  />
                ))}
              </div>
            );
          })()}
        </section>
      )}
    </main>
  );
}