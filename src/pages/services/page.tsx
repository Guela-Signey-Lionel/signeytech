
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import HeroSection from './components/HeroSection';
import ServicesGrid from './components/ServicesGrid';
import ProcessSection from './components/ProcessSection';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactCTASection from './components/ContactCTASection';

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesGrid />
        <ProcessSection />
        <PricingSection />
        <TestimonialsSection />
        <ContactCTASection />
      </main>
      <Footer />
    </div>
  );
}
