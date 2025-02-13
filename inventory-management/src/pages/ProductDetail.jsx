import { useParams } from "react-router-dom";
import products from "../data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p className="text-center text-red-500 text-lg mt-10">Product not found.</p>;
  }

  return (
    <div className="p-6 pt-20 bg-gray-100 min-h-screen flex justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full flex flex-col md:flex-row">
        {/* Product Image */}
        <div className="md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="h-80 w-full object-cover rounded-md shadow-sm"
          />
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 md:pl-6 mt-5 md:mt-0">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-lg text-blue-500 font-semibold mt-2">₹{product.price}</p>

          {/* Stock Status */}
          <div className="mt-3">
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

          {/* Product Description */}
          <p className="text-gray-600 mt-4">{product.description || "No description available."}</p>

          {/* Add to Cart Button */}
          <button className="bg-green-600 text-white px-6 py-3 mt-5 rounded-lg w-full md:w-auto hover:bg-green-700 transition text-lg">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
