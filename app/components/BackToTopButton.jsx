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
      className={`fixed bottom-6 right-6 z-50 rounded-full bg-[#086E86] p-3 text-white shadow-lg transition-all duration-300 hover:bg-[#065968] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#086E86] ${
        isVisible ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-5"
      }`}
    >
      <FaArrowUp className="h-5 w-5" />
    </button>
  );
}
