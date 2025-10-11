// components/TransitSection.jsx
"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Hls from "hls.js";

export default function TransitSection() {
  const videoRef = useRef(null);

  // 🔁 Replace this with your actual HLS video link (.m3u8)
  const HLS_SRC =
    "https://customer-leo8lubv91ct4vwd.cloudflarestream.com/your-video-id/manifest/video.m3u8https://customer-leo8lubv91ct4vwd.cloudflarestream.com/d36de7b0aa7dc7fcffec4b7784ea8391/manifest/video.m3u8";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls;

    // ✅ HLS.js for Chrome/Edge/Firefox
    if (Hls.isSupported()) {
      hls = new Hls({ maxBufferLength: 10 });
      hls.loadSource(HLS_SRC);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.muted = true;
        video.play().catch(() => {});
      });
    }
    // ✅ Safari supports native HLS
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
        {/* Left Side - Video */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -60, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9 }}
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

        {/* Right Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Mobility & Transit
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
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
