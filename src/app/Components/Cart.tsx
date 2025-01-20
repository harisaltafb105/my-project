// src/components/Cart.tsx
// context/CartContext.tsx
"use client";
import React from "react";
import { useCart } from "./CartContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  if (cartItems.length === 0) {
    return null; // Don't display the cart if it's empty
  }

  return (
    <div className="fixed right-0 top-0 w-[300px] bg-white shadow-lg p-4">
      <h2 className="text-2xl font-bold mb-4">Cart Summary</h2>
      {cartItems.map((item) => (
        <div key={item._id} className="mb-4">
          <p className="font-bold">{item.name}</p>
          <p>Price: Rs. {item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Total: Rs. {item.price * item.quantity}</p>
          <button
            onClick={() => removeFromCart(item._id)}
            className="text-red-500 hover:underline mt-2"
          >
            Remove
          </button>
        </div>
      ))}
      <hr />
      <div className="mt-4">
        <p className="font-bold">
          Grand Total: Rs.{" "}
          {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
        </p>
      </div>
    </div>
  );
};

export default Cart;
