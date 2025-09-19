// components/RemindersSection.jsx
"use client";
import React from "react";

export default function TransitSection() {
    return (
        <section className="w-full bg-white py-16">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left Side - Video */}
                <div className="flex justify-center">
                    <video
                        src="/videos/data4.mp4"
                        controls
                        autoPlay
                        loop
                        muted
                        className="rounded-xl shadow-lg w-full max-w-2xl h-[320px] object-cover"
                    />
                </div>

                {/* Right Side - Text */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Mobility & Transit
                    </h2>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                        Navigate Inglewood smarter. Access real-time transit updates, find nearby mobility hubs, and explore the fastest routes to your destination. Whether you’re commuting to work or planning an outing, The Eye App keeps your travel easy, reliable, and stress-free.
                    </p>
                </div>

            </div>
        </section>
    );
}
