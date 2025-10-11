// components/AlertsSection.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AlertsSection() {
    return (
        <section className="w-full bg-gradient-to-b from-[#92E0FD] to-[#FFFFFF] py-16">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Real-Time Alerts
                    </h2>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        Never miss important updates again. The Eye App delivers instant alerts
                        on traffic delays, safety notices, weather warnings, and citywide
                        news—all in real time. Stay prepared, make better decisions, and keep
                        your day running smoothly.
                    </p>
                </motion.div>

                {/* Right Side - Video */}
                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, x: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.9, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <motion.iframe
                        src="/videos/data1.mp4"
                        title="YouTube video player"
                        className="rounded-xl shadow-lg w-full max-w-2xl h-[320px] object-cover"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        whileHover={{ scale: 1.03, boxShadow: "0px 8px 30px rgba(0,0,0,0.3)" }}
                        transition={{ duration: 0.3 }}
                    ></motion.iframe>
                </motion.div>

            </div>
        </section>
    );
}
