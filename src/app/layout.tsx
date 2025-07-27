'use client';
import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect, useRef } from "react";
import { Toaster } from 'react-hot-toast';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (bgRef.current) {
        const x = e.clientX;
        const y = e.clientY;
        bgRef.current.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <div
          ref={bgRef}
          className="cursor-bg pointer-events-none fixed inset-0 z-30 transition duration-300"
        />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
