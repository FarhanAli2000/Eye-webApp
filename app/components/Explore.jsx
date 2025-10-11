// components/Explore.jsx
"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Hls from "hls.js";

export default function Explore() {
  const videoRef = useRef(null);
  const HLS_SRC = "https://customer-leo8lubv91ct4vwd.cloudflarestream.com/your-video-id/manifest/video.m3u8https://customer-leo8lubv91ct4vwd.cloudflarestream.com/5b9c7ef81788fa096eb7691336ef2b0d/manifest/video.m3u8";
  // 🔁 Replace the above URL with your Cloudflare Stream HLS link (.m3u8)

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls;

    if (Hls.isSupported()) {
      // ✅ Works on Chrome/Edge/Firefox
      hls = new Hls({ maxBufferLength: 10 });
      hls.loadSource(HLS_SRC);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.muted = true; // Required for autoplay
        video.play().catch(() => {});
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // ✅ Safari native support
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
            Explore Inglewood
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Your city at your fingertips. Discover restaurants, shops,
            cultural hotspots, and hidden gems you won’t find on big-name apps.
            From weekend festivals to cozy cafés, The Eye App helps you experience
            the best of Inglewood—curated for locals, loved by visitors.
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
              scale: 1.03,
              boxShadow: "0px 8px 25px rgba(0,0,0,0.25)",
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

      </div>
    </section>
  );
}
