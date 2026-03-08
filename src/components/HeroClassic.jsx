export function HeroClassic({
  src = '/hero-classic.png',
  alt = 'Hero image',
  overlayText = 'CLASSIC',
}) {
  return (
    <section className="hero-classic relative overflow-hidden" aria-label={alt}>
      <div className="hero-classic-bg" />
      <img
        src={src}
        alt={alt}
        className="hero-classic-img"
      />
      <div className="hero-classic-overlay" aria-hidden>
        <span className="hero-classic-word hero-classic-word-1">{overlayText}</span>
        <span className="hero-classic-word hero-classic-word-2">{overlayText}</span>
        <span className="hero-classic-word hero-classic-word-3">{overlayText}</span>
      </div>
    </section>
  );
}

import { useEffect, useState } from 'react';

export function ImageGallery({ images = [] }) {
  const [validImages, setValidImages] = useState([]);

  useEffect(() => {
    let ignore = false;
    // check each image URL with a HEAD request; keep ones that respond OK
    Promise.all(
      images.map((img) =>
        fetch(img, { method: 'HEAD' })
          .then((res) => (res.ok ? img : null))
          .catch(() => null)
      )
    ).then((results) => {
      if (!ignore) setValidImages(results.filter(Boolean));
    });
    return () => {
      ignore = true;
    };
  }, [images]);

  if (validImages.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
      {validImages.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt="Gallery image"
          className="w-full h-auto object-cover rounded shadow"
        />
      ))}
    </div>
  );
}
