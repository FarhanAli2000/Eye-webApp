"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
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

export default function TestimonialCarousel() {
    const [index, setIndex] = useState(0);

    const prevSlide = () =>
        setIndex(index === 0 ? testimonials.length - 1 : index - 1);
    const nextSlide = () =>
        setIndex(index === testimonials.length - 1 ? 0 : index + 1);

    return (
        <div className="w-full max-w-6xl mx-auto py-12 px-4 bg-white">
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
                className="text-gray-500 text-center mb-8"
            >
                Real stories from people who use The Eye App to stay connected in Inglewood.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-6">
                <AnimatePresence mode="wait">
                    {testimonials.slice(index, index + 2).map((t, i) => (
                        <motion.div
                            key={t.name}
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

            {/* Controls */}
            <div className="flex justify-center items-center gap-4 mt-8">
                <button
                    onClick={prevSlide}
                    className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-gray-100 transition"
                >
                    <ArrowLeft className="w-5 h-5" />
                </button>
                <button
                    onClick={nextSlide}
                    className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-gray-100 transition"
                >
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
                {testimonials.map((_, dotIndex) => (
                    <motion.div
                        key={dotIndex}
                        animate={{
                            scale: dotIndex === index ? 1.3 : 1,
                            backgroundColor: dotIndex === index ? "#3B82F6" : "#D1D5DB",
                        }}
                        transition={{ duration: 0.3 }}
                        className="w-2.5 h-2.5 rounded-full"
                    />
                ))}
            </div>
        </div>
    );
}
