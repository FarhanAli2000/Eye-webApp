"use client";
import { motion } from "framer-motion";

export default function Locations() {
    return (
        <section className="w-full py-16 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                
                {/* Heading */}
                <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <p className="text-sm font-semibold text-gray-600">Our offices</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-1">
                        Locations
                    </h2>
                    <p className="mt-3 text-gray-600 max-w-2xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </motion.div>

                {/* Map */}
                <motion.div
                    className="w-full h-[400px] rounded-xl overflow-hidden shadow-md"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10897.433403403742!2d19.0502744!3d47.497912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc429e2f6aab%3A0xe7d8b7cbdeb18f!2sBudapest%2C%20Hungary!5e0!3m2!1sen!2shu!4v1705152342342!5m2!1sen!2shu"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </motion.div>
            </div>
        </section>
    );
}
