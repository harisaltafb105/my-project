// "use client";

// import { SignIn } from "@clerk/clerk-react";

// export default function LoginPage() {
//   return (
//     <div className="flex justify-center items-center h-screen">
//       <SignIn />
//     </div>
//   );
// }
"use client";

import { SignIn, useUser } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.replace("/"); // ✅ Agar login ho gaya to home page bhej do
    }
  }, [isSignedIn, isLoaded, router]);

  if (!isLoaded) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <SignIn />
    </div>
  );
}
