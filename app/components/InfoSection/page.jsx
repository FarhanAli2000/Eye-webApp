"use client";

import Image from "next/image";

export default function InfoSection() {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* Left Side - Image / Illustration */}
                <div className="flex justify-center">
                    <div className="relative w-full max-w-2xl h-[400px] rounded-xl overflow-hidden shadow-lg">
                        <Image
                            src="/images/eye.png"
                            alt="Info Section Illustration"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>


                {/* Right Side - Text */}
                <div>
                    <p className="text-teal-600 font-semibold mb-2">Our Mission</p>
                    <h2 className="text-4xl font-bold text-gray-900 leading-snug mb-6">
                        Long heading is what you see here in this info section
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
                        ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat
                        wisi, condimentum sed, commodo vitae, ornare sit amet, wisi.
                    </p>
                </div>
            </div>
        </section>
    );
}
