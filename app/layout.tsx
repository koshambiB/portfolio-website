import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Koshu",
};

export default function Layout({children}) {
  return (
    <html lang="en">
      <body className="bg-background box-border overflow-y-auto">{children}</body>
    </html>
  );
}
