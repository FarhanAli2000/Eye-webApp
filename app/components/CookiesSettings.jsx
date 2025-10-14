import React from "react";

const cookieSections = [
    {
        heading: "1. What Are Cookies?",
        body: [
            "Cookies are small text files stored on your device when you visit a website or use an app. They help us remember your preferences, keep you signed in, and understand how you use The Eye App so we can improve the experience.",
            "Some cookies are essential for the app to function, while others help us analyze usage or deliver optional features.",
        ],
    },
    {
        heading: "2. Types of Cookies We Use",
        body: [
            "Essential cookies: Required for core functionality such as secure login, session management, and delivering alerts.",
            "Performance cookies: Help us measure app performance, identify issues, and ensure the platform remains responsive.",
            "Analytics cookies: Collect aggregated data about how residents engage with content so we can tailor updates to the community.",
            "Preference cookies: Remember your settings (like preferred language or notification choices) to streamline future visits.",
        ],
    },
    {
        heading: "3. Managing Your Choices",
        body: [
            "You can adjust cookie settings within The Eye App at any time. Head to Settings → Privacy & Cookies to review or change your preferences.",
            "Most browsers also allow you to control cookies through their settings. You may disable cookies entirely, but some features may not function properly.",
        ],
    },
    {
        heading: "4. Third-Party Technologies",
        body: [
            "We may work with trusted partners (such as analytics providers) who place cookies on our behalf to help us understand platform usage.",
            "These partners are required to handle data securely and in accordance with our privacy commitments.",
        ],
    },
    {
        heading: "5. Updates to This Policy",
        body: [
            "We may update our cookie practices as we introduce new features or tools. The “Last updated” date will reflect any changes.",
            "We encourage you to review this page periodically to stay informed about how we use cookies.",
        ],
    },
];

const supportDetails = [
    { label: "Address", value: "Inglewood, CA" },
    { label: "Phone", value: "(424) 333-4318" },
    { label: "Email", value: "support@theeyeapp.com" },
];

export default function CookiesSettings() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-[#CFEAF3] via-white to-white">
            <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
                <header className="text-center">
                    <p className="text-sm font-medium uppercase tracking-wide text-[#0D738B]/80">
                        Last updated: January 2025
                    </p>
                    <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">Cookies Settings</h1>
                    <p className="mt-6 text-base text-slate-700 md:text-lg">
                        This page explains how The Eye App uses cookies and similar technologies. Learn what
                        data we collect, why we use it, and how you can manage your choices.
                    </p>
                </header>

                <section className="mt-12 space-y-12">
                    {cookieSections.map((section) => (
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
                    <h3 className="text-xl font-semibold text-[#0D738B]">Respect for Your Privacy</h3>
                    <p className="mt-4 text-base italic leading-relaxed text-slate-700">
                        “We collect only what we need to keep Inglewood connected. Your trust matters, and we
                        will always give you control over your data.”
                    </p>
                </section>

                <section className="mt-16 grid gap-8 md:grid-cols-2">
                    <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-slate-900">Need help adjusting settings?</h3>
                        <p className="text-base text-slate-700">
                            Reach out if you have questions about cookie preferences or how we use your data.
                            We are here to help.
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
