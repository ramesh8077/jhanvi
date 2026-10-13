import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaEnvelope,
  FaWhatsapp,
  FaCalendarAlt,
  FaPinterest,
} from "react-icons/fa";

import CallToAction from "./CallToAction";

export default function Footer() {
  const socialLinks = [
    {
      href: "https://www.instagram.com/_jhanvimishradesign_",
      icon: <FaInstagram />,
      label: "Instagram",
    },
    {
      href: "https://www.linkedin.com/company/jhanvi-mishra-design/",
      icon: <FaLinkedinIn />,
      label: "LinkedIn",
    },
    {
      href: "https://pin.it/45VVxFUrX",
      icon: <FaPinterest />,
      label: "Pinterest",
    },
  ];

  const navigationLinks = [
    { label: "Home", to: "/" },
    { label: "About us", to: "/my-journey" },
    { label: "Projects", to: "/projects" },
    { label: "Career", to: "/careers" },
    { label: "Contact us", to: "/contact" },
  ];

  const contactItems = [
    {
      icon: <FaMapMarkerAlt />,
      content: (
        <>
          <strong>Address:</strong> J-1,37, Bougainvillea Marg, DLF Phase-2,
          1st Floor Gurugram, Haryana 122002, India
          <span className="footer-gap" />
          <strong>DE Office:</strong> Stahlbergstr. 45, Mainz, 55131, Germany
        </>
      ),
    },
    {
      icon: <FaMobileAlt />,
      content: (
        <>
          <a href="tel:+918755030050">IN +91 8755030050</a>
          {" / "}
          <a href="tel:+918860976861">+91 8860976861</a>
          <br />
          <a href="tel:+4917645032320">DE +49 17645032320</a>
        </>
      ),
    },
    {
      icon: <FaEnvelope />,
      content: (
        <a href="mailto:info@jhanvimishradesign.com">
          info@jhanvimishradesign.com
        </a>
      ),
    },
    {
      icon: <FaWhatsapp />,
      content: (
        <a
          href="https://wa.me/918755030050"
          target="_blank"
          rel="noreferrer"
        >
          whatsapp: +91 8755030050
        </a>
      ),
    },
    {
      icon: <FaCalendarAlt />,
      content: "mon - fri: 9:30 am to 6:30 pm",
    },
  ];

  return (
    <footer id="site-footer">
      <style>{`
        #site-footer {
          width: 100%;
          position: relative;
          overflow: hidden;
          background: #30302e;
          color: #d6d6d2;
          font-family: "Century Gothic", "Montserrat", "Inter", sans-serif;
        }

        #site-footer *,
        #site-footer *::before,
        #site-footer *::after {
          box-sizing: border-box;
        }

        /* Reset external heading / text styles */
        #site-footer h2,
        #site-footer h3,
        #site-footer h4 {
          background: none !important;
          background-clip: initial !important;
          -webkit-background-clip: initial !important;
          -webkit-text-fill-color: initial !important;
          text-shadow: none !important;
          filter: none !important;
          color: #ffffff !important;
        }

        #site-footer p,
        #site-footer span,
        #site-footer a:not(.footer-cta-btn) {
          background: none !important;
          background-clip: initial !important;
          -webkit-background-clip: initial !important;
          -webkit-text-fill-color: initial !important;
          text-shadow: none !important;
          filter: none !important;
          color: #d6d6d2 !important;
        }

        /* ───────── Columns (bigger gaps) ───────── */
        #site-footer .footer-content {
          display: grid;
          grid-template-columns: minmax(0, 0.8fr) minmax(0, 1fr) minmax(0, 1fr);
          align-items: start;
          column-gap: clamp(40px, 6vw, 110px);
          row-gap: 40px;
          width: min(1400px, calc(100% - 48px));
          margin: 0 auto;
          padding: 10px 0 20px;
        }

        #site-footer .footer-column {
          min-width: 0;
          text-align: left !important;
        }

        /* Titles */
        #site-footer .footer-title {
          position: relative;
          margin: 0 0 22px !important;
          padding: 0 0 12px !important;
          font-size: 0.95rem !important;
          font-style: normal !important;
          font-weight: 700 !important;
          line-height: 1.35 !important;
          letter-spacing: 0.14em !important;
          text-transform: uppercase !important;
          text-align: left !important;
        }

        #site-footer .footer-title::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 34px;
          height: 2px;
          background: #3cc7cd;
        }

        /* Brand */
        #site-footer .footer-logo-link {
          display: block;
          width: 100%;
          max-width: 360px;
          margin: 0 0 22px;
          text-decoration: none;
        }

        #site-footer .footer-brand-col {
          margin: -35px 0 -40px -60px;
        }

        #site-footer .footer-logo {
          display: block;
          width: 100%;
          height: auto;
          /* Logo ka dark background footer ke color mein mix ho jata hai */
          mix-blend-mode: lighten;
        }

        #site-footer .footer-description {
          max-width: 380px;
          margin: 0 !important;
          font-size: 0.92rem !important;
          font-weight: 400 !important;
          line-height: 1.8 !important;
          text-align: left !important;
        }

        /* Navigation */
        #site-footer .footer-nav {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
        }

        #site-footer .footer-nav-link {
          display: inline-block;
          font-size: 0.92rem;
          line-height: 1.5;
          text-align: left;
          text-decoration: none;
          transition: color 0.2s ease, transform 0.2s ease;
        }

        #site-footer .footer-nav-link:hover {
          color: #ffffff !important;
          transform: translateX(4px);
        }

        /* Follow us */
        #site-footer .footer-follow-title {
          margin: 30px 0 14px !important;
          font-size: 0.78rem !important;
          font-weight: 700 !important;
          line-height: 1.4 !important;
          letter-spacing: 0.14em !important;
          text-transform: uppercase !important;
          text-align: left !important;
          color: #ffffff !important;
        }

        #site-footer .footer-socials {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px;
        }

        #site-footer .footer-social-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          font-size: 0.95rem;
          line-height: 1;
          text-decoration: none;
          transition: color 0.25s ease, border-color 0.25s ease,
            background-color 0.25s ease, transform 0.25s ease;
        }

        #site-footer .footer-social-link:hover {
          color: #ffffff !important;
          border-color: #3cc7cd;
          background: #008f95 !important;
          transform: translateY(-3px);
        }

        /* Middle Column Alignment */
        #site-footer .footer-middle-col {
          justify-self: center;
          transform: translateX(40px);
        }

        /* Contact */
        #site-footer .footer-contact-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        #site-footer .footer-contact-item {
          display: grid;
          grid-template-columns: 28px minmax(0, 1fr);
          align-items: start;
          gap: 14px;
          font-size: 0.9rem;
          line-height: 1.6;
          text-align: left;
        }

        #site-footer .footer-contact-icon {
          display: inline-flex !important;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: 50%;
          background: transparent !important;
          color: #ffffff !important;
          font-size: 0.72rem !important;
          line-height: 1 !important;
          flex-shrink: 0;
        }

        #site-footer .footer-contact-text {
          min-width: 0;
          padding-top: 3px;
          overflow-wrap: anywhere;
          font-size: 0.9rem !important;
          line-height: 1.6 !important;
          text-align: left !important;
        }

        #site-footer .footer-contact-text strong {
          color: #ffffff;
          font-weight: 700;
        }

        #site-footer .footer-contact-text .footer-gap {
          display: block;
          height: 10px;
        }

        #site-footer .footer-contact-text a {
          font-size: inherit;
          line-height: inherit;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        #site-footer .footer-contact-text a:hover {
          color: #ffffff !important;
        }

        /* Bottom bar */
        #site-footer .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          padding: 18px 24px;
          text-align: center;
        }

        #site-footer .footer-bottom p {
          margin: 0 !important;
          font-size: 0.8rem !important;
          letter-spacing: 0.04em;
          text-align: center !important;
          opacity: 0.8;
        }

        /* ───────── Small laptops ───────── */
        @media (max-width: 1280px) {
          #site-footer .footer-content {
            column-gap: clamp(32px, 4.5vw, 60px);
          }
        }

        /* ───────── Tablet: Brand + Nav on top, Contact below ───────── */
        @media (max-width: 1100px) {
          #site-footer .footer-content {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            column-gap: 60px;
            row-gap: 44px;
            padding: 44px 0 48px;
          }

          #site-footer .footer-contact-column {
            grid-column: 1 / -1;
          }

          #site-footer .footer-contact-list {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 18px 50px;
          }
        }

        /* ───────── Mobile: single column ───────── */
        @media (max-width: 900px) {
          #site-footer .footer-brand-col {
            margin: 0;
          }
        }

        @media (max-width: 600px) {
          #site-footer .footer-content {
            grid-template-columns: 1fr;
            width: min(100% - 40px, 500px);
            row-gap: 38px;
            padding: 36px 0 40px;
          }

          #site-footer .footer-contact-column {
            grid-column: auto;
          }

          #site-footer .footer-contact-list {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }

          #site-footer .footer-logo-link {
            max-width: 300px;
            margin-bottom: 18px;
          }

          #site-footer .footer-description {
            max-width: 100%;
          }
        }
      `}</style>

      <CallToAction />

      {/* Footer columns */}
      <div className="footer-content">
        {/* Brand */}
        <div className="footer-column footer-brand-col">
          <Link to="/" className="footer-logo-link">
            <img
              src="/assets/images/zha-full-logo (1).png"
              alt="Jhanvi Mishra Design"
              className="footer-logo"
            />
          </Link>
          <p className="footer-description">
            Jhanvi Mishra Design is a platform that is transforming the
            experience of creating, maintaining, and managing spaces with
            technology.
          </p>
        </div>

        {/* Navigation */}
        <div className="footer-column footer-middle-col">
          <h4 className="footer-title">Company Information</h4>

          <nav className="footer-nav">
            {navigationLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="footer-nav-link"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <p className="footer-follow-title">Follow us</p>

          <div className="footer-socials">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="footer-social-link"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="footer-column footer-contact-column">
          <h4 className="footer-title">Contact</h4>

          <div className="footer-contact-list">
            {contactItems.map((item, index) => (
              <div className="footer-contact-item" key={index}>
                <span className="footer-contact-icon">{item.icon}</span>
                <span className="footer-contact-text">{item.content}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Jhanvi Mishra Design. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}