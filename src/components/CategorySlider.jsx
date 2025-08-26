import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function CategorySlider({ categories }) {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Автопрокрутка каждые 5 сек
  useEffect(() => {
    const interval = setInterval(() => {
      if (!sliderRef.current) return;
      const nextIndex = (activeIndex + 1) % categories.length;
      setActiveIndex(nextIndex);
      sliderRef.current.scrollTo({
        left: nextIndex * sliderRef.current.clientWidth,
        behavior: "smooth",
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex, categories.length]);

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const newIndex = Math.round(sliderRef.current.scrollLeft / sliderRef.current.clientWidth);
    setActiveIndex(newIndex);
  };

  const goToSlide = (index) => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollTo({
      left: index * sliderRef.current.clientWidth,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  return (
    <section className="relative mb-12 overflow-hidden rounded-lg shadow-lg">
      <div
        ref={sliderRef}
        className="flex overflow-x-scroll scroll-smooth snap-x snap-mandatory no-scrollbar"
        onScroll={handleScroll}
      >
        {categories.map((cat, i) => (
          <NavLink
            key={i}
            to={`/catalog?category=${encodeURIComponent(cat.name)}`}
            className="min-w-full relative snap-center select-none"
          >
            <img src={cat.img} alt={cat.name} className="w-full h-60 object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-2xl font-bold">
              {cat.name}
            </div>
          </NavLink>
        ))}
      </div>
      {/* Точки */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {categories.map((_, idx) => (
          <span
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              idx === activeIndex ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}