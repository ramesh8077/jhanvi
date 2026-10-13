import React from 'react';
import { Link } from 'react-router-dom';

export default function ZHABanner() {
  return (
    <div className="zha-banner-wrapper">
      <div className="zha-banner-container">
        <div className="zha-banner-content">
          <div className="zha-banner-top">
            <div className="zha-banner-logo">
              <img 
                src="/assets/images/zha-full-logo.png" 
                alt="Jhanvi Mishra Design" 
                style={{ height: '60px', width: 'auto', objectFit: 'contain' }} 
              />
            </div>
            <div className="zha-banner-nav">
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          <div className="zha-banner-middle">
            "Jhanvi Mishra" is a trademark of the Jhanvi Mishra Design Group, based in India. Jhanvi Mishra Group focuses on inclusion-driven design, cross-functional coordination, and sustainable spaces. All external links and rights are reserved by the respective owners.
          </div>

          <div className="zha-banner-bottom">
            <div className="social">©</div>
            <div className="zha-banner-legal-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Use</a>
              <span>©2026 JM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
