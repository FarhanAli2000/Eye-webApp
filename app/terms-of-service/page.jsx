import Navbar from "../components/Navbar/page";
import Footer from "../components/Footer/page";
import TermsOfService from "../components/TermsOfService";

export default function TermsOfServicePage() {
    return (
        <div className="min-h-screen bg-white text-slate-900">
            <Navbar />
            <TermsOfService />
            <Footer
                legal={[
                    { label: "Privacy Policy", href: "/privacy-policy" },
                    { label: "Terms of Service", href: "/terms-of-service" },
                    { label: "Cookies Settings", href: "/cookies" },
                ]}
            />
        </div>
    );
}
