import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQS, COMPANY_INFO } from '../data/flooringData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-stone-50 text-stone-900 border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase font-semibold tracking-wider text-amber-700">
            Frequently Asked Questions
          </div>
          <h2 className="mt-1 font-serif-display text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
            Everything You Need to Know About Parquet
          </h2>
          <p className="mt-2 text-stone-600 text-sm sm:text-base">
            Honest answers to the most common questions about laminated parquet flooring, matching accessories, and installation in Nepal.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-12 space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-2xs transition-all"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-stone-900 text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-stone-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-amber-700' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 bg-stone-100 rounded-xl border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="font-semibold text-stone-900 text-sm sm:text-base">
              Have a specific flooring question or unusual room shape?
            </div>
            <div className="text-xs text-stone-500 mt-0.5">
              Contact our flooring specialists directly in Gongabu on WhatsApp or Viber.
            </div>
          </div>

          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-600 rounded-lg transition-colors whitespace-nowrap shadow-2xs"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Chat on WhatsApp: 9851070645</span>
          </a>
        </div>

      </div>
    </section>
  );
};
