import { useState } from "react";

function FilterBar({ products, setFilteredProducts }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="w-full mb-4">
      <input
        type="text"
        placeholder="Поиск товаров..."
        value={searchQuery}
        onChange={handleSearch}
        className="w-full p-2 border rounded-xl outline-none focus:ring-2 focus:ring-green-400"
      />
    </div>
  );
}

export default FilterBar;