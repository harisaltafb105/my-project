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
