import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  MessageSquare, 
  Clock, 
  Navigation, 
  Send, 
  CheckCircle,
  ShieldAlert,
  Building
} from 'lucide-react';
import { COMPANY_INFO, KATHMANDU_AREAS } from '../data/flooringData';

export const LocalKathmanduSection: React.FC = () => {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryArea, setInquiryArea] = useState('');
  const [inquiryMsg, setInquiryMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Namaste Surya Parquet! Inquiry from Website:
*Name:* ${inquiryName || 'Inquirer'}
*Contact:* ${inquiryPhone || 'Not provided'}
*Area / Location:* ${inquiryArea || 'Kathmandu'}
*Message / Requirements:* ${inquiryMsg || 'Looking for laminate flooring designs and price quotation'}

Please contact me back with available options and rates.`;

    window.open(`https://wa.me/9779851070645?text=${encodeURIComponent(text)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-stone-100 text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="text-xs uppercase font-semibold tracking-wider text-amber-700">
            Kathmandu Showroom & Valley Supply
          </div>
          <h2 className="mt-1 font-serif-display text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
            Visit Surya Parquet in Gongabu, Kathmandu
          </h2>
          <p className="mt-2 text-stone-600 text-sm sm:text-base leading-relaxed">
            Looking for the right laminate flooring for your home, apartment, or commercial office? Browse our full sample board in person or contact us directly on WhatsApp, Viber, or phone.
          </p>
        </div>

        {/* Contact Split */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Company Details & NAP Information (Section 30) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-2xs space-y-6">
            
            <div>
              <div className="text-xs font-semibold uppercase text-stone-500 tracking-wider">
                Google Business Profile NAP Info
              </div>
              <h3 className="font-serif-display text-xl font-bold text-stone-900 mt-1">
                {COMPANY_INFO.name}
              </h3>
              <div className="text-xs text-stone-500 font-medium mt-0.5">
                {COMPANY_INFO.legalName} · Flooring Store & Supplier
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-stone-700 pt-2 border-t border-stone-100">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-stone-900">Location</div>
                  <div className="text-stone-600 mt-0.5">{COMPANY_INFO.location}</div>
                  <div className="text-[11px] text-stone-500 mt-0.5">Near Gongabu Chowk / New Buspark corridor, Kathmandu, Nepal</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-stone-900">Phone / Call Now</div>
                  <a href={COMPANY_INFO.telUrl} className="text-amber-800 hover:underline font-mono font-semibold">
                    {COMPANY_INFO.phoneFormatted} (9851070645)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageSquare className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-stone-900">WhatsApp & Viber</div>
                  <div className="text-stone-600 mt-0.5 font-mono">9851070645</div>
                  <div className="flex items-center gap-3 mt-1.5">
                    <a
                      href={COMPANY_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 underline"
                    >
                      Open WhatsApp Chat
                    </a>
                    <span className="text-stone-300">·</span>
                    <a
                      href={COMPANY_INFO.viberUrl}
                      className="text-xs font-semibold text-purple-700 hover:text-purple-800 underline"
                    >
                      Open Viber Chat
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-stone-900">Business Hours</div>
                  <div className="text-stone-600 mt-0.5">{COMPANY_INFO.openingHours}</div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons (Section 26) */}
            <div className="pt-4 border-t border-stone-100 grid grid-cols-2 gap-2 text-xs">
              <a
                href={COMPANY_INFO.telUrl}
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold rounded-lg transition-colors text-center"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors text-center"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              <a
                href={COMPANY_INFO.viberUrl}
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-purple-700 hover:bg-purple-600 text-white font-semibold rounded-lg transition-colors text-center"
              >
                <span>Viber Us</span>
              </a>

              <a
                href="https://maps.google.com/?q=Gongabu,Kathmandu,Nepal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-stone-800 hover:bg-stone-700 text-white font-medium rounded-lg transition-colors text-center"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Directions</span>
              </a>
            </div>

          </div>

          {/* Quick Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-2xs">
            <div className="text-xs font-semibold uppercase text-amber-700 tracking-wider">
              Fast Quotation & Stock Inquiry
            </div>
            <h3 className="font-serif-display text-xl font-bold text-stone-900 mt-1">
              Send Your Floor Requirements to Gongabu
            </h3>
            <p className="text-xs text-stone-500 mt-1">
              Have room measurements or questions? Fill out the details below to open a pre-formatted chat with Surya Parquet.
            </p>

            {submitted ? (
              <div className="mt-6 bg-emerald-50 border border-emerald-200 p-5 rounded-lg text-center space-y-2">
                <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="font-semibold text-emerald-950 text-sm">Inquiry Launched on WhatsApp!</h4>
                <p className="text-xs text-emerald-800">
                  Our team in Gongabu will respond promptly with stock availability and square footage rates.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-xs text-emerald-700 font-semibold underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-700">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Bipin Karki"
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      className="mt-1 w-full text-xs px-3 py-2 bg-stone-50 border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-700">Phone / WhatsApp Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98XXXXXXXX"
                      value={inquiryPhone}
                      onChange={(e) => setInquiryPhone(e.target.value)}
                      className="mt-1 w-full text-xs px-3 py-2 bg-stone-50 border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700">Project Area / Neighborhood in Kathmandu</label>
                  <input
                    type="text"
                    placeholder="e.g. Gongabu, Maharajgunj, Balaju, Thamel, Lalitpur"
                    value={inquiryArea}
                    onChange={(e) => setInquiryArea(e.target.value)}
                    className="mt-1 w-full text-xs px-3 py-2 bg-stone-50 border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700">Room Dimensions, Square Footage or Preferred Designs</label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Living room and 2 bedrooms, approx 450 sq.ft total. Looking for Light or Natural Oak with matching skirting..."
                    value={inquiryMsg}
                    onChange={(e) => setInquiryMsg(e.target.value)}
                    className="mt-1 w-full text-xs px-3 py-2 bg-stone-50 border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-600 rounded-lg transition-colors shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Inquiry to Surya Parquet (9851070645)</span>
                </button>
              </form>
            )}

            {/* Local Areas Served List (Section 29) */}
            <div className="mt-8 pt-6 border-t border-stone-100">
              <div className="text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
                Valley-Wide Delivery & Installation Coverage
              </div>
              <p className="text-[11px] text-stone-500 mb-3">
                Surya Parquet regularly supplies materials and on-site fitters to projects throughout:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {KATHMANDU_AREAS.map((area) => (
                  <span
                    key={area}
                    className="text-[11px] px-2.5 py-1 bg-stone-100 text-stone-700 rounded border border-stone-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
