import React from 'react';
import SubCategoryLayout from '../components/common/SubCategoryLayout';

export default function PrivacyPolicyPage() {
  return (
    <SubCategoryLayout
      title="Privacy Policy"
      category="LEGAL"
      heroImage="/assets/images/expertise-showcase-bg.jpg"
      subtitle="Your Privacy Matters"
      conceptTitle="Commitment to Privacy"
      conceptDescription="At Jhanvi Mishra Design, we respect your privacy and are committed to protecting your personal data in accordance with our high standards of professional integrity."
    >
      <section style={{ padding: '80px 6%', background: '#ffffff', color: '#333333' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.8', color: '#cccccc' }}>
          <h3 className="accent-gradient-text" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: 'transparent', marginBottom: '20px' }}>1. Introduction</h3>
          <p style={{ marginBottom: '30px' }}>Welcome to Jhanvi Mishra Design. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.</p>

          <h3 className="accent-gradient-text" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: 'transparent', marginBottom: '20px' }}>2. Data We Collect</h3>
          <p style={{ marginBottom: '30px' }}>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:<br/>
          - <strong>Identity Data</strong> includes first name, last name, username or similar identifier.<br/>
          - <strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.<br/>
          - <strong>Usage Data</strong> includes information about how you use our website, products and services.</p>

          <h3 className="accent-gradient-text" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: 'transparent', marginBottom: '20px' }}>3. How We Use Your Data</h3>
          <p style={{ marginBottom: '30px' }}>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:<br/>
          - Where we need to perform the contract we are about to enter into or have entered into with you.<br/>
          - Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.<br/>
          - Where we need to comply with a legal obligation.</p>

          <h3 className="accent-gradient-text" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: 'transparent', marginBottom: '20px' }}>4. Data Security</h3>
          <p style={{ marginBottom: '30px' }}>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.</p>

          <h3 className="accent-gradient-text" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: 'transparent', marginBottom: '20px' }}>5. Contact Details</h3>
          <p style={{ marginBottom: '30px' }}>If you have any questions about this privacy policy or our privacy practices, please contact us at: <br/>
          <strong>Email:</strong> info@jhanvimishradesign.com<br/>
          <strong>Phone:</strong> +91 875 503 0050</p>
        </div>
      </section>
    </SubCategoryLayout>
  );
}
