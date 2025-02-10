'use client';

import { ClerkProvider, useUser, RedirectToSignIn } from '@clerk/clerk-react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { isLoaded, user } = useUser();

  // If user data is not loaded
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  // If user is not logged in, redirect to login page
  if (!user) {
    return <RedirectToSignIn />;
  }

  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || ''}>
      <html lang="en">
        <body className="flex flex-col min-h-screen">
          <main className="flex-grow">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
