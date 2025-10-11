"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Feature() {
    const features = [
        {
            title: "Live Alerts",
            description:
                "Instant updates on traffic, safety notices, and more in real time.",
            image: "/images/farhan.jpg",
        },
        {
            title: "Local Events",
            description:
                "Stay connected with community events happening near you.",
            image: "/images/farhan.jpg",
        },
        {
            title: "City Services",
            description:
                "Quick access to important government and city services.",
            image: "/images/farhan.jpg",
        },
        {
            title: "Business Directory",
            description:
                "Find trusted local businesses with ease and confidence.",
            image: "/images/farhan.jpg",
        },
        {
            title: "Community Updates",
            description:
                "Stay informed with reliable neighborhood updates.",
            image: "/images/farhan.jpg",
        },
        {
            title: "Emergency Alerts",
            description:
                "Get notified instantly about critical citywide alerts.",
            image: "/images/farhan.jpg",
        },
    ];

    return (
        <section className="w-full py-16 bg-white">
            <div className="max-w-6xl mx-auto px-6 text-center">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Main Features
                </h2>
                <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                    The Eye App keeps you connected with real-time updates,
                    local events, trusted businesses, and more — all in one place.
                </p>

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
                                <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                                    <Image
                                        src={feature.image}
                                        alt={feature.title}
                                        width={400}
                                        height={300}
                                        className="object-cover w-full h-72"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                                    {/* Text */}
                                    <div className="absolute bottom-4 left-4 right-4 text-left">
                                        <h3 className="text-xl font-semibold text-white">
                                            {feature.title}
                                        </h3>
                                        <p className="text-sm text-gray-200 mt-1">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
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
