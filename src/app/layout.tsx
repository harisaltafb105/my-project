import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { CartProvider } from "./Components/CartContext";
import Cart from "./Components/Cart";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "My Shop",
  description: "An example e-commerce app with a cart.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    
      <html lang="en">
        <body className={`${poppins.className} flex flex-col min-h-screen`}>
          <CartProvider>
            <main className="flex-grow">{children}</main>
            <Cart />
          </CartProvider>
        </body>
      </html>
  
  );
}
