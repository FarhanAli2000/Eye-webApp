"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function InfoSection() {
    return (
        <section className="pt-10 md:pt-14 pb-8 md:pb-10 bg-white">
            <div className="mx-auto w-full max-w-6xl px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">

                {/* Left Side - Image / Illustration */}
                <motion.div
                    className="flex justify-center order-2 md:order-1"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        whileHover={{ scale: 1.05, boxShadow: "0px 15px 30px rgba(0,0,0,0.2)" }}
                        transition={{ duration: 0.3 }}
                        className="relative w-full max-w-xl h-[460px] rounded-xl overflow-hidden shadow-lg"
                    >
                        <Image
                            src="/images/eye.png"
                            alt="Info Section Illustration"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </motion.div>

                {/* Right Side - Text */}
                <motion.div
                    className="order-1 md:order-2"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <p className="text-teal-600 font-semibold mb-2">Our Vision</p>
                    <h2 className="text-4xl font-bold text-gray-900 leading-snug mb-5">
                       A Smarter, More Connected Inglewood Experience
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-3">
                        The Eye App was born out of conversations with neighbors who wanted a single place to
                        discover events, transit changes, and local deals without digging through a dozen feeds.
                        By partnering with civic leaders and small businesses, we surface the updates that matter
                        the moment they happen.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        We believe technology should amplify community voices. That is why every feature we ship
                        is co-designed with residents, from safety alerts to curated guides that highlight the
                        culture unique to Inglewood.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
