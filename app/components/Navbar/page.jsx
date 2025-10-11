"use client";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <header className="bg-[#F1F8F9] shadow-sm">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                    <Image
                        src="/images/logo.png" // ✅ apna logo public/images/logo.png me rakho
                        alt="The Eye Logo"
                        width={50}
                        height={50}
                        className="object-contain"
                    />
                    <div className="text-sm text-gray-600 font-semibold leading-tight">
                        THE EYE <br /> BLOCKDOO <br />
                    </div>
                </div>

                {/* Nav Links */}
                <nav className="hidden md:flex space-x-8">
                    <Link
                        href="/"
                        className="text-[#025864] font-medium hover:text-[#03778C] transition"
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        className="text-gray-700 hover:text-[#03778C] transition"
                    >
                        About us
                    </Link>
                    <Link
                        href="/feature"
                        className="text-gray-700 hover:text-[#03778C] transition"
                    >
                        Feature
                    </Link>
                    <Link
                        href="/contact"
                        className="text-gray-700 hover:text-[#03778C] transition"
                    >
                        Contact us
                    </Link>

                </nav>

                {/* Download Button */}
                <div>
                    <Link
                        href="/download"
                        className="bg-[#025864] text-white px-4 py-2 rounded-md font-medium hover:bg-[#03778C] transition"
                    >
                        Download App
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
