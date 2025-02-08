// app/order-tracking/page.tsx
// app/order-tracking/page.tsx
'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import OrderTracking from '../Components/OrderTracking';

const OrderTrackingWrapper = () => {
  const searchParams = useSearchParams();
  const orderId = searchParams?.get('orderId') || '';

  return orderId ? (
    <OrderTracking orderId={orderId} />
  ) : (
    <p>Order ID not found. Please enter your Order ID.</p>
  );
};

const OrderTrackingPage = () => {
  return (
    <div>
      <h2>Order Tracking</h2>
      <Suspense fallback={<p>Loading...</p>}>
        <OrderTrackingWrapper />
      </Suspense>
    </div>
  );
};

export default OrderTrackingPage;
