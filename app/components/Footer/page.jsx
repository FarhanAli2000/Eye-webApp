// components/Footer.jsx
import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";

export default function Footer({
  logoSrc = "/images/Logo.png",
  logoAlt = "The Eye App — Inglewood",
  contactTitle = "Contact:",
  phone = "1800 123 4567",
  email = "info@relume.io",
  quickLeftTitle = "Quick Links",
  quickRightTitle = "Quick Links",
  quickRight = [
    { label: "Home", href: "/" },
    { label: "About us", href: "/about" },
    { label: "Contact us", href: "/contact" },
    { label: "Feature", href: "/feature" },
    { label: "How to Delete Your Account", href: "/delete-account" },
    { label: "FAQ", href: "/faq" },
  ],
  socials = [
    { name: "Facebook", href: "/", icon: Facebook },
    { name: "Instagram", href: "/", icon: Instagram },
    { name: "X", href: "/", icon: Twitter },
    { name: "LinkedIn", href: "/", icon: Linkedin },
    { name: "YouTube", href: "/", icon: Youtube },
  ],
  legal = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Cookies Settings", href: "/cookies" },
  ],
  brandNote = "© 2025 The Eye App. All rights reserved.",
}) {
  const mid = Math.ceil(quickRight.length / 2);
  const leftLinks = quickRight.slice(0, mid);
  const rightLinks = quickRight.slice(mid);
  const isHome = (s) => s.trim().toLowerCase() === "home";

  return (
    <footer className="bg-[#E4F5FB] text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-4 lg:px-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Brand + Contact */}
          <div className="space-y-4">
            <div className="h-14 w-auto">
              <img src={logoSrc} alt={logoAlt} className="h-full w-auto object-contain" />
            </div>

            <div className="space-y-1">
              <p className="text-xl font-semibold">{contactTitle}</p>
              <p className="text-base">
                <a
                  href={`tel:${phone.replace(/\s+/g, "")}`}
                  className="underline underline-offset-4 hover:opacity-80 focus:ring-2 focus:ring-[#086E86]"
                >
                  {phone}
                </a>
              </p>
              <p className="text-base">
                <a
                  href={`mailto:${email}`}
                  className="underline underline-offset-4 hover:opacity-80 focus:ring-2 focus:ring-[#086E86]"
                >
                  {email}
                </a>
              </p>
            </div>

            <div className="flex items-center gap-2 pt-1">
              {socials.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#086E86]/10 text-[#086E86] transition hover:bg-[#086E86]/20 focus:ring-2 focus:ring-[#086E86]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links (2 columns) */}
          <div className="grid grid-cols-2 gap-4 lg:col-span-2">
            <div>
              <h4 className="text-base font-semibold">{quickLeftTitle}</h4>
              <nav className="mt-3 space-y-3">
                {leftLinks.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    className="block text-base transition hover:underline focus:underline"
                  >
                    <span className={isHome(l.label) ? "text-[#086E86] font-medium" : undefined}>
                      {l.label}
                    </span>
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="text-base font-semibold">{quickRightTitle}</h4>
              <nav className="mt-3 space-y-3">
                {rightLinks.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    className="block text-base transition hover:underline focus:underline"
                  >
                    <span className={isHome(l.label) ? "text-[#086E86] font-medium" : undefined}>
                      {l.label}
                    </span>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-white/40" />

        {/* Bottom bar */}
        <div className="flex flex-col-reverse items-start justify-between gap-3 text-sm md:flex-row md:items-center">
          <p>{brandNote}</p>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legal.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="underline underline-offset-4 hover:opacity-80 focus:ring-2 focus:ring-[#086E86]"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
