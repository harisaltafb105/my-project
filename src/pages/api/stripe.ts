import Stripe from "stripe";

const stripe = new Stripe(process.env.SECRET_KEY as string, {
  apiVersion: "2025-01-27.acacia", // Recommended latest stable API version
});

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    try {
      const { items } = req.body;

      // Determine Base URL (Localhost or Production)
      const myhost = req.headers.host; // Getting host from request headers
      let baseURL = '';

      if (myhost?.includes('localhost')) {
        baseURL = 'http://localhost:3000';
      } else {
        baseURL = 'https://your-vercel-deployed-url.vercel.app'; // Replace with your actual deployed URL
      }

      // Stripe payment intent create karo
      const paymentIntent = await stripe.paymentIntents.create({
        amount: items.reduce((total: number, item: any) => total + item.price * 100, 0), // Convert price to cents
        currency: "inr", // Change to your preferred currency
        payment_method_types: ["card"],
      });

      return res.status(200).json({ 
        clientSecret: paymentIntent.client_secret,
        baseURL // Sending baseURL if needed in frontend
      });
    } catch (error: any) {
      console.error("Error creating payment intent:", error.message);
      return res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
