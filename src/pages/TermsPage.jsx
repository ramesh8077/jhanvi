import React from 'react';
import SubCategoryLayout from '../components/common/SubCategoryLayout';

export default function TermsPage() {
  return (




    <SubCategoryLayout
      title="Terms of Service"
      category="LEGAL"
      heroImage="/assets/images/residence/resi_12.jpg"
      subtitle="Usage Guidelines"
      conceptTitle="Our Mutual Agreement"
      conceptDescription="These terms of service outline the rules and regulations for the use of the Jhanvi Mishra Design website and services."
    >
      <section style={{ padding: '80px 6%', background: '#ffffff', color: '#333333' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.8', color: '#cccccc' }}>
        <h3 className="accent-gradient-text" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: 'transparent', marginBottom: '20px' }}>1. Terms</h3>
        <p style={{ marginBottom: '30px' }}>By accessing this Website, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site.</p>

        <h3 className="accent-gradient-text" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: 'transparent', marginBottom: '20px' }}>2. Use License</h3>
        <p style={{ marginBottom: '30px' }}>Permission is granted to temporarily download one copy of the materials on Jhanvi Mishra Design's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:<br />
          - modify or copy the materials;<br />
          - use the materials for any commercial purpose or for any public display;<br />
          - attempt to reverse engineer any software contained on Jhanvi Mishra Design's Website;<br />
          - remove any copyright or other proprietary notations from the materials; or<br />
          - transferring the materials to another person or "mirror" the materials on any other server.</p>

        <h3 className="accent-gradient-text" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: 'transparent', marginBottom: '20px' }}>3. Disclaimer</h3>
        <p style={{ marginBottom: '30px' }}>All the materials on Jhanvi Mishra Design’s Website are provided "as is". Jhanvi Mishra Design makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, Jhanvi Mishra Design does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.</p>

        <h3 className="accent-gradient-text" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: 'transparent', marginBottom: '20px' }}>4. Limitations</h3>
        <p style={{ marginBottom: '30px' }}>Jhanvi Mishra Design or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on Jhanvi Mishra Design’s Website, even if Jhanvi Mishra Design or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage.</p>

        <h3 className="accent-gradient-text" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: 'transparent', marginBottom: '20px' }}>5. Revisions</h3>
        <p style={{ marginBottom: '30px' }}>The materials appearing on Jhanvi Mishra Design’s Website may include technical, typographical, or photographic errors. Jhanvi Mishra Design will not promise that any of the materials in this Website are accurate, complete, or current. Jhanvi Mishra Design may change the materials contained on its Website at any time without notice.</p>
      </div>
    </section>
    </SubCategoryLayout >
  );
}
