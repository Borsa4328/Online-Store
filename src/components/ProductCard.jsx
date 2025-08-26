import { NavLink } from "react-router-dom";
import { Heart } from "lucide-react";
import { useState, useEffect } from "react";

export default function ProductCard({ product, favorites, setFavorites, cart, setCart }) {
  const liked = favorites.includes(product.id);

  const existingItem = cart.find(item => item.id === product.id);
  const [quantity, setQuantity] = useState(existingItem ? existingItem.quantity : 0);

  useEffect(() => {
    let newCart = cart.filter(item => item.id !== product.id);
    if (quantity > 0) {
      newCart.push({ id: product.id, quantity });
    }
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  }, [quantity]);

  const toggleFavorite = (e) => {
    e.preventDefault();
    let newFavorites;
    if (liked) {
      newFavorites = favorites.filter(id => id !== product.id);
    } else {
      newFavorites = [...favorites, product.id];
    }
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  const addToCart = (e) => {
    e.preventDefault();
    setQuantity(quantity + 1);
  };

  const removeFromCart = (e) => {
    e.preventDefault();
    if (quantity > 0) setQuantity(quantity - 1);
  };

  return (
    <NavLink
      to={`/product/${product.id}`}
      className="relative bg-white rounded-lg shadow hover:shadow-lg overflow-hidden transition transform hover:-translate-y-1"
    >
      {/* Сердечко */}
      <button
        onClick={toggleFavorite}
        className="absolute top-2 right-2 z-10 bg-white rounded-full p-1 shadow"
      >
        <Heart size={24} className={liked ? "text-red-500" : "text-gray-300"} />
      </button>

      <img src={product.img} alt={product.name} className="w-full h-40 object-cover" />

      <div className="p-3 pb-12">
        <h3 className="text-base font-semibold text-gray-800">{product.name}</h3>
      </div>

      {/* Кнопки корзины */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex items-center bg-lime-200 rounded-full px-2 py-1 shadow-md h-10 gap-1">
        {quantity > 0 && (
          <button
            onClick={removeFromCart}
            className="bg-red-400 hover:bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors"
          >
            -
          </button>
        )}

        <span className="font-semibold text-gray-800 text-sm text-center px-1">
          {product.price} ₽
        </span>

        <button
          onClick={addToCart}
          className="bg-lime-400 hover:bg-lime-500 text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors"
        >
          +
        </button>

        {quantity > 0 && (
          <span className="ml-1 font-semibold text-gray-800 text-sm">{quantity}</span>
        )}
      </div>
    </NavLink>
  );
}