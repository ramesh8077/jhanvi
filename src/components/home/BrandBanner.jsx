import React from 'react';
import './BrandBanner.css';

// Import all images from the brands directory dynamically
const brandImagesRaw = import.meta.glob('../../assets/brands/*.{png,jpg,jpeg,svg,webp}', { eager: true });
const brandImages = Object.values(brandImagesRaw).map((mod) => mod.default);

export default function BrandBanner() {
  // If the user hasn't added images yet, we show some placeholders so the banner still works visually.
  const displayItems = brandImages.length > 0
    ? brandImages
    : [
      'https://placehold.co/200x80/dedcdd/555555?text=Client+1',
      'https://placehold.co/200x80/dedcdd/555555?text=Client+2',
      'https://placehold.co/200x80/dedcdd/555555?text=Client+3',
      'https://placehold.co/200x80/dedcdd/555555?text=Client+4',
      'https://placehold.co/200x80/dedcdd/555555?text=Client+5',
      'https://placehold.co/200x80/dedcdd/555555?text=Client+6',
      'https://placehold.co/200x80/dedcdd/555555?text=Client+7',
    ];

  // We duplicate the array to create a seamless infinite marquee effect
  const duplicatedItems = [...displayItems, ...displayItems];

  return (
    <section className="brand-banner-section reveal visible">
      <div className="brand-banner-container">
        <div className="brand-banner-track">
          {duplicatedItems.map((src, index) => (
            <div className="brand-logo-wrapper" key={index}>
              <img src={src} alt={`Brand logo ${index + 1}`} className="brand-logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
