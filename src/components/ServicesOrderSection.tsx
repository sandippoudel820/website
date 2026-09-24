import React from 'react';
import { 
  MessageSquare, 
  Phone, 
  Ruler, 
  Layers, 
  Hammer, 
  CheckCircle, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '../data/flooringData';
import { ASSETS } from '../data/assets';

export const ServicesOrderSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 23: 4-Step Order Process */}
        <div className="pb-16 border-b border-stone-800">
          <div className="max-w-3xl">
            <div className="text-xs uppercase font-semibold tracking-wider text-amber-400">
              Simple 4-Step Ordering Process
            </div>
            <h2 className="mt-1 font-serif-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
              How to Order from Surya Parquet
            </h2>
            <p className="mt-2 text-stone-300 text-sm sm:text-base leading-relaxed">
              We make sourcing laminate flooring seamless across Kathmandu. From physical sample selection in Gongabu to verified box calculations and doorstep dispatch.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {/* Step 1 */}
            <div className="bg-stone-950/80 p-5 rounded-xl border border-stone-800 relative flex flex-col justify-between">
              <div>
                <div className="font-mono text-2xl font-bold text-amber-400">01</div>
                <h3 className="font-semibold text-white text-base mt-2">Choose Your Design</h3>
                <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                  Browse our online collection or visit our Gongabu showroom to inspect real wood swatches, finishes, and AC ratings.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-800/80 text-[11px] text-stone-400 font-medium">
                Oak, Walnut, Teak, Grey & White
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-stone-950/80 p-5 rounded-xl border border-stone-800 relative flex flex-col justify-between">
              <div>
                <div className="font-mono text-2xl font-bold text-amber-400">02</div>
                <h3 className="font-semibold text-white text-base mt-2">Contact Surya Parquet</h3>
                <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                  Send your room dimensions or architectural floor plans directly to <span className="text-white font-mono">9851070645</span> via WhatsApp or Viber.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-800/80 text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp: 9851070645</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-stone-950/80 p-5 rounded-xl border border-stone-800 relative flex flex-col justify-between">
              <div>
                <div className="font-mono text-2xl font-bold text-amber-400">03</div>
                <h3 className="font-semibold text-white text-base mt-2">Get an Itemized Quote</h3>
                <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                  Receive a precise material breakdown including flooring box counts, cutting allowance, matching skirting, and profiles.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-800/80 text-[11px] text-stone-400 font-medium">
                Transparent wholesale & retail rates
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-stone-950/80 p-5 rounded-xl border border-stone-800 relative flex flex-col justify-between">
              <div>
                <div className="font-mono text-2xl font-bold text-amber-400">04</div>
                <h3 className="font-semibold text-white text-base mt-2">Delivery & Installation</h3>
                <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                  Arrange prompt site delivery across Kathmandu Valley and professional installation with skilled flooring craftsmen.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-800/80 text-[11px] text-stone-400 font-medium">
                Valley-wide dispatch & fitting
              </div>
            </div>

          </div>
        </div>

        {/* Section 22: Services Provided by Surya Parquet */}
        <div className="pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="text-xs uppercase font-semibold tracking-wider text-amber-400">
                  End-to-End Flooring Capabilities
                </div>
                <h3 className="mt-1 font-serif-display text-2xl sm:text-3xl font-bold text-white">
                  Professional Services by Surya Parquet
                </h3>
                <p className="mt-2 text-stone-300 text-xs sm:text-sm leading-relaxed">
                  We don't merely drop boxes at your doorstep. We ensure each plank and trim is chosen, cut, and locked with structural precision.
                </p>
              </div>

              <div className="space-y-4">
                {SERVICES.map((srv) => (
                  <div key={srv.number} className="bg-stone-950/70 p-4 rounded-lg border border-stone-800">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-amber-400 font-bold text-sm">
                        {srv.number}.
                      </span>
                      <h4 className="font-semibold text-white text-sm">
                        {srv.title}
                      </h4>
                    </div>
                    <p className="text-xs text-stone-400 mt-1.5 pl-6 leading-relaxed">
                      {srv.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Commercial Project Visual Carrier */}
            <div className="lg:col-span-6 rounded-xl overflow-hidden border border-stone-800 bg-stone-950 p-2 shadow-xl">
              <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-stone-900">
                <img
                  src={ASSETS.commercialInterior}
                  alt="High-end corporate office and boutique lounge with Surya Parquet laminate flooring"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-xs">
                  <div className="font-serif-display text-lg font-bold text-white">
                    Commercial & Residential Projects
                  </div>
                  <div className="text-stone-300 text-xs mt-1">
                    Supplying hotels, corporate offices, luxury residences, and modern apartments throughout Kathmandu Valley.
                  </div>
                </div>
              </div>

              <div className="p-4 bg-stone-900/60 rounded-lg mt-2 border border-stone-800 flex items-center justify-between text-xs">
                <div>
                  <div className="font-semibold text-white">Need a site measurement visit?</div>
                  <div className="text-stone-400">Our team can inspect your subfloor in Kathmandu</div>
                </div>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 text-xs font-semibold text-stone-900 bg-amber-400 hover:bg-amber-300 rounded transition-colors whitespace-nowrap"
                >
                  Book Visit
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
