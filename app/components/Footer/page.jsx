// components/Footer.jsx
import React from "react";
import { Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";

/**
 * Footer component inspired by the provided design.
 * - TailwindCSS for styling
 * - Props allow full customization (logo, links, contact, socials)
 * - Accessible semantics & keyboard focus states
 */

export default function Footer({
  logoSrc = "/images/hen.png", // put your logo in /public/images/
  logoAlt = "The Eye App — Inglewood",
  contactTitle = "Contact:",
  phone = "1800 123 4567",
  email = "info@relume.io",
  quickLeftTitle = "Quick Links",
  quickRightTitle = "Quick Links",
  quickLeft = [
    { label: "Home", href: "/" },
    { label: "About us", href: "/about" },
    { label: "Contact us", href: "/contact" },
    { label: "Feature", href: "/feature" },
  ],
  quickRight = [
    { label: "Home", href: "/" },
    { label: "About us", href: "/about" },
    { label: "Contact us", href: "/contact" },
    { label: "Feature", href: "/feature" },
  ],
  socials = [
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "X", href: "#", icon: Twitter },
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "YouTube", href: "#", icon: Youtube },
  ],
  legal = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookies Settings", href: "#" },
  ],
  brandNote = "© 2023 Relume. All rights reserved.",
}) {
  return (
    <footer className="bg-[#A9D6E2] text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Brand + Contact (Left) */}
          <div className="space-y-8">
            {/* Logo */}
            <div className="h-20 w-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={logoSrc} alt={logoAlt} className="h-full w-auto object-contain" />
            </div>

            {/* Contact */}
            <div className="space-y-3">
              <p className="text-2xl font-semibold">{contactTitle}</p>
              <p className="text-xl">{phone}</p>
              <p className="text-xl">{email}</p>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3 pt-2">
              {socials.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#086E86]/10 text-[#086E86] ring-1 ring-transparent transition hover:bg-[#086E86]/20 focus:outline-none focus:ring-2 focus:ring-[#086E86]"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links (Center & Right) */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            {/* Column 1 */}
            <div>
              <h4 className="text-lg font-semibold">{quickLeftTitle}</h4>
              <nav className="mt-6 space-y-6">
                {quickLeft.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="block text-lg transition hover:underline focus:outline-none focus:underline"
                  >
                    <span className={l.label.toLowerCase() === "home" ? "text-[#086E86] font-medium" : undefined}>
                      {l.label}
                    </span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="text-lg font-semibold">{quickRightTitle}</h4>
              <nav className="mt-6 space-y-6">
                {quickRight.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="block text-lg transition hover:underline focus:outline-none focus:underline"
                  >
                    <span className={l.label.toLowerCase() === "home" ? "text-[#086E86] font-medium" : undefined}>
                      {l.label}
                    </span>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-12 border-white/40" />

        {/* Bottom bar */}
        <div className="flex flex-col-reverse items-start justify-between gap-6 text-base md:flex-row md:items-center">
          <p>{brandNote}</p>

          <nav className="flex flex-wrap items-center gap-x-10 gap-y-3">
            {legal.map((l) => (
              <a key={l.label} href={l.href} className="underline decoration-1 underline-offset-4 hover:opacity-80">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

// Example usage:
// <Footer logoSrc="/images/eye-logo.png" />