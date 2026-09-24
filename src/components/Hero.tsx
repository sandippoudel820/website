import React from 'react';
import { ArrowRight, Phone, MessageSquare, ShieldCheck, MapPin, Calculator } from 'lucide-react';
import { COMPANY_INFO } from '../data/flooringData';
import { ASSETS } from '../data/assets';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-stone-900 text-stone-100 overflow-hidden">
      {/* Background Hero Image with measured contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.hero}
          alt="Luxury architectural living room with warm laminated parquet flooring in Kathmandu"
          className="w-full h-full object-cover object-center opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/80 to-stone-900/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28">
        
        {/* Trust marker ticker - Unboxed clean text without pill badge */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-amber-300/90 font-medium tracking-wide mb-6">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            Gongabu, Kathmandu
          </span>
          <span aria-hidden="true" className="text-stone-600">·</span>
          <span>Importer & Supplier</span>
          <span aria-hidden="true" className="text-stone-600">·</span>
          <span>Residential & Commercial</span>
          <span aria-hidden="true" className="text-stone-600">·</span>
          <span>AC3 · AC4 · AC5 Standard</span>
        </div>

        {/* Main H1 - Exact SEO specification */}
        <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl leading-[1.15] text-balance">
          Laminate Flooring & Parquet in Kathmandu, Nepal
        </h1>

        {/* Core explanation */}
        <div className="mt-4 text-lg sm:text-xl font-medium text-amber-200/90">
          Natural wood appearance. Practical laminate flooring.
        </div>

        {/* Detailed description */}
        <p className="mt-4 text-base sm:text-lg text-stone-300 max-w-2xl leading-relaxed">
          {COMPANY_INFO.description}
        </p>

        {/* Primary Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
          <a
            href="#collection"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-stone-950 bg-amber-400 rounded-lg hover:bg-amber-300 transition-colors shadow-md whitespace-nowrap"
          >
            <span>Explore Collection</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#calculator"
            className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-stone-200 bg-stone-800/90 border border-stone-700 rounded-lg hover:bg-stone-700 transition-colors whitespace-nowrap"
          >
            <Calculator className="w-4 h-4 text-amber-400" />
            <span>Room Calculator</span>
          </a>

          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-emerald-300 bg-emerald-950/70 border border-emerald-800 rounded-lg hover:bg-emerald-900 transition-colors whitespace-nowrap"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp: 9851070645</span>
          </a>

          <a
            href={COMPANY_INFO.telUrl}
            className="inline-flex items-center gap-2 px-4 py-3.5 text-sm font-medium text-stone-300 hover:text-white transition-colors whitespace-nowrap"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>Call Now</span>
          </a>
        </div>

        {/* Key Value Points Grid */}
        <div className="mt-14 pt-8 border-t border-stone-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-stone-300 text-sm">
          <div>
            <div className="font-semibold text-white text-base">Direct Importer</div>
            <div className="text-xs text-stone-400 mt-1">Authentic imported high-density HDF planks from certified European & Asian mills.</div>
          </div>
          <div>
            <div className="font-semibold text-white text-base">Every Finishing Detail</div>
            <div className="text-xs text-stone-400 mt-1">Matching skirting, T-profiles, reducers, beading (lysti), and stair noses.</div>
          </div>
          <div>
            <div className="font-semibold text-white text-base">8 mm to 12 mm Thickness</div>
            <div className="text-xs text-stone-400 mt-1">Heavy-duty AC3, AC4, and AC5 wear classes suitable for apartments to hotels.</div>
          </div>
          <div>
            <div className="font-semibold text-white text-base">Valley-Wide Service</div>
            <div className="text-xs text-stone-400 mt-1">On-site measurement and professional installation across Kathmandu, Lalitpur & Bhaktapur.</div>
          </div>
        </div>

      </div>
    </section>
  );
};
