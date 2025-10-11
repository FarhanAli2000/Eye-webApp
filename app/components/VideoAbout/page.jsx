"use client";

export default function VideoAbout() {
    return (
        <section className="w-full py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* Left Side - Local Video */}
                {/* <div className="flex justify-center">
                    <video
                        src="/videos/About.mp4" 
                        controls
                        autoPlay
                        loop
                        muted
                        className="rounded-xl shadow-lg w-full max-w-2xl h-[320px] object-cover"
                    />
                </div> */}


                {/* Right Side - Text */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Medium length section heading goes here
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                        Duis cursus, mi quis viverra ornare, eros dolor interdum nulla,
                        ut commodo diam libero vitae erat.
                    </p>
                </div>
            </div>
        </section>
    );
}
