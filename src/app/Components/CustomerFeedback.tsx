"use client";
import { useState, useEffect } from "react";

const CustomerFeedback = () => {
  const [feedback, setFeedback] = useState<any[]>([]);
  const [formData, setFormData] = useState({ name: "", email: "", rating: "", comments: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    try {
      const response = await fetch("/api/feedback");
      const data = await response.json();
      if (data.success) setFeedback(data.feedback);
    } catch (error) {
      console.error("Error fetching feedback:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setFeedback([data.feedback, ...feedback]);
        setFormData({ name: "", email: "", rating: "", comments: "" });
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Customer Feedback</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="border p-2 w-full rounded" required />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="border p-2 w-full rounded" required />
        <input type="number" name="rating" placeholder="Rating (1-5)" min="1" max="5" value={formData.rating} onChange={(e) => setFormData({ ...formData, rating: e.target.value })} className="border p-2 w-full rounded" required />
        <textarea name="comments" placeholder="Your Comments" value={formData.comments} onChange={(e) => setFormData({ ...formData, comments: e.target.value })} className="border p-2 w-full rounded" required />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full" disabled={loading}>
          {loading ? "Submitting..." : "Submit Feedback"}
        </button>
      </form>

      <h3 className="text-xl font-semibold mt-6">Recent Feedback</h3>
      {feedback.length === 0 ? (
        <p>No feedback yet.</p>
      ) : (
        <ul className="mt-4 space-y-2">
          {feedback.map((fb) => (
            <li key={fb._id} className="border p-4 rounded">
              <p className="font-bold">{fb.name} ({fb.rating}/5)</p>
              <p>{fb.comments}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomerFeedback;
