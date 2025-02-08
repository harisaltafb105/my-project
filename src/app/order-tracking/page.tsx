// app/order-tracking/page.tsx
// app/order-tracking/page.tsx
'use client';

import { useSearchParams } from 'next/navigation'; // Correct import for App Directory
import OrderTracking from "../Components/OrderTracking";  // Import your tracking component

const OrderTrackingPage = () => {
  const searchParams = useSearchParams(); // Access query parameters from the URL
  const orderId = searchParams?.get('orderId') || '';  // Default to an empty string if 'orderId' doesn't exist

  return (
    <div>
      <h2>Order Tracking</h2>
      {orderId ? (
        <OrderTracking orderId={orderId} />
      ) : (
        <p>Order ID not found. Please enter your Order ID.</p>
      )}
    </div>
  );
};

export default OrderTrackingPage;
