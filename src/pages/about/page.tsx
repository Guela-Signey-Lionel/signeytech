
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import ValuesSection from './components/ValuesSection';
import TeamSection from './components/TeamSection';
import StatsSection from './components/StatsSection';
import ContactCTASection from './components/ContactCTASection';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <StorySection />
        <ValuesSection />
        <StatsSection />
        <TeamSection />
        <ContactCTASection />
      </main>
      <Footer />
    </div>
  );
}