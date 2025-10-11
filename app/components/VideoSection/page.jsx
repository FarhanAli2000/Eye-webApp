// components/VideoSection.jsx
"use client";
import React from "react";

const VideoSection = ({
    title = "Medium length section heading goes here",
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    videoUrl = "https://www.w3schools.com/html/mov_bbb.mp4" // default demo video
}) => {
    return (
        <section className="w-full py-12 px-6 text-center">
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                {title}
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                {description}
            </p>

            {/* Video Box */}
            <div className="mt-8 flex justify-center">
                <div className="relative w-full max-w-4xl h-[250px] sm:h-[400px] bg-gray-300 rounded-lg overflow-hidden flex items-center justify-center">
                    <video
                        src={videoUrl}
                        controls
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
