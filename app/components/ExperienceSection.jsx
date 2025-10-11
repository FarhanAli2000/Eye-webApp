// components/AlertsSection.jsx
"use client";
import React from "react";

export default function ExperienceSection() {
    return (
        <section className="w-full bg-white py-16">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Premium Experience
                    </h2>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        Go beyond the basics with exclusive perks. Premium users enjoy turn-by-turn navigation, live parking availability, priority alerts, and special rewards from local businesses. With Premium, your Inglewood experience becomes faster, more convenient, and more rewarding every day.
                    </p>
                </div>

                {/* Right Side - Video */}
                {/* <div className="flex justify-center">
                    <video
                        src="/videos/Premium Experience.mp4" 
                        controls
                        autoPlay
                        loop
                        muted
                        className="rounded-xl shadow-lg w-full max-w-2xl h-[320px] object-cover"
                    />
                </div> */}


            </div>
        </section>
    );
}
