// "use client";
// import React, { useState, useEffect } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { useRouter } from "next/navigation";

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_PUBLISHABLE_KEY as string);

// const CheckoutPage = () => {
//   const [loading, setLoading] = useState(false);
//   const [cartItems, setCartItems] = useState<any[]>([]);
//   const router = useRouter();

//   // Fetch cart items from localStorage
//   useEffect(() => {
//     const cart = JSON.parse(localStorage.getItem("cart") || "[]");
//     setCartItems(cart);
//   }, []);

//   const handleCheckout = async () => {
//     setLoading(true);
//     try {
//       // Call API to create Stripe session
//       const response = await fetch("/api/stripe", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ items: cartItems }),
//       });

//       const data = await response.json();
//       if (data.id) {
//         const stripe = await stripePromise;
//         const result = await stripe?.redirectToCheckout({ sessionId: data.id });
//         if (result?.error) {
//           console.error("Stripe Checkout Error:", result.error.message);
//         }
//       } else {
//         console.error("No session ID received");
//       }
//     } catch (error: any) {
//       console.error("Error during checkout:", error.message || error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h1>Checkout</h1>
//       <ul>
//         {cartItems.map((item, index) => (
//           <li key={index}>
//             {item.name} - Rs. {item.price}
//           </li>
//         ))}
//       </ul>
//       <p>
//         <strong>Total: Rs.{" "}
//           {cartItems.reduce(
//             (total: number, item: { price: number; quantity: number }) =>
//               total + item.price * item.quantity,
//             0
//           )}
//         </strong>
//       </p>

//       <button onClick={handleCheckout} disabled={loading}>
//         {loading ? "Processing..." : "Proceed to Payment"}
//       </button>
//     </div>
//   );
// };

// export default CheckoutPage;


// "use client";
// import { useState, useEffect } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_PUBLISHABLE_KEY as string);

// const CheckoutForm = ({ clientSecret }: { clientSecret: string }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [loading, setLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleSubmit = async (event: any) => {
//     event.preventDefault();
//     if (!stripe || !elements) return;

//     setLoading(true);
//     setErrorMessage("");

//     const { error } = await stripe.confirmPayment({
//       elements,
//       confirmParams: { return_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success` },
//     });

//     if (error) {
//       console.error("Payment Error:", error);
//       setErrorMessage(error.message || "Payment failed.");
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-lg rounded">
//       <h2 className="text-xl font-bold mb-4">Complete Your Payment</h2>
//       <PaymentElement />
//       {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
//       <button
//         type="submit"
//         disabled={!stripe || loading}
//         className="mt-4 bg-blue-500 text-white p-2 rounded w-full"
//       >
//         {loading ? "Processing..." : "Pay Now"}
//       </button>
//     </form>
//   );
// };

// const CheckoutPage = () => {
//   const [clientSecret, setClientSecret] = useState<string | null>(null);

//   useEffect(() => {
//     fetch("/api/stripe", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         items: [{ name: "Alpha Table", price: 900, quantity: 1 }],
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("Client Secret Received:", data.clientSecret);
//         setClientSecret(data.clientSecret);
//       })
//       .catch((error) => console.error("Error fetching client secret:", error));
//   }, []);

//   if (!clientSecret) {
//     return <p className="text-center text-gray-500">Loading payment details...</p>;
//   }

//   return (
//     <Elements stripe={stripePromise} options={{ clientSecret }}>
//       <CheckoutForm clientSecret={clientSecret} />
//     </Elements>
//   );
// };

// export default CheckoutPage;

// "use client";

// import { useState, useEffect } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_PUBLISHABLE_KEY as string);

// const CheckoutForm = ({ clientSecret }: { clientSecret: string }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const orderId = searchParams ? searchParams.get("orderId") : null;

//   const [loading, setLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleSubmit = async (event: any) => {
//     event.preventDefault();
//     if (!stripe || !elements) return;

//     setLoading(true);
//     setErrorMessage("");

//     const { error } = await stripe.confirmPayment({
//       elements,
//       confirmParams: { return_url: `${process.env.NEXT_PUBLIC_SITE_URL}/order-tracking?orderId=${orderId}` },
//     });

//     if (error) {
//       console.error("Payment Error:", error);
//       setErrorMessage(error.message || "Payment failed.");
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-lg rounded">
//       <h2 className="text-xl font-bold mb-4">Complete Your Payment</h2>
//       <PaymentElement />
//       {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
//       <button
//         type="submit"
//         disabled={!stripe || loading}
//         className="mt-4 bg-blue-500 text-white p-2 rounded w-full"
//       >
//         {loading ? "Processing..." : "Pay Now"}
//       </button>

//       {orderId && (
//         <button
//           type="button"
//           onClick={() => router.push(`/order-tracking?orderId=${orderId}`)}
//           className="mt-4 bg-green-500 text-white p-2 rounded w-full"
//         >
//           Track Your Order
//         </button>
//       )}
//     </form>
//   );
// };

// const NewCheckout = () => {
//   const [clientSecret, setClientSecret] = useState<string | null>(null);
//   const searchParams = useSearchParams();
//   const orderId = searchParams ? searchParams.get("orderId") : null;

//   useEffect(() => {
//     fetch("/api/stripe", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         items: [{ name: "Alpha Table", price: 900, quantity: 1 }],
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => setClientSecret(data.clientSecret))
//       .catch((error) => console.error("Error fetching client secret:", error));
//   }, []);

//   if (!clientSecret) {
//     return <p className="text-center text-gray-500">Loading payment details...</p>;
//   }

//   return (
//     <Elements stripe={stripePromise} options={{ clientSecret }}>
//       <CheckoutForm clientSecret={clientSecret} />
//     </Elements>
//   );
// };

// export default NewCheckout;
//export default NewCheckout;
"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_PUBLISHABLE_KEY as string);

const CheckoutForm = ({ clientSecret, orderId }: { clientSecret: string; orderId: string | null }) => {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setErrorMessage("");

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: `${process.env.NEXT_PUBLIC_SITE_URL}/order-tracking?orderId=${orderId}` },
    });

    if (error) {
      console.error("Payment Error:", error);
      setErrorMessage(error.message || "Payment failed.");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-lg rounded">
      <h2 className="text-xl font-bold mb-4">Complete Your Payment</h2>
      <PaymentElement />
      {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
      <button
        type="submit"
        disabled={!stripe || loading}
        className="mt-4 bg-blue-500 text-white p-2 rounded w-full"
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>

      {orderId && (
        <button
          type="button"
          onClick={() => router.push(`/order-tracking?orderId=${orderId}`)}
          className="mt-4 bg-green-500 text-white p-2 rounded w-full"
        >
          Track Your Order
        </button>
      )}
    </form>
  );
};

const NewCheckout = () => {
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  return (
    <Suspense fallback={<p className="text-center text-gray-500">Loading...</p>}>
      <NewCheckoutContent clientSecret={clientSecret} setClientSecret={setClientSecret} />
    </Suspense>
  );
};

const NewCheckoutContent = ({
  clientSecret,
  setClientSecret,
}: {
  clientSecret: string | null;
  setClientSecret: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  const searchParams = useSearchParams();
  const orderId = searchParams ? searchParams.get("orderId") : null;

  useEffect(() => {
    fetch("/api/stripe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: [{ name: "Alpha Table", price: 900, quantity: 1 }],
      }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch((error) => console.error("Error fetching client secret:", error));
  }, []);

  if (!clientSecret) {
    return <p className="text-center text-gray-500">Loading payment details...</p>;
  }

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <CheckoutForm clientSecret={clientSecret} orderId={orderId} />
    </Elements>
  );
};

export default NewCheckout;
