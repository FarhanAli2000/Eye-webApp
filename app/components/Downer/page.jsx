// components/Downer/page.jsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Downer() {
    return (
        <section className="w-full bg-white py-10 md:py-14">
            <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                {/* Left Content */}
                <motion.div
                    className="text-center lg:text-left"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <p className="text-teal-600 font-semibold text-sm text-center lg:text-left">Our Mission</p>
                    <h2 className="text-4xl font-bold text-gray-900 mt-2 text-center lg:text-left">
                        Built for Inglewood, powered by community voices
                    </h2>
                    <p className="text-gray-600 mt-4 leading-relaxed text-center lg:text-left">
                        Our team walks the blocks of Inglewood every week to talk with residents, merchants,
                        and city partners. Their stories shape the roadmap: more transparency around public
                        services, more visibility for local businesses, and more reasons to explore the places
                        that make our city special.
                    </p>
                </motion.div>

                {/* Right Side - Single Image */}
                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-[320px] h-[520px] sm:w-[360px] sm:h-[560px] md:w-[480px] md:h-[720px] drop-shadow-2xl"
                    >
                        <Image
                            src="/images/2mobiles.png"
                            alt="App preview"
                            fill
                            className="object-contain"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
