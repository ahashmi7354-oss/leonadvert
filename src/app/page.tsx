import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import ServicesOverview from "@/components/ServicesOverview";
import LeadershipSection from "@/components/LeadershipSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import LoadingScreenWrapper from "@/components/LoadingScreenWrapper";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#06070a] text-zinc-100 flex flex-col selection:bg-blue-600/30 selection:text-white">
      {/* Premium Splash / Loading Screen — auto-dismisses after ~2s */}
      <LoadingScreenWrapper />

      {/* Sticky Glassmorphic Navbar */}
      <Navbar />

      {/* Main Experience */}
      <main className="flex-1">
        {/* Dynamic Hero Section with Interactive Command Center */}
        <Hero />

        {/* Tech Stack Infinite Marquee */}
        <TechMarquee />

        {/* 6 Core Pillars of Services */}
        <ServicesOverview />

        {/* Leadership & Engineering Vision with Executive Portrait */}
        <LeadershipSection />

        {/* Why Choose Us & Modern Bento Grid */}
        <WhyChooseUs />

        {/* 4-Phase Agile Delivery Process */}
        <ProcessSection />

        {/* Client Testimonials – Infinite Dual Marquee */}
        <TestimonialsSection />

        {/* Lead Generation & Contact Suite */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
