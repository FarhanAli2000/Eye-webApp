"use client";

import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import logo from "../../../public/images/hen.png";

export default function Footer() {
    return (
        <footer className="border-t mt-12 bg-[#95C9DA]">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Logo & Contact */}
                <div>
                    <Image
                        src={logo}
                        alt="The Eye Logo"
                        width={80}
                        height={80}
                        className="mb-4"
                    />
                    <p className="font-semibold text-gray-900 mb-2">Contact:</p>
                    <p className="text-gray-700">1800 123 4567</p>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-4">
                        <a href="#" className="text-gray-700 hover:text-teal-600">
                            <Facebook size={20} />
                        </a>
                        <a href="#" className="text-gray-700 hover:text-teal-600">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="text-gray-700 hover:text-teal-600">
                            <Linkedin size={20} />
                        </a>
                        <a href="#" className="text-gray-700 hover:text-teal-600">
                            <Youtube size={20} />
                        </a>
                    </div>
                </div>

                {/* Empty columns to push Quick Links to right */}
                <div></div>
                <div></div>

                {/* Quick Links - now on right side */}
                <div className="md:text-right">
                    <p className="font-semibold text-gray-900 mb-4">Quick Links</p>
                    <ul className="space-y-2 text-gray-700">
                        <li>
                            <a href="#" className="hover:text-teal-600 font-medium">
                                Home
                            </a>
                        </li>
                        <li><a href="#" className="hover:text-teal-600">About us</a></li>
                        <li><a href="#" className="hover:text-teal-600">Contact us</a></li>
                        <li><a href="#" className="hover:text-teal-600">Feature</a></li>
                    </ul>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t">
                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
                    <p>© 2023 Relume. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-teal-600">Privacy Policy</a>
                        <a href="#" className="hover:text-teal-600">Terms of Service</a>
                        <a href="#" className="hover:text-teal-600">Cookies Settings</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
