import React from 'react';

const Cart = ({ carts, setCarts }) => {

  const handleRemove = (id) => {
    const updated = carts.filter(item => item.id !== id);
    setCarts(updated);
  };

  return (
    <div className="px-20 pt-10 pb-20">
      {carts.length > 0 ? (
        carts.map(item => (
          <div key={item.id} className="p-4 border shadow mb-4">
            <h2 className="font-bold pb-2">Your Cart</h2>

            <div className="flex gap-4 items-center">
              <img src={item.icon} alt={item.name} className="w-16" />

              <div>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>

              <button
                onClick={() => handleRemove(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>

            <button className="mt-3 w-full bg-indigo-500 text-white py-2 rounded-3xl">
              Checkout
            </button>
          </div>
        ))
      ) : (
        <p className="text-center">🛒 কোনো আইটেম নেই</p>
      )}
    </div>
  );
};

export default Cart;