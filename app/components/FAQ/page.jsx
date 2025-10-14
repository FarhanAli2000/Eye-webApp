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
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-0 text-center bg-white">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-2"
      >
        Frequently Asked Questions
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-500 text-sm sm:text-base mb-8"
      >
        Find quick answers to the most common questions about The Eye App.
      </motion.p>

      {/* FAQ Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="bg-[#E4F5FB] shadow rounded-xl p-4 sm:p-6 text-left border border-[#6BB3CA]"
          >
            <h3 className="font-semibold text-base sm:text-lg mb-2 text-black">
              {faq.question}
            </h3>
            <p className="text-black/80 text-sm sm:text-base leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
