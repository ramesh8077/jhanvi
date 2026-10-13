import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRightLong, FaLocationDot } from 'react-icons/fa6';
import { projectCategories, categorizedProjects } from '../../data/projectsData';

export default function FeaturedProjectsGrid() {
  const sectionRef = useRef(null);
  // Dynamically pick 1 project from each of the 7 distinct categories
  const diverseCategories = ["residential", "farmhouse", "offices", "commercial", "restaurants", "hospital", "scenic"];
  const displayedProjects = diverseCategories
    .map(cat => categorizedProjects.find(p => p.category === cat))
    .filter(Boolean)
    .slice(0, 7);

  // SCROLL ANIMATION: Clean 3D stacked cards animation
  useEffect(() => {
    let raf;

    const animate = () => {
      const STICKY_TOP = window.innerWidth <= 1024 ? 140 : 190; // Match CSS sticky top values

      const cards = document.querySelectorAll('.fp-card');
      const titleBar = document.querySelector('.fp-sticky-title');
      const ctaBtn = document.querySelector('.fp-bottom-cta');

      // 1. HIDE / UNSTICK PROJECTS HEADER WHEN CTA BUTTON ARRIVES AT BOTTOM
      if (titleBar && ctaBtn) {
        const ctaRect = ctaBtn.getBoundingClientRect();
        if (ctaRect.top < 280) {
          const titleFade = Math.max(0, (ctaRect.top - 120) / 160);
          titleBar.style.opacity = titleFade.toString();
          titleBar.style.transform = `translateY(${- (1 - titleFade) * 40}px)`;
          titleBar.style.pointerEvents = titleFade < 0.2 ? 'none' : 'auto';
        } else {
          titleBar.style.opacity = '1';
          titleBar.style.transform = 'translateY(0)';
          titleBar.style.pointerEvents = 'auto';
        }
      }

      // 2. PERFECT CARD CLIPPING & SCALING
      if (cards.length) {
        cards.forEach((card, i) => {
          const rect = card.getBoundingClientRect();
          const next = cards[i + 1];

          const clipTop = STICKY_TOP - rect.top;
          if (clipTop > 0) {
            card.style.clipPath = `inset(${clipTop}px 0 0 0)`;
          } else {
            card.style.clipPath = 'none';
          }

          card.style.opacity = '1';
          card.style.pointerEvents = 'auto';

          if (!next) {
            card.style.transform = 'scale(1)';
            card.style.filter = 'brightness(1)';
            return;
          }

          const nextRect = next.getBoundingClientRect();
          const distance = window.innerHeight * 0.35;

          const overlap = Math.max(0, Math.min(1,
            1 - (nextRect.top - STICKY_TOP) / distance
          ));

          const scale = 1 - overlap * 0.05;
          const brightness = 1 - overlap * 0.15;

          card.style.transform = `scale(${scale})`;
          card.style.filter = `brightness(${brightness})`;
        });
      }
    };

    const onScroll = () => { raf = requestAnimationFrame(animate); };
    window.addEventListener('scroll', onScroll, { passive: true });
    animate();

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="fp-section" id="featuredProjects" ref={sectionRef}>
    </section>
  );
}
