// components/RemindersSection.jsx
"use client";
import React from "react";

export default function Connection() {
    return (
        <section className="w-full bg-white py-16">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left Side - Video */}
                <div className="flex justify-center">
                    <video
                        src="/videos/data5.mp4"
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
                        Community Connection
                    </h2>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                        Built for Inglewood, by Inglewood. The Eye App brings people and businesses together to strengthen the community. Discover local entrepreneurs, support family-owned shops, and engage in events that celebrate the city’s spirit. It’s more than an app—it’s your connection to community life.
                    </p>
                </div>

            </div>
        </section>
    );
}
