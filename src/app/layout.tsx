import type { Metadata } from "next";
import { Geist, Geist_Mono, Cabin_Sketch, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cabinSketch = Cabin_Sketch({
  variable: "--font-cabin-sketch",
  subsets: ["latin"],
  weight: ["400", "700"]
});

const inter = Inter ({
  variable: "--font-inter",
  weight:["400","500","700"]
})

export const metadata: Metadata = {
  title: "Magnus Studio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${geistMono.variable} ${cabinSketch.variable} ${inter.variable} antialiased`}
      >
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
