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
      <body className="bg-gray-300 box-border overflow-y-auto"> 
        {children}
        </body>
    </html>
  );
}
