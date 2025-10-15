"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Feature() {
  const features = [
    {
      title: "Live Alerts",
      description:
        "Instant updates on traffic, safety notices, and emergencies. Stay in control with real-time push notifications wherever you are.",
      image: "/images/features/1.png",
    },
    {
      title: "Local Events",
      description:
        "Never miss concerts, markets, festivals, or community gatherings. Browse curated highlights so you can plan your week with confidence.",
      image: "/images/features/2.png",
    },
    {
      title: "City Services",
      description:
        "One-tap access to essential government and utility services. Submit requests and track responses without leaving the app.",
      image: "/images/features/3.png",
    },
    {
      title: "Business Directory",
      description:
        "Find trusted local businesses with ease. Discover new favorites and read essential details at a glance.",
      image: "/images/features/4.png",
    },
    {
      title: "Community Updates",
      description:
        "Get reliable neighborhood news and updates. Share feedback with neighbors and stay connected to local voices.",
      image: "/images/features/5.png",
    },
    {
      title: "Emergency Alerts",
      description:
        "Be the first to know about critical citywide announcements. Trust timely notices that guide you to quick, informed actions.",
      image: "/images/features/6.png",
    },
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-4xl font-bold text-gray-900"
        >
          The Eye App Features
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-3 mx-auto max-w-2xl text-gray-600 text-sm sm:text-base"
        >
          Stay informed, stay safe, and stay connected, all in one app designed
          for the City of Champions.
        </motion.p>

        {/* Swiper Slider */}
        <div className="relative mt-10">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-10"
          >
            {features.map((feature, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    delay: index * 0.2,
                    duration: 0.7,
                    type: "spring",
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                  className="group relative mx-auto w-full max-w-sm sm:mx-0 sm:w-full sm:max-w-none flex h-[420px] sm:h-[500px] overflow-hidden rounded-2xl bg-gray-900/90 shadow-xl transition-shadow duration-300 hover:shadow-2xl"
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* idsiad */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute inset-x-4 bottom-4 sm:inset-x-6 sm:bottom-6 flex flex-col gap-2 text-left">
                      <h3 className="text-xl sm:text-2xl font-semibold text-white">
                        {feature.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-200">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Arrows */}
          <button className="custom-prev absolute left-2 sm:left-[-60px] top-1/2 z-20 hidden h-10 w-10 sm:flex sm:h-12 sm:w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white shadow-lg hover:bg-black/90">
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          <button className="custom-next absolute right-2 sm:right-[-60px] top-1/2 z-20 hidden h-10 w-10 sm:flex sm:h-12 sm:w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white shadow-lg hover:bg-black/90">
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
