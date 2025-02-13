import { useState } from "react";
import { FaTrash } from "react-icons/fa";

const CartPage = () => {
  // Sample cart state (Replace with actual state from Context or Redux)
  const [cart, setCart] = useState([
    { id: 1, name: "Laptop", price: 1200, quantity: 1 },
    { id: 2, name: "Headphones", price: 200, quantity: 2 },
  ]);

  // Function to increase quantity
  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Function to decrease quantity
  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Function to remove item from cart
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Calculate total cost
  const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="p-8 pt-20 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600 text-lg">Your cart is empty.</p>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b py-4"
            >
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-500">₹{item.price} each</p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
                >
                  -
                </button>
                <span className="text-lg font-semibold">{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
                >
                  +
                </button>
              </div>

              {/* Item Total Price */}
              <p className="text-lg font-semibold">₹{item.price * item.quantity}</p>

              {/* Remove Button */}
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTrash />
              </button>
            </div>
          ))}

          {/* Cart Total */}
          <div className="flex justify-between items-center mt-6 text-xl font-semibold">
            <span>Total:</span>
            <span>₹{totalCost}</span>
          </div>

          {/* Checkout Button */}
          <button className="w-full bg-blue-600 text-white py-3 mt-4 rounded-lg hover:bg-blue-700 transition text-lg">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
