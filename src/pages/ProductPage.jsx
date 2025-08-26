import { useParams } from "react-router-dom";
import { products } from "../data/Products.js";

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <p>Продукт не найден</p>;

  return (
    <div className="pt-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <img src={product.img} alt={product.name} className="w-full h-64 object-cover rounded-lg mb-4" />
      <p className="text-xl font-semibold mb-2">{product.price} $</p>
      <p className="text-gray-700">Описание продукта здесь...</p>
    </div>
  );
}