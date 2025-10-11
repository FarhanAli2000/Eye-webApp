// components/VideoSection.jsx
"use client";
import React, { useEffect, useRef } from "react";
import Hls from "hls.js";

const VideoSection = ({
    title = "Stay Connected. Stay Informed.",
    description = "Discover how The Eye App keeps you updated in real time.",
    videoUrl = "https://customer-leo8lubv91ct4vwd.cloudflarestream.com/cf81de2c214ac18f88a90fd46b22bae1/manifest/video.m3u8"
}) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // agar browser HLS native support kare
        if (video.canPlayType("application/vnd.apple.mpegurl")) {
            video.src = videoUrl;
        } else if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(videoUrl);
            hls.attachMedia(video);

            // optional: error handling
            hls.on(Hls.Events.ERROR, function (event, data) {
                console.error("HLS error:", event, data);
            });

            return () => {
                hls.destroy();
            };
        } else {
            console.error("This browser does not support HLS");
        }
    }, [videoUrl]);

    return (
        <section className="w-full py-12 px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                {title}
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                {description}
            </p>
            <div className="mt-8 flex justify-center">
                <div className="relative w-full max-w-4xl bg-gray-300 rounded-lg overflow-hidden flex items-center justify-center">
                    <video
                        ref={videoRef}
                        controls
                        className="w-full h-auto rounded-lg object-contain"
                    >
                        {/* Fallback source */}
                        <source src={videoUrl} type="application/vnd.apple.mpegurl" />
                        Your browser does not support HTML5 video.
                    </video>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
