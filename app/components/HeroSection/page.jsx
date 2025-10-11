// components/HeroSection/page.jsx
"use client";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat overflow-hidden"
            style={{ backgroundImage: "url('/images/backcolor.png')" }} // 👈 apni background image ka path
        >
            <div className="absolute inset-0 bg-white/70" /> {/* 👈 optional overlay */}

            <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                {/* Left Text Section */}
                <div className="space-y-6">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                        Resonate with the visitor&apos;s problem
                    </h1>
                    <p className="text-gray-600 text-lg max-w-md">
                        Describe exactly what your product or service does to solve this
                        problem. Avoid using verbose words or phrases.
                    </p>

                    {/* Replace buttons with 2 images */}
                    <div className="flex gap-4">
                        <div className="relative w-32 h-12">
                            <Image
                                src="/images/appstore.png" // 👈 apni image ka path lagao
                                alt="App Store"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="relative w-32 h-12">
                            <Image
                                src="/images/google.png" // 👈 apni image ka path lagao
                                alt="Google Play"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Mobile Mockups */}
                <div className="flex justify-center lg:justify-end relative">
                    <div className="relative w-[320px] sm:w-[380px] h-[650px]">
                        <Image
                            src="/images/mobile.png"
                            alt="Mobile app screen"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
