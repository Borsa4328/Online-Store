import { useLocation } from "react-router-dom";
import { products } from "../data/Products.js";
import ProductList from "../components/ProductList.jsx";

export default function ProductsByCategory() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");

  const filteredProducts = products.filter(p => p.category === category);

  return (
    <div className="pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-black mb-6">{category}</h1>
      {filteredProducts.length > 0 ? (
        <ProductList products={filteredProducts} />
      ) : (
        <p className="text-gray-600">Товары в этой категории пока отсутствуют.</p>
      )}
    </div>
  );
}