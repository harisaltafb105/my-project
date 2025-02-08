import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../sanityClient";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { name, email, rating, comments } = req.body;

      if (!name || !email || !rating || !comments) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const newFeedback = await client.create({
        _type: "feedback",
        name,
        email,
        rating,
        comments,
        createdAt: new Date().toISOString(),
      });

      res.status(200).json({ success: true, feedback: newFeedback });
    } catch (error) {
      res.status(500).json({ success: false, message: "Error submitting feedback" });
    }
  } else if (req.method === "GET") {
    try {
      const feedback = await client.fetch(`*[_type == "feedback"] | order(createdAt desc)`);
      res.status(200).json({ success: true, feedback });
    } catch (error) {
      res.status(500).json({ success: false, message: "Error fetching feedback" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
