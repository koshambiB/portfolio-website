import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Koshu",
};

export default function Layout({children}) {
  return (
    <html lang="en">
      <head><script src="https://kit.fontawesome.com/58256cc3e5.js" crossOrigin="anonymous"></script></head>
      <body className="bg-gray-300 box-border overflow-y-auto"> 
        {children}
        </body>
    </html>
  );
}
