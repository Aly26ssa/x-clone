import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { EmailAuthProvider } from "firebase/auth/web-extension";
import { AuthProvider } from "@/context/AuthContext";
import CookieBanner from "@/components/CookieBanner/CookieBanner";

const inter = Inter({ subsets: ['latin']});

export const metadata: Metadata = {
  title: "X Clone",
  description: "X clone app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
          <CookieBanner />
        </AuthProvider>
        </body>
    </html>
  );
}
