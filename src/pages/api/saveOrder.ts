import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../sanityClient";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { cartItems, firstName, lastName, address, city, postalCode, country } = req.body;

      if (!cartItems || !cartItems.length) {
        throw new Error("Cart is empty.");
      }

      if (!firstName || !lastName || !address || !city || !postalCode || !country) {
        throw new Error("Missing order details.");
      }

      // Step 1: Create cartItem documents in Sanity
      const cartItemDocs = await Promise.all(
        cartItems.map((item: any) =>
          client.create({
            _type: "cartItem",
            name: item.name,
            price: item.price,
            quantity: item.quantity,
          })
        )
      );

      // Step 2: Generate a custom orderId (based on timestamp, or any other logic)
      const orderId = `ORD-${Date.now()}`;

      // Step 3: Create an order document in Sanity with references to cartItems
      const orderData = {
        _type: "order",
        firstName,
        lastName,
        address,
        city,
        postalCode,
        country,
        cartItems: cartItemDocs.map((doc) => ({
          _type: "reference",
          _ref: doc._id,
        })),
        totalAmount: cartItems.reduce(
          (total: number, item: { price: number; quantity: number }) =>
            total + item.price * item.quantity,
          0
        ),
        paymentStatus: "pending",
        orderId, // Custom orderId field
      };

      const orderResponse = await client.create(orderData);

      res.status(200).json({ success: true, orderId: orderResponse._id });
    } catch (error) {
      console.error("Error saving order:", error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ success: false, error: errorMessage });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
