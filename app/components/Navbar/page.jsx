"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About us" },
    { href: "/feature", label: "Feature" },
    { href: "/contact", label: "Contact us" },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => setMenuOpen((prev) => !prev);
    const handleClose = () => setMenuOpen(false);

    return (
        <header className="bg-[#F1F8F9] shadow-sm">
            <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
                <div className="flex items-center space-x-3">
                    <Image
                        src="/images/logo.png"
                        alt="The Eye Logo"
                        width={50}
                        height={50}
                        className="object-contain"
                    />
                    <div className="text-sm text-gray-600 font-semibold leading-tight">
                        THE EYE <br /> BLOCKDOO <br />
                    </div>
                </div>

                <nav className="hidden md:flex items-center space-x-8">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`font-medium transition ${
                                link.href === "/"
                                    ? "text-[#025864] hover:text-[#03778C]"
                                    : "text-gray-700 hover:text-[#03778C]"
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/download"
                        className="bg-[#025864] text-white px-4 py-2 rounded-md font-medium hover:bg-[#03778C] transition"
                    >
                        Download App
                    </Link>
                </nav>

                <button
                    type="button"
                    onClick={handleToggle}
                    className="md:hidden inline-flex items-center justify-center rounded-md border border-transparent p-2 text-[#025864] focus:outline-none focus:ring-2 focus:ring-[#03778C]"
                    aria-controls="mobile-menu"
                    aria-expanded={menuOpen}
                >
                    <span className="sr-only">Toggle navigation</span>
                    <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                    >
                        {menuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        )}
                    </svg>
                </button>
            </div>

            <div
                id="mobile-menu"
                className={`md:hidden border-t border-[#d6e7eb] bg-[#F1F8F9] transition-all duration-200 ${
                    menuOpen ? "max-h-screen opacity-100" : "max-h-0 overflow-hidden opacity-0"
                }`}
            >
                <div className="space-y-1 px-6 py-4">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={handleClose}
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-white hover:text-[#03778C] transition"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/download"
                        onClick={handleClose}
                        className="mt-3 block text-center bg-[#025864] text-white px-4 py-2 rounded-md font-medium hover:bg-[#03778C] transition"
                    >
                        Download App
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
