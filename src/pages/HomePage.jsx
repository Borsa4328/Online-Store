import { useState } from "react";
import { categories, products } from "../data/Products.js";
import CategorySlider from "../components/CategorySlider.jsx";
import ProductList from "../components/ProductList.jsx";

export default function HomePage() {
  const [favorites, setFavorites] = useState([]); // <-- состояние избранного

  return (
    <div className="pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Слайдер категорий */}
      <CategorySlider categories={categories} />

      {/* Популярные продукты */}
      <section>
        <h2 className="text-3xl font-bold text-black mb-6">Популярные продукты</h2>
        <ProductList
          products={products}
          favorites={favorites}      // <-- передаем сюда
          setFavorites={setFavorites} // <-- передаем сюда
        />
      </section>
    </div>
  );
}