// pages/api/orderTracking.ts

// api/trackOrder.ts
// import { NextApiRequest, NextApiResponse } from "next";

// const trackOrder = async (req: NextApiRequest, res: NextApiResponse) => {
//   const { orderId } = req.query;

//   if (!orderId || Array.isArray(orderId)) {
//     return res.status(400).json({ message: "Order ID is required and must be a string" });
//   }

//   try {
//     // Assuming you are fetching data from your database or Sanity
//     const orderDetails = await getOrderDetails(orderId); // Fetch the order details based on orderId

//     if (!orderDetails) {
//       return res.status(404).json({ message: "Order not found" });
//     }

//     res.status(200).json(orderDetails); // Return the order details as JSON response
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching order details", error });
//   }
// };

// export default trackOrder;

// // A mock function to simulate fetching order details from your database
// async function getOrderDetails(orderId: string) {
//   // Here, replace with actual logic to fetch order from database or Sanity
//   // Example static response:
//   return {
//     orderId,
//     status: "Shipped",
//     paymentStatus: "Paid",
//     totalAmount: 1500, // Example amount
//   };
// }
import { NextApiRequest, NextApiResponse } from "next";
import sanityClient from "../../../sanityClient";

const trackOrder = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const orderId = req.query.orderId as string;

    if (!orderId) {
      return res.status(400).json({ message: "Order ID is required" });
    }

    console.log("Fetching order with _id:", orderId);

    const query = `*[_id == $orderId][0] {
      _id, firstName, lastName, address, city, postalCode, country,
      totalAmount, paymentStatus, status, estimatedDelivery,
      cartItems[]-> { name, price, quantity }
    }`;

    const orderDetails = await sanityClient.fetch(query, { orderId });

    if (!orderDetails) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json(orderDetails);
  } catch (error: any) {
    console.error("Error fetching order details:", error);
    res.status(500).json({ message: "Error fetching order details", error: error.message });
  }
};

export default trackOrder;
