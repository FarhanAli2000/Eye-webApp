import React from "react";

const policySections = [
    {
        heading: "1. Information We Collect",
        body: [
            "We collect information you provide directly to us such as your name, phone number, email address, and any details you share while using The Eye App.",
            "We automatically collect device information including IP address, browser details, and usage data to help us keep the platform secure and improve the experience.",
        ],
    },
    {
        heading: "2. How We Use Your Information",
        body: [
            "Deliver and improve the services, features, and content you request.",
            "Send important notices, updates, and community alerts related to your account or activity.",
            "Monitor usage, identify trends, and personalize the in-app experience to better support the Inglewood community.",
        ],
    },
    {
        heading: "3. Sharing & Disclosure",
        body: [
            "We do not sell your personal information. We may share information with trusted service providers who help us operate The Eye App and who are bound by confidentiality agreements.",
            "Information may be disclosed when required by law or to protect the rights, property, and safety of our users and the community.",
        ],
    },
    {
        heading: "4. Data Retention & Security",
        body: [
            "We retain personal information for as long as necessary to provide services and fulfill the purposes described in this policy.",
            "We use reasonable administrative, technical, and physical safeguards to protect your data. However, no system is completely secure, so please use the platform responsibly.",
        ],
    },
    {
        heading: "5. Your Choices",
        body: [
            "You can update or correct your information by contacting our support team.",
            "You may opt out of non-essential communications at any time by following the unsubscribe instructions in our messages.",
            "Residents of certain jurisdictions may have additional rights regarding their personal information. Please reach out if you have questions.",
        ],
    },
];

const supportDetails = [
    { label: "Address", value: "Inglewood, CA" },
    { label: "Phone", value: "(424) 333-4318" },
    { label: "Email", value: "support@theeyeapp.com" },
];

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-[#CFEAF3] via-white to-white">
            <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
                <header className="text-center">
                    <p className="text-sm font-medium uppercase tracking-wide text-[#0D738B]/80">
                        Last updated: January 2025
                    </p>
                    <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">Privacy Policy</h1>
                    <p className="mt-6 text-base text-slate-700 md:text-lg">
                        We created The Eye App to keep Inglewood informed and connected. This policy explains
                        what information we collect, how we use it, and the choices you have. If you have any
                        questions, reach out—we are here for the community.
                    </p>
                </header>

                <section className="mt-12 space-y-12">
                    {policySections.map((section) => (
                        <article
                            key={section.heading}
                            className="space-y-4 border-l-4 border-[#0D738B]/30 pl-6"
                        >
                            <h2 className="text-2xl font-semibold text-slate-900">
                                {section.heading}
                            </h2>
                            <div className="space-y-4 text-base leading-relaxed text-slate-700">
                                {section.body.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </article>
                    ))}
                </section>

                <section className="mt-16 border-l-4 border-[#0D738B]/40 pl-6">
                    <h3 className="text-xl font-semibold text-[#0D738B]">Community First</h3>
                    <p className="mt-4 text-base italic leading-relaxed text-slate-700">
                        “Our promise is simple: protect your information while keeping you connected with
                        the stories that matter. The Eye App is built for Inglewood, by Inglewood.”
                    </p>
                </section>

                <section className="mt-16 grid gap-8 md:grid-cols-2">
                    <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-slate-900">Questions?</h3>
                        <p className="text-base text-slate-700">
                            Contact us anytime. We are happy to explain how we protect your data or help you
                            manage your settings.
                        </p>
                    </div>
                    <dl className="grid gap-4 text-base text-slate-900">
                        {supportDetails.map((detail) => (
                            <div key={detail.label}>
                                <dt className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0D738B]/70">
                                    {detail.label}
                                </dt>
                                <dd className="mt-1 font-medium">{detail.value}</dd>
                            </div>
                        ))}
                    </dl>
                </section>
            </div>
        </main>
    );
}
