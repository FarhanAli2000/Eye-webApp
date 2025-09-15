// components/HeroSection/page.jsx
"use client";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat overflow-hidden"
            style={{ backgroundImage: "url('/images/backcolor.png')" }}
        >
            <div className="absolute inset-0 bg-white/70" /> {/* overlay */}

            <div className="relative max-w-7xl mx-auto px-4 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

                {/* Left Text Section */}
                <div className="space-y-6">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
                        Resonate with the visitor&apos;s problem
                    </h1>
                    <p className="text-gray-700 text-lg max-w-lg">
                        Describe exactly what your product or service does to solve this
                        problem. Avoid using verbose words or phrases.
                    </p>

                    {/* App Store & Google Play images */}
                    <div className="flex gap-4">
                        <div className="relative w-40 h-14">
                            <Image
                                src="/images/appstore.png"
                                alt="App Store"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="relative w-40 h-14">
                            <Image
                                src="/images/google.png"
                                alt="Google Play"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Mobile Mockup */}
                <div className="flex justify-center lg:justify-end relative">
                    <div className="relative w-[420px] sm:w-[500px] h-[820px]">
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
