"use client";
import Image from "next/image";

export default function FounderSection() {
    return (
        <section className="w-full bg-gradient-to-b from-[#92E0FD] to-[#FFFFFF] py-16">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left Side - Text */}
                <div>
                    <p className="text-sm font-semibold text-teal-700 mb-2">About Founder</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Courtney Reddix
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Courtney Reddix is the founder and driving force behind The Eye App.
                        As a passionate advocate for community engagement, Courtney recognized
                        that residents of Inglewood needed a faster, smarter way to stay informed
                        about their city.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        With a background in entrepreneurship and a deep connection to her community,
                        she set out to bridge the gap between technology and everyday life in Inglewood.
                        Her vision was clear: create an app that empowers people with real-time updates,
                        supports local businesses, and strengthens the sense of belonging within the city.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Courtney’s leadership and commitment to innovation continue to shape The Eye App
                        into more than just a mobile tool—it’s becoming a community platform that reflects
                        the heartbeat of Inglewood.
                    </p>
                </div>

                {/* Right Side - Founder Image */}
                <div className="flex justify-center">
                    <div className="relative w-[320px] h-[420px] md:w-[380px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src="/images/founder.png" // founder image ka path
                            alt="Founder"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
