import Navbar from "../components/Navbar/page";
import Footer from "../components/Footer/page";
import FAQ from "../components/FAQ/page";

export default function FAQRoutePage() {
    return (
        <div className="min-h-screen bg-white text-slate-900">
            <Navbar />
            <div className="bg-gradient-to-b from-[#CFEAF3] via-white to-white">
                <FAQ />
            </div>
            <Footer />
        </div>
    );
}
