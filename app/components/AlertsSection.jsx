"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AlertsSection() {
  return (
    <section className="w-full bg-gradient-to-b from-[#92E0FD] to-[#FFFFFF] py-10 md:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Real-Time Alerts
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl">
            Never miss important updates again. The Eye App delivers instant alerts
            on traffic delays, safety notices, weather warnings, and citywide
            news—all in real time. Stay prepared, make better decisions, and keep
            your day running smoothly.
          </p>
        </motion.div>

        {/* Right Side - Static Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
        >
          <Image
            src="/images/Real3.png"
            alt="Real-Time Alerts"
            width={560}
            height={340}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl rounded-xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
