import ProductCard from "./ProductCard.jsx";
import { useState, useEffect } from "react";

export default function ProductList({ products }) {
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem("favorites")) || []);
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          favorites={favorites}
          setFavorites={setFavorites}
          cart={cart}
          setCart={setCart}
        />
      ))}
    </div>
  );
}