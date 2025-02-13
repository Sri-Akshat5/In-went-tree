import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-md p-5 bg-white hover:shadow-lg transition-transform transform hover:scale-105">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full object-cover rounded-md"
      />

      {/* Product Info */}
      <div className="mt-4">
        <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
        <p className="text-lg text-blue-500 font-bold">₹{product.price}</p>
      </div>

      {/* Stock Status */}
      <div className="mt-2">
        {product.stock > 0 ? (
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
            In Stock
          </span>
        ) : (
          <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
            Out of Stock
          </span>
        )}
      </div>

      {/* View Details Button */}
      <Link
        to={`/product/${product.id}`}
        className="block text-center bg-blue-600 text-white mt-4 px-4 py-2 rounded-md hover:bg-blue-700 transition"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
