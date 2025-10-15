"use client";
import React from "react";
import { motion } from "framer-motion";

export default function TrustedSection() {
  return (
    <section className="w-full bg-white py-10 md:py-14">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Trusted & Accurate
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed">
            Accuracy you can depend on. Every update is verified and delivered in real time
            to ensure you get the right information at the right moment. From urgent alerts
            to daily city updates, The Eye App keeps your trust at the center.
          </p>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.img
            src="/images/Trusted-Accurate.png"
            alt="Trusted & Accurate"
            className="rounded-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

      </div>
    </section>
  );
}
