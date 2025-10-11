// components/Connection.jsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Hls from "hls.js";

export default function Connection() {
  const videoRef = useRef(null);
  const [err, setErr] = useState(null);

  // ✅ EXACTLY ONE valid HLS (.m3u8) URL
  const HLS_SRC ="https://customer-leo8lubv91ct4vwd.cloudflarestream.com/fe9ff36588e98e9c89996e6b5c1a6171/manifest/video.m3u8"
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls;

    try {
      if (Hls.isSupported()) {
        // Works on Chrome/Edge/Firefox
        hls = new Hls({ maxBufferLength: 10, enableWorker: true });
        hls.loadSource(HLS_SRC);
        hls.attachMedia(video);

        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          video.muted = true; // autoplay policies
          video.play().catch(() => {});
        });

        hls.on(Hls.Events.ERROR, (_, data) => {
          if (data?.fatal) {
            setErr(`${data.type}: ${data.details || "fatal error"}`);
            switch (data.type) {
              case Hls.ErrorTypes.NETWORK_ERROR:
                hls.startLoad();
                break;
              case Hls.ErrorTypes.MEDIA_ERROR:
                hls.recoverMediaError();
                break;
              default:
                hls.destroy();
            }
          }
        });
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        // Safari native
        video.src = HLS_SRC;
        video.muted = true;
        video.play().catch(() => {});
      } else {
        setErr("HLS not supported in this browser.");
      }
    } catch (e) {
      setErr(String(e));
    }

    return () => {
      if (hls) hls.destroy();
    };
  }, [HLS_SRC]);

  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Video (HLS.js) */}
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
            preload="metadata"
            className="rounded-xl shadow-lg w-full max-w-2xl h-[320px] object-cover"
            whileHover={{
              scale: 1.05,
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
            Community Connection
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
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
