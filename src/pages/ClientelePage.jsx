import React from 'react';
import PageHero from '../components/common/PageHero';

const clientLogos = [
  "Actor Prepares (Anupam Kher Studio)", "Vila Vita Hotels (Portugal)", "DVAG (Germany)",
  "Deutsche Oper am Rhein", "Samsung Electronics", "Stanley Black & Decker",
  "Electrolux", "Colliers International", "Linak", "DSK Legal"
];

export default function ClientelePage() {
  return (
    <main className="page-dark">
      <PageHero 
        title="Clientele & Partnerships" 
        category="ABOUT US / CLIENTELE" 
        subtitle="Trusted by global hospitality brands, corporate leaders, and distinguished private patrons."
        bgImage="/assets/images/dvag-executive-lobby.jpg"
      />

      <section style={{ padding: '80px 40px', background: '#ffffff', color: '#333333' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <span className="accent-gradient-text" style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'transparent', display: 'block', marginBottom: '16px' }}>
            GLOBAL REACH
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '40px', color: '#111111' }}>Distinguished Clients &amp; Brands</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {clientLogos.map((client, idx) => (
              <div 
                key={idx}
                style={{ 
                  background: '#f9f9f9', 
                  border: '2px solid transparent', borderImage: 'var(--accent-gradient) 1',
                  color: '#111111',
                  padding: '30px 20px', 
                  fontSize: '14px', 
                  fontWeight: 800, 
                  letterSpacing: '1px', 
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  minHeight: '100px'
                }}
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
