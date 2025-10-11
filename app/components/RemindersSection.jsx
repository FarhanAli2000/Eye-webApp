// components/RemindersSection.jsx
"use client";
import React from "react";

export default function RemindersSection() {
    return (
        <section className="w-full bg-white py-16">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* <p>asda</p> */}
                {/* Left Side - Video */}
                {/* <div className="flex justify-center">
                    <video
                        src="/videos/Smart Reminders.mp4" 
                        controls
                        autoPlay
                        loop
                        muted
                        className="rounded-xl shadow-lg w-full max-w-2xl h-[320px] object-cover"
                    />
                </div> */}

                {/* Right Side - Text */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Smart Reminders
                    </h2>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                        Life is busy—The Eye App keeps you on track. Save events, set
                        automatic reminders, and get notified before something important
                        happens. Whether it’s a farmers’ market, a road closure, or your
                        favorite concert, you’ll always be in the loop.
                    </p>
                </div>

            </div>
        </section>
    );
}
