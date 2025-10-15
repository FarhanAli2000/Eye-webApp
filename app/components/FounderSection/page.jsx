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
                    <p className="text-sm font-semibold text-teal-700 mb-2">Meet the Founder</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Courtney Reddix
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                       Courtney Reddix is the founder and visionary behind The Eye App. With a strong passion for community engagement, Courtney noticed that residents of Inglewood lacked a simple, reliable way to stay informed about their city’s events, updates, and local businesses.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
        Bringing years of entrepreneurial experience and a deep connection to the community, he set out to bridge technology and everyday life, creating an app that empowers residents with real-time alerts, supports local businesses, and fosters a stronger sense of community.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                Under Courtney’s leadership, The Eye App is more than a mobile application ,  it’s a community platform that reflects the heartbeat of Inglewood, helping people feel connected, informed, and involved.
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
    className="relative w-[280px] h-[300px] md:w-[300px] md:h-[360px] rounded-2xl overflow-hidden shadow-xl bg-[#0D738B]"
>
    <Image
        src="/images/Main-founder.png"
        alt="Founder 1"
        fill
        className="object-cover"
        style={{ objectPosition: "center 25%" }}
    />
</motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="relative w-[280px] h-[300px] md:w-[300px] md:h-[360px] rounded-2xl overflow-hidden shadow-xl"
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
