// app/order-tracking/page.tsx
// app/order-tracking/page.tsx
// 'use client';

// import { Suspense } from 'react';
// import { useSearchParams } from 'next/navigation';
// import OrderTracking from '../Components/OrderTracking';

// const OrderTrackingWrapper = () => {
//   const searchParams = useSearchParams();
//   const orderId = searchParams?.get('orderId') || '';

//   return orderId ? (
//     <OrderTracking orderId={orderId} />
//   ) : (
//     <p>Order ID not found. Please enter your Order ID.</p>
//   );
// };

// const OrderTrackingPage = () => {
//   return (
//     <div>
//       <h2>Order Tracking</h2>
//       <Suspense fallback={<p>Loading...</p>}>
//         <OrderTrackingWrapper />
//       </Suspense>
//     </div>
//   );
// };

// export default OrderTrackingPage;
// "use client";

// import { useState, useEffect } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import sanityClient from "../../../sanityClient";

// const OrderTracking = () => {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const orderId = searchParams?.get("orderId") || "";

//   const [orderData, setOrderData] = useState<any>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!orderId) return;

//     const fetchOrderDetails = async () => {
//       try {
//         const query = `*[_type == "order" && orderId == $orderId][0] {
//           orderId,
//           firstName,
//           lastName,
//           address,
//           city,
//           postalCode,
//           country,
//           totalAmount,
//           paymentStatus,
//           status,
//           estimatedDelivery,
//           cartItems[]-> { name, price, quantity }
//         }`;

//         const order = await sanityClient.fetch(query, { orderId });

//         if (order) {
//           setOrderData(order);
//         } else {
//           console.error("Order not found in Sanity.");
//         }
//       } catch (error) {
//         console.error("Error fetching order:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrderDetails();
//   }, [orderId]);

//   if (loading) return <p className="text-center text-gray-500">Loading order details...</p>;

//   return (
//     <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
//       <h2 className="text-2xl font-bold mb-4">Order Tracking</h2>

//       {orderData ? (
//         <>
//           <p><strong>Order ID:</strong> {orderData.orderId}</p>
//           <p><strong>Customer:</strong> {orderData.firstName} {orderData.lastName}</p>
//           <p><strong>Address:</strong> {orderData.address}, {orderData.city}, {orderData.postalCode}, {orderData.country}</p>
//           <p><strong>Order Status:</strong> {orderData.status}</p>
//           <p><strong>Payment Status:</strong> {orderData.paymentStatus}</p>
//           <p><strong>Total Amount:</strong> ${orderData.totalAmount}</p>
//           <p><strong>Estimated Delivery:</strong> {orderData.estimatedDelivery || "Not Available"}</p>

//           <h3 className="text-lg font-bold mt-4">Items Ordered:</h3>
//           <ul className="list-disc pl-5">
//             {orderData.cartItems?.map((item: any, index: number) => (
//               <li key={index}>
//                 {item.name} - {item.quantity} x ${item.price}
//               </li>
//             ))}
//           </ul>

//           <button
//             className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
//             onClick={() => router.push(`/feedback?orderId=${orderId}`)}
//           >
//             Give Feedback
//           </button>
//         </>
//       ) : (
//         <p className="text-red-500">Order not found.</p>
//       )}
//     </div>
//   );
// };

// export default OrderTracking;
// "use client";
// import { useState, useEffect, Suspense } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import sanityClient from "../../../sanityClient";

// const OrderTracking = () => {
//   return (
//     <Suspense fallback={<p className="text-center text-gray-500">Loading order tracking...</p>}>
//       <OrderTrackingContent />
//     </Suspense>
//   );
// };

// const OrderTrackingContent = () => {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const orderId = searchParams?.get("orderId") || ""; // Yeh ab _id hai

//   const [orderData, setOrderData] = useState<any>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (!orderId) {
//       setError("Order ID is missing.");
//       setLoading(false);
//       return;
//     }

//     const fetchOrderDetails = async () => {
//       try {
//         console.log("Fetching order with _id:", orderId);

//         const query = `*[_id == $orderId][0] {
//           _id,
//           firstName,
//           lastName,
//           address,
//           city,
//           postalCode,
//           country,
//           totalAmount,
//           paymentStatus,
//           status,
//           estimatedDelivery,
//           cartItems[]-> { name, price, quantity }
//         }`;

//         const order = await sanityClient.fetch(query, { orderId });

//         if (order) {
//           console.log("Fetched Order Data:", order);
//           setOrderData(order);
//         } else {
//           console.error("Order not found.");
//           setError("Order not found.");
//         }
//       } catch (error) {
//         console.error("Error fetching order:", error);
//         setError("Something went wrong while fetching the order.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrderDetails();
//   }, [orderId]);

//   return (
//     <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
//       <h2 className="text-2xl font-bold mb-4">Order Tracking</h2>

//       {loading ? (
//         <p className="text-center text-gray-500">Loading order details...</p>
//       ) : error ? (
//         <p className="text-red-500">{error}</p>
//       ) : orderData ? (
//         <>
//           <p><strong>Order ID:</strong> {orderData._id}</p>
//           <p><strong>Customer:</strong> {orderData.firstName} {orderData.lastName}</p>
//           <p><strong>Address:</strong> {orderData.address}, {orderData.city}, {orderData.postalCode}, {orderData.country}</p>
//           <p><strong>Order Status:</strong> {orderData.status}</p>
//           <p><strong>Payment Status:</strong> {orderData.paymentStatus}</p>
//           <p><strong>Total Amount:</strong> ${orderData.totalAmount}</p>
//           <p><strong>Estimated Delivery:</strong> {orderData.estimatedDelivery || "Not Available"}</p>

//           <h3 className="text-lg font-bold mt-4">Items Ordered:</h3>
//           <ul className="list-disc pl-5">
//             {orderData.cartItems?.map((item: any, index: number) => (
//               <li key={index}>
//                 {item.name} - {item.quantity} x ${item.price}
//               </li>
//             ))}
//           </ul>

//           <button
//             className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
//             onClick={() => router.push(`/feedback?orderId=${orderId}`)}
//           >
//             Give Feedback
//           </button>
//         </>
//       ) : (
//         <p className="text-red-500">Order not found.</p>
//       )}
//     </div>
//   );
// };

// export default OrderTracking;
// "use client";
// import { useState, useEffect, Suspense } from "react";
// import { useRouter } from "next/navigation";

// const OrderTracking = () => {
//   return (
//     <Suspense fallback={<p className="text-center text-gray-500">Loading order tracking...</p>}>
//       <OrderTrackingContent />
//     </Suspense>
//   );
// };

// const OrderTrackingContent = () => {
//   const router = useRouter();
//   const [orderId, setOrderId] = useState<string | null>(null);
//   const [orderData, setOrderData] = useState<any>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const searchParams = new URLSearchParams(window.location.search);
//     setOrderId(searchParams.get("orderId"));
//   }, []);

//   useEffect(() => {
//     if (!orderId) return;

//     const fetchOrderDetails = async () => {
//       try {
//         setLoading(true);
//         console.log("Fetching order with orderId:", orderId);

//         const response = await fetch(`/api/trackOrder?orderId=${orderId}`);
//         if (!response.ok) {
//           throw new Error("Failed to fetch order details");
//         }

//         const order = await response.json();
//         setOrderData(order);
//       } catch (error: any) {
//         console.error("Error fetching order:", error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrderDetails();
//   }, [orderId]);

//   return (
//     <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
//       <h2 className="text-2xl font-bold mb-4">Order Tracking</h2>

//       {loading ? (
//         <p className="text-center text-gray-500">Loading order details...</p>
//       ) : error ? (
//         <p className="text-red-500">{error}</p>
//       ) : orderData ? (
//         <>
//           <p><strong>Order ID:</strong> {orderData._id}</p>
//           <p><strong>Customer:</strong> {orderData.firstName} {orderData.lastName}</p>
//           <p><strong>Address:</strong> {orderData.address}, {orderData.city}, {orderData.postalCode}, {orderData.country}</p>
//           <p><strong>Order Status:</strong> {orderData.status}</p>
//           <p><strong>Payment Status:</strong> {orderData.paymentStatus}</p>
//           <p><strong>Total Amount:</strong> ${orderData.totalAmount}</p>
//           <p><strong>Estimated Delivery:</strong> {orderData.estimatedDelivery || "Not Available"}</p>

//           <h3 className="text-lg font-bold mt-4">Items Ordered:</h3>
//           <ul className="list-disc pl-5">
//             {orderData.cartItems?.map((item: any, index: number) => (
//               <li key={index}>
//                 {item.name} - {item.quantity} x ${item.price}
//               </li>
//             ))}
//           </ul>

//           <button
//             className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
//             onClick={() => router.push(`/feedback?orderId=${orderId}`)}
//           >
//             Give Feedback
//           </button>
//         </>
//       ) : (
//         <p className="text-red-500">Order not found.</p>
//       )}
//     </div>
//   );
// };

// export default OrderTracking;
"use client";
import { useState, useEffect, Suspense } from "react";
import { useRouter } from "next/navigation";
import { Navbar2 } from "../Components/Navbar2"; // Importing Navbar2
import { Footer2 } from "../Components/Footer2";// ✅ Importing Footer2

const OrderTracking = () => {
  return (
    <Suspense fallback={<p className="text-center text-gray-500">Loading order tracking...</p>}>
      <OrderTrackingContent />
    </Suspense>
  );
};

const OrderTrackingContent = () => {
  const router = useRouter();
  const [orderId, setOrderId] = useState<string | null>(null);
  const [orderData, setOrderData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    setOrderId(searchParams.get("orderId"));
  }, []);

  useEffect(() => {
    if (!orderId) return;

    const fetchOrderDetails = async () => {
      try {
        setLoading(true);
        console.log("Fetching order with orderId:", orderId);

        const response = await fetch(`/api/trackOrder?orderId=${orderId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch order details");
        }

        const order = await response.json();
        setOrderData(order);
      } catch (error: any) {
        console.error("Error fetching order:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  return (
    <>
      <Navbar2 /> {/* ✅ Rendering Navbar2 */}

      {/* Back Button - Positioned at the Top Left */}
      <div className="relative">
        <button
          onClick={() => router.back()}
          className="absolute top-4 left-4 bg-gray-500 text-white px-3 py-1 text-sm rounded"
        >
          Back
        </button>
      </div>

      <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
        <h2 className="text-2xl font-bold mb-4">Order Tracking</h2>

        {loading ? (
          <p className="text-center text-gray-500">Loading order details...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : orderData ? (
          <>
            <p>
              <strong>Order ID:</strong> {orderData._id}
            </p>
            <p>
              <strong>Customer:</strong> {orderData.firstName} {orderData.lastName}
            </p>
            <p>
              <strong>Address:</strong> {orderData.address}, {orderData.city}, {orderData.postalCode},{" "}
              {orderData.country}
            </p>
            <p>
              <strong>Order Status:</strong> {orderData.status}
            </p>
            <p>
              <strong>Payment Status:</strong> {orderData.paymentStatus}
            </p>
            <p>
              <strong>Total Amount:</strong> ${orderData.totalAmount}
            </p>
            <p>
              <strong>Estimated Delivery:</strong> {orderData.estimatedDelivery || "Not Available"}
            </p>

            <h3 className="text-lg font-bold mt-4">Items Ordered:</h3>
            <ul className="list-disc pl-5">
              {orderData.cartItems?.map((item: any, index: number) => (
                <li key={index}>
                  {item.name} - {item.quantity} x ${item.price}
                </li>
              ))}
            </ul>

            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => router.push(`/feedback?orderId=${orderId}`)}
            >
              Give Feedback
            </button>
          </>
        ) : (
          <p className="text-red-500">Order not found.</p>
        )}
      </div>

      <Footer2 /> {/* ✅ Rendering Footer2 at the end */}
    </>
  );
};

export default OrderTracking;
