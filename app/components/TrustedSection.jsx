// components/TrustedSection.jsx
"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Hls from "hls.js";

export default function TrustedSection() {
  const videoRef = useRef(null);

  // 🔁 Replace with your actual HLS (.m3u8) URL (e.g., Cloudflare Stream)
  const HLS_SRC =
    "https://customer-leo8lubv91ct4vwd.cloudflarestream.com/your-video-id/manifest/video.m3u8https://customer-leo8lubv91ct4vwd.cloudflarestream.com/d606a1fc0ad1b5235754e76258ae81ff/manifest/video.m3u8";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls;

    if (Hls.isSupported()) {
      // Chrome/Edge/Firefox
      hls = new Hls({ maxBufferLength: 10 });
      hls.loadSource(HLS_SRC);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.muted = true; // needed for autoplay policies
        video.play().catch(() => {});
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Safari (native HLS)
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
            Trusted & Accurate
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Accuracy you can depend on. Every update is verified and delivered in real time to
            ensure you get the right information at the right moment. From urgent alerts to
            daily city updates, The Eye App keeps your trust at the center.
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
            whileHover={{ scale: 1.05, boxShadow: "0px 8px 25px rgba(0,0,0,0.25)" }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

      </div>
    </section>
  );
}
