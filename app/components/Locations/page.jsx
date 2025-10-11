"use client";
import { motion } from "framer-motion";

export default function Locations() {
    return (
        <section className="w-full py-16 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                
                {/* Heading */}
                <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <p className="text-sm font-semibold text-gray-600">Our offices</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-1">
                        Locations
                    </h2>
                    <p className="mt-3 text-gray-600 max-w-2xl">
                        Visit our community hub in downtown Inglewood for weekly onboarding sessions, partner meetups, and live demos of The Eye App.
                    </p>
                </motion.div>

                {/* Map */}
                <motion.div
                    className="w-full h-[400px] rounded-xl overflow-hidden shadow-md"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <iframe
                        src="https://maps.google.com/maps?q=Inglewood%2C%20CA&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </motion.div>
            </div>
        </section>
    );
}
