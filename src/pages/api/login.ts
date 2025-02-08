import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    // Dummy authentication (Replace with DB check)
    if (email === "user@example.com" && password === "password123") {
      res.setHeader(
        "Set-Cookie",
        `userToken=validToken; Path=/; HttpOnly; Max-Age=86400`
      );
      return res.status(200).json({ message: "Login successful", user: { email } });
    }

    return res.status(401).json({ message: "Invalid credentials" });
  }

  return res.status(405).json({ message: "Method not allowed" });
}
