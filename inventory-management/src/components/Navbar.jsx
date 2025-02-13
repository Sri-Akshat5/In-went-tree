import { Link } from "react-router-dom";
import { FaBox, FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center fixed top-0 left-0 right-0 shadow-lg z-50">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold flex items-center space-x-2">
        <FaBox className="text-blue-400" />
        <span>In-went-tree</span>
      </Link>

      {/* Navigation Links */}
      <div className="flex space-x-6">
        <Link to="/" className="hover:text-blue-400 transition">Products</Link>
        <Link to="/cart" className="hover:text-blue-400 transition flex items-center space-x-1">
          <FaShoppingCart />
          <span>Cart</span>
        </Link>
        <Link to="/profile" className="hover:text-blue-400 transition flex items-center space-x-1">
          <FaUser />
          <span>Profile</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
