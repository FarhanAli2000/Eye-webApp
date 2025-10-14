import Navbar from "../components/Navbar/page";
import Footer from "../components/Footer/page";
import PrivacyPolicy from "../components/PrivacyPolicy";

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-white text-slate-900">
            <Navbar />
            <PrivacyPolicy />
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
