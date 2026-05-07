import type { Metadata } from "next";
import { Geist_Mono, Cabin_Sketch, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Toaster } from "sonner"

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
  title: "Marcos Studio",
  description: "Portfolio de Marcos Silva, desenvolvedor Front-End especializado em React, Next.js e TypeScript.",

  icons: {
    icon: "/logo/favicon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistMono.variable} ${cabinSketch.variable} ${inter.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Toaster
          position="top-center" richColors toastOptions={{
            className:"!bg-[#fff8d6] !text-[#392a35] !border-2 !border-[#392a35] !rounded-2xl"
          }}
       />
      </body>
    </html>
  );
}
