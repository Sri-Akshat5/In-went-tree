import { useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Handle Search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    filterProducts(e.target.value, category, sortOrder);
  };

  // Handle Category Change
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    filterProducts(searchTerm, e.target.value, sortOrder);
  };

  // Handle Sorting
  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
    filterProducts(searchTerm, category, e.target.value);
  };

  // Filter & Sort Products
  const filterProducts = (search, cat, sort) => {
    let filtered = products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );

    if (cat !== "All") {
      filtered = filtered.filter((product) => product.category === cat);
    }

    if (sort === "low-to-high") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sort === "high-to-low") {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="p-6 pt-20 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Inventory Products</h1>

      {/* Search, Category & Sort Options */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full md:w-1/3 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Category Filter */}
        <select
          value={category}
          onChange={handleCategoryChange}
          className="w-full md:w-1/4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="All">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Accessories">Accessories</option>
          <option value="Furniture">Furniture</option>
        </select>

        {/* Sort Options */}
        <select
          value={sortOrder}
          onChange={handleSortChange}
          className="w-full md:w-1/4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="default">Sort By</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)
        ) : (
          <p className="text-gray-600 text-lg">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
