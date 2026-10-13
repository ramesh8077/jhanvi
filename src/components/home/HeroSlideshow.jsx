import React, { useState, useEffect } from 'react';

const heroSlides = [
  {
    category: "Jhanvi Mishra Design",
    title: "Farm Houses",
    image: "/assets/images/farmhouse/drawing1.png"
  },
  {
    category: "Jhanvi Mishra Design",
    title: "Restaurants",
    image: "/assets/images/restaurants/rest_michigan_taps_41.png"
  },
  {
    category: "Jhanvi Mishra Design",
    title: "Villas",
    image: "/assets/images/residence/luxury_villa_exterior.jpeg"
  },
  {
    category: "Jhanvi Mishra Design",
    title: "Hospitals",
    image: "/assets/images/hospital/final_render_1.jpg"
  },
  {
    category: "Jhanvi Mishra Design",
    title: "Offices",
    image: "/assets/images/offices/minda_office_10.jpg"
  },
  {
    category: "Jhanvi Mishra Design",
    title: "Residences",
    image: "/assets/images/residence/resi_7.jpg"
  }
];

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="hero-slideshow" id="hero">
      <div className="slides-container">
        {heroSlides.map((slide, idx) => (
          <div 
            key={idx} 
            className={`slide ${idx === currentSlide ? 'active' : ''}`}
          >
            <div 
              className="slide-bg" 
              style={{ backgroundImage: `url('${slide.image}')` }}
            ></div>
            <div className="slide-overlay"></div>
            <div className="slide-content">
              <span className="slide-category">{slide.category}</span>
              <h2 className="slide-title">{slide.title}</h2>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Dots */}
      <div className="slide-nav">
        {heroSlides.map((_, idx) => (
          <div 
            key={idx}
            className={`slide-dot ${idx === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(idx)}
          ></div>
        ))}
      </div>
      
      <div className="scroll-indicator">
        <span>Scroll to Explore</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
