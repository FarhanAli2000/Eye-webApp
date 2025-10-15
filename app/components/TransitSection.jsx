// components/TransitSection.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TransitSection() {
  return (
    <section className="w-full bg-white py-14">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* Left Side - Static Image */}
        <motion.div
          className="flex justify-center order-2 md:order-1"
          initial={{ opacity: 0, x: -60, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
        >
          <Image
            src="/images/Mobility-Transit.png"   // 🔁 Change this to your image path
            alt="Mobility & Transit"
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
            Mobility & Transit
          </h2>
          <p className="mt-3 text-gray-600 leading-relaxed">
            Navigate Inglewood smarter. Access real-time transit updates, find nearby
            mobility hubs, and explore the fastest routes to your destination. Whether
            you’re commuting to work or planning an outing, The Eye App keeps your
            travel easy, reliable, and stress-free.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
