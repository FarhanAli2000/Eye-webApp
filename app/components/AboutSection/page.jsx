// components/AboutSection/page.jsx
"use client";
import Image from "next/image";

export default function AboutSection() {
    return (
        <section className="relative bg-white py-20">

            <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Image */}
                <div className="flex justify-center">
                    <Image
                        src="/images/side.png" // 👈 apni image ka path (public/images/209.png)
                        alt="About The Eye App"
                        width={500}
                        height={500}
                        className="object-contain"
                    />
                </div>

                {/* Right Content */}
                <div className="space-y-6">
                    <h4 className=" font-semibold text-lg text-[#086E86]">
                        Inglewood’s Digital Connection
                    </h4>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                        ABOUT THE EYE APP
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        The Eye App is built to keep residents connected with real-time
                        updates, local discoveries, and tools to navigate city life with
                        ease. Whether it’s traffic alerts, events, or hidden gems,
                        everything you need is in one place.
                    </p>

                    {/* Features List */}
                    <div className="space-y-4">
                        <div className="flex items-start gap-4 bg-gray-100 p-4 rounded-lg shadow-sm">
                            <span className="bg-[#086E86] text-white font-bold px-3 py-1 rounded-md">
                                1
                            </span>

                            <p className="font-medium text-gray-800">
                                Stay updated with real-time traffic alerts and reminders.
                            </p>
                        </div>

                        <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg shadow-sm">
                            <span className="bg-[#086E86] text-white font-bold px-3 py-1 rounded-md">
                                2
                            </span>
                            <p className="font-medium text-gray-800">
                                Discover restaurants, community events, and local transit hubs.
                            </p>
                        </div>

                        <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg shadow-sm">
                            <span className="bg-[#086E86] text-white font-bold px-3 py-1 rounded-md">
                                3
                            </span>
                            <p className="font-medium text-gray-800">
                                Unlock turn-by-turn navigation, parking access, exclusive
                                rewards, and event perks.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
