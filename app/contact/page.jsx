import Navbar from "../components/Navbar/page";
import ContactSection from "../components/ContactSection"
import ContactInfo from "../components/ContactInfo/page"
import Location from "../components/Locations/page"
import Footer from "../components/Footer/page";
export default function ContactPage() {
    return (

        <div className="min-h-screen  bg-white dark:bg-[#0f0f0f] text-gray-900 dark:text-gray-100">
            <Navbar />
            <ContactSection />
            <ContactInfo />

            <Location />

            <Footer />

        </div>
    );
}
