// components/AlertsSection.jsx
"use client";
import React from "react";

export default function Explore() {
    return (
        <section className="w-full bg-white py-16">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Explore Inglewood
                    </h2>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        Your city at your fingertips. Discover restaurants, shops, cultural hotspots, and hidden gems you won’t find on big-name apps. From weekend festivals to cozy cafés, The Eye App helps you experience the best of Inglewood—curated for locals, loved by visitors.

                    </p>
                </div>

                {/* Right Side - Video */}
                <div className="flex justify-center">
                    <video
                        src="/videos/data1.mp4"
                        controls
                        autoPlay
                        loop
                        muted
                        className="rounded-xl shadow-lg w-full max-w-2xl h-[320px] object-cover"
                    />
                </div>


            </div>
        </section>
    );
}
