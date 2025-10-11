// components/StatsSection/page.jsx
"use client";
import Image from "next/image";

export default function StatsSection() {
    return (
        <section className="relative bg-[#86C1D3] py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
                {/* <div className="relative w-[180px] h-[360px] rotate-[-10deg]">
                    <Image
                        src="/images/left.png"
                        alt="Mobile mockup left"
                        fill
                        className="object-contain"
                    />
                </div> */}
                {/* Left Mobile Image */}
                <div className="hidden md:block">

                </div>

                {/* Stats Center */}
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
                    <div>
                        <h2 className="text-4xl font-bold text-[#086E86]">50k+</h2>
                        <p className="text-gray-800 mt-2">Downloads</p>
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold text-[#086E86]">1,200+</h2>
                        <p className="text-gray-800 mt-2">Events</p>
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold text-[#086E86]">250+</h2>
                        <p className="text-gray-800 mt-2">Businesses</p>
                    </div>
                </div>

                {/* Right Mobile Image */}
                <div className="hidden md:block">
                    <div className="relative w-[180px] h-[360px]">
                        <Image
                            src="/images/right.png" // 👈 apni image ka path
                            alt="Mobile mockup right"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
