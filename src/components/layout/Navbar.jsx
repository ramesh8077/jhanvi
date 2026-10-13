
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown, FaXmark } from "react-icons/fa6";

import { aboutSubLinks } from "../../data/navigationData";

const LOGO_SRC = "/assets/images/zha-full-logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu after route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setAboutOpen(false);
  }, [location.pathname]);

  // Stop page scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close menu with Escape
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeMobileMenu();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Close mobile menu after switching to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMobileMenuOpen(false);
        setAboutOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((current) => !current);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setAboutOpen(false);
  };

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* NAVBAR */}
      <header
        id="navbar"
        className={`jmd-navbar ${
          scrolled ? "jmd-navbar-scrolled" : ""
        } ${mobileMenuOpen ? "jmd-menu-open" : ""}`}
      >
        {/* Logo */}
        <Link
          to="/"
          className="jmd-brand-logo"
          aria-label="Jhanvi Mishra Design Home"
        >
          <img
            src={LOGO_SRC}
            alt="Jhanvi Mishra Design"
            className="jmd-logo-image"
          />
        </Link>

        {/* Desktop navigation */}
        <nav
          className="jmd-desktop-nav"
          aria-label="Main navigation"
        >
          <Link
            to="/"
            className={isActive("/") ? "jmd-active-link" : ""}
          >
            Home
          </Link>

          <Link
            to="/projects"
            className={
              isActive("/projects") ? "jmd-active-link" : ""
            }
          >
            Projects
          </Link>

          <Link
            to="/expertise"
            className={
              isActive("/expertise") ? "jmd-active-link" : ""
            }
          >
            Expertise
          </Link>

          {/* Desktop About dropdown */}
          <div className="jmd-desktop-dropdown">
            <button
              type="button"
              className={`jmd-dropdown-trigger ${
                isActive("/about") ||
                isActive("/my-journey")
                  ? "jmd-active-link"
                  : ""
              }`}
            >
              <span>About Us</span>
              <FaChevronDown className="jmd-dropdown-arrow" />
            </button>

            <div className="jmd-dropdown-menu">
              {aboutSubLinks.map((sub, index) => (
                <Link
                  key={sub.href || index}
                  to={sub.href}
                  className="jmd-dropdown-link"
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/contact"
            className={
              isActive("/contact") ? "jmd-active-link" : ""
            }
          >
            Contact
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className={`jmd-menu-button ${
            mobileMenuOpen ? "active" : ""
          }`}
          onClick={toggleMobileMenu}
          aria-label="Open navigation menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="jmd-mobile-menu"
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {/* FULL-SCREEN MOBILE MENU */}
      <div
        id="jmd-mobile-menu"
        className={`jmd-mobile-overlay ${
          mobileMenuOpen ? "active" : ""
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Mobile menu header */}
        <div className="jmd-mobile-header">
          <Link
            to="/"
            className="jmd-mobile-logo"
            onClick={closeMobileMenu}
            aria-label="Jhanvi Mishra Design Home"
          >
            <img src={LOGO_SRC} alt="Jhanvi Mishra Design" />
          </Link>

          <button
            type="button"
            className="jmd-close-button"
            onClick={closeMobileMenu}
            aria-label="Close navigation menu"
          >
            <FaXmark />
          </button>
        </div>

        {/* Mobile links */}
        <nav
          className="jmd-mobile-navigation"
          aria-label="Mobile navigation"
        >
          <Link
            to="/"
            className={`jmd-mobile-link ${
              isActive("/") ? "active" : ""
            }`}
            onClick={closeMobileMenu}
          >
            Home
          </Link>

          <Link
            to="/projects"
            className={`jmd-mobile-link ${
              isActive("/projects") ? "active" : ""
            }`}
            onClick={closeMobileMenu}
          >
            Projects
          </Link>

          <Link
            to="/expertise"
            className={`jmd-mobile-link ${
              isActive("/expertise") ? "active" : ""
            }`}
            onClick={closeMobileMenu}
          >
            Expertise
          </Link>

          {/* Mobile About accordion */}
          <div
            className={`jmd-mobile-accordion ${
              aboutOpen ? "active" : ""
            }`}
          >
            <button
              type="button"
              className="jmd-accordion-button"
              onClick={() => setAboutOpen((current) => !current)}
              aria-expanded={aboutOpen}
            >
              <span>About Us</span>

              <FaChevronDown className="jmd-accordion-arrow" />
            </button>

            <div className="jmd-accordion-content">
              <div className="jmd-mobile-submenu">
                {aboutSubLinks.map((sub, index) => (
                  <Link
                    key={sub.href || index}
                    to={sub.href}
                    onClick={closeMobileMenu}
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            to="/contact"
            className={`jmd-mobile-link ${
              isActive("/contact") ? "active" : ""
            }`}
            onClick={closeMobileMenu}
          >
            Contact
          </Link>
        </nav>
      </div>

      <style>{`
        /* ===================================
           RESET
        =================================== */

        #navbar.jmd-navbar,
        #navbar.jmd-navbar *,
        .jmd-mobile-overlay,
        .jmd-mobile-overlay * {
          box-sizing: border-box;
        }

        /* ===================================
           DESKTOP NAVBAR
        =================================== */

        #navbar.jmd-navbar {
          position: fixed !important;
          top: 0 !important;
          right: 0 !important;
          left: 0 !important;
          z-index: 9000 !important;

          display: flex !important;
          align-items: center !important;
          justify-content: space-between !important;

          width: 100% !important;
          height: 86px !important;
          margin: 0 !important;
          padding: 0 clamp(24px, 5vw, 76px) !important;

          background: #30302e !important;
          background-color: #30302e !important;
          border: 0 !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12) !important;
          border-radius: 0 !important;

          opacity: 1 !important;
          visibility: visible !important;
          backdrop-filter: none !important;
          -webkit-backdrop-filter: none !important;

          box-shadow: 0 8px 28px rgba(0, 0, 0, 0.2) !important;
        }

        #navbar.jmd-navbar::before,
        #navbar.jmd-navbar::after {
          display: none !important;
          content: none !important;
        }

        /* Keep same dark background after scrolling */
        #navbar.jmd-navbar.jmd-navbar-scrolled,
        #navbar.jmd-navbar.jmd-menu-open {
          background: #30302e !important;
          background-color: #30302e !important;
        }

        /* ===================================
           LOGO
        =================================== */

        #navbar .jmd-brand-logo {
          --logo-zoom: 2;

          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          flex-shrink: 0 !important;

          width: 170px !important;
          height: 78px !important;
          margin: 0 !important;
          padding: 0 !important;
          overflow: hidden !important;

          background: transparent !important;
          text-decoration: none !important;
        }

        #navbar .jmd-logo-image {
          display: block !important;
          width: 100% !important;
          height: 100% !important;
          max-width: none !important;
          margin: 0 !important;
          padding: 0 !important;

          object-fit: contain !important;
          object-position: center !important;

          opacity: 1 !important;
          visibility: visible !important;
          filter: none !important;

          transform: scale(var(--logo-zoom)) !important;
          transform-origin: center center !important;
        }

        /* ===================================
           DESKTOP LINKS
        =================================== */

        #navbar .jmd-desktop-nav {
          display: flex !important;
          align-items: center !important;
          justify-content: flex-end !important;
          gap: clamp(24px, 3vw, 48px) !important;
          height: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
        }

        #navbar .jmd-desktop-nav > a,
        #navbar .jmd-dropdown-trigger {
          position: relative !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 8px !important;

          height: 100% !important;
          margin: 0 !important;
          padding: 0 !important;

          border: 0 !important;
          background: transparent !important;
          color: #d6d6d2 !important;

          font-family: "Montserrat", "Century Gothic", sans-serif !important;
          font-size: 13px !important;
          font-weight: 600 !important;
          line-height: 1 !important;
          letter-spacing: 1.4px !important;
          text-align: center !important;
          text-decoration: none !important;
          text-transform: uppercase !important;

          cursor: pointer !important;
          opacity: 1 !important;
          transition: color 0.25s ease !important;
        }

        #navbar .jmd-desktop-nav > a:hover,
        #navbar .jmd-dropdown-trigger:hover,
        #navbar .jmd-active-link {
          color: #ffffff !important;
        }

        #navbar .jmd-active-link::after {
          content: "" !important;
          position: absolute !important;
          right: 0 !important;
          bottom: 21px !important;
          left: 0 !important;

          display: block !important;
          height: 1px !important;
          background: #ffffff !important;
        }

        /* ===================================
           DESKTOP DROPDOWN
        =================================== */

        #navbar .jmd-desktop-dropdown {
          position: relative !important;
          display: flex !important;
          align-items: center !important;
          height: 100% !important;
        }

        #navbar .jmd-dropdown-arrow {
          flex-shrink: 0 !important;
          font-size: 10px !important;
          transition: transform 0.25s ease !important;
        }

        #navbar .jmd-dropdown-menu {
          position: absolute !important;
          top: calc(100% - 2px) !important;
          left: 50% !important;
          z-index: 50 !important;

          display: block !important;
          width: 250px !important;
          margin: 0 !important;
          padding: 10px !important;

          visibility: hidden !important;
          opacity: 0 !important;

          background: #30302e !important;
          border: 1px solid rgba(255, 255, 255, 0.14) !important;
          border-radius: 2px !important;
          box-shadow: 0 18px 38px rgba(0, 0, 0, 0.35) !important;

          transform: translate(-50%, 12px) !important;
          pointer-events: none !important;

          transition:
            opacity 0.25s ease,
            transform 0.25s ease,
            visibility 0.25s ease !important;
        }

        #navbar .jmd-desktop-dropdown:hover .jmd-dropdown-menu,
        #navbar .jmd-desktop-dropdown:focus-within .jmd-dropdown-menu {
          visibility: visible !important;
          opacity: 1 !important;
          pointer-events: auto !important;
          transform: translate(-50%, 0) !important;
        }

        #navbar .jmd-desktop-dropdown:hover .jmd-dropdown-arrow,
        #navbar .jmd-desktop-dropdown:focus-within .jmd-dropdown-arrow {
          transform: rotate(180deg) !important;
        }

        #navbar .jmd-dropdown-link {
          display: block !important;
          width: 100% !important;
          padding: 12px 14px !important;

          color: #d6d6d2 !important;
          background: transparent !important;

          font-family: "Montserrat", "Century Gothic", sans-serif !important;
          font-size: 13px !important;
          line-height: 1.4 !important;
          text-decoration: none !important;

          transition:
            color 0.2s ease,
            background-color 0.2s ease !important;
        }

        #navbar .jmd-dropdown-link:hover {
          color: #ffffff !important;
          background: rgba(255, 255, 255, 0.08) !important;
        }

        /* ===================================
           HAMBURGER BUTTON
        =================================== */

        #navbar .jmd-menu-button {
          display: none !important;
          align-items: center !important;
          justify-content: center !important;
          flex-direction: column !important;
          gap: 6px !important;

          flex-shrink: 0 !important;
          width: 46px !important;
          height: 46px !important;
          margin: 0 !important;
          padding: 0 !important;

          border: 0 !important;
          background: transparent !important;
          cursor: pointer !important;
        }

        #navbar .jmd-menu-button span {
          display: block !important;
          width: 26px !important;
          height: 2px !important;
          margin: 0 !important;
          padding: 0 !important;

          background: #ffffff !important;
          border-radius: 10px !important;

          transition:
            transform 0.3s ease,
            opacity 0.3s ease !important;
        }

        #navbar .jmd-menu-button.active span:nth-child(1) {
          transform: translateY(8px) rotate(45deg) !important;
        }

        #navbar .jmd-menu-button.active span:nth-child(2) {
          opacity: 0 !important;
        }

        #navbar .jmd-menu-button.active span:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg) !important;
        }

        /* ===================================
           FULL-SCREEN MOBILE MENU
        =================================== */

        .jmd-mobile-overlay {
          position: fixed !important;
          inset: 0 !important;
          z-index: 10000 !important;

          display: flex !important;
          flex-direction: column !important;

          width: 100vw !important;
          max-width: none !important;
          height: 100vh !important;
          height: 100dvh !important;
          min-height: 100vh !important;

          margin: 0 !important;
          padding: 0 !important;

          visibility: hidden !important;
          opacity: 0 !important;
          overflow: hidden !important;
          pointer-events: none !important;

          background: #30302e !important;
          background-color: #30302e !important;
          border: 0 !important;
          border-radius: 0 !important;

          transform: translate3d(100%, 0, 0) !important;

          transition:
            transform 0.42s cubic-bezier(0.77, 0, 0.18, 1),
            opacity 0.3s ease,
            visibility 0.42s ease !important;
        }

        .jmd-mobile-overlay.active {
          visibility: visible !important;
          opacity: 1 !important;
          pointer-events: auto !important;
          transform: translate3d(0, 0, 0) !important;
        }

        /* ===================================
           MOBILE HEADER
        =================================== */

        .jmd-mobile-header {
          position: relative !important;
          z-index: 2 !important;

          display: flex !important;
          align-items: center !important;
          justify-content: space-between !important;
          flex-shrink: 0 !important;

          width: 100% !important;
          min-height: 76px !important;
          margin: 0 !important;
          padding:
            0 max(18px, env(safe-area-inset-right))
            0 max(18px, env(safe-area-inset-left)) !important;

          background: #30302e !important;
          background-color: #30302e !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12) !important;
        }

        .jmd-mobile-logo {
          --mobile-logo-zoom: 1.75;

          display: flex !important;
          align-items: center !important;
          justify-content: center !important;

          width: 140px !important;
          height: 68px !important;
          margin: 0 !important;
          padding: 0 !important;
          overflow: hidden !important;
        }

        .jmd-mobile-logo img {
          display: block !important;
          width: 100% !important;
          height: 100% !important;
          max-width: none !important;
          margin: 0 !important;
          padding: 0 !important;

          object-fit: contain !important;
          object-position: center !important;

          opacity: 1 !important;
          visibility: visible !important;
          filter: none !important;

          transform: scale(var(--mobile-logo-zoom)) !important;
          transform-origin: center !important;
        }

        .jmd-close-button {
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          flex-shrink: 0 !important;

          width: 46px !important;
          height: 46px !important;
          margin: 0 !important;
          padding: 0 !important;

          border: 0 !important;
          border-radius: 50% !important;
          background: rgba(255, 255, 255, 0.07) !important;
          color: #ffffff !important;

          font-size: 25px !important;
          line-height: 1 !important;
          cursor: pointer !important;

          transition:
            background-color 0.25s ease,
            transform 0.25s ease !important;
        }

        .jmd-close-button:hover {
          background: rgba(255, 255, 255, 0.14) !important;
          transform: rotate(90deg) !important;
        }

        /* ===================================
           MOBILE NAVIGATION
        =================================== */

        .jmd-mobile-navigation {
          display: flex !important;
          flex: 1 !important;
          flex-direction: column !important;

          width: 100% !important;
          min-width: 0 !important;
          min-height: 0 !important;

          margin: 0 !important;
          padding:
            clamp(22px, 5vh, 46px)
            max(24px, env(safe-area-inset-right))
            calc(35px + env(safe-area-inset-bottom))
            max(24px, env(safe-area-inset-left)) !important;

          overflow-x: hidden !important;
          overflow-y: auto !important;

          background: #30302e !important;
          background-color: #30302e !important;

          overscroll-behavior: contain !important;
          -webkit-overflow-scrolling: touch !important;
        }

        .jmd-mobile-link,
        .jmd-accordion-button {
          display: flex !important;
          align-items: center !important;
          justify-content: space-between !important;
          flex-shrink: 0 !important;

          width: 100% !important;
          min-height: 66px !important;
          margin: 0 !important;
          padding: 18px 4px !important;

          border: 0 !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.14) !important;
          border-radius: 0 !important;

          background: transparent !important;
          color: #e8e8e5 !important;

          font-family: "Montserrat", "Century Gothic", sans-serif !important;
          font-size: clamp(18px, 5vw, 23px) !important;
          font-weight: 500 !important;
          line-height: 1.2 !important;
          letter-spacing: 2.5px !important;
          text-align: left !important;
          text-decoration: none !important;
          text-transform: uppercase !important;

          cursor: pointer !important;
          opacity: 1 !important;
        }

        .jmd-mobile-link:hover,
        .jmd-accordion-button:hover {
          color: #ffffff !important;
        }

        .jmd-mobile-link.active {
          color: #29d4f6 !important;
        }

        /* ===================================
           MOBILE ACCORDION
        =================================== */

        .jmd-mobile-accordion {
          display: block !important;
          flex-shrink: 0 !important;
          width: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
        }

        .jmd-accordion-arrow {
          flex-shrink: 0 !important;
          margin-left: 16px !important;
          font-size: 14px !important;
          transition: transform 0.3s ease !important;
        }

        .jmd-mobile-accordion.active .jmd-accordion-arrow {
          transform: rotate(180deg) !important;
        }

        .jmd-accordion-content {
          display: grid !important;
          grid-template-rows: 0fr !important;

          width: 100% !important;
          visibility: hidden !important;
          opacity: 0 !important;

          background: rgba(0, 0, 0, 0.14) !important;

          transition:
            grid-template-rows 0.35s ease,
            opacity 0.3s ease,
            visibility 0.35s ease !important;
        }

        .jmd-mobile-accordion.active .jmd-accordion-content {
          grid-template-rows: 1fr !important;
          visibility: visible !important;
          opacity: 1 !important;
        }

        .jmd-mobile-submenu {
          min-height: 0 !important;
          overflow: hidden !important;
        }

        .jmd-mobile-submenu a {
          position: relative !important;
          display: block !important;
          width: 100% !important;

          padding: 15px 20px 15px 29px !important;

          color: #cacac6 !important;
          background: transparent !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;

          font-family: "Montserrat", "Century Gothic", sans-serif !important;
          font-size: 14px !important;
          font-weight: 400 !important;
          line-height: 1.45 !important;
          letter-spacing: 0.7px !important;
          text-decoration: none !important;
          text-transform: none !important;

          transition:
            color 0.2s ease,
            padding-left 0.2s ease !important;
        }

        .jmd-mobile-submenu a::before {
          content: "" !important;
          position: absolute !important;
          top: 50% !important;
          left: 8px !important;

          display: block !important;
          width: 8px !important;
          height: 1px !important;

          background: #29d4f6 !important;
          transform: translateY(-50%) !important;
        }

        .jmd-mobile-submenu a:hover {
          color: #ffffff !important;
          padding-left: 34px !important;
        }

        /* ===================================
           TABLET AND MOBILE
        =================================== */

        @media (max-width: 900px) {
          #navbar.jmd-navbar {
            height: 76px !important;
            padding: 0 18px !important;
          }

          #navbar .jmd-desktop-nav {
            display: none !important;
          }

          #navbar .jmd-menu-button {
            display: flex !important;
          }

          #navbar .jmd-brand-logo {
            --logo-zoom: 1.75;
            width: 140px !important;
            height: 68px !important;
          }
        }

        /* ===================================
           MOBILE
        =================================== */

        @media (max-width: 600px) {
          .jmd-mobile-navigation {
            padding-top: 20px !important;
          }

          .jmd-mobile-link,
          .jmd-accordion-button {
            min-height: 64px !important;
            font-size: 20px !important;
            letter-spacing: 2px !important;
          }
        }

        /* ===================================
           SMALL MOBILE
        =================================== */

        @media (max-width: 380px) {
          #navbar.jmd-navbar {
            padding: 0 14px !important;
          }

          #navbar .jmd-brand-logo,
          .jmd-mobile-logo {
            width: 125px !important;
          }

          .jmd-mobile-header {
            padding-right: 14px !important;
            padding-left: 14px !important;
          }

          .jmd-mobile-navigation {
            padding-right: 18px !important;
            padding-left: 18px !important;
          }

          .jmd-mobile-link,
          .jmd-accordion-button {
            min-height: 59px !important;
            padding-top: 15px !important;
            padding-bottom: 15px !important;
            font-size: 17px !important;
            letter-spacing: 1.6px !important;
          }

          .jmd-mobile-submenu a {
            padding-top: 13px !important;
            padding-bottom: 13px !important;
            font-size: 13px !important;
          }
        }

        /* Hide mobile menu completely on desktop */
        @media (min-width: 901px) {
          .jmd-mobile-overlay {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}