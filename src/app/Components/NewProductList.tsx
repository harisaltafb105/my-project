// // components/ProductList.tsx
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// export default function ProductList({ products }: { products: any[] }) {
//   return (
//     <div className="max-w-screen-xl mx-auto px-4">
//       <h1 className="text-3xl font-bold text-center mb-8">Products</h1>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mt-8">
//         {products.map((product: any) => (
//           <Link key={product._id} href={`/product/${product._id}`}>
//             <div className="w-full max-w-[240px] mx-auto">
//               {/* Check if the imagePath exists */}
//               {!product.imagePath ? (
//                 <p className="text-red-500 text-center">No Image Found</p>
//               ) : (
//                 <div className="overflow-hidden rounded-lg border border-gray-200 aspect-square">
//                   <Image
//                     src={product.imagePath}
//                     alt={product.name || "Product Image"}
//                     width={240}
//                     height={240}
//                     layout="responsive"
//                     objectFit="cover"
//                     placeholder="blur"
//                     blurDataURL="/placeholder.png"
//                   />
//                 </div>
//               )}

//               <p className="mt-4 text-center font-medium">{product.name}</p>
//               <p className="text-center text-[20px] font-medium mt-1">
//                 Rs. {product.price}
//               </p>
//               <p className="text-center text-gray-500 text-sm mt-1">
//                 {product.category}
//               </p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }
"use client"; // Ensures client-side rendering

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProductList({ products }: { products: any[] }) {
  const [searchTerm, setSearchTerm] = useState(""); // State for the search input
  const [filteredProducts, setFilteredProducts] = useState(products); // State for filtered products

  useEffect(() => {
    // Filter products based on the search term
    const results = products.filter((product: any) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
  }, [searchTerm, products]);

  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <h1 className="text-3xl font-bold text-center mt-8 mb-9">Products</h1>

      {/* Search Bar */}
      <div className="mb-8 text-center">
        <input
          type="text"
          placeholder="Search products by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mt-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product: any) => (
            <Link key={product._id} href={`/product/${product._id}`}>
              <div className="w-full max-w-[240px] mx-auto">
                {/* Check if the imagePath exists */}
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

                <p className="mt-4 text-center font-medium">{product.name}</p>
                <p className="text-center text-[20px] font-medium mt-1">
                  Rs. {product.price}
                </p>
                <p className="text-center text-gray-500 text-sm mt-1">
                  {product.category}
                </p>
              </div>
            </Link>
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
