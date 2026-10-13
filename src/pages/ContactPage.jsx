import React, { useState } from 'react';
import SubCategoryLayout from '../components/common/SubCategoryLayout';
import { FaArrowRightLong } from 'react-icons/fa6';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', projectType: '', message: '' });
    }, 4000);
  };

  return (
    <SubCategoryLayout
      title="Contact Us"
      category="GET IN TOUCH"
      subtitle="Reach out to us to start a conversation about your next project."
      heroImage="/assets/images/dvag-executive-lobby.jpg"
    >
      <style dangerouslySetInnerHTML={{
        __html: `
        .contact-page-section {
          background-color: #ffffff;
          padding: 100px 5%;
          width: 100%;
          box-sizing: border-box;
          overflow: hidden;
        }
        .contact-grid-container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 80px;
          box-sizing: border-box;
        }

        /* --- LEFT SIDE: STUDIO INFO --- */
        .contact-info-block {
          padding-right: 20px;
          min-width: 0;
          overflow-wrap: break-word;
          word-wrap: break-word;
        }
        .info-title {
          font-family: var(--font-heading, sans-serif);
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          font-weight: 800;
          color: #006b70;
          margin-bottom: 40px;
          line-height: 1.2;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        .info-group {
          margin-bottom: 35px;
        }
        .info-label {
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 3px;
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          text-transform: uppercase;
          margin-bottom: 12px;
          display: block;
        }
        .info-text {
          font-size: 0.95rem;
          line-height: 1.7;
          color: #444444;
          font-weight: 400;
          word-wrap: break-word;
          overflow-wrap: break-word;
          text-align: justify !important;
        }
        .info-link {
          font-weight: inherit;
          color: inherit;
          text-decoration: none;
          transition: color 0.3s ease;
          display: inline;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }
        .info-link:hover {
          color: #008b8b;
        }
        
        .social-links {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          margin-top: 15px;
        }
        .social-link {
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 1.5px;
          color: #111111;
          text-transform: uppercase;
          text-decoration: none;
          border-bottom: 2px solid transparent;
          padding-bottom: 2px;
          transition: all 0.3s ease;
        }
        .social-link:hover {
          border-bottom-color: #008b8b;
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* --- RIGHT SIDE: FORM --- */
        .contact-form-wrapper {
          background: #ffffff;
          padding: 50px;
          border: 1px solid #eeeeee;
          box-sizing: border-box;
          width: 100%;
          min-width: 0;
          box-shadow: 0 20px 50px rgba(0,0,0,0.05);
          border-top: 4px solid transparent;
          border-image: var(--accent-gradient) 1;
        }
        .luxury-form {
          display: flex;
          flex-direction: column;
          gap: 35px;
          width: 100%;
        }
        .input-group {
          position: relative;
          width: 100%;
        }
        .luxury-input {
          width: 100%;
          box-sizing: border-box;
          background: transparent;
          border: none;
          border-bottom: 1px solid #cccccc;
          padding: 15px 0;
          font-size: 1rem;
          color: #111111;
          transition: border-color 0.3s ease;
          outline: none;
          font-family: inherit;
        }
        .luxury-input:focus {
          border-bottom: 2px solid #008b8b;
        }
        .luxury-input::placeholder {
          color: #888888;
          font-weight: 400;
        }
        textarea.luxury-input {
          resize: vertical;
          min-height: 120px;
        }
        
        .submit-btn {
          background: var(--accent-gradient);
          color: #000000;
          border: 1px solid transparent;
          border-image: var(--accent-gradient) 1;
          padding: 18px 40px;
          font-size: 0.85rem;
          font-weight: 800;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          transition: all 0.4s ease;
          align-self: flex-start;
          margin-top: 10px;
          border-radius: 4px;
          box-sizing: border-box;
        }
        .submit-btn:hover {
          background: transparent;
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0,255,255,0.1);
        }
        
        .success-message {
          font-size: 1rem;
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
          margin-top: 20px;
          padding: 15px;
          background: rgba(0, 255, 255, 0.05);
          border-left: 4px solid transparent;
          border-image: var(--accent-gradient) 1;
        }

        @media (max-width: 1024px) {
          .contact-grid-container {
            grid-template-columns: 1fr;
            gap: 50px;
          }
          .contact-info-block {
            padding-right: 0;
          }
          .contact-form-wrapper {
            padding: 40px 30px;
          }
        }
        
        @media (max-width: 768px) {
          .contact-page-section {
            padding: 50px 4% !important;
          }
          .contact-grid-container {
            gap: 40px;
          }
          .contact-info-block {
            padding-right: 0;
          }
          .info-title {
            font-size: clamp(1.5rem, 7vw, 2.2rem);
            margin-bottom: 30px;
          }
          .info-text {
            font-size: 0.95rem;
          }
          .info-link {
            font-size: 0.95rem;
          }
          .contact-form-wrapper {
            padding: 30px 20px !important;
          }
          .social-links {
            gap: 10px;
          }
          .social-link {
            font-size: 0.7rem;
            letter-spacing: 1px;
          }
          .submit-btn {
            width: 100%;
            padding: 16px 20px;
          }
          .luxury-input {
            font-size: 0.95rem;
          }
        }

        @media (max-width: 480px) {
          .contact-page-section {
            padding: 40px 3% !important;
          }
          .contact-grid-container {
            gap: 30px;
          }
          .info-title {
            font-size: 1.5rem;
            margin-bottom: 25px;
          }
          .info-group {
            margin-bottom: 25px;
          }
          .info-text {
            font-size: 0.9rem;
          }
          .info-link {
            font-size: 0.85rem;
          }
          .contact-form-wrapper {
            padding: 25px 15px !important;
          }
          .luxury-form {
            gap: 25px;
          }
          .social-links {
            flex-direction: column;
            gap: 8px;
          }
        }
      `}} />

      <section className="contact-page-section">
        <div className="contact-grid-container">

          {/* LEFT: STUDIO INFO */}
          <div className="contact-info-block">
            <h2 className="info-title">Let's build something exceptional.</h2>

            <div className="info-group">
              <span className="info-label">Studios</span>
              <p className="info-text">
                <strong>Address:</strong><br />
                J-1,37, Bougainvillea Marg,<br />
                DLF Phase-2, 1st Floor Gurugram, Haryana<br />
                122002, India<br />
                <a style={{ color: "#008f95", textDecoration: "underline", fontSize: "0.85rem", marginTop: "4px", display: "inline-block" }} href="https://maps.google.com/?q=J-1,37,+Bougainvillea+Marg,+DLF+Phase-2,+Gurugram,+India" target="_blank" rel="noreferrer">Get Directions</a><br /><br />
                <strong>DE Office:</strong><br />
                Stahlbergstr. 45, Mainz, 55131,<br />
                Germany
              </p>
            </div>

            <div className="info-group">
              <span className="info-label">Direct Contact</span>
              <p className="info-text">
                <a href="mailto:info@jhanvimishradesign.com" className="info-link">info@jhanvimishradesign.com</a><br />
                <a href="tel:+918755030050" className="info-link">IN +91 8755030050</a> / <a href="tel:+918860976861" className="info-link">+91 8860976861</a><br />
                <a href="tel:+4917645032320" className="info-link">DE +49 17645032320</a>
              </p>
            </div>

            <div className="info-group">
              <span className="info-label">Follow Our Work</span>
              <div className="social-links">
                <a style={{ color: "#111111" }} href="https://www.instagram.com/_jhanvimishradesign_?igsi=MWxiajcxb2ZsNXRmcQ==" target="_blank" rel="noreferrer" className="social-link">Instagram</a>
                <a style={{ color: "#111111" }} href="https://www.linkedin.com/company/jhanvi-mishra-design/" target="_blank" rel="noreferrer" className="social-link">LinkedIn</a>
                <a style={{ color: "#111111" }} href="https://pin.it/45VVxFUrX" target="_blank" rel="noreferrer" className="social-link">Pinterest</a>
                <a style={{ color: "#111111" }} href="https://www.youtube.com/@Jhanvimishradesign" target="_blank" rel="noreferrer" className="social-link">YouTube</a>
              </div>
            </div>
          </div>

          {/* RIGHT: LUXURY FORM */}
          <div className="contact-form-wrapper delay-200">
            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, color: '#006b70', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Project Inquiry
              </h3>
              <p style={{ color: '#555555', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>
                Please provide a brief overview of your project, and our team will get back to you within 24 hours.
              </p>
            </div>

            <form className="luxury-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  className="luxury-input"
                  placeholder="Full Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="input-group">
                <input
                  type="email"
                  className="luxury-input"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="input-group">
                <input
                  type="text"
                  className="luxury-input"
                  placeholder="Project Type (e.g. Residential, Commercial, Scenography)"
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                />
              </div>

              <div className="input-group">
                <textarea
                  className="luxury-input"
                  placeholder="Tell us about your vision, location, and timeline..."
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="submit-btn" disabled={submitted}>
                {submitted ? 'Request Sent' : 'Submit Inquiry'} <FaArrowRightLong />
              </button>

              {submitted && (
                <div className="success-message">
                  Thank you. Your inquiry has been received. Our team will contact you shortly.
                </div>
              )}
            </form>
          </div>

        </div>
      </section>
    </SubCategoryLayout>
  );
}
