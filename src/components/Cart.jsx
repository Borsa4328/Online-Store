export default function Cart({ cart = [], setCart = () => {}, products = [] }) {
  const total = cart.reduce((sum, item) => {
    const product = products.find((p) => p.id === item.id);
    return product ? sum + product.price * item.quantity : sum;
  }, 0);

  const updateQuantity = (id, newQty) => {
    setCart((prev) => {
      const updated = prev
        .map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
        .filter((item) => item.quantity > 0);

      localStorage.setItem("cart", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">🛒 Корзина</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Ваша корзина пуста</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => {
            const product = products.find((p) => p.id === item.id);
            if (!product) return null;

            return (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white p-3 rounded-lg shadow"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded-md"
                />

                <div className="flex-1 px-3">
                  <h3 className="font-semibold text-gray-800">{product.name}</h3>
                  <p className="text-sm text-gray-500">
                    {product.price} ₽ × {item.quantity} ={" "}
                    <span className="font-semibold text-gray-800">
                      {product.price * item.quantity} ₽
                    </span>
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="bg-lime-400 hover:bg-lime-500 text-white w-8 h-8 rounded-full"
                  >
                    −
                  </button>
                  <span className="w-6 text-center font-semibold">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="bg-lime-400 hover:bg-lime-500 text-white w-8 h-8 rounded-full"
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })}

          <div className="flex justify-between items-center border-t pt-4 font-bold text-lg">
            <span>Итого:</span>
            <span>{total} ₽</span>
          </div>
        </div>
      )}
    </div>
  );
}