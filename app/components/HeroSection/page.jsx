// components/HeroSection/page.jsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat overflow-hidden"
            style={{ backgroundImage: "url('/images/backcolor.png')" }}
        >
            <div className="absolute inset-0 bg-white/70" /> {/* overlay */}

            <div className="relative max-w-7xl mx-auto px-4 lg:px-8 pt-4 pb-10 lg:pt-6 lg:pb-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

                {/* Left Text Section */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-6"
                >
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
                          Your City. Your Connection. Anywhere, Anytime.
                    </h1>
                    <p className="text-gray-700 text-lg max-w-lg">
                       Stay updated on traffic, events, businesses, and city alerts , all in one simple app built for Inglewood residents.
                    </p>

                    {/* App Store & Google Play images */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="flex gap-4"
                    >
                        <div className="relative w-40 h-14">
                            <Image
                                src="/images/appstore.png"
                                alt="App Store"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="relative w-40 h-14">
                            <Image
                                src="/images/google.png"
                                alt="Google Play"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Mobile Mockup */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 60 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
                    className="relative flex justify-center lg:justify-end lg:pl-6"
                >
                    <div className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[560px] min-h-[420px] sm:min-h-[520px] lg:min-h-[680px]">
                        <Image
                            src="/images/right-hero.png"
                            alt="Mobile app screen"
                            fill
                            className="object-contain drop-shadow-2xl"
                            priority
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
