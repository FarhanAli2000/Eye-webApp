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
    <section className="relative bg-[#86C1D3] overflow-hidden py-16 sm:py-20 md:py-32 lg:py-44">
      {/* Left Mobile Image */}
      <div
        className="
          pointer-events-none
          absolute left-0 bottom-0 translate-y-0
          w-24 h-44 opacity-60
          sm:w-28 sm:h-52 sm:opacity-70
          md:top-1/2 md:-translate-y-1/2 md:bottom-auto md:w-40 md:h-72 md:opacity-100
          lg:w-[240px] lg:h-[460px]
        "
        aria-hidden
      >
        <Image
          src="/images/left.png"
          alt="Mobile mockup left"
          fill
          className="object-contain"
          sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, (max-width: 1024px) 160px, 240px"
          priority
        />
      </div>

      {/* Right Mobile Image */}
      <div
        className="
          pointer-events-none
          absolute right-0 bottom-0 translate-y-0
          w-24 h-44 opacity-60
          sm:w-28 sm:h-52 sm:opacity-70
          md:top-1/2 md:-translate-y-1/2 md:bottom-auto md:w-30 md:h-72 md:opacity-100
          lg:w-[220px] lg:h-[460px]
        "
        aria-hidden
      >
        <Image
          src="/images/right.png"
          alt="Mobile mockup right"
          fill
          className="object-contain"
          sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, (max-width: 1024px) 160px, 240px"
        />
      </div>

      {/* Stats Center */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <div
          className="
            mx-auto text-center
            grid gap-8
            grid-cols-1
            xs:grid-cols-2
            sm:grid-cols-3
          "
        >
          {statsData.map((item, i) => (
            <div key={i} className="space-y-2">
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#086E86]">
                {item.number}
              </h2>
              <p className="text-base sm:text-lg text-gray-800">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
