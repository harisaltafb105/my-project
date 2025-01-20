import React from "react";
import Image from "next/image";

export default function ProductDetail({ product }: { product: any }) {
  if (!product) {
    return <div className="text-center text-red-500">Product not found!</div>;
  }

  return (
    <div className="max-w-screen-md mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-8">
        Product Detail
      </h1>

      {/* Product Image */}
      <div className="flex justify-center">
        {product.imagePath ? (
          <div className="overflow-hidden rounded-lg border border-gray-200 aspect-square max-w-[400px]">
            <Image
              src={product.imagePath}
              alt={product.name || "Product Image"}
              width={400}
              height={400}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        ) : (
          <p className="text-red-500 text-center">Image not available</p>
        )}
      </div>

      {/* Product Info */}
      <div className="mt-6 text-center">
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <p className="text-xl text-gray-600 mt-2">{product.description}</p>
        <p className="text-2xl font-bold mt-4">Price: Rs. {product.price}</p>
        <p className="text-gray-500 mt-2">Category: {product.category}</p>
        <p className="text-gray-500 mt-2">Stock Level: {product.stockLevel}</p>
        {product.isFeaturedProduct && (
          <p className="text-green-500 mt-2 font-bold">
            Featured Product
          </p>
        )}
      </div>
    </div>
  );
}
