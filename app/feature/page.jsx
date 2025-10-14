"use client";
import Navbar from "../components/Navbar/page";
import AlertsSection from "../components/AlertsSection";
import RemindersSection from "../components/RemindersSection";
import Explore from "../components/Explore";
import Transit from "../components/TransitSection";
import Experience from "../components/ExperienceSection";
import Connection from "../components/Connection";
import Trusted from "../components/TrustedSection";
import Footer from "../components/Footer/page";

export default function FeaturesPage() {
  const features = [
    {
      title: "AI-Powered Insights",
      description:
        "Get deep analytics and actionable insights powered by cutting-edge AI models tailored for your business needs.",
    },
    {
      title: "Seamless Collaboration",
      description:
        "Work together in real-time with teams across the globe using our secure collaboration tools.",
    },
    {
      title: "Cloud Integration",
      description:
        "Easily integrate with leading cloud platforms and scale your applications without any hassle.",
    },
  ];

  return (
    <section className=" bg-gray-50">
      <Navbar />
      <AlertsSection />
      <Connection />
      <Explore />
      <Transit />

      <Experience />
      <RemindersSection />

      <Trusted />
      <Footer />
    </section>
  );
}
