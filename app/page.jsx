// app/page.tsx (or app/page.jsx if you're not using TypeScript)

import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar/page";
import HeroSection from "./components/HeroSection/page";
import VideoSection from "./components/VideoSection/page"
import AboutSection from "./components/AboutSection/page"
import StatsSection from "./components/StatsSection/page"
import Feature from "./components/Feature/page"
import Testimonial from "./components/TestimonialCarousel/page"
import FAQ from "./components/FAQ/page"
import Footer from "./components/Footer/page"


export default function Home() {
  return (
    <> 
     <Head>
                <title>  The Eye App—Stay Connected in Inglewood</title>
                <meta name="description" content="  Get real-time alerts, events, and city updates with The Eye App, your all-in-one guide to Inglewood living." />
                {/* <meta name="keywords" content="contact, support, nextjs" /> */}
                <meta property="og:title" content="Feature" />
            </Head>
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0f0f0f] text-gray-800 dark:text-gray-100">

      <Navbar />

      <HeroSection />
      <VideoSection />
      <AboutSection />

      <StatsSection />
      <Feature />
      <Testimonial />
      <FAQ />
      <Footer />
      {/* <div className="flex flex-col items-center justify-center flex-1 px-6 py-16">
        <div className="max-w-3xl text-center flex flex-col items-center gap-6">

          <Image
            src="/next.svg"
            alt="Next.js logo"
            width={120}
            height={30}
            className="dark:invert mb-4"
          />

          <h1 className="text-4xl sm:text-5xl font-bold">Hi, I'm Farhan 👋</h1>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-xl">
            I’m a passionate developer building modern web applications with Next.js, React, and Tailwind CSS.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link
              href="#projects"
              className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-md text-sm font-medium hover:opacity-90 transition"
            >
              View Projects
            </Link>

            <Link
              href="#contact"
              className="border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Contact Me
            </Link>
          </div>
        </div>
        <Footer />
      </div> */}
    </div>
    </>
  );
}
