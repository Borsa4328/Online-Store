import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

export default function ProductCard({
  product,
  favorites = [],
  setFavorites = () => {},
  cart = [],
  setCart = () => {},
}) {
  const cartArr = Array.isArray(cart) ? cart : [];
  const existingItem = cartArr.find((it) => it.id === product.id);
  const [quantity, setQuantity] = useState(existingItem ? existingItem.quantity : 0);

  const [showNumber, setShowNumber] = useState(quantity > 0);
  const timerRef = useRef(null);

  // избранное
  const isFavorite = favorites.some((f) => f.id === product.id);
  const toggleFavorite = (e) => {
    e.preventDefault();
    setFavorites((prev) => {
      const exists = prev.some((f) => f.id === product.id);
      const newFavs = exists
        ? prev.filter((f) => f.id !== product.id)
        : [...prev, product];
      try {
        localStorage.setItem("favorites", JSON.stringify(newFavs));
      } catch {}
      return newFavs;
    });
  };

  // синхронизация корзины
  useEffect(() => {
    if (typeof setCart !== "function") return;
    setCart((prev) => {
      const prevArr = Array.isArray(prev) ? prev : [];
      const without = prevArr.filter((it) => it.id !== product.id);
      const newCart = quantity > 0 ? [...without, { id: product.id, quantity }] : without;
      try {
        localStorage.setItem("cart", JSON.stringify(newCart));
      } catch {}
      return newCart;
    });
  }, [quantity, product.id, setCart]);

  const startTimer = (newQuantity) => {
    clearTimeout(timerRef.current);
    if (newQuantity > 0) {
      setShowNumber(true);
      timerRef.current = setTimeout(() => {
        setShowNumber(false);
      }, 5000);
    } else {
      setShowNumber(false);
    }
  };

  const addToCart = (e) => {
    e.preventDefault();
    setQuantity((q) => {
      const newQ = q + 1;
      startTimer(newQ); // фикс — сразу передаём новое значение
      return newQ;
    });
  };

  const removeFromCart = (e) => {
    e.preventDefault();
    setQuantity((q) => {
      const newQ = Math.max(0, q - 1);
      startTimer(newQ);
      return newQ;
    });
  };

  return (
    <NavLink
      to={`/product/${product.id}`}
      className="relative block bg-white rounded-2xl overflow-hidden transition-all"
    >
      {/* Фото */}
      <div className="relative w-full aspect-square overflow-hidden">
        <img
          src={product.img}
          alt={product.name}
          className={`w-full h-full object-cover rounded-2xl transition ${
            showNumber ? "blur-sm" : ""
          }`}
        />

        {/* Цифра поверх картинки */}
        <AnimatePresence>
          {showNumber && quantity > 0 && (
            <motion.div
              key={quantity}
              initial={{ opacity: 0, scale: 0.6, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-gray-700"
            >
              {quantity}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Сердечко */}
        <button
          onClick={toggleFavorite}
          className="absolute top-2 right-2 p-2 bg-white/70 rounded-full shadow-md"
        >
          <Heart
            size={20}
            className={isFavorite ? "text-red-500 fill-red-500" : "text-gray-500"}
          />
        </button>
      </div>

      {/* Название + описание */}
      <div className="px-2 py-3 pb-16">
        <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
          {product.name}
        </h3>
        {product.desc && (
          <p className="text-xs text-gray-500 mt-1">{product.desc}</p>
        )}
      </div>

      {/* Нижняя панель */}
      <div className="absolute bottom-2 left-0 w-full flex justify-between items-center px-3">
        <span className="font-semibold text-gray-900">{product.price} ₽</span>

        {quantity === 0 ? (
          <button
            onClick={addToCart}
            className="bg-lime-200 hover:bg-lime-300 text-lime-700 font-bold rounded-full w-9 h-9 flex items-center justify-center transition"
          >
            +
          </button>
        ) : (
          <div className="flex items-center bg-lime-200 rounded-full">
            <button
              onClick={removeFromCart}
              className="px-3 text-lime-700 font-bold text-lg"
            >
              −
            </button>
            <button
              onClick={addToCart}
              className="px-3 text-lime-700 font-bold text-lg"
            >
              +
            </button>
          </div>
        )}
      </div>
    </NavLink>
  );
}