// "use client";

// import { useState } from "react";
// import { useSearchParams } from "next/navigation";

// const Feedback = () => {
//   const searchParams = useSearchParams();
//   const orderId = searchParams ? searchParams.get("orderId") : null;

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [rating, setRating] = useState(5);
//   const [comments, setComments] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const handleSubmit = async () => {
//     if (!name || !email || !comments) {
//       setMessage("All fields are required.");
//       return;
//     }

//     setLoading(true);
//     setMessage("");

//     try {
//       const response = await fetch("/api/feedback", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, email, rating, comments }),
//       });

//       if (response.ok) {
//         setMessage("Thank you for your feedback!");
//         setName("");
//         setEmail("");
//         setRating(5);
//         setComments("");
//       } else {
//         setMessage("Failed to submit feedback. Try again.");
//       }
//     } catch (error) {
//       console.error("Error submitting feedback:", error);
//       setMessage("Something went wrong.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
//       <h2 className="text-2xl font-bold mb-4">Feedback</h2>
//       <p>We appreciate your feedback!</p>
//       {orderId && (
//         <p>
//           <strong>Order ID:</strong> {orderId}
//         </p>
//       )}

//       <input
//         type="text"
//         className="w-full p-2 border rounded mt-2"
//         placeholder="Your Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         type="email"
//         className="w-full p-2 border rounded mt-2"
//         placeholder="Your Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <select
//         className="w-full p-2 border rounded mt-2"
//         value={rating}
//         onChange={(e) => setRating(Number(e.target.value))}
//       >
//         {[1, 2, 3, 4, 5].map((num) => (
//           <option key={num} value={num}>
//             {num} Stars
//           </option>
//         ))}
//       </select>
//       <textarea
//         className="w-full p-2 border rounded mt-2"
//         placeholder="Write your feedback here..."
//         value={comments}
//         onChange={(e) => setComments(e.target.value)}
//       ></textarea>
//       <button
//         className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
//         onClick={handleSubmit}
//         disabled={loading}
//       >
//         {loading ? "Submitting..." : "Submit"}
//       </button>
//       {message && <p className="mt-2 text-sm text-gray-600">{message}</p>}
//     </div>
//   );
// };

// export default Feedback;
"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const Feedback = () => {
  return (
    <Suspense fallback={<p className="text-center text-gray-500">Loading...</p>}>
      <FeedbackContent />
    </Suspense>
  );
};

const FeedbackContent = () => {
  const searchParams = useSearchParams();
  const orderId = searchParams ? searchParams.get("orderId") : null;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(5);
  const [comments, setComments] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!name || !email || !comments) {
      setMessage("All fields are required.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, rating, comments }),
      });

      if (response.ok) {
        setMessage("Thank you for your feedback!");
        setName("");
        setEmail("");
        setRating(5);
        setComments("");
      } else {
        setMessage("Failed to submit feedback. Try again.");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      setMessage("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4">Feedback</h2>
      <p>We appreciate your feedback!</p>
      {orderId && (
        <p>
          <strong>Order ID:</strong> {orderId}
        </p>
      )}

      <input
        type="text"
        className="w-full p-2 border rounded mt-2"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        className="w-full p-2 border rounded mt-2"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <select
        className="w-full p-2 border rounded mt-2"
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
      >
        {[1, 2, 3, 4, 5].map((num) => (
          <option key={num} value={num}>
            {num} Stars
          </option>
        ))}
      </select>
      <textarea
        className="w-full p-2 border rounded mt-2"
        placeholder="Write your feedback here..."
        value={comments}
        onChange={(e) => setComments(e.target.value)}
      ></textarea>
      <button
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
      {message && <p className="mt-2 text-sm text-gray-600">{message}</p>}
    </div>
  );
};

export default Feedback;
