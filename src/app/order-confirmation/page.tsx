// pages/order-confirmation.tsx
// "use client";

// import { useSearchParams } from "next/navigation";
// import { Suspense } from "react";

// const OrderConfirmationContent = () => {
//   const searchParams = useSearchParams();
//   const orderId = searchParams ? searchParams.get("orderId") : null;

//   return (
//     <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
//       <h2 className="text-2xl font-bold mb-4">Order Confirmed!</h2>
//       {orderId ? (
//         <>
//           <p>Your order has been placed successfully.</p>
//           <p><strong>Order ID:</strong> {orderId}</p>
//           <p>You can track your order <a href={`/order-tracking?orderId=${orderId}`} className="text-blue-500 underline">here</a>.</p>
//         </>
//       ) : (
//         <p>Order ID not found.</p>
//       )}
//     </div>
//   );
// };

// const OrderConfirmation = () => {
//   return (
//     <Suspense fallback={<p>Loading...</p>}>
//       <OrderConfirmationContent />
//     </Suspense>
//   );
// };

// export default OrderConfirmation;

"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

const OrderConfirmation = () => {
  const searchParams = useSearchParams();
  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    if (searchParams) {
      setOrderId(searchParams.get("orderId") || "");
    }
  }, [searchParams]);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
        <h2 className="text-2xl font-bold mb-4">Order Confirmed!</h2>
        {orderId ? (
          <>
            <p>Your order has been placed successfully.</p>
            <p>
              <strong>Order ID:</strong> {orderId}
            </p>
            <p>
              You can track your order{" "}
              <a
                href={`/order-tracking?orderId=${orderId}`}
                className="text-blue-500 underline"
              >
                here
              </a>
              .
            </p>
          </>
        ) : (
          <p>Order ID not found.</p>
        )}
      </div>
    </Suspense>
  );
};

export default OrderConfirmation;
