"use client";
import { Mail, MessageSquare, Phone } from "lucide-react";

export default function ContactInfo() {
    const info = [
        {
            title: "Email",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.",
            value: "hello@relume.io",
            link: "mailto:hello@relume.io",
            icon: <Mail className="w-10 h-10 text-[#086E86]" />,
        },
        {
            title: "Live Chat",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.",
            value: "+1 (555) 000-0000",
            link: "tel:+15550000000",
            icon: <MessageSquare className="w-10 h-10 text-[#086E86]" />,
        },
        {
            title: "Phone",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.",
            value: "123 Sample St, Sydney NSW 2000 AU",
            link: "https://goo.gl/maps/example", // 👈 apna map link daal sakte ho
            icon: <Phone className="w-10 h-10 text-[#086E86]" />,
        },
    ];

    return (
        <section className="w-full bg-[#A6D3E2] py-16">
            <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center md:text-left">
                {info.map((item, index) => (
                    <div key={index} className="space-y-3">
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
                    </div>
                ))}
            </div>
        </section>
    );
}
