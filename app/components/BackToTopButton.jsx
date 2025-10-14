"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 300);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-50 rounded-full bg-gradient-to-r from-[#086E86] to-[#0FA3B1] p-3 text-white shadow-lg transition-all duration-300 hover:from-[#065968] hover:to-[#0C7C8C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0FA3B1]/80 ${
        isVisible ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-5"
      }`}
      // data
    >
      <FaArrowUp className="h-5 w-5" />
    </button>
  );
}
