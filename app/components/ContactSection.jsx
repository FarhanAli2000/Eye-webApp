"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CALENDLY_URL = "https://calendly.com/tofarhanali";

export default function ContactSection() {
    const [calendlyLoaded, setCalendlyLoaded] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const existingScript = document.getElementById("calendly-widget-script");
        if (existingScript) {
            if (window.Calendly) {
                setCalendlyLoaded(true);
            } else {
                existingScript.addEventListener("load", () => setCalendlyLoaded(true));
            }
            return;
        }

        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://assets.calendly.com/assets/external/widget.css";
        link.id = "calendly-widget-style";
        document.head.appendChild(link);

        const script = document.createElement("script");
        script.id = "calendly-widget-script";
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        script.onload = () => setCalendlyLoaded(true);
        script.onerror = () => setCalendlyLoaded(false);
        document.body.appendChild(script);
    }, []);

    const openCalendly = () => {
        if (typeof window === "undefined") return;
        if (window.Calendly) {
            window.Calendly.initPopupWidget({ url: CALENDLY_URL });
        } else {
            window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
        }
    };

    return (
        <section className="w-full bg-gradient-to-b from-[#92E0FD] to-white py-16">
            <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                
                {/* Left Form */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Contact Us
                    </h2>
                    <p className="text-gray-600 mt-3 mb-8">
                        We love hearing about new partnerships, feature ideas, and local happenings in Inglewood.
                        Send us a note and our team will respond within one business day.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="mb-6 rounded-lg border border-[#086E86]/20 bg-white/80 p-4 shadow-sm"
                    >
                        <h3 className="text-lg font-semibold text-gray-900">
                            Prefer to pick a time?
                        </h3>
                        <p className="mt-2 text-sm text-gray-600">
                            Schedule a call that suits you using our Calendly link. We&apos;ll confirm the details instantly.
                        </p>
                        <button
                            type="button"
                            onClick={openCalendly}
                            className="mt-4 inline-flex items-center gap-2 rounded-md bg-[#086E86] px-4 py-2 text-sm font-medium text-white shadow hover:bg-[#065a6a] focus:outline-none focus:ring-2 focus:ring-[#086E86]/40 disabled:cursor-not-allowed disabled:bg-[#086E86]/60"
                            disabled={!calendlyLoaded}
                        >
                            {calendlyLoaded ? "Book via Calendly" : "Loading Calendly…"}
                        </button>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        className="rounded-lg border border-dashed border-[#086E86]/30 bg-white/70 p-4 text-sm text-gray-600"
                    >
                        Prefer email? Reach us at{" "}
                        <a
                            href="mailto:support@theeyeapp.com"
                            className="font-semibold text-[#086E86] underline underline-offset-2"
                        >
                            support@theeyeapp.com
                        </a>{" "}
                        and we&apos;ll get back to you shortly.
                    </motion.div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="relative w-full max-w-sm h-[500px] rounded-xl overflow-hidden bg-[#086E86] flex items-center justify-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Image
                            src="/images/eye.png"
                            alt="The Eye App"
                            width={500}
                            height={500}
                            className="object-contain"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
