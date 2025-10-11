import Navbar from "../components/Navbar/page";
import FounderSection from "../components/FounderSection/page";
import VideoAbout from "../components/VideoAbout/page";
import InfoSection from "../components/InfoSection/page"
import Downer from "../components/Downer/page"
import Footer from "../components/Footer/page"
export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-[#0f0f0f] text-gray-900 dark:text-gray-100">
            <Navbar />
            <FounderSection />
            <VideoAbout />
            <InfoSection />
            <Downer />
            <Footer />

        </div>
    );
}
