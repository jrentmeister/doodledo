import Header from "@/components/Header";
import CommissionForm from "@/components/CommissionForm";
import Footer from "@/components/Footer";

export default function Commission() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <CommissionForm />
      </main>
      <Footer />
    </div>
  );
}
