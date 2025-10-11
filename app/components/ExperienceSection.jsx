// components/ExperienceSection.jsx
"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Hls from "hls.js";

export default function ExperienceSection() {
  const videoRef = useRef(null);

  // 🔁 Replace this link with your actual Cloudflare or HLS (.m3u8) stream URL
  const HLS_SRC =
"https://customer-leo8lubv91ct4vwd.cloudflarestream.com/e7b2e6caad39134a838131afe0e84e5d/manifest/video.m3u8"
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls;

    // ✅ Works for Chrome, Edge, Firefox using HLS.js
    if (Hls.isSupported()) {
      hls = new Hls({ maxBufferLength: 10 });
      hls.loadSource(HLS_SRC);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.muted = true; // required for autoplay
        video.play().catch(() => {});
      });
    }
    // ✅ Safari has native HLS support
    else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = HLS_SRC;
      video.muted = true;
      video.play().catch(() => {});
    }

    return () => {
      if (hls) hls.destroy();
    };
  }, []);

  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Premium Experience
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Go beyond the basics with exclusive perks. Premium users enjoy turn-by-turn 
            navigation, live parking availability, priority alerts, and special rewards 
            from local businesses. With Premium, your Inglewood experience becomes faster, 
            more convenient, and more rewarding every day.
          </p>
        </motion.div>

        {/* Right Side - Video (HLS.js) */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.video
            ref={videoRef}
            controls
            loop
            playsInline
            muted
            className="rounded-xl shadow-lg w-full max-w-2xl h-[320px] object-cover"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 8px 25px rgba(0,0,0,0.25)",
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

      </div>
    </section>
  );
}
