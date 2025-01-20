// import React from "react";
// import Image from "next/image";

// export default function ProductDetail({ product }: { product: any }) {
//   if (!product) {
//     return <div className="text-center text-red-500">Product not found!</div>;
//   }

//   return (
//     <div className="max-w-screen-md mx-auto px-4">
//       <h1 className="text-3xl font-bold text-center my-8">
//         Product Detail
//       </h1>

//       {/* Product Image */}
//       <div className="flex justify-center">
//         {product.imagePath ? (
//           <div className="overflow-hidden rounded-lg border border-gray-200 aspect-square max-w-[400px]">
//             <Image
//               src={product.imagePath}
//               alt={product.name || "Product Image"}
//               width={400}
//               height={400}
//               layout="responsive"
//               objectFit="cover"
//             />
//           </div>
//         ) : (
//           <p className="text-red-500 text-center">Image not available</p>
//         )}
//       </div>

//       {/* Product Info */}
//       <div className="mt-6 text-center">
//         <h2 className="text-2xl font-bold">{product.name}</h2>
//         <p className="text-xl text-gray-600 mt-2">{product.description}</p>
//         <p className="text-2xl font-bold mt-4">Price: Rs. {product.price}</p>
//         <p className="text-gray-500 mt-2">Category: {product.category}</p>
//         <p className="text-gray-500 mt-2">Stock Level: {product.stockLevel}</p>
//         {product.isFeaturedProduct && (
//           <p className="text-green-500 mt-2 font-bold">
//             Featured Product
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }
// "use client"
// import React, { useState } from "react";
// import Image from "next/image";

// export default function ProductDetail({ product }: { product: any }) {
//   const [quantity, setQuantity] = useState(1);  // State to manage product quantity
//   const [cartVisible, setCartVisible] = useState(false);  // State to manage cart form visibility
//   const [cartItems, setCartItems] = useState<any[]>([]); // State to store cart items

//   // Handle Add to Cart button click
//   const handleAddToCart = () => {
//     // Add the product to the cart
//     setCartItems((prev) => [...prev, { ...product, quantity }]);
//     setCartVisible(true);  // Show the cart details side form
//   };

//   // Increase the quantity
//   const increaseQuantity = () => setQuantity(quantity + 1);

//   // Decrease the quantity
//   const decreaseQuantity = () => {
//     if (quantity > 1) setQuantity(quantity - 1);
//   };

//   if (!product) {
//     return <div className="text-center text-red-500">Product not found!</div>;
//   }

//   return (
//     <div className="max-w-screen-md mx-auto px-4">
//       <h1 className="text-3xl font-bold text-center my-8">Product Detail</h1>

//       {/* Product Image */}
//       <div className="flex justify-center">
//         {product.imagePath ? (
//           <div className="overflow-hidden rounded-lg border border-gray-200 aspect-square max-w-[400px]">
//             <Image
//               src={product.imagePath}
//               alt={product.name || "Product Image"}
//               width={400}
//               height={400}
//               layout="responsive"
//               objectFit="cover"
//             />
//           </div>
//         ) : (
//           <p className="text-red-500 text-center">Image not available</p>
//         )}
//       </div>

//       {/* Product Info */}
//       <div className="mt-6 text-center">
//         <h2 className="text-2xl font-bold">{product.name}</h2>
//         <p className="text-xl text-gray-600 mt-2">{product.description}</p>
//         <p className="text-2xl font-bold mt-4">Price: Rs. {product.price}</p>
//         <p className="text-gray-500 mt-2">Category: {product.category}</p>
//         <p className="text-gray-500 mt-2">Stock Level: {product.stockLevel}</p>
//         {product.isFeaturedProduct && (
//           <p className="text-green-500 mt-2 font-bold">
//             Featured Product
//           </p>
//         )}
//       </div>

//       {/* Quantity Controls */}
//       <div className="mt-4 flex justify-center items-center">
//         <button
//           onClick={decreaseQuantity}
//           className="px-4 py-2 bg-gray-300 text-black rounded-l-lg"
//         >
//           -
//         </button>
//         <span className="px-6 py-2">{quantity}</span>
//         <button
//           onClick={increaseQuantity}
//           className="px-4 py-2 bg-gray-300 text-black rounded-r-lg"
//         >
//           +
//         </button>
//       </div>

//       {/* Add to Cart Button */}
//       <div className="mt-6 flex justify-center">
//         <button
//           onClick={handleAddToCart}
//           className="px-6 py-3 bg-black text-white rounded-lg"
//         >
//           Add to Cart
//         </button>
//       </div>

//       {/* Cart Side Form (visible when an item is added to the cart) */}
//       {cartVisible && (
//         <div className="fixed right-0 top-0 w-[300px] bg-white shadow-lg p-4">
//           <h2 className="text-2xl font-bold mb-4">Cart Summary</h2>
//           <div>
//             {cartItems.map((item, index) => (
//               <div key={index} className="mb-4">
//                 <p className="font-bold">{item.name}</p>
//                 <p>Price: Rs. {item.price}</p>
//                 <p>Quantity: {item.quantity}</p>
//                 <p>Total: Rs. {item.price * item.quantity}</p>
//               </div>
//             ))}
//             <hr />
//             <div className="mt-4">
//               <p className="font-bold">
//                 Grand Total: Rs.{" "}
//                 {cartItems.reduce(
//                   (total, item) => total + item.price * item.quantity,
//                   0
//                 )}
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

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
