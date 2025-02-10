// import { useState, useEffect } from "react";

// const OrderTracking = ({ orderId }: { orderId: string }) => {
//   const [orderDetails, setOrderDetails] = useState<any>(null); // Store the order details
//   const [loading, setLoading] = useState<boolean>(true); // Loading state for fetching order details
//   const [error, setError] = useState<string | null>(null); // Error state in case order is not found or other issues

//   useEffect(() => {
//     const fetchOrderDetails = async () => {
//       setLoading(true); // Start loading
//       setError(null); // Reset error state on each fetch attempt

//       try {
//         const response = await fetch(`/api/trackOrder?orderId=${encodeURIComponent(orderId)}`);
        
//         if (!response.ok) {
//           throw new Error("Order not found!");
//         }

//         const data = await response.json();
//         setOrderDetails(data); // Set the order details if found
//       } catch (err: any) {
//         setError(err.message); // Handle errors (e.g., order not found)
//       } finally {
//         setLoading(false); // End loading
//       }
//     };

//     if (orderId) {
//       fetchOrderDetails(); // Call the API to fetch order details
//     }
//   }, [orderId]); // Trigger on orderId change

//   if (loading) {
//     return <p>Loading order details...</p>;
//   }

//   return (
//     <div className="order-tracking-container">
//       {error ? (
//         <p className="error-message">{error}</p> // Display error if order is not found
//       ) : (
//         <div>
//           <h3 className="font-semibold">Order Status</h3>
//           <p><strong>Order ID:</strong> {orderDetails?.orderId}</p>
//           <p><strong>Status:</strong> {orderDetails?.status}</p>
//           <p><strong>Payment Status:</strong> {orderDetails?.paymentStatus}</p>
//           <p><strong>Total Amount:</strong> Rs. {orderDetails?.totalAmount}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default OrderTracking;
