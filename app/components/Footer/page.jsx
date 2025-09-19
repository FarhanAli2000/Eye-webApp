"use client";

import { Facebook, Instagram, Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white text-gray-800 border-t">
            <div className="max-w-7xl mx-auto px-6 py-16 text-center">

                {/* CTA Section */}
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                    Drop us a line or two, we are <br />
                    open for creative minds and collaborations!
                </h2>
                <button className="px-6 py-3 rounded-lg bg-black text-white font-semibold shadow-md hover:opacity-90 transition">
                    Get Rareblocks
                </button>

                {/* Links + Social */}
                <div className="mt-12 flex flex-col md:flex-row items-center justify-between border-t pt-8">

                    {/* Logo + Nav */}
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <span className="font-bold tracking-wide">/ THE EYE</span>
                        <nav className="flex gap-6 text-sm">
                            <a href="#" className="hover:text-black">Home</a>
                            <a href="#" className="hover:text-black">Features</a>
                            <a href="#" className="hover:text-black">Works</a>
                            <a href="#" className="hover:text-black">Support</a>
                        </nav>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-5 mt-6 md:mt-0">
                        <a href="#" className="hover:text-black"><Twitter size={18} /></a>
                        <a href="#" className="hover:text-black"><Facebook size={18} /></a>
                        <a href="#" className="hover:text-black"><Instagram size={18} /></a>
                        <a href="#" className="hover:text-black"><Github size={18} /></a>
                        <a href="#" className="hover:text-black"><Linkedin size={18} /></a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>© Copyright {new Date().getFullYear()}, All Rights Reserved</p>
                    <div className="flex gap-6 mt-2 md:mt-0">
                        <a href="#" className="hover:text-black">Privacy Policy</a>
                        <a href="#" className="hover:text-black">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
