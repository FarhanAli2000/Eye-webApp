// components/StatsSection/page.jsx
"use client";
import Image from "next/image";

const statsData = [
    { number: "50k+", label: "Downloads" },
    { number: "1,200+", label: "Events" },
    { number: "250+", label: "Businesses" },
];

export default function StatsSection() {
    return (
        <section className="relative bg-[#86C1D3] py-24 md:py-40 lg:py-52 overflow-hidden">
            {/* Left Mobile Image - fixed at left corner */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[240px] h-[460px]">
                <Image
                    src="/images/left.png"
                    alt="Mobile mockup left"
                    fill
                    className="object-contain"
                />
            </div>

            {/* Right Mobile Image - fixed at right corner */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[240px] h-[460px] hidden md:block">
                <Image
                    src="/images/right.png"
                    alt="Mobile mockup right"
                    fill
                    className="object-contain"
                />
            </div>

            {/* Stats Center */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-center relative z-10">
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-12 text-center mx-auto">
                    {statsData.map((item, index) => (
                        <div key={index}>
                            <h2 className="text-5xl font-bold text-[#086E86]">{item.number}</h2>
                            <p className="text-lg text-gray-800 mt-3">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
