// src/components/CartContext.tsx
// context/CartContext.tsx
// "use client";
// import React, { createContext, useContext, useState, ReactNode } from "react";

// interface CartItem {
//   _id: string;
//   name: string;
//   price: number;
//   quantity: number;
// }

// interface CartContextType {
//   cartItems: CartItem[];
//   addToCart: (item: CartItem) => void;
//   removeFromCart: (_id: string) => void;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider = ({ children }: { children: ReactNode }) => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);

//   const addToCart = (item: CartItem) => {
//     setCartItems((prev) => {
//       const existingItem = prev.find((cartItem) => cartItem._id === item._id);
//       if (existingItem) {
//         return prev.map((cartItem) =>
//           cartItem._id === item._id
//             ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
//             : cartItem
//         );
//       }
//       return [...prev, item];
//     });
//   };

//   const removeFromCart = (_id: string) => {
//     setCartItems((prev) => prev.filter((cartItem) => cartItem._id !== _id));
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };


// "use client";
// import React, { createContext, useContext, useState, ReactNode } from "react";

// interface CartItem {
//   _id: string;
//   name: string;
//   price: number;
//   quantity: number;
// }

// interface CartContextType {
//   cartItems: CartItem[];
//   addToCart: (item: CartItem) => void;
//   removeFromCart: (_id: string) => void;
//   checkout: (shippingData: ShippingAddress) => void;
//   clearCart: () => void;
//   checkoutStatus: string;
// }

// interface ShippingAddress {
//   name: string;
//   address: string;
//   city: string;
//   postalCode: string;
//   country: string;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider = ({ children }: { children: ReactNode }) => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);
//   const [checkoutStatus, setCheckoutStatus] = useState<string>("");

//   const addToCart = (item: CartItem) => {
//     setCartItems((prev) => {
//       const existingItem = prev.find((cartItem) => cartItem._id === item._id);
//       if (existingItem) {
//         return prev.map((cartItem) =>
//           cartItem._id === item._id
//             ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
//             : cartItem
//         );
//       }
//       return [...prev, item];
//     });
//   };

//   const removeFromCart = (_id: string) => {
//     setCartItems((prev) => prev.filter((cartItem) => cartItem._id !== _id));
//   };

//   const checkout = (shippingData: ShippingAddress) => {
//     // Simulate the checkout process here
//     setCheckoutStatus("Processing...");

//     // Here you would typically send the data to an API or perform payment integration.
//     setTimeout(() => {
//       setCheckoutStatus("Order placed successfully!");
//       clearCart();  // Clear the cart after checkout
//     }, 2000); // Simulate 2 seconds of processing time
//   };

//   const clearCart = () => {
//     setCartItems([]);
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, checkout, clearCart, checkoutStatus }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };


// "use client";
// import React, { createContext, useContext, useState, ReactNode } from "react";

// interface CartItem {
//   _id: string;
//   name: string;
//   price: number;
//   quantity: number;
// }

// interface CartContextType {
//   cartItems: CartItem[];
//   addToCart: (item: CartItem) => void;
//   removeFromCart: (_id: string) => void;
//   clearCart: () => void;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider = ({ children }: { children: ReactNode }) => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);

//   const addToCart = (item: CartItem) => {
//     setCartItems((prev) => {
//       const existingItem = prev.find((cartItem) => cartItem._id === item._id);
//       if (existingItem) {
//         return prev.map((cartItem) =>
//           cartItem._id === item._id
//             ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
//             : cartItem
//         );
//       }
//       return [...prev, item];
//     });
//   };

//   const removeFromCart = (_id: string) => {
//     setCartItems((prev) => prev.filter((cartItem) => cartItem._id !== _id));
//   };

//   const clearCart = () => {
//     setCartItems([]);
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };
"use client";
import { createContext, useState, useContext, ReactNode } from "react";

interface CartItem {
  _id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (_id: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Add item to cart
  const addToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const updatedCart = [...prev, item];
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
      return updatedCart;
    });
  };

  // Remove item from cart
  const removeFromCart = (_id: string) => {
    setCartItems((prev) => {
      const updatedCart = prev.filter((cartItem) => cartItem._id !== _id);
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
      return updatedCart;
    });
  };

  // Clear the cart
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart"); // Clear from localStorage
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

