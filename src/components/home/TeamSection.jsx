import React, { useState } from 'react';
import { partners } from '../../data/teamData';

export default function TeamSection() {
  const mainPartners = partners.filter(p => p.id !== 'ashish-sharma');
  const [activeMember, setActiveMember] = useState(mainPartners[0] || partners[0]);

  return (
    <section
      className="team-home-section"
      id="team"
      style={{
        background: '#ffffff',
        padding: '40px 20px 40px 20px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <style>{`
        /* ---------- Ambient orbs ---------- */
        .team-orb {
          position: absolute;
          filter: blur(80px);
          pointer-events: none;
          z-index: 0;
          max-width: 100vw;
        }
        .team-orb-1 {
          top: -10%; left: -10%; width: 800px; height: 800px;
          background: radial-gradient(circle, rgba(0, 255, 255, 0.05) 0%, transparent 70%);
        }
        .team-orb-2 {
          bottom: -20%; right: -10%; width: 900px; height: 900px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, transparent 70%);
        }
        .team-orb-3 {
          top: 40%; left: 40%; width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(0, 255, 255, 0.05) 0%, transparent 70%);
        }

        /* ---------- Header ---------- */
        .team-header {
          text-align: center;
          margin: 60px 0 30px 0;
        }
        .team-title {
          font-family: var(--font-heading);
          font-size: clamp(2rem, 5vw, 4rem);
          font-weight: 800;
          color: #111111;
          margin: 0 0 16px 0;
          line-height: 1.15;
          letter-spacing: -1px;
        }

        /* ---------- DEFAULT (badi screen >= 1400px): sab ek hi line mein ---------- */
        .team-gallery-container {
          /* screen chhoti ho to capsule apne aap chhota hota hai, max 250px */
          --w: clamp(190px, calc((100vw - 140px) / 5 - 20px), 250px);
          --ratio: 2;
          --gap: 20px;
          --select-scale: 1.08;

          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: nowrap;
          gap: 20px var(--gap);
          margin: 0 auto 50px auto;
          padding: 40px 0 0 0;
          position: relative;
        }

        .team-capsule-wrapper {
          --off: 0px;
          --s: 1;
          transform: translateY(var(--off)) scale(var(--s));
          transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: pointer;
          position: relative;
          z-index: 1;
          flex: 0 0 auto;
        }
        .team-capsule-wrapper.is-selected {
          --s: var(--select-scale);
          z-index: 10;
        }

        /* Wave offsets (single line layout) */
        .team-capsule-wrapper:nth-child(1) { --off: 0px; }
        .team-capsule-wrapper:nth-child(2) { --off: 30px; }
        .team-capsule-wrapper:nth-child(3) { --off: -15px; }
        .team-capsule-wrapper:nth-child(4) { --off: 30px; }
        .team-capsule-wrapper:nth-child(5) { --off: -15px; }
        .team-capsule-wrapper:nth-child(6) { --off: 0px; }

        .team-capsule-frame {
          width: var(--w);
          height: calc(var(--w) * var(--ratio));
          border-radius: 999px;
          overflow: hidden;
          background: #f9f9f9;
          position: relative;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255,255,255,0.1);
          transition: box-shadow 0.5s ease;
        }
        .team-capsule-wrapper.is-selected .team-capsule-frame {
          box-shadow: 0 15px 30px rgba(0, 139, 139, 0.15), 0 0 0 3px #008b8b;
        }

        .team-capsule-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: all 0.4s ease;
        }

        .team-capsule-overlay {
          position: absolute;
          left: 0; right: 0; bottom: 0;
          height: 40%;
          background: linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.5) 60%, transparent 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 20px 12px 25px 12px;
          text-align: center;
          pointer-events: none;
        }
        .team-capsule-name {
          font-size: 1.1rem;
          font-weight: 800;
          color: #ffffff;
          font-family: var(--font-heading);
          line-height: 1.2;
          margin-bottom: 4px;
        }

        /* ---------- Chote laptops / tablets (< 1400px): 3 upar + 2 neeche ---------- */
        @media (max-width: 1399px) {
          .team-gallery-container {
            --w: 230px;
            --gap: 24px;
            --select-scale: 1.05;
            flex-wrap: wrap;
            max-width: calc(3 * var(--w) + 2 * var(--gap) + 10px);
            row-gap: 80px;
            margin-bottom: 20px;
          }
          .team-capsule-wrapper:nth-child(n) { --off: 0px; }
        }

        @media (max-width: 860px) {
          .team-gallery-container {
            --w: 200px;
            --gap: 16px;
            row-gap: 70px;
          }
          .team-capsule-name { font-size: 1rem; }
        }

        /* ---------- Mobile: 2 per row ---------- */
        @media (max-width: 640px) {
          .team-home-section { padding: 30px 12px 0px 12px !important; }
          .team-header { margin: 30px 0 10px 0; }

          .team-gallery-container {
            --w: min(42vw, 230px);
            --ratio: 1.6;
            --gap: 14px;
            --select-scale: 1.04;
            max-width: calc(2 * var(--w) + var(--gap) + 10px);
            row-gap: 50px;
            margin-bottom: 10px;
            padding: 20px 0;
          }
          .team-capsule-wrapper:nth-child(n) { --off: 0px; }
          .team-capsule-wrapper:nth-child(even) { --off: 18px; }
          .team-capsule-overlay { padding: 16px 8px 20px 8px; }
          .team-capsule-name { font-size: 0.95rem; }
        }

        @media (max-width: 380px) {
          .team-gallery-container { --gap: 10px; }
          .team-capsule-name { font-size: 0.85rem; }
        }
      `}</style>

      {/* AMBIENT ORBS */}
      <div className="team-orb team-orb-1"></div>
      <div className="team-orb team-orb-2"></div>
      <div className="team-orb team-orb-3"></div>

      <div
        className="team-home-container"
        style={{ maxWidth: '1440px', margin: '0 auto', position: 'relative', zIndex: 2 }}
      >
        {/* HEADER */}
        <div className="team-header">
          <h2 className="team-title">Our Team</h2>
        </div>

        {/* CAPSULE GALLERY */}
        <div className="team-gallery-container">
          {mainPartners.map((member) => {
            const isSelected = activeMember.id === member.id;
            return (
              <div
                key={member.id}
                className={`team-capsule-wrapper${isSelected ? ' is-selected' : ''}`}
                onClick={() => setActiveMember(member)}
                onMouseEnter={() => setActiveMember(member)}
              >
                <div className="team-capsule-frame">
                  <img
                    className="team-capsule-img"
                    src={member.image}
                    alt={member.name}
                    loading="eager"
                    style={{
                      objectPosition: member.objectPosition || 'center top',
                      transform: member.imageTransform || 'none'
                    }}
                  />

                  <div className="team-capsule-overlay">
                    <span className="team-capsule-name">{member.name}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}