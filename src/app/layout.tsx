// import type { Metadata } from "next";
// import { Poppins } from "next/font/google";

// import { CartProvider } from "./Components/CartContext";
// import Cart from "./Components/Cart";
// import "./globals.css";

// const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

// export const metadata: Metadata = {
//   title: "My Shop",
//   description: "An example e-commerce app with a cart.",
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
    
//       <html lang="en">
//         <body className={`${poppins.className} flex flex-col min-h-screen`}>
//           <CartProvider>
//             <main className="flex-grow">{children}</main>
//             <Cart />
//           </CartProvider>
//         </body>
//       </html>
  
//   );
// }

// RootLayout.tsx
// RootLayout.tsx (for Client Component)
// RootLayout.tsx (for Client Component)
// RootLayout.tsx (for Client Component)

// 'use client'; // Keep this for Client Component

// import { Poppins } from "next/font/google";
// import { ClerkProvider, useUser, RedirectToSignIn } from "@clerk/clerk-react"; // Import Clerk
// import { useState, useEffect } from "react";
// import { CartProvider } from "./Components/CartContext";
// import Cart from "./Components/Cart";
// import "./globals.css";

// const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   const [isClerkLoaded, setIsClerkLoaded] = useState(false);

//   // Wait for Clerk to load before rendering
//   useEffect(() => {
//     setIsClerkLoaded(true);
//   }, []);

//   // If Clerk is not loaded, render nothing or a loading state
//   if (!isClerkLoaded) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || ""}>
//       <html lang="en">
//         <body className={`${poppins.className} flex flex-col min-h-screen`}>
//           <UserProviderWrapper>
//             <CartProvider>
//               <main className="flex-grow">{children}</main>
//               <Cart />
//             </CartProvider>
//           </UserProviderWrapper>
//         </body>
//       </html>
//     </ClerkProvider>
//   );
// }

// // UserProviderWrapper component to handle user states
// const UserProviderWrapper = ({ children }: { children: React.ReactNode }) => {
//   const { isLoaded, user } = useUser();

//   // Loading state while Clerk data is being fetched
//   if (!isLoaded) {
//     return <div>Loading...</div>;
//   }

//   // If no user is logged in, redirect to SignIn page
//   if (!user) {
//     return <RedirectToSignIn />;
//   }

//   return <>{children}</>;
// };

'use client';

import { ClerkProvider, SignInButton, useUser, useClerk } from "@clerk/clerk-react"; 
import { CartProvider } from "./Components/CartContext";
import Cart from "./Components/Cart";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || ""}>
      <html lang="en">
        <body className="flex flex-col min-h-screen">
          <CartProvider>
            {/* 👇 Login/Logout buttons fixed at top-right corner */}
            <AuthButtons />
            <main className="flex-grow">{children}</main>
            <Cart />
          </CartProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

// 👇 This will show Login/Logout buttons at the top-right corner
const AuthButtons = () => {
  const { isLoaded, user } = useUser();
  const { signOut } = useClerk();

  return (
    <div className="absolute top-4 right-4">
      {isLoaded && user ? (
        <button 
          className="px-4 py-2 bg-red-500 text-white rounded-md" 
          onClick={() => signOut().then(() => window.location.href = "/login")}
        >
          Logout
        </button>
      ) : (
        <SignInButton>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Login
          </button>
        </SignInButton>
      )}
    </div>
  );
};
