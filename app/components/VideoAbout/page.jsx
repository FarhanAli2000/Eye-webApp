// components/VideoAbout.jsx
"use client";
import React, { useEffect, useRef } from "react";
import Hls from "hls.js";

const VideoAbout = ({
    title = "Medium length section heading goes here",
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    videoUrl = "https://customer-leo8lubv91ct4vwd.cloudflarestream.com/452f4c92011412641018976f0a12a4bd/manifest/video.m3u8",
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
                <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto md:mx-0">
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
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoAbout;
