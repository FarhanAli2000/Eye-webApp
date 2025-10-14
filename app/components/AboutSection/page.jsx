// components/AboutSection/page.jsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section className="relative bg-white py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Image */}
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex justify-center"
                >
                    <Image
                        src="/images/About-the-eye.png"
                        alt="About The Eye App"
                        width={500}
                        height={500}
                        className="object-contain"
                    />
                </motion.div>

                {/* Right Content */}
                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="space-y-6"
                >
                    <motion.h4
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="font-semibold text-lg text-[#086E86]"
                    >
                        Built for Inglewood. Built for You.
                    </motion.h4>

                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-3xl sm:text-4xl font-bold text-gray-900"
                    >
                        ABOUT THE EYE APP
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-gray-600 leading-relaxed"
                    >
                       


 The Eye App is designed to keep residents and visitors connected to everything Inglewood has to offer. From traffic alerts and community events to local dining and hidden gems, it’s your personal guide to city living.
 

                    </motion.p>

                    {/* Features List */}
                    <div className="space-y-4">
                        {[
                            " Stay updated with real-time traffic alerts and reminders.",
                            " Discover restaurants, events, and local transit hubs.",
                            " Unlock turn-by-turn navigation, parking access, exclusive rewards, and event perks."
                        ].map((text, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + i * 0.2, duration: 0.7 }}
                                viewport={{ once: true }}
                                className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg shadow-sm"
                            >
                                <span className="bg-[#086E86] text-white font-bold px-3 py-1 rounded-md">
                                    {i + 1}
                                </span>
                                <p className="font-medium text-gray-800">{text}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
