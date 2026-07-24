'use client';
import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  // The archived v1 portfolio has its own light theme — skip the dark-theme
  // mouse-follow gradient there.
  const showCursorBg = !pathname?.startsWith("/v1");

  useEffect(() => {
    if (!showCursorBg) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (bgRef.current) {
        const x = e.clientX;
        const y = e.clientY;
        bgRef.current.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [showCursorBg]);

  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {showCursorBg && (
          <div
            ref={bgRef}
            className="cursor-bg pointer-events-none fixed inset-0 z-30 transition duration-300"
          />
        )}
        {children}
        <Toaster />
      </body>
    </html>
  );
}
