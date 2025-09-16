"use client";
import { useState } from "react";
import Image from "next/image";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    // input change handler
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // submit handler
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            alert(data.message);

            if (data.success) {
                setFormData({ name: "", email: "", subject: "", message: "" }); // reset
            }
        } catch (error) {
            alert("Something went wrong. Try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="w-full bg-gradient-to-b from-[#92E0FD] to-white py-16">
            <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left Form */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Contact us
                    </h2>
                    <p className="text-gray-600 mt-3 mb-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>

                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#086E86] focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#086E86] focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Subject
                            </label>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#086E86] focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                rows="4"
                                name="message"
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#086E86] focus:outline-none"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-[#086E86] text-white px-6 py-2 rounded-md hover:bg-[#065a6a] transition disabled:opacity-50"
                        >
                            {loading ? "Sending..." : "Submit"}
                        </button>
                    </form>
                </div>

                {/* Right Image */}
                <div className="flex justify-center">
                    <div className="relative w-full max-w-sm h-[500px] rounded-xl overflow-hidden bg-[#086E86] flex items-center justify-center">
                        <Image
                            src="/images/eye.png"
                            alt="The Eye App"
                            width={500}
                            height={500}
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
