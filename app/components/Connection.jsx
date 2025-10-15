// components/Connection.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Connection() {
  return (
    <section className="w-full bg-white py-14">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Side - Static Image */}
        <motion.div
          className="flex justify-center order-2 md:order-1"
          initial={{ opacity: 0, x: -60, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src="/images/Community.png"  // 🔁 Replace with your image
            alt="Community Connection"
            width={600}
            height={350}
            className="rounded-xl  object-cover"
          />
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          className="order-1 md:order-2"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Community Connection
          </h2>
          <p className="mt-3 text-gray-600 leading-relaxed">
            Built for Inglewood, by Inglewood. The Eye App brings people and businesses 
            together to strengthen the community. Discover local entrepreneurs, support 
            family-owned shops, and engage in events that celebrate the city’s spirit. 
            It’s more than an app—it’s your connection to community life.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
