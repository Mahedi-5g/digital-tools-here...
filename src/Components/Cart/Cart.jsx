
import { toast } from 'react-toastify';

const Cart = ({ carts, setCarts }) => {

  const handleRemove = (id) => {
    const updated = carts.filter(item => item.id !== id);
    setCarts(updated);
    toast("Item removed from cart!")
  };


  const total = carts.reduce((sum, item) => sum + item.price, 0);
  const handlePayment =()=>{
    setCarts([]);
    toast.success("Payment Successful!")
  }

  return (
    <div className="px-20 pt-10 pb-20 ">
      {carts.length > 0 ? (
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Your Cart</h2>

          {carts.map(item => (
            <div key={item.id} className="flex justify-between items-center shadow-lg py-5 pr-2">
              <div className="flex items-center gap-4 p-3">
                <img src={item.icon} alt={item.name} className="w-12 h-12" />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              </div>
              <button
                onClick={() => handleRemove(item.id)}
                className="btn text-pink-500 pr-4"
              >
                Remove
              </button>
            </div>
          ))}


          <div className="flex justify-between items-center mt-6 text-lg font-semibold px-5">
            <span>Total:</span>
            <span>${total}</span>
          </div>


          <button onClick={handlePayment} className="mt-6 w-full bg-purple-600 text-white py-3 rounded-lg text-lg font-bold">
            Proceed To Checkout
          </button>
        </div>
      ) : (
        <p className="text-center text-gray-700 font-bold text-xl">No items here.</p>
      )}
    </div>
  );
};

export default Cart;
