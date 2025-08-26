import { useState, useEffect } from "react";
import ProductList from "../components/ProductList.jsx";
import { products } from "../data/Products.js";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Загружаем избранные из localStorage
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(stored);
  }, []);

  // Фильтруем продукты по избранным
  const favoriteProducts = products.filter(p => favorites.includes(p.id));

  return (
    <div className="pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-black mb-6">Избранные товары</h1>

      {favoriteProducts.length > 0 ? (
        <ProductList
          products={favoriteProducts}
          // Прокидываем favorites и setFavorites чтобы сердечки работали и тут
        />
      ) : (
        <p className="text-gray-600">Пока нет избранных товаров.</p>
      )}
    </div>
  );
}