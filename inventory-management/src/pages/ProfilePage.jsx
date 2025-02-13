import { useState } from "react";

const ProfilePage = () => {
  // Sample user data (Replace with real user data from backend)
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    address: "123 Street, New Delhi, India",
  });

  // Sample order history (Replace with real data from API)
  const [orders, setOrders] = useState([
    { id: 1, item: "Laptop", price: 1200, date: "2024-02-10", status: "Delivered" },
    { id: 2, item: "Headphones", price: 200, date: "2024-01-28", status: "Shipped" },
    { id: 3, item: "Smartphone", price: 800, date: "2024-01-15", status: "Delivered" },
  ]);

  return (
    <div className="p-8 pt-20 bg-gray-100 min-h-screen flex justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Profile</h1>

        {/* User Information */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">User Information</h2>
          <p className="text-gray-600"><strong>Name:</strong> {user.name}</p>
          <p className="text-gray-600"><strong>Email:</strong> {user.email}</p>
          <p className="text-gray-600"><strong>Address:</strong> {user.address}</p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Edit Profile
          </button>
        </div>

        {/* Order History */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700">Order History</h2>
          <div className="mt-4">
            {orders.length > 0 ? (
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-200 text-gray-700">
                    <th className="p-3 border">Order ID</th>
                    <th className="p-3 border">Item</th>
                    <th className="p-3 border">Price (₹)</th>
                    <th className="p-3 border">Date</th>
                    <th className="p-3 border">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id} className="text-center border-b">
                      <td className="p-3 border">{order.id}</td>
                      <td className="p-3 border">{order.item}</td>
                      <td className="p-3 border">₹{order.price}</td>
                      <td className="p-3 border">{order.date}</td>
                      <td className={`p-3 border ${order.status === "Delivered" ? "text-green-600" : "text-yellow-600"}`}>
                        {order.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-gray-600">No orders yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
