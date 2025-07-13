import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Koshambi Bardhan",
};

export default function Layout({children}:any) {
  return (
    <html lang="en" className="">
      <body className="bg-background overflow-y-auto"> 
        {children}
        </body>
    </html>
  );
}
