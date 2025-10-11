// components/Downer/page.jsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Downer() {
    return (
        <section className="w-full bg-white py-16">
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <p className="text-teal-600 font-semibold text-sm">Our Mission</p>
                    <h2 className="text-4xl font-bold text-gray-900 mt-2">
                        Long heading is what you see here in this feature section
                    </h2>
                    <p className="text-gray-600 mt-6 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        varius enim in eros elementum tristique. Duis cursus, mi quis
                        viverra ornare, eros dolor interdum nulla, ut commodo diam libero
                        vitae erat.
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
                        className="relative w-[500px] h-[1100px] drop-shadow-2xl"
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
