// import { Navbar2 } from "@/app/Components/Navbar2";
// import { client } from "@/sanity/lib/client";
// import Image from "next/image";
// import React from "react";

// export default async function productdetail({ params }: { params: { _id: string } }) {
//   const { _id } = params;

//   // Check if ID exists
//   if (!_id) {
//     return <div className="text-center text-red-500 mt-10">Error: No ID found in URL.</div>;
//   }

//   // Fetch product data
//   const product = await client.fetch(
//     `*[_type == 'product' && _id == $_id][0] {
//       _id,
//       name,
//       imagePath,
//       description,
//       price,
//       category,
//       stockLevel,
//       isFeaturedProduct
//     }`,
//     { _id }
//   );

//   // Handle case where no product is found
//   if (!product) {
//     return <div className="text-center text-red-500 mt-10">Product not found.</div>;
//   }

//   return (
//     <div>
//       <Navbar2/>
      
//       <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
     
     
//       {/* Product Image */}
//       {product.imagePath ? (
//         <div className="relative w-full h-72 mb-6">
//           <Image
//             src={product.imagePath}
//             alt={product.name || "Product Image"}
//             layout="fill"
//             objectFit="cover"
//             className="rounded-lg"
//           />
//         </div>
//       ) : (
//         <div className="w-full h-72 bg-gray-200 flex items-center justify-center text-gray-500 rounded-lg mb-6">
//           No Image Available
//         </div>
//       )}

//       {/* Product Details Section */}
//       <h1 className="text-2xl font-bold text-gray-800 mb-4">{product.name}</h1>

//       <div className="space-y-4">
//         <h2 className="text-lg font-semibold text-gray-700">Product Details</h2>
//         <p className="text-gray-600">{product.description}</p>
//         <p className="text-lg font-semibold text-green-600">Price: Rs. {product.price}</p>
//         <p className="text-gray-500">Category: {product.category}</p>
//         <p className="text-gray-500">Stock Level: {product.stockLevel}</p>
//         <p className="text-gray-500">
//           Featured Product: {product.isFeaturedProduct ? "Yes" : "No"}
//         </p>
//       </div>
//     </div>
//     </div>
//   );
// }


import { Navbar2 } from "@/app/Components/Navbar2";
import { client } from "@/sanity/lib/client";
import ProductDetail from "@/app/Components/NewProductDetail"; // Import ProductDetail component
import React from "react";


export default async function productdetail({ params }: { params: { _id: string } }) {
  const { _id } = params;

  // Check if ID exists
  if (!_id) {
    return <div className="text-center text-red-500 mt-10">Error: No ID found in URL.</div>;
  }

  // Fetch product data from the database using _id
  const product = await client.fetch(
    `*[_type == 'product' && _id == $_id][0] {
      _id,
      name,
      imagePath,
      description,
      price,
      category,
      stockLevel,
      isFeaturedProduct
    }`,
    { _id }
  );

  // Handle case where no product is found
  if (!product) {
    return <div className="text-center text-red-500 mt-10">Product not found.</div>;
  }

  return (
    <div>
      <Navbar2 />
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
        <ProductDetail product={product} />
      </div>
    </div>
  );
}
