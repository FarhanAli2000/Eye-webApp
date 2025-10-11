// components/AlertsSection.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ExperienceSection() {
    return (
        <section className="w-full bg-white py-16">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Premium Experience
                    </h2>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        Go beyond the basics with exclusive perks. Premium users enjoy turn-by-turn 
                        navigation, live parking availability, priority alerts, and special rewards 
                        from local businesses. With Premium, your Inglewood experience becomes faster, 
                        more convenient, and more rewarding every day.
                    </p>
                </motion.div>

                {/* Right Side - Video */}
                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, x: 60, scale: 0.9 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.9, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <motion.video
                        src="/videos/data8.mp4"
                        controls
                        autoPlay
                        loop
                        muted
                        className="rounded-xl shadow-lg w-full max-w-2xl h-[320px] object-cover"
                        whileHover={{ scale: 1.05, boxShadow: "0px 8px 25px rgba(0,0,0,0.25)" }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.div>

            </div>
        </section>
    );
}
