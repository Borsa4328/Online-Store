import { NavLink } from "react-router-dom";

export default function CategoryCard({ category }) {
  return (
    <NavLink
      to={`/catalog/products?category=${encodeURIComponent(category.name)}`}
      className="relative overflow-hidden rounded-lg shadow hover:shadow-lg transition"
    >
      <img src={category.img} alt={category.name} className="w-full h-40 object-cover" />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-bold text-xl">
        {category.name}
      </div>
    </NavLink>
  );
}