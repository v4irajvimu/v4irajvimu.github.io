import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CertificatesPageContent from "../components/CertificatesPageContent";

export const metadata = {
  title: "Certificates | Vimukthi Jayasinghe",
  description:
    "Course completion certificates and professional certifications in cloud, frontend, and software engineering.",
};

export default function CertificatesPage() {
  return (
    <>
      <Navbar />
      <main id="main" role="main" className="min-h-screen pt-20">
        <CertificatesPageContent />
      </main>
      <Footer />
    </>
  );
}
