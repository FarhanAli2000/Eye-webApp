import Navbar from "../components/Navbar/page";
import Footer from "../components/Footer/page";
import DeleteAccountGuide from "../components/DeleteAccount/page";

export default function DeleteAccountPage() {
    return (
        <div className="min-h-screen bg-white text-slate-900">
            <Navbar />
            <DeleteAccountGuide />
            <Footer />
        </div>
    );
}
