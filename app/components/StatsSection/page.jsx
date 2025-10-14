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
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10">
        <div
          className="
            grid grid-cols-1
            gap-y-8 gap-x-6
            place-items-center text-center
            sm:grid-cols-2 sm:gap-y-10 sm:gap-x-8
            lg:grid-cols-3 lg:gap-x-10
          "
        >
          {statsData.map((item, i) => (
            <div
              key={i}
              className="
                flex flex-col items-center text-center
                gap-2 sm:gap-3
              "
            >
              <h2
                className="
                  font-extrabold tracking-tight text-[#086E86]
                  text-[clamp(2.4rem,6vw,3.3rem)]
                  leading-[1.05]
                "
              >
                {item.number}
              </h2>
              <p
                className="
                  text-gray-800
                  text-[clamp(0.95rem,2.8vw,1.1rem)]
                  leading-relaxed
                "
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
