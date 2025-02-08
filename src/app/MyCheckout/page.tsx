// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// const MyCheckout = () => {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     address: "",
//     city: "",
//     postalCode: "",
//     country: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Checkout Data:", formData);
//     router.push("/Newcheckout"); // Redirect to Payment Page
//   };

//   return (
//     <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
//       <h2 className="text-2xl font-bold mb-4">Checkout</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div className="flex gap-4">
//           <input
//             type="text"
//             name="firstName"
//             placeholder="First Name"
//             value={formData.firstName}
//             onChange={handleChange}
//             className="border p-2 w-1/2 rounded"
//             required
//           />
//           <input
//             type="text"
//             name="lastName"
//             placeholder="Last Name"
//             value={formData.lastName}
//             onChange={handleChange}
//             className="border p-2 w-1/2 rounded"
//             required
//           />
//         </div>
//         <input
//           type="text"
//           name="address"
//           placeholder="Address"
//           value={formData.address}
//           onChange={handleChange}
//           className="border p-2 w-full rounded"
//           required
//         />
//         <div className="flex gap-4">
//           <input
//             type="text"
//             name="city"
//             placeholder="City"
//             value={formData.city}
//             onChange={handleChange}
//             className="border p-2 w-1/2 rounded"
//             required
//           />
//           <input
//             type="text"
//             name="postalCode"
//             placeholder="Postal Code"
//             value={formData.postalCode}
//             onChange={handleChange}
//             className="border p-2 w-1/2 rounded"
//             required
//           />
//         </div>
//         <input
//           type="text"
//           name="country"
//           placeholder="Country"
//           value={formData.country}
//           onChange={handleChange}
//           className="border p-2 w-full rounded"
//           required
//         />
//         <button
//           type="submit"
//           className="mt-4 bg-blue-500 text-white p-2 rounded w-full"
//         >
//           Proceed to Payment
//         </button>
//       </form>
//     </div>
//   );
// };

// export default MyCheckout;

// "use client";
// import { useState } from "react";
// import { useCart } from "../Components/CartContext"; // Importing useCart hook
// import { useRouter } from "next/navigation";

// const MyCheckout = () => {
//   const router = useRouter();
//   const { cartItems } = useCart(); // Access cart items from CartContext

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     address: "",
//     city: "",
//     postalCode: "",
//     country: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Checkout Data:", formData);
//     // Pass the cartItems and formData to the payment page if needed
//     router.push("/Newcheckout"); // Redirect to Payment Page
//   };

//   return (
//     <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
//       <h2 className="text-2xl font-bold mb-4">Checkout</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div className="flex gap-4">
//           <input
//             type="text"
//             name="firstName"
//             placeholder="First Name"
//             value={formData.firstName}
//             onChange={handleChange}
//             className="border p-2 w-1/2 rounded"
//             required
//           />
//           <input
//             type="text"
//             name="lastName"
//             placeholder="Last Name"
//             value={formData.lastName}
//             onChange={handleChange}
//             className="border p-2 w-1/2 rounded"
//             required
//           />
//         </div>
//         <input
//           type="text"
//           name="address"
//           placeholder="Address"
//           value={formData.address}
//           onChange={handleChange}
//           className="border p-2 w-full rounded"
//           required
//         />
//         <div className="flex gap-4">
//           <input
//             type="text"
//             name="city"
//             placeholder="City"
//             value={formData.city}
//             onChange={handleChange}
//             className="border p-2 w-1/2 rounded"
//             required
//           />
//           <input
//             type="text"
//             name="postalCode"
//             placeholder="Postal Code"
//             value={formData.postalCode}
//             onChange={handleChange}
//             className="border p-2 w-1/2 rounded"
//             required
//           />
//         </div>
//         <input
//           type="text"
//           name="country"
//           placeholder="Country"
//           value={formData.country}
//           onChange={handleChange}
//           className="border p-2 w-full rounded"
//           required
//         />

//         {/* Display Cart Items */}
//         <div className="mt-6">
//           <h3 className="text-xl font-semibold mb-4">Cart Summary</h3>
//           {cartItems.length === 0 ? (
//             <p>Your cart is empty.</p>
//           ) : (
//             <div>
//               {cartItems.map((item: any) => (
//                 <div key={item._id} className="mb-2">
//                   <p className="font-bold">{item.name}</p>
//                   <p>Price: Rs. {item.price}</p>
//                   <p>Quantity: {item.quantity}</p>
//                   <p>Total: Rs. {item.price * item.quantity}</p>
//                   <hr />
//                 </div>
//               ))}
//               <p className="font-bold mt-2">
//                 Grand Total: Rs.{" "}
//                 {cartItems.reduce(
//                   (total: number, item: { price: number; quantity: number }) =>
//                     total + item.price * item.quantity,
//                   0
//                 )}
//               </p>
//             </div>
//           )}
//         </div>

//         <button
//           type="submit"
//           className="mt-4 bg-blue-500 text-white p-2 rounded w-full"
//         >
//           Proceed to Payment
//         </button>
//       </form>
//     </div>
//   );
// };

// export default MyCheckout;


// "use client";
// import { useState } from "react";
// import { useCart } from "../Components/CartContext"; // Importing useCart hook
// import { useRouter } from "next/navigation";

// const MyCheckout = () => {
//   const router = useRouter();
//   const { cartItems, clearCart } = useCart(); // Access cart items & clearCart function

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     address: "",
//     city: "",
//     postalCode: "",
//     country: "",
//   });

//   const [loading, setLoading] = useState(false); // Loading state

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handlePlaceOrder = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     const orderData = {
//       ...formData,
//       cartItems,
//       totalAmount: cartItems.reduce(
//         (total: number, item: { price: number; quantity: number }) => total + item.price * item.quantity,
//         0
//       ),
//       paymentStatus: "pending", // Payment abhi nahi hui
//     };

//     try {
//       const response = await fetch("/api/saveOrder", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(orderData),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         console.log("Order saved:", data);
//         clearCart(); // Cart empty karo
//         router.push("/Newcheckout"); // Redirect after order placement
//       } else {
//         console.error("Order failed:", data.message);
//       }
//     } catch (error) {
//       console.error("Error saving order:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
//       <h2 className="text-2xl font-bold mb-4">Checkout</h2>
//       <form onSubmit={handlePlaceOrder} className="space-y-4">
//         <div className="flex gap-4">
//           <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="border p-2 w-1/2 rounded" required />
//           <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="border p-2 w-1/2 rounded" required />
//         </div>
//         <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="border p-2 w-full rounded" required />
//         <div className="flex gap-4">
//           <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} className="border p-2 w-1/2 rounded" required />
//           <input type="text" name="postalCode" placeholder="Postal Code" value={formData.postalCode} onChange={handleChange} className="border p-2 w-1/2 rounded" required />
//         </div>
//         <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} className="border p-2 w-full rounded" required />

//         {/* Display Cart Items */}
//         <div className="mt-6">
//           <h3 className="text-xl font-semibold mb-4">Cart Summary</h3>
//           {cartItems.length === 0 ? (
//             <p>Your cart is empty.</p>
//           ) : (
//             <div>
//               {cartItems.map((item: { _id: string; name: string; price: number; quantity: number }) => (
//                 <div key={item._id} className="mb-2">
//                   <p className="font-bold">{item.name}</p>
//                   <p>Price: Rs. {item.price}</p>
//                   <p>Quantity: {item.quantity}</p>
//                   <p>Total: Rs. {item.price * item.quantity}</p>
//                   <hr />
//                 </div>
//               ))}
//               <p className="font-bold mt-2">
//                 Grand Total: Rs.{" "}
//                 {cartItems.reduce((total: number, item: { price: number; quantity: number }) => total + item.price * item.quantity, 0)}
//               </p>
//             </div>
//           )}
//         </div>

//         <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded w-full" disabled={loading}>
//           {loading ? "Placing Order..." : "Place Order"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default MyCheckout;
"use client";

import { useState } from "react";
import { useCart } from "../Components/CartContext"; // Importing useCart hook
import { useRouter } from "next/navigation";

const MyCheckout = () => {
  const router = useRouter();
  const { cartItems, clearCart } = useCart(); // Access cart items & clearCart function

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const [loading, setLoading] = useState(false); // Loading state

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const orderData = {
      ...formData,
      cartItems,
      totalAmount: cartItems.reduce(
        (total: number, item: { price: number; quantity: number }) => total + item.price * item.quantity,
        0
      ),
      paymentStatus: "pending", // Payment abhi nahi hui
    };

    try {
      const response = await fetch("/api/saveOrder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Order saved:", data);
        clearCart(); // Cart empty karo
        
        // Redirect to confirmation page with order ID (orderId might contain hyphens)
        router.push(`/order-confirmation?orderId=${encodeURIComponent(data.orderId)}`);
      } else {
        console.error("Order failed:", data.message);
      }
    } catch (error) {
      console.error("Error saving order:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <form onSubmit={handlePlaceOrder} className="space-y-4">
        <div className="flex gap-4">
          <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="border p-2 w-1/2 rounded" required />
          <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="border p-2 w-1/2 rounded" required />
        </div>
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="border p-2 w-full rounded" required />
        <div className="flex gap-4">
          <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} className="border p-2 w-1/2 rounded" required />
          <input type="text" name="postalCode" placeholder="Postal Code" value={formData.postalCode} onChange={handleChange} className="border p-2 w-1/2 rounded" required />
        </div>
        <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} className="border p-2 w-full rounded" required />

        {/* Display Cart Items */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4">Cart Summary</h3>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div>
              {cartItems.map((item) => (
                <div key={item._id} className="mb-2">
                  <p className="font-bold">{item.name}</p>
                  <p>Price: Rs. {item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Total: Rs. {item.price * item.quantity}</p>
                  <hr />
                </div>
              ))}
              <p className="font-bold mt-2">
                Grand Total: Rs.{" "}
                {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
              </p>
            </div>
          )}
        </div>

        <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded w-full" disabled={loading}>
          {loading ? "Placing Order..." : "Place Order"}
        </button>
      </form>
    </div>
  );
};

export default MyCheckout;

