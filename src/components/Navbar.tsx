import React, { useState } from 'react';
import { Phone, MessageSquare, Menu, X, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/flooringData';

interface NavbarProps {
  onOpenQuoteModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-stone-900/95 backdrop-blur-md border-b border-stone-800 text-stone-100 transition-all">
      {/* Top Bar Contract: Zone 1 (Brand) - Zone 2 (Nav Links) - Zone 3 (Action) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Zone 1: Single text wordmark */}
        <a href="#" className="flex flex-col group">
          <span className="font-serif-display text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors">
            Surya Parquet
          </span>
          <span className="text-[10px] tracking-widest text-stone-400 uppercase font-medium">
            Gongabu · Kathmandu
          </span>
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-300">
          <a href="#collection" className="hover:text-amber-300 transition-colors">
            Collection
          </a>
          <a href="#anatomy" className="hover:text-amber-300 transition-colors">
            What is Parquet?
          </a>
          <a href="#accessories" className="hover:text-amber-300 transition-colors">
            Accessories
          </a>
          <a href="#calculator" className="hover:text-amber-300 transition-colors">
            Calculator
          </a>
          <a href="#services" className="hover:text-amber-300 transition-colors">
            Services
          </a>
          <a href="#faq" className="hover:text-amber-300 transition-colors">
            FAQ
          </a>
          <a href="#contact" className="hover:text-amber-300 transition-colors">
            Contact
          </a>
        </nav>

        {/* Zone 3: Primary Action buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 rounded-md hover:bg-emerald-900/80 transition-colors whitespace-nowrap"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
          
          <a
            href={COMPANY_INFO.telUrl}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-stone-900 bg-amber-400 rounded-md hover:bg-amber-300 transition-colors whitespace-nowrap shadow-sm"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{COMPANY_INFO.phone}</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-2 sm:hidden">
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 rounded-md"
            aria-label="WhatsApp Us"
          >
            <MessageSquare className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-300 hover:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-900 border-b border-stone-800 px-5 pt-3 pb-6 space-y-4">
          <div className="grid grid-cols-2 gap-2 text-sm font-medium">
            <a
              href="#collection"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 text-stone-200 hover:bg-stone-800 rounded-md"
            >
              Collection
            </a>
            <a
              href="#anatomy"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 text-stone-200 hover:bg-stone-800 rounded-md"
            >
              What is Parquet?
            </a>
            <a
              href="#accessories"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 text-stone-200 hover:bg-stone-800 rounded-md"
            >
              Accessories
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 text-stone-200 hover:bg-stone-800 rounded-md"
            >
              Area Calculator
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 text-stone-200 hover:bg-stone-800 rounded-md"
            >
              Our Services
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 text-stone-200 hover:bg-stone-800 rounded-md"
            >
              FAQ
            </a>
          </div>

          <div className="pt-3 border-t border-stone-800 grid grid-cols-2 gap-2">
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-emerald-300 bg-emerald-950/70 border border-emerald-800 rounded-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <a
              href={COMPANY_INFO.telUrl}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-stone-900 bg-amber-400 rounded-md"
            >
              <Phone className="w-4 h-4" />
              <span>Call 9851070645</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
