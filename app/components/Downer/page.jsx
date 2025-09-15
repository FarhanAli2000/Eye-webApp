// components/Downer/page.jsx
"use client";
import Image from "next/image";

export default function Downer() {
    return (
        <section className="w-full bg-white ">
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div>
                    <p className="text-teal-600 font-semibold text-sm">Our Mission</p>
                    <h2 className="text-4xl font-bold text-gray-900 mt-2">
                        Long heading is what you see here in this feature section
                    </h2>
                    <p className="text-gray-600 mt-6 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        varius enim in eros elementum tristique. Duis cursus, mi quis
                        viverra ornare, eros dolor interdum nulla, ut commodo diam libero
                        vitae erat.
                    </p>
                </div>

                {/* Right Side - Single Image */}
                <div className="flex justify-center">
                    <div className="relative w-[450px] h-[900px]">
                        <Image
                            src="/images/2mobiles.png" // <-- apna phone image yahan rakho (public/phone.png)
                            alt="App preview"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
