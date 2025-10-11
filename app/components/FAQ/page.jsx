"use client";

import { motion } from "framer-motion";

const faqs = [
  {
    question: "Is The Eye App free to use?",
    answer:
      "Yes! The Eye App is completely free to download and use. You’ll have access to traffic alerts, local events, and city services at no cost.",
  },
  {
    question: "Which devices support The Eye App?",
    answer:
      "The Eye App is available on both iOS (App Store) and Android (Google Play) devices.",
  },
  {
    question: "How do I get alerts and notifications?",
    answer:
      "Once you download the app, simply enable notifications and select your preferences. You’ll start receiving real-time updates tailored to your needs.",
  },
  {
    question: "Can local businesses be listed on The Eye App?",
    answer:
      "Yes. Local businesses in Inglewood can join our directory and get discovered by residents and visitors through The Eye App.",
  },
  {
    question: "How does The Eye App protect my privacy?",
    answer:
      "We follow strict privacy and security standards. Your personal data is encrypted, never sold, and used only to improve your app experience.",
  },
];

export default function FAQPage() {
  return (
    <section className="py-16 text-center">
      {/* Heading Animation */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-2"
      >
        Frequently Asked Questions
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-600 mb-6"
      >
      
      </motion.p>

      {/* <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#086E86] text-white px-6 py-2 rounded-full mb-12 hover:bg-[#065a6c] transition"
      >
        Contact Now
      </motion.button> */}

      {/* FAQ Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="bg-[#95C9DA] shadow rounded-xl p-6 text-left border border-gray-200"
          >
            <h3 className="font-semibold mb-2 text-black">{faq.question}</h3>
            <p className="text-black text-sm leading-relaxed">{faq.answer}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
