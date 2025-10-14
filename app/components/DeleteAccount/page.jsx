"use client";

import { motion } from "framer-motion";

const steps = [
    {
        title: "Email Support",
        description:
            "Send an email to support@theeyeapp.com from the address associated with your account. Include your full name and the phone number used in the app.",
    },
    {
        title: "Confirm Your Request",
        description:
            "Our team will reply within 48 hours to verify your identity. Confirm the request so we can schedule the deletion and revoke access.",
    },
    {
        title: "Deletion Complete",
        description:
            "Once verified, your account and associated data will be permanently removed within 7 days. You will receive a final confirmation email.",
    },
];

export default function DeleteAccountGuide() {
    return (
        <section className="bg-gradient-to-b from-[#CFEAF3] via-white to-white py-20">
            <div className="mx-auto max-w-6xl px-6 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-slate-900 md:text-5xl"
                >
                    How to Delete Your Account
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    viewport={{ once: true }}
                    className="mx-auto mt-4 max-w-3xl text-base text-slate-700 md:text-lg"
                >
                    Follow these quick steps to permanently remove your Eye App account. We&apos;re always
                    here to help if you need support along the way.
                </motion.p>

                <div className="mt-14 grid gap-6 md:grid-cols-3">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="rounded-3xl border border-[#0D738B]/20 bg-white p-8 text-left shadow-sm"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0D738B] text-lg font-semibold text-white">
                                {index + 1}
                            </div>
                            <h2 className="mt-6 text-xl font-semibold text-slate-900">{step.title}</h2>
                            <p className="mt-3 text-base leading-relaxed text-slate-700">{step.description}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-base text-slate-600">
                    Need help? Email{" "}
                    <a
                        href="mailto:support@theeyeapp.com"
                        className="font-semibold text-[#0D738B] underline underline-offset-4"
                    >
                        support@theeyeapp.com
                    </a>{" "}
                    and we&apos;ll walk you through it.
                </div>
            </div>
        </section>
    );
}
