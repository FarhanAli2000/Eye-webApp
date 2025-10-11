"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function InfoSection() {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* Left Side - Image / Illustration */}
                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        whileHover={{ scale: 1.05, boxShadow: "0px 15px 30px rgba(0,0,0,0.2)" }}
                        transition={{ duration: 0.3 }}
                        className="relative w-full max-w-2xl h-[400px] rounded-xl overflow-hidden shadow-lg"
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
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <p className="text-teal-600 font-semibold mb-2">Our Vision</p>
                    <h2 className="text-4xl font-bold text-gray-900 leading-snug mb-6">
                        Long heading is what you see here in this info section
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
                        ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat
                        wisi, condimentum sed, commodo vitae, ornare sit amet, wisi.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
