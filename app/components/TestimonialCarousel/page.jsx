"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "John Doe",
    position: "CEO, CompanyX",
    image: "https://media.istockphoto.com/id/2194078950/photo/profile-picture-of-smiling-confident-arabic-businessman.webp?a=1&b=1&s=612x612&w=0&k=20&c=42Z7FDi1u5Ogevtd0xMUkTWM7hDzrre4YOlbHKvK_T8=",
    rating: 4,
    text: "The Eye App has completely changed how I stay connected in Inglewood. Super smooth and reliable!",
  },
  {
    name: "Jane Smith",
    position: "Designer, StudioY",
    image: "https://media.istockphoto.com/id/2194078950/photo/profile-picture-of-smiling-confident-arabic-businessman.webp?a=1&b=1&s=612x612&w=0&k=20&c=42Z7FDi1u5Ogevtd0xMUkTWM7hDzrre4YOlbHKvK_T8=",
    rating: 4,
    text: "I love the features of The Eye App. It really makes life easier and keeps me updated!",
  },
  {
    name: "Michael Lee",
    position: "Manager, BizCorp",
    image: "https://media.istockphoto.com/id/2194078950/photo/profile-picture-of-smiling-confident-arabic-businessman.webp?a=1&b=1&s=612x612&w=0&k=20&c=42Z7FDi1u5Ogevtd0xMUkTWM7hDzrre4YOlbHKvK_T8=",
    rating: 5,
    text: "Fantastic experience! I’d recommend it to anyone looking for seamless communication.",
  },
];

const TriangleArrow = ({ direction = "left", className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d={
        direction === "left"
          ? "M15 5L7 12L15 19M7 12H18"
          : "M9 5L17 12L9 19M17 12H6"
      }
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  useEffect(() => {
    const updateCards = () => {
      setCardsPerView(window.innerWidth >= 1024 ? 2 : 1);
    };

    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  const prevSlide = () =>
    setIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  const nextSlide = () =>
    setIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));

  const visibleTestimonials = Array.from(
    { length: cardsPerView },
    (_, offset) => testimonials[(index + offset) % testimonials.length]
  );

  return (
    <section className="w-full py-16 px-4 bg-gradient-to-b from-[#FFFFFF] to-[#92E0FD]">
      <div className="max-w-6xl mx-auto relative">

        {/* Desktop Arrows */}
        <button
          onClick={prevSlide}
          className="hidden lg:flex absolute left-[-70px] top-[58%] -translate-y-1/2 bg-white shadow-md w-12 h-12 items-center justify-center rounded-full hover:bg-gray-100 transition"
        >
          <TriangleArrow direction="left" className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="hidden lg:flex absolute right-[-70px] top-[58%] -translate-y-1/2 bg-white shadow-md w-12 h-12 items-center justify-center rounded-full hover:bg-gray-100 transition"
        >
          <TriangleArrow direction="right" className="w-6 h-6" />
        </button>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-2"
        >
          What Our Users Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-600 text-center mb-8"
        >
          Real stories from people who use The Eye App to stay connected in Inglewood.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AnimatePresence mode="wait">
            {visibleTestimonials.map((t, i) => (
              <motion.div
                key={`${t.name}-${i}`}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -40, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                whileHover={{ scale: 1.03 }}
                className="rounded-2xl shadow p-6 bg-white flex flex-col gap-4"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className={`w-5 h-5 ${
                        starIndex < t.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-gray-700 text-sm">“{t.text}”</p>

                <div className="flex items-center gap-3 mt-4">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover border"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{t.name}</p>
                    <p className="text-gray-500 text-sm">{t.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Mobile Arrows */}
        <div className="flex lg:hidden justify-center items-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-gray-100 transition"
          >
            <TriangleArrow direction="left" className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-gray-100 transition"
          >
            <TriangleArrow direction="right" className="w-6 h-6" />
          </button>
        </div>

        {/* Dots - Smaller Size */}
        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, dotIndex) => (
            <motion.div
              key={dotIndex}
              animate={{
                scale: dotIndex === index ? 1.2 : 1,
                backgroundColor: dotIndex === index ? "black" : "#D1D5DB",
              }}
              transition={{ duration: 0.3 }}
              className="w-2 h-2 rounded-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
