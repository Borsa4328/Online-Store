import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

const categories = [
  { name: "Фрукты", img: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=800" },
  { name: "Овощи", img: "https://images.unsplash.com/photo-1623445077362-5df4cf0a1d2e?w=800" },
  { name: "Напитки", img: "https://images.unsplash.com/photo-1585238342028-5c79b2c7f8af?w=800" },
  { name: "Орехи и сухофрукты", img: "https://images.unsplash.com/photo-1598514981701-6a22c0d0be3a?w=800" },
  { name: "Молочные продукты", img: "https://images.unsplash.com/photo-1617196036906-bbd03c7abf07?w=800" },
  { name: "Выпечка", img: "https://images.unsplash.com/photo-1612423281995-d5557d9ad3de?w=800" },
  { name: "Соусы и приправы", img: "https://images.unsplash.com/photo-1612423281998-2ed6c2f2f182?w=800" },
];

const products = [
  { id: 1, name: "Яблоки", price: "5.00", img: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=600" },
  { id: 2, name: "Бананы", price: "3.50", img: "https://images.unsplash.com/photo-1623445077362-5df4cf0a1d2e?w=600" },
  { id: 3, name: "Морковь", price: "2.00", img: "https://images.unsplash.com/photo-1585238342028-5c79b2c7f8af?w=600" },
  { id: 4, name: "Апельсины", price: "4.50", img: "https://images.unsplash.com/photo-1617196036906-bbd03c7abf07?w=600" },
  { id: 5, name: "Молоко", price: "2.50", img: "https://images.unsplash.com/photo-1612423281995-d5557d9ad3de?w=600" },
  { id: 6, name: "Хлеб", price: "3.00", img: "https://images.unsplash.com/photo-1612423281998-2ed6c2f2f182?w=600" },
  { id: 7, name: "Миндаль", price: "6.00", img: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=600" },
];

export default function HomePage() {
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
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  // Свайп через scroll
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
    <div className="pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Scroll-based Carousel */}
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

      {/* Популярные продукты */}
      <section>
        <h2 className="text-3xl font-bold text-black mb-6">Популярные продукты</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
              <img src={product.img} alt={product.name} className="w-full h-36 object-cover" />
              <div className="p-3 flex flex-col gap-1">
                <h3 className="text-base font-semibold text-gray-800">{product.name}</h3>
                <p className="text-gray-600 font-medium">${product.price}</p>
                <NavLink
                  to={`/product/${product.id}`}
                  className="mt-auto bg-green-600 text-white text-center py-1 rounded-md hover:bg-green-700 transition text-sm"
                >
                  В корзину
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}