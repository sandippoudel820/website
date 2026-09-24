import React, { useState } from 'react';
import { 
  Layers, 
  HelpCircle, 
  ShieldCheck, 
  Maximize2, 
  CheckCircle, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { ACCESSORIES, COMPANY_INFO } from '../data/flooringData';
import { ASSETS } from '../data/assets';
import { AccessoryItem } from '../types/flooring';

export const AccessoriesSection: React.FC = () => {
  const [selectedAcc, setSelectedAcc] = useState<AccessoryItem>(ACCESSORIES[0]);

  return (
    <section id="accessories" className="py-20 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Section 21 "Complete Flooring Solution" */}
        <div className="max-w-3xl">
          <div className="text-xs uppercase font-semibold tracking-wider text-amber-400">
            Complete Flooring Solution
          </div>
          <h2 className="mt-1 font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            One Floor. Every Finishing Detail.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-300 leading-relaxed">
            From selecting your preferred laminate design to completing the final edge, Surya Parquet provides comprehensive flooring systems and exact matching accessories for a clean, coordinated interior across Kathmandu.
          </p>
        </div>

        {/* Visual Showcase Banner */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-5 rounded-xl overflow-hidden border border-stone-800 bg-stone-950 p-2 shadow-lg">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-stone-900">
              <img
                src={ASSETS.accessories}
                alt="Matching skirting, T-profile, reducer, and scotia beading for laminate flooring"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-xs text-stone-200">
                <div className="font-semibold text-white">Color-Coordinated Trim System</div>
                <div className="text-[11px] text-stone-400">Skirting · T-Bars · Reducers · Beading (Lysti) · Underlay</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            
            {/* Architectural Profile Diagram Card */}
            <div className="bg-stone-800/80 p-5 rounded-xl border border-stone-700/80">
              <div className="flex items-center justify-between pb-3 border-b border-stone-700">
                <div className="text-xs uppercase font-semibold tracking-wider text-amber-400">
                  Architectural Transition Guide
                </div>
                <span className="text-[11px] text-stone-400">Why Accessories Are Mandatory</span>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="bg-stone-900/90 p-3 rounded-lg border border-stone-800">
                  <div className="font-bold text-amber-300">Same Level</div>
                  <div className="text-stone-400 mt-1 font-mono text-[11px]">Room A ↔ Room B</div>
                  <div className="text-stone-300 mt-2 font-medium">Use T-Profile Bar</div>
                  <p className="text-[11px] text-stone-400 mt-1">Allows rooms to expand independently without buckling.</p>
                </div>

                <div className="bg-stone-900/90 p-3 rounded-lg border border-stone-800">
                  <div className="font-bold text-amber-300">Height Difference</div>
                  <div className="text-stone-400 mt-1 font-mono text-[11px]">Laminate ↘ Lower Floor</div>
                  <div className="text-stone-300 mt-2 font-medium">Use Reducer Profile</div>
                  <p className="text-[11px] text-stone-400 mt-1">Eliminates tripping hazard to vinyl, tile, or bare screed.</p>
                </div>

                <div className="bg-stone-900/90 p-3 rounded-lg border border-stone-800">
                  <div className="font-bold text-amber-300">Vertical Termination</div>
                  <div className="text-stone-400 mt-1 font-mono text-[11px]">Laminate ⊥ Glass / Door</div>
                  <div className="text-stone-300 mt-2 font-medium">Use End Profile / Skirting</div>
                  <p className="text-[11px] text-stone-400 mt-1">Protects exposed edge against sliding balcony frames.</p>
                </div>
              </div>
            </div>

            <div className="text-xs text-stone-400 leading-relaxed px-1">
              Floating laminate parquet expands and contracts up to 2 mm per meter with Kathmandu seasonal weather. Attempting to fit flooring tight against walls without proper expansion gaps and matching profiles leads to raised seams and floor buckling.
            </div>

          </div>
        </div>

        {/* Complete Accessories Catalog Grid - Section 10 & 20 */}
        <div className="mt-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <div className="text-xs uppercase font-semibold tracking-wider text-amber-400">
                Accessories Catalog
              </div>
              <h3 className="font-serif-display text-2xl font-bold text-white mt-1">
                Full Range of Flooring Profiles & Installation Hardware
              </h3>
            </div>
            <div className="text-xs text-stone-400">
              Select any component to view technical guidance
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ACCESSORIES.map((item) => {
              const isSelected = selectedAcc.id === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedAcc(item)}
                  className={`cursor-pointer p-4 rounded-xl border transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-stone-800 border-amber-400/80 shadow-md ring-1 ring-amber-400/50'
                      : 'bg-stone-950/70 border-stone-800 hover:bg-stone-850 hover:border-stone-700'
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-semibold text-white text-sm">
                        {item.title}
                      </h4>
                      {item.alias && (
                        <span className="text-[10px] text-amber-300 bg-amber-950/80 border border-amber-800/80 px-1.5 py-0.5 rounded shrink-0">
                          {item.alias}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-stone-300 mt-2 line-clamp-2 leading-relaxed">
                      {item.purpose}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-800 text-[11px] text-stone-400 flex items-center justify-between">
                    <span className="truncate max-w-[200px]">{item.typicalApplication}</span>
                    <span className={`text-xs font-semibold ${isSelected ? 'text-amber-400' : 'text-stone-500'}`}>
                      {isSelected ? 'Viewing' : 'Details →'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Accessory Detailed Inspection View */}
          {selectedAcc && (
            <div className="mt-8 bg-stone-800/90 rounded-xl p-6 border border-stone-700">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-stone-700 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-serif-display text-xl font-bold text-white">
                      {selectedAcc.title}
                    </h4>
                    {selectedAcc.alias && (
                      <span className="text-xs text-amber-300 font-medium">
                        ({selectedAcc.alias})
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-stone-300 mt-1">
                    {selectedAcc.purpose}
                  </p>
                </div>

                <a
                  href={`https://wa.me/9779851070645?text=${encodeURIComponent(`Namaste Surya Parquet! I would like to inquire about matching accessories: ${selectedAcc.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-stone-900 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors whitespace-nowrap self-start"
                >
                  <span>Inquire Price for {selectedAcc.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-stone-300">
                <div className="bg-stone-900/60 p-3 rounded-lg border border-stone-800">
                  <div className="text-stone-400 uppercase tracking-wider text-[10px] font-semibold">Typical Application</div>
                  <div className="text-white font-medium mt-1">{selectedAcc.typicalApplication}</div>
                </div>

                <div className="bg-stone-900/60 p-3 rounded-lg border border-stone-800">
                  <div className="text-stone-400 uppercase tracking-wider text-[10px] font-semibold">Materials & Build</div>
                  <div className="text-white font-medium mt-1">{selectedAcc.keyMaterials}</div>
                </div>

                <div className="bg-stone-900/60 p-3 rounded-lg border border-stone-800">
                  <div className="text-stone-400 uppercase tracking-wider text-[10px] font-semibold">Available Finishes</div>
                  <div className="text-white font-medium mt-1">{selectedAcc.availableFinishes}</div>
                </div>

                <div className="bg-stone-900/60 p-3 rounded-lg border border-stone-800">
                  <div className="text-stone-400 uppercase tracking-wider text-[10px] font-semibold">Dimensions & Sizing</div>
                  <div className="text-white font-medium mt-1">{selectedAcc.dimensionsGuidance}</div>
                </div>
              </div>

              <p className="mt-4 text-xs text-stone-400 bg-stone-900/40 p-3 rounded-lg border border-stone-800/80 leading-relaxed">
                <span className="font-semibold text-amber-300">Surya Parquet Advice: </span>
                {selectedAcc.details}
              </p>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
