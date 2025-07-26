'use client';
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import Header from "./layouts/header";
import Main from "./layouts/main";

export default function Home() {
  useEffect(() => {
    toast(
      "This Portfolio is still under construction.\nSome sections may be incomplete.",
      {
        duration: 6000,
        icon: '🚧',
      }
    );
  }, []);

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header />
        <Main />
      </div>
    </div>
  );
}
