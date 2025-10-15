import Head from "next/head";
import Navbar from "../components/Navbar/page";
import ContactSection from "../components/ContactSection";
import ContactInfo from "../components/ContactInfo/page";
import Location from "../components/Locations/page";
import Footer from "../components/Footer/page";

export default function ContactPage() {
    return (
        <>
            <Head>
                <title> Contact The Eye App | Connect with Our Inglewood Team</title>
                <meta name="description" content=" Get in touch with The Eye App team in Inglewood. Reach us by email, phone, or live chat for support, partnerships, or feature inquiries." />
                {/* <meta name="keywords" content="contact, support, nextjs" /> */}
                <meta property="og:title" content="Contact Page" />
            </Head>

            <div className="min-h-screen bg-white dark:bg-[#0f0f0f] text-gray-900 dark:text-gray-100">
                <Navbar />
                <ContactSection />
                <ContactInfo />
                <Location />
                <Footer />
            </div>
        </>
    );
}
