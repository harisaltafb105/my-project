"use client";
import React, { useState } from "react";
import { useCart } from "./CartContext";
import Image from "next/image";

const ProductDetail = ({ product }: { product: any }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (!product._id) {
      console.error("Product ID is missing!");
      return;
    }
    addToCart({ ...product, quantity });
  };

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="max-w-screen-md mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-8">Product Detail</h1>

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

      <div className="mt-6 text-center">
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <p className="text-xl text-gray-600 mt-2">{product.description}</p>
        <p className="text-2xl font-bold mt-4">Price: Rs. {product.price}</p>
      </div>

      <div className="mt-4 flex justify-center items-center">
        <button
          onClick={decreaseQuantity}
          className="px-4 py-2 bg-gray-300 text-black rounded-l-lg"
        >
          -
        </button>
        <span className="px-6 py-2">{quantity}</span>
        <button
          onClick={increaseQuantity}
          className="px-4 py-2 bg-gray-300 text-black rounded-r-lg"
        >
          +
        </button>
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={handleAddToCart}
          className="px-6 py-3 bg-black text-white rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
