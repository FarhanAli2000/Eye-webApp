// components/RemindersSection.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function RemindersSection() {
  return (
    <section className="w-full bg-white py-14">
      <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Left Side - Image Replaced Here */}
        <motion.div
          className="flex justify-center md:justify-start order-2 md:order-1"
          initial={{ opacity: 0, x: -60, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <Image
            src="/images/Smart-Reminder.png"
            alt="Smart Reminders"
            width={600}
            height={350}
            priority
            className="rounded-xl object-cover max-w-full h-auto"
          />
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          className="text-center md:text-left order-1 md:order-2"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Smart Reminders
          </h2>
          <p className="mt-3 text-gray-600 leading-relaxed text-center md:text-left">
            Life is busy—The Eye App keeps you on track. Save events, set automatic reminders, 
            and get notified before something important happens. Whether it’s a farmers’ market, 
            a road closure, or your favorite concert, you’ll always be in the loop.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
