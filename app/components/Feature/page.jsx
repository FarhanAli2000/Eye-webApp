"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";

export default function Feature() {
    const features = [
        {
            title: "Live Alerts",
            description: "Instant updates on traffic, safety notices, and emergencies.",
            image: "/images/features/1.png",
        },
        {
            title: "Local Events",
            description: "Never miss concerts, markets, festivals, or community gatherings.",
            image: "/images/features/2.png",
        },
        {
            title: "City Services",
            description: "One-tap access to essential government and utility services.",
            image: "/images/features/3.png",
        },
        {
            title: "Business Directory",
            description: "Find trusted local businesses with ease.",
            image: "/images/features/4.png",
        },
        {
            title: "Community Updates",
            description: "Get reliable neighborhood news and updates.",
            image: "/images/features/5.png",
        },
        {
            title: "Emergency Alerts",
            description: "Be the first to know about critical citywide announcements.",
            image: "/images/features/6.png",
        },
    ];

    return (
        <section className="w-full py-16 bg-white">
            <div className="max-w-6xl mx-auto px-6 text-center">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-gray-900"
                >
                     The Eye App Features
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-gray-600 mt-3 max-w-2xl mx-auto"
                >
                   Stay informed, stay safe, and stay connected ,  all in one app designed for the City of Champions.
                </motion.p>

                {/* Swiper Slider */}
                <div className="mt-12 relative">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        }}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="pb-12"
                    >
                        {features.map((feature, index) => (
                            <SwiperSlide key={index}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{ delay: index * 0.2, duration: 0.7, type: "spring" }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05 }}
                                    className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
                                >
                                    <Image
                                        src={feature.image}
                                        alt={feature.title}
                                        width={400}
                                        height={300}
                                        className="object-fill w-full h-90 transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent transition-opacity duration-500 group-hover:from-black/80"></div>
                                    {/* Text */}
                                    <div className="absolute bottom-4 left-4 right-4 text-left">
                                        <motion.h3
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3, duration: 0.6 }}
                                            viewport={{ once: true }}
                                            className="text-xl font-semibold text-white"
                                        >
                                            {feature.title}
                                        </motion.h3>
                                        <motion.p
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4, duration: 0.6 }}
                                            viewport={{ once: true }}
                                            className="text-sm text-gray-200 mt-1"
                                        >
                                            {feature.description}
                                        </motion.p>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}

                        {/* Custom Arrows */}
                        <div className="swiper-button-prev !text-white !bg-black/40 hover:!bg-black/70 w-10 h-10 rounded-full flex items-center justify-center absolute top-1/2 -left-4 z-10"></div>
                        <div className="swiper-button-next !text-white !bg-black/40 hover:!bg-black/70 w-10 h-10 rounded-full flex items-center justify-center absolute top-1/2 -right-4 z-10"></div>
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
