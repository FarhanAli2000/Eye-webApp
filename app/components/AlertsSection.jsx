// components/AlertsSection.jsx
"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Hls from "hls.js";

export default function AlertsSection() {
  const videoRef = useRef(null);

  // Use the HLS (.m3u8) manifest (NOT .mpd)
  const HLS_SRC =
    "https://customer-leo8lubv91ct4vwd.cloudflarestream.com/2d5cd731ffe81897753ef87c52a4f7d2/manifest/video.m3u8";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls;

    if (Hls.isSupported()) {
      // Works on Chrome/Edge/Firefox
      hls = new Hls({
        maxBufferLength: 10,
        enableWorker: true,
      });
      hls.loadSource(HLS_SRC);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        // Autoplay policies require muted + playsInline
        video.muted = true;
        video.play().catch(() => {});
      });
      hls.on(Hls.Events.ERROR, (_, data) => {
        // Optional: soft-handle recoverable errors
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              hls.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              hls.recoverMediaError();
              break;
            default:
              hls.destroy();
              break;
          }
        }
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
    <section className="w-full bg-gradient-to-b from-[#92E0FD] to-[#FFFFFF] py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Real-Time Alerts
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Never miss important updates again. The Eye App delivers instant alerts
            on traffic delays, safety notices, weather warnings, and citywide
            news—all in real time. Stay prepared, make better decisions, and keep
            your day running smoothly.
          </p>
        </motion.div>

        {/* Right Side - Video (HLS.js) */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
        >
          <motion.video
            ref={videoRef}
            controls
            loop
            playsInline
            muted
            // optional: poster while buffering
            // poster="/images/alerts-poster.jpg"
            className="rounded-xl shadow-lg w-full max-w-2xl h-[320px] object-cover"
            whileHover={{ boxShadow: "0px 8px 30px rgba(0,0,0,0.3)" }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
