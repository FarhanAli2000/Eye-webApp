"use client";
import { Mail, MessageSquare, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactInfo() {
    const info = [
        {
            title: "Email Support",
            description:
                "Need help getting started or want to share feedback? The Inglewood support crew monitors this inbox daily.",
            value: "support@theeyeapp.com",
            link: "mailto:support@theeyeapp.com",
            icon: <Mail className="w-10 h-10 text-[#086E86]" />,
        },
        {
            title: "Live Chat",
            description:
                "Open the app and tap the chat bubble to connect with a real person from 8am-8pm PT, seven days a week.",
            value: "chat.theeyeapp.com",
            link: "https://chat.theeyeapp.com",
            icon: <MessageSquare className="w-10 h-10 text-[#086E86]" />,
        },
        {
            title: "Call Us",
            description:
                "Prefer the phone? Give us a ring Monday through Friday and we will walk you through the latest updates.",
            value: "+1 (424) 555-0136",
            link: "tel:+14245550136",
            icon: <Phone className="w-10 h-10 text-[#086E86]" />,
        },
    ];

    return (
        <section className="w-full bg-[#E4F5FB] py-16">
            <motion.div
                className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center md:text-left"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.2,
                        },
                    },
                }}
            >
                {info.map((item, index) => (
                    <motion.div
                        key={index}
                        className="space-y-3 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer"
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {item.icon}
                        <h3 className="text-xl font-semibold text-gray-900">
                            {item.title}
                        </h3>
                        <p className="text-gray-700">{item.description}</p>
                        <a
                            href={item.link}
                            className="text-[#086E86] font-medium underline"
                        >
                            {item.value}
                        </a>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
