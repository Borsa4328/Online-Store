import { useContext } from "react";
import { SearchContext } from "../context/SearchContext.jsx";
import { products } from "../data/Products.js";
import ProductCard from "../components/ProductCard.jsx";

function ShopPage() {
  const { searchQuery } = useContext(SearchContext);

  // фильтруем товары по поиску
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Заголовок */}
      <h1 className="text-2xl font-bold mb-6">
        {searchQuery
          ? `Результаты по запросу: "${searchQuery}"`
          : "Все товары"}
      </h1>

      {/* Если ничего не найдено */}
      {filteredProducts.length === 0 ? (
        <p className="text-gray-500">Товаров не найдено 😢</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ShopPage;