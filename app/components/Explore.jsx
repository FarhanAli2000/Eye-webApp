// components/Explore.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Explore() {
  return (
    <section className="w-full py-14 bg-gradient-to-r from-[#92E0FD] to-[#FFFFFF]">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Explore Inglewood
          </h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Your city at your fingertips. Discover restaurants, shops,
            cultural hotspots, and hidden gems you won’t find on big-name apps.
            From weekend festivals to cozy cafés, The Eye App helps you experience
            the best of Inglewood—curated for locals, loved by visitors.
          </p>
        </motion.div>

        {/* Right Side - Static Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
        >
          <Image
            src="/images/Explore-Inglewood.png"
            alt="Explore Inglewood"
            width={600}
            height={350}
            className="rounded-xl object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}
