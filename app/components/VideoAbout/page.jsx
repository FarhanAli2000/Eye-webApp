// components/VideoAbout.jsx
"use client";
import React, { useEffect, useRef } from "react";
import Hls from "hls.js";

const VideoAbout = ({
    title = "See How The Eye App Brings Inglewood Together",
    description = "From block parties to business spotlights, The Eye App delivers real-time stories captured by the people who live and work here. Watch how neighbors, city partners, and entrepreneurs use the platform to share what is happening on their street right now.",
    videoUrl = "https://customer-leo8lubv91ct4vwd.cloudflarestream.com/5e4db3cc02ae33e66696d256a9cc7204/manifest/video.m3u8",
}) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Agar Safari hai ya browser direct HLS support karta hai
        if (video.canPlayType("application/vnd.apple.mpegurl")) {
            video.src = videoUrl;
        } 
        // Agar Hls.js support hai (Chrome/Firefox ke liye)
        else if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(videoUrl);
            hls.attachMedia(video);

            hls.on(Hls.Events.ERROR, function (event, data) {
                console.error("HLS error:", data);
            });

            return () => {
                hls.destroy();
            };
        } else {
            console.error("This browser does not support HLS");
        }
    }, [videoUrl]);

    return (
        <section className="w-full py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6 flex flex-col gap-10 items-center">

                {/* Text Section */}
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        {description}
                    </p>
                </div>

                {/* Video Section */}
                <div className="flex justify-center w-full">
                    <div className="relative w-full max-w-4xl h-[250px] sm:h-[400px] bg-gray-300 rounded-lg overflow-hidden flex items-center justify-center">
                        <video
                            ref={videoRef}
                            controls
                            autoPlay
                            loop
                            muted
                            className="w-full h-full object-contain rounded-lg bg-black"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoAbout;
