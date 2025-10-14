import React from "react";

const termsSections = [
    {
        heading: "1. Acceptance of Terms",
        body: [
            "By accessing or using The Eye App, you agree to comply with these Terms of Service and all applicable laws. If you do not agree, please discontinue use immediately.",
            "These terms may be updated from time to time. Continued use after an update means you accept the revised terms.",
        ],
    },
    {
        heading: "2. Use of the Service",
        body: [
            "You may use the platform to share, receive, and act on community updates in Inglewood. You agree not to misuse the service, interfere with its operation, or access it using unauthorized means.",
            "You are responsible for ensuring that any content you share is accurate, respectful, and does not violate the rights of others.",
        ],
    },
    {
        heading: "3. Accounts & Security",
        body: [
            "You must provide accurate information when creating an account and keep your credentials secure. Notify us immediately of any unauthorized use of your account.",
            "We reserve the right to suspend or terminate accounts that violate these terms or compromise the safety of the community.",
        ],
    },
    {
        heading: "4. Content & Intellectual Property",
        body: [
            "You retain ownership of the content you submit but grant us a non-exclusive license to use, display, and distribute it within The Eye App for community purposes.",
            "All trademarks, graphics, and software associated with The Eye App remain our property or that of our licensors and may not be reused without permission.",
        ],
    },
    {
        heading: "5. Disclaimers & Liability",
        body: [
            "The Eye App is provided on an “as is” basis. We make no warranties regarding the accuracy or availability of the service and disclaim all implied warranties to the fullest extent permitted by law.",
            "To the extent permitted by law, we are not liable for indirect or consequential damages arising from the use or inability to use the service.",
        ],
    },
    {
        heading: "6. Governing Law",
        body: [
            "These terms are governed by the laws of the State of California, without regard to conflict of law principles.",
            "Any disputes will be resolved in the state or federal courts located in Los Angeles County, California.",
        ],
    },
];

const supportDetails = [
    { label: "Address", value: "Inglewood, CA" },
    { label: "Phone", value: "(424) 333-4318" },
    { label: "Email", value: "support@theeyeapp.com" },
];

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-[#CFEAF3] via-white to-white">
            <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
                <header className="text-center">
                    <p className="text-sm font-medium uppercase tracking-wide text-[#0D738B]/80">
                        Last updated: January 2025
                    </p>
                    <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">Terms of Service</h1>
                    <p className="mt-6 text-base text-slate-700 md:text-lg">
                        These terms outline the rules for using The Eye App. Please read them carefully so we
                        can continue building a trusted platform that keeps Inglewood informed and connected.
                    </p>
                </header>

                <section className="mt-12 space-y-12">
                    {termsSections.map((section) => (
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
                    <h3 className="text-xl font-semibold text-[#0D738B]">Commitment to Community</h3>
                    <p className="mt-4 text-base italic leading-relaxed text-slate-700">
                        “We built The Eye App to uplift Inglewood. Please use the platform responsibly so we
                        can keep every neighborhood informed, safe, and respected.”
                    </p>
                </section>

                <section className="mt-16 grid gap-8 md:grid-cols-2">
                    <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-slate-900">Need clarification?</h3>
                        <p className="text-base text-slate-700">
                            Reach out if you have questions about these terms or how they apply to your use
                            of The Eye App.
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
