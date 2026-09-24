import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AnatomySection } from './components/AnatomySection';
import { CollectionSection } from './components/CollectionSection';
import { AccessoriesSection } from './components/AccessoriesSection';
import { CalculatorSection } from './components/CalculatorSection';
import { TechGuideSection } from './components/TechGuideSection';
import { ServicesOrderSection } from './components/ServicesOrderSection';
import { LocalKathmanduSection } from './components/LocalKathmanduSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { COMPANY_INFO } from './data/flooringData';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 font-sans selection:bg-amber-200 selection:text-amber-950">
      
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. What is Laminated Parquet & 4-Layer Anatomy */}
        <AnatomySection />

        {/* 3. Color & Finish Collection (Filterable Catalog & Technical Cards) */}
        <CollectionSection />

        {/* 4. Complete Flooring Solution: Finishing Accessories */}
        <AccessoriesSection />

        {/* 5. Room Measurement & Box Calculator */}
        <CalculatorSection />

        {/* 6. Technical Standards (AC Ratings, Thickness, Room Advice & Maintenance) */}
        <TechGuideSection />

        {/* 7. How to Order & Professional Services */}
        <ServicesOrderSection />

        {/* 8. Visit Surya Parquet in Gongabu & Valley Service Areas */}
        <LocalKathmanduSection />

        {/* 9. Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Action Bar (Adheres to <= 15% mobile sticky cap rule) */}
      <aside aria-label="Quick Contact Actions" className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-stone-900/95 backdrop-blur-md border-t border-stone-800 p-2.5 flex items-center gap-2">
        <a
          href={COMPANY_INFO.telUrl}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-amber-400 text-stone-950 font-semibold text-xs rounded-md shadow-xs"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call 9851070645</span>
        </a>
        <a
          href={COMPANY_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-emerald-700 text-white font-semibold text-xs rounded-md shadow-xs"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp Us</span>
        </a>
      </aside>

    </div>
  );
}
