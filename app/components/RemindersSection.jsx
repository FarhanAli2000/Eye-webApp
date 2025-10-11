// components/RemindersSection.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";

export default function RemindersSection() {
    return (
        <section className="w-full bg-white py-16">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left Side - Video */}
                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, x: -60, scale: 0.9 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.9 }}
                    viewport={{ once: true }}
                >
                    <motion.video
                        src="/videos/data2.mp4"
                        controls
                        autoPlay
                        loop
                        muted
                        className="rounded-xl shadow-lg w-full max-w-2xl h-[320px] object-cover"
                        whileHover={{ scale: 1.03, boxShadow: "0px 8px 30px rgba(0,0,0,0.25)" }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.div>

                {/* Right Side - Text */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Smart Reminders
                    </h2>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                        Life is busy—The Eye App keeps you on track. Save events, set
                        automatic reminders, and get notified before something important
                        happens. Whether it’s a farmers’ market, a road closure, or your
                        favorite concert, you’ll always be in the loop.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
