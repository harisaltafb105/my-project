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

// "use client";

// import { useSearchParams, useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

// const OrderConfirmation = () => {
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const [orderId, setOrderId] = useState<string | null>(null);

//   useEffect(() => {
//     const id = searchParams ? searchParams.get("orderId") : null;
//     if (id) {
//       setOrderId(id);
//     }
//   }, [searchParams]);

//   useEffect(() => {
//     if (orderId) {
//       const timeout = setTimeout(() => {
//         router.push(`/Newcheckout?orderId=${orderId}`);
//       }, 3000); // Redirect after 3 sec

//       return () => clearTimeout(timeout); // Cleanup timeout on unmount
//     }
//   }, [orderId, router]);

//   if (!orderId) {
//     return <p className="text-center text-gray-500 mt-10">Fetching order details...</p>;
//   }

//   return (
//     <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
//       <h2 className="text-2xl font-bold mb-4">Order Confirmed!</h2>
//       <p>Your order has been placed successfully.</p>
//       <p>
//         <strong>Order ID:</strong> {orderId}
//       </p>
//       <p className="text-blue-500">Redirecting to checkout...</p>
//     </div>
//   );
// };

// export default OrderConfirmation;
// "use client";

// import { useRouter } from "next/navigation";
// import { useEffect, useState, Suspense } from "react";
// import { useSearchParams } from "next/navigation";

// const OrderConfirmation = () => {
//   return (
//     <Suspense fallback={<p className="text-center text-gray-500 mt-10">Fetching order details...</p>}>
//       <OrderConfirmationContent />
//     </Suspense>
//   );
// };

// const OrderConfirmationContent = () => {
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const [orderId, setOrderId] = useState<string | null>(null);

//   useEffect(() => {
//     if (searchParams) {
//       const id = searchParams.get("orderId");
//       if (id) setOrderId(id);
//     }
//   }, [searchParams]);

//   useEffect(() => {
//     if (orderId) {
//       const timeout = setTimeout(() => {
//         router.push(`/Newcheckout?orderId=${orderId}`);
//       }, 3000); // Redirect after 3 sec

//       return () => clearTimeout(timeout); // Cleanup timeout on unmount
//     }
//   }, [orderId, router]);

//   if (!orderId) {
//     return <p className="text-center text-gray-500 mt-10">Fetching order details...</p>;
//   }

//   return (
//     <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
//       <h2 className="text-2xl font-bold mb-4">Order Confirmed!</h2>
//       <p>Your order has been placed successfully.</p>
//       <p>
//         <strong>Order ID:</strong> {orderId}
//       </p>
//       <p className="text-blue-500">Redirecting to checkout...</p>
//     </div>
//   );
// };

// export default OrderConfirmation;
"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Navbar2 } from "../Components/Navbar2"; // Importing Navbar2
import { Footer2 } from "../Components/Footer2"; // ✅ Importing Footer2

const OrderConfirmation = () => {
  return (
    <Suspense fallback={<p className="text-center text-gray-500 mt-10">Fetching order details...</p>}>
      <OrderConfirmationContent />
    </Suspense>
  );
};

const OrderConfirmationContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [orderId, setOrderId] = useState<string | null>(null);

  useEffect(() => {
    if (searchParams) {
      const id = searchParams.get("orderId");
      if (id) setOrderId(id);
    }
  }, [searchParams]);

  useEffect(() => {
    if (orderId) {
      const timeout = setTimeout(() => {
        router.push(`/Newcheckout?orderId=${orderId}`);
      }, 3000); // Redirect after 3 sec

      return () => clearTimeout(timeout); // Cleanup timeout on unmount
    }
  }, [orderId, router]);

  if (!orderId) {
    return <p className="text-center text-gray-500 mt-10">Fetching order details...</p>;
  }

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
        <h2 className="text-2xl font-bold mb-4">Order Confirmed!</h2>
        <p>Your order has been placed successfully.</p>
        <p>
          <strong>Order ID:</strong> {orderId}
        </p>
        <p className="text-blue-500">Redirecting to checkout...</p>
      </div>

      <Footer2 /> {/* ✅ Rendering Footer2 at the end */}
    </>
  );
};

export default OrderConfirmation;
