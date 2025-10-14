"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FounderSection() {
    return (
        <section className="w-full bg-gradient-to-b from-[#92E0FD] to-[#FFFFFF] py-16">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left Side - Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <p className="text-sm font-semibold text-teal-700 mb-2">About Founder</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Courtney Reddix
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Courtney Reddix is the founder and driving force behind The Eye App.
                        As a passionate advocate for community engagement, Courtney recognized
                        that residents of Inglewood needed a faster, smarter way to stay informed
                        about their city.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        With a background in entrepreneurship and a deep connection to her community,
                        she set out to bridge the gap between technology and everyday life in Inglewood.
                        Her vision was clear: create an app that empowers people with real-time updates,
                        supports local businesses, and strengthens the sense of belonging within the city.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Courtney’s leadership and commitment to innovation continue to shape The Eye App
                        into more than just a mobile tool—it’s becoming a community platform that reflects
                        the heartbeat of Inglewood.
                    </p>
                </motion.div>

                {/* Right Side - Founder Images */}
                <motion.div
                    className="flex gap-6 justify-center"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                   <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
    className="relative w-[280px] h-[350px] md:w-[300px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl bg-[#0D738B]"
>
    <Image
        src="/images/Main-founder.png"
        alt="Founder 1"
        fill
        className="object-cover"
    />
</motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="relative w-[280px] h-[350px] md:w-[300px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl"
                    >
                        <Image
                            src="/images/eye.png"
                            alt="Founder 2"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
