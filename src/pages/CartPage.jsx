import products from "../data/Products.js";

export default function CartPage({ cart, setCart }) {
  // соединяем cart (id+quantity) с продуктами
  const cartWithDetails = cart.map((item) => {
    const product = products.find((p) => p.id === item.id);
    return { ...product, quantity: item.quantity };
  });

  const total = cartWithDetails.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Корзина</h1>

      {cartWithDetails.length === 0 ? (
        <p>Ваша корзина пуста 🛒</p>
      ) : (
        <div className="space-y-4">
          {cartWithDetails.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white p-3 rounded-lg shadow"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-gray-500">{item.price} ₽</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-semibold">{item.quantity} шт</span>
                <span className="font-bold">{item.price * item.quantity} ₽</span>
              </div>
            </div>
          ))}

          <div className="text-right font-bold text-lg mt-4">
            Итого: {total} ₽
          </div>
        </div>
      )}
    </div>
  );
}