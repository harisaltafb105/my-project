"use client"; // Ensures client-side rendering

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "../Components/SearchBar"; // Import the SearchBar component

interface Product {
  _id: string;
  name: string;
  imagePath: string;
  price: string;
  category: string;
}

export default function ProductListPage({ products }: { products: Product[] }) {
  const [searchTerm, setSearchTerm] = useState(""); // Local state for search input
  const [filteredProducts, setFilteredProducts] = useState(products); // State for filtered products

  useEffect(() => {
    // Filter products based on the search term
    const results = products.filter((product: Product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
  }, [searchTerm, products]);

  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <h1 className="text-3xl font-bold text-center mt-8 mb-9">Products</h1>

      {/* Search Bar */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mt-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product._id} className="w-full max-w-[240px] mx-auto">
              {/* Product Image */}
              {!product.imagePath ? (
                <p className="text-red-500 text-center">No Image Found</p>
              ) : (
                <div className="overflow-hidden rounded-lg border border-gray-200 aspect-square">
                  <Image
                    src={product.imagePath}
                    alt={product.name || "Product Image"}
                    width={240}
                    height={240}
                    layout="responsive"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL="/placeholder.png"
                  />
                </div>
              )}

              {/* Product Details */}
              <p className="mt-4 text-center font-medium">{product.name}</p>
              <p className="text-center text-[20px] font-medium mt-1">
                Rs. {product.price}
              </p>
              <p className="text-center text-gray-500 text-sm mt-1">
                {product.category}
              </p>

              {/* Add to Cart Button */}
              <Link href={`/product/${product._id}`}>
                <button className="w-full bg-black text-white py-2 px-4 mt-4 rounded-lg hover:bg-gray-800 transition">
                  Add to Cart
                </button>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
}
