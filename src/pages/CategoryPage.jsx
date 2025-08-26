import { categories } from "../data/Products.js";
import CategoryCard from "../components/CategoryCard.jsx";

export default function CategoryPage() {
  return (
    <div className="pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-black mb-6">Категории</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <CategoryCard key={cat.name} category={cat} />
        ))}
      </div>
    </div>
  );
}