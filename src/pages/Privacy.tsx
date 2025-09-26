import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PrivacyPolicy from "@/components/PrivacyPolicy";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-background">
        <PrivacyPolicy />
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
