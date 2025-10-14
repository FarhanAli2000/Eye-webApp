// components/ExperienceSection.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ExperienceSection() {
  return (
    <section className="w-full py-14 bg-gradient-to-r from-[#92E0FD] to-[#FFFFFF]">
      <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center md:text-left">
            Premium Experience
          </h2>
          <p className="mt-3 text-gray-700 leading-relaxed text-center md:text-left">
            Go beyond the basics with exclusive perks. Premium users enjoy turn-by-turn 
            navigation, live parking availability, priority alerts, and special rewards 
            from local businesses. With Premium, your Inglewood experience becomes faster, 
            more convenient, and more rewarding every day.
          </p>
        </motion.div>

        {/* Right Side - Static Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src="/images/Premium-Experience.png"
            alt="Premium Experience"
            width={600}
            height={350}
            className="rounded-xl object-cover max-w-full h-auto"
          />
        </motion.div>

      </div>
    </section>
  );
}
