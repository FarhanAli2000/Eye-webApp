// components/VideoAbout.jsx
"use client";
import React from "react";

const VideoAbout = ({
    title = "Medium length section heading goes here",
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    videoUrl = "/videos/About.mp4", // default local video
}) => {
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
                            src={videoUrl}
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
