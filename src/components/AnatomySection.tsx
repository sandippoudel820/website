import React from 'react';
import { Layers, ShieldCheck, Sparkles, Hammer, Droplets, CheckCircle2 } from 'lucide-react';
import { ASSETS } from '../data/assets';

export const AnatomySection: React.FC = () => {
  return (
    <section id="anatomy" className="py-20 bg-stone-100 text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs uppercase font-semibold tracking-wider text-amber-700">
            Engineered Flooring Technology
          </div>
          <h2 className="mt-2 font-serif-display text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            What is Laminated Parquet?
          </h2>
          <p className="mt-3 text-lg font-medium text-stone-700">
            Natural wood appearance. Practical laminate flooring.
          </p>
          <p className="mt-2 text-stone-600 leading-relaxed text-sm sm:text-base">
            Laminated parquet is a precision multi-layer engineered flooring solution designed to deliver the rich warmth and character of natural timber while providing superior everyday scratch resistance, dimensional stability, and economic practicality.
          </p>
        </div>

        {/* 4-Layer Breakdown and Visual Diagram */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Visual Diagram */}
          <div className="lg:col-span-6 bg-white p-4 rounded-xl border border-stone-200 shadow-sm overflow-hidden">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-stone-100">
              <img
                src={ASSETS.layersDiagram}
                alt="3D cross-section diagram of laminated parquet flooring layers"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-stone-900/85 backdrop-blur-sm px-3.5 py-2 rounded text-white text-xs flex justify-between items-center">
                <span className="font-semibold">4-Layer Precision Architecture</span>
                <span className="text-stone-300 font-mono text-[11px]">HDF Core ~880–920 kg/m³</span>
              </div>
            </div>
          </div>

          {/* 4 Layers Explanatory List */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Layer 1 */}
            <div className="bg-white p-4 rounded-lg border border-stone-200/90 shadow-sm flex items-start gap-4">
              <div className="w-8 h-8 rounded bg-amber-100 text-amber-900 font-bold flex items-center justify-center shrink-0 text-sm">
                1
              </div>
              <div>
                <h3 className="font-semibold text-stone-900 text-base">Protective Overlay Layer</h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  A transparent, wear-resistant coating fortified with microscopic corundum (aluminum oxide) particles. Protects against scratches, dog claws, footwear abrasion, and UV fading.
                </p>
              </div>
            </div>

            {/* Layer 2 */}
            <div className="bg-white p-4 rounded-lg border border-stone-200/90 shadow-sm flex items-start gap-4">
              <div className="w-8 h-8 rounded bg-amber-100 text-amber-900 font-bold flex items-center justify-center shrink-0 text-sm">
                2
              </div>
              <div>
                <h3 className="font-semibold text-stone-900 text-base">Decorative Wood-Grain Layer</h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  High-definition photographic reproduction of authentic European Oak, Walnut, Teak, Ash, and Maple. Captures organic timber grain, knots, and textures with complete visual consistency across planks.
                </p>
              </div>
            </div>

            {/* Layer 3 */}
            <div className="bg-white p-4 rounded-lg border border-stone-200/90 shadow-sm flex items-start gap-4">
              <div className="w-8 h-8 rounded bg-amber-100 text-amber-900 font-bold flex items-center justify-center shrink-0 text-sm">
                3
              </div>
              <div>
                <h3 className="font-semibold text-stone-900 text-base">High-Density Fiberboard (HDF) Core</h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  The structural backbone of the parquet. Pressed under extreme heat and pressure with thermosetting resins to achieve 880–920 kg/m³ density for high impact resistance and precision click-milling.
                </p>
              </div>
            </div>

            {/* Layer 4 */}
            <div className="bg-white p-4 rounded-lg border border-stone-200/90 shadow-sm flex items-start gap-4">
              <div className="w-8 h-8 rounded bg-amber-100 text-amber-900 font-bold flex items-center justify-center shrink-0 text-sm">
                4
              </div>
              <div>
                <h3 className="font-semibold text-stone-900 text-base">Balancing & Moisture-Resistant Backer</h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  A resin-saturated backing barrier that counterbalances upper layer stresses to guarantee plank flatness and shields the core against ground vapor rising from subfloor slabs.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Advantages of Laminate Parquet */}
        <div className="mt-16 pt-12 border-t border-stone-300">
          <div className="text-xs uppercase font-semibold tracking-wider text-stone-500 mb-2">
            Why Choose Laminated Parquet
          </div>
          <h3 className="font-serif-display text-2xl font-bold text-stone-900">
            Advantages for Kathmandu Homes & Commercial Spaces
          </h3>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-lg border border-stone-200 shadow-sm">
              <div className="font-semibold text-stone-900 text-base flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Elegant Wood Appearance</span>
              </div>
              <p className="mt-2 text-stone-600 text-sm leading-relaxed">
                Provides the authentic character, grain depth, and warmth of solid timber without the irregular warping, knot cracks, or costly sanding and varnishing.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg border border-stone-200 shadow-sm">
              <div className="font-semibold text-stone-900 text-base flex items-center gap-2">
                <Hammer className="w-4 h-4 text-amber-600" />
                <span>Fast & Clean Click Installation</span>
              </div>
              <p className="mt-2 text-stone-600 text-sm leading-relaxed">
                Interlocking click floating system installs rapidly over underlay without messy adhesives, nails, or fumes. Walk on your new floor the same day it is completed.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg border border-stone-200 shadow-sm">
              <div className="font-semibold text-stone-900 text-base flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                <span>Durable & Easy Maintenance</span>
              </div>
              <p className="mt-2 text-stone-600 text-sm leading-relaxed">
                Hard overlay resists shoe scuffs, cigarette burns, and pet claws. Routine cleaning requires only dry sweeping and lightly damp micro-fiber mopping.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
