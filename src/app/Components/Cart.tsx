// src/components/Cart.tsx
// context/CartContext.tsx
// "use client";
// import React from "react";
// import { useCart } from "./CartContext";

// const Cart = () => {
//   const { cartItems, removeFromCart } = useCart();

//   if (cartItems.length === 0) {
//     return null; // Don't display the cart if it's empty
//   }

//   return (
//     <div className="fixed right-0 top-0 w-[300px] bg-white shadow-lg p-4">
//       <h2 className="text-2xl font-bold mb-4">Cart Summary</h2>
//       {cartItems.map((item) => (
//         <div key={item._id} className="mb-4">
//           <p className="font-bold">{item.name}</p>
//           <p>Price: Rs. {item.price}</p>
//           <p>Quantity: {item.quantity}</p>
//           <p>Total: Rs. {item.price * item.quantity}</p>
//           <button
//             onClick={() => removeFromCart(item._id)}
//             className="text-red-500 hover:underline mt-2"
//           >
//             Remove
//           </button>
//         </div>
//       ))}
//       <hr />
//       <div className="mt-4">
//         <p className="font-bold">
//           Grand Total: Rs.{" "}
//           {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Cart;


// "use client";
// import React, { useState } from "react";
// import { useCart } from "./CartContext";

// const Cart = () => {
//   const { cartItems, removeFromCart, checkout, checkoutStatus } = useCart();
//   const [shippingAddress, setShippingAddress] = useState({
//     name: "",
//     address: "",
//     city: "",
//     postalCode: "",
//     country: "",
//   });
//   const [isLoading, setIsLoading] = useState(false);

//   if (cartItems.length === 0) {
//     return <p>Your cart is empty.</p>; // Don't display the cart if it's empty
//   }

//   const handleCheckout = () => {
//     setIsLoading(true);

//     // Call the checkout method from CartContext and pass the shipping data
//     checkout(shippingAddress);

//     setIsLoading(false);
//   };

//   return (
//     <div className="fixed right-0 top-0 w-[300px] bg-white shadow-lg p-4">
//       <h2 className="text-2xl font-bold mb-4">Cart Summary</h2>
//       {cartItems.map((item) => (
//         <div key={item._id} className="mb-4">
//           <p className="font-bold">{item.name}</p>
//           <p>Price: Rs. {item.price}</p>
//           <p>Quantity: {item.quantity}</p>
//           <p>Total: Rs. {item.price * item.quantity}</p>
//           <button
//             onClick={() => removeFromCart(item._id)}
//             className="text-red-500 hover:underline mt-2"
//           >
//             Remove
//           </button>
//         </div>
//       ))}
//       <hr />
//       <div className="mt-4">
//         <p className="font-bold">
//           Grand Total: Rs.{" "}
//           {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
//         </p>
//       </div>

//       {/* Shipping Form */}
//       <div className="mt-4">
//         <h3 className="font-semibold mb-2">Shipping Information</h3>
//         <input
//           type="text"
//           placeholder="Name"
//           value={shippingAddress.name}
//           onChange={(e) => setShippingAddress({ ...shippingAddress, name: e.target.value })}
//           className="w-full p-2 mb-2 border rounded"
//         />
//         <input
//           type="text"
//           placeholder="Address"
//           value={shippingAddress.address}
//           onChange={(e) => setShippingAddress({ ...shippingAddress, address: e.target.value })}
//           className="w-full p-2 mb-2 border rounded"
//         />
//         <input
//           type="text"
//           placeholder="City"
//           value={shippingAddress.city}
//           onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })}
//           className="w-full p-2 mb-2 border rounded"
//         />
//         <input
//           type="text"
//           placeholder="Postal Code"
//           value={shippingAddress.postalCode}
//           onChange={(e) => setShippingAddress({ ...shippingAddress, postalCode: e.target.value })}
//           className="w-full p-2 mb-2 border rounded"
//         />
//         <input
//           type="text"
//           placeholder="Country"
//           value={shippingAddress.country}
//           onChange={(e) => setShippingAddress({ ...shippingAddress, country: e.target.value })}
//           className="w-full p-2 mb-2 border rounded"
//         />
//       </div>

//       {/* Checkout Button */}
//       <button
//         onClick={handleCheckout}
//         disabled={isLoading}
//         className="mt-4 bg-blue-500 text-white p-2 rounded w-full"
//       >
//         {isLoading ? "Processing..." : "Checkout"}
//       </button>

//       {/* Checkout Status */}
//       {checkoutStatus && <p className="mt-4 text-green-500">{checkoutStatus}</p>}
//     </div>
//   );
// };

// export default Cart;


// "use client";
// import React from "react";
// import { useCart } from "./CartContext";
// import { useRouter } from "next/navigation";

// const Cart = () => {
//   const { cartItems, removeFromCart } = useCart();
//   const router = useRouter();

//   if (cartItems.length === 0) {
//     return <p>Your cart is empty.</p>;
//   }

//   const handleCheckout = () => {
//     router.push("/Newcheckout");
//   };

//   return (
//     <div className="fixed right-0 top-0 w-[300px] bg-white shadow-lg p-4">
//       <h2 className="text-2xl font-bold mb-4">Cart Summary</h2>
//       {cartItems.map((item:any) => (
//         <div key={item._id} className="mb-4">
//           <p className="font-bold">{item.name}</p>
//           <p>Price: Rs. {item.price}</p>
//           <p>Quantity: {item.quantity}</p>
//           <p>Total: Rs. {item.price * item.quantity}</p>
//           <button
//             onClick={() => removeFromCart(item._id)}
//             className="text-red-500 hover:underline mt-2"
//           >
//             Remove
//           </button>
//         </div>
//       ))}
//       <hr />
//       <div className="mt-4">
//         <p className="font-bold">
//           Grand Total: Rs.{" "}
//           {cartItems.reduce((total: number, item: { price: number; quantity: number }) => total + item.price * item.quantity, 0)}
//         </p>
//       </div>

//       {/* Checkout Button */}
//       <button
//         onClick={handleCheckout}
//         className="mt-4 bg-blue-500 text-white p-2 rounded w-full"
//       >
//         Proceed to Checkout
//       </button>
//     </div>
//   );
// };

// export default Cart;
"use client";
import React from "react";
import { useCart } from "./CartContext";
import { useRouter } from "next/navigation";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const router = useRouter();

  if (cartItems.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  const handleCheckout = () => {
    router.push("/MyCheckout"); // Redirect to checkout page
  };

  return (
    <div className="fixed right-0 top-0 w-[300px] bg-white shadow-lg p-4">
      <h2 className="text-2xl font-bold mb-4">Cart Summary</h2>
      {cartItems.map((item: any) => (
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
          {cartItems.reduce(
            (total: number, item: { price: number; quantity: number }) =>
              total + item.price * item.quantity,
            0
          )}
        </p>
      </div>
      <button
        onClick={handleCheckout}
        className="mt-4 bg-blue-500 text-white p-2 rounded w-full"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;
