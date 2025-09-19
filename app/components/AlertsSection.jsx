// components/AlertsSection.jsx
"use client";
import React from "react";

export default function AlertsSection() {
    return (
        <section className="w-full bg-gradient-to-b from-[#92E0FD] to-[#FFFFFF] py-16">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Real-Time Alerts
                    </h2>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        Never miss important updates again. The Eye App delivers instant alerts
                        on traffic delays, safety notices, weather warnings, and citywide
                        news—all in real time. Stay prepared, make better decisions, and keep
                        your day running smoothly.
                    </p>
                </div>

                {/* Right Side - Video */}
                <div className="flex justify-center">
                    <video
                        src="/videos/data6.mp4"
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
