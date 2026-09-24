import React, { useState } from 'react';
import { ShieldCheck, AlertTriangle, Sparkles, Home, Building2, CheckCircle2, ChevronRight } from 'lucide-react';
import { ASSETS } from '../data/assets';

export const TechGuideSection: React.FC = () => {
  const [activeRoomGuide, setActiveRoomGuide] = useState<'small' | 'large' | 'modern' | 'luxury'>('small');

  return (
    <section className="py-20 bg-stone-50 text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="text-xs uppercase font-semibold tracking-wider text-amber-700">
            Technical Standards & Buyer Advice
          </div>
          <h2 className="mt-1 font-serif-display text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
            AC Ratings, Thickness & Room Suitability
          </h2>
          <p className="mt-2 text-stone-600 text-sm sm:text-base leading-relaxed">
            Understanding performance ratings and choosing the appropriate wear classification according to room layout, traffic level, and manufacturer recommendations.
          </p>
        </div>

        {/* AC Rating Cards (Section 8) */}
        <div className="mt-12">
          <div className="text-xs uppercase font-semibold tracking-wider text-stone-500 mb-3">
            Abrasion Criteria (AC) Classification
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* AC3 */}
            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                  <span className="font-serif-display text-2xl font-bold text-stone-900">AC3 Rating</span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-stone-100 text-stone-700">
                    Class 31
                  </span>
                </div>
                <div className="mt-3 text-xs font-semibold uppercase text-amber-800 tracking-wider">
                  Moderate Residential
                </div>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Generally intended for residential applications with moderate traffic. Ideal for guest rooms, bedrooms, and quiet residential apartments where footwear is removed at the door.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 text-xs text-stone-500">
                <span className="font-medium text-stone-800">Best for: </span>
                Bedrooms, study rooms, dressing areas, rental apartments.
              </div>
            </div>

            {/* AC4 */}
            <div className="bg-white p-6 rounded-xl border border-amber-300 shadow-xs ring-1 ring-amber-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                  <span className="font-serif-display text-2xl font-bold text-stone-900">AC4 Rating</span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-900">
                    Class 32 · Most Popular
                  </span>
                </div>
                <div className="mt-3 text-xs font-semibold uppercase text-amber-800 tracking-wider">
                  Heavy Residential & General Commercial
                </div>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Designed for heavier residential use and many commercial applications. Withstands active kids, pets, chair castors, and continuous foot traffic without micro-scratching.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 text-xs text-stone-500">
                <span className="font-medium text-stone-800">Best for: </span>
                Living rooms, hallways, corporate offices, boutique retail, hotel rooms.
              </div>
            </div>

            {/* AC5 */}
            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                  <span className="font-serif-display text-2xl font-bold text-stone-900">AC5 Rating</span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-stone-900 text-white">
                    Class 33 · Heavy Duty
                  </span>
                </div>
                <div className="mt-3 text-xs font-semibold uppercase text-amber-800 tracking-wider">
                  Demanding Heavy Commercial
                </div>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Engineered for demanding public foot-traffic environments subject to the manufacturer’s stated classification. Built with dense wear layers and ultra-dense HDF cores.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 text-xs text-stone-500">
                <span className="font-medium text-stone-800">Best for: </span>
                Hotel lobbies, executive boardrooms, restaurants, department showrooms.
              </div>
            </div>

          </div>
        </div>

        {/* Thickness Comparison (Section 9) */}
        <div className="mt-16 bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-2xs">
          <div className="text-xs uppercase font-semibold tracking-wider text-amber-700">
            Flooring Thickness Engineering
          </div>
          <h3 className="mt-1 font-serif-display text-2xl font-bold text-stone-900">
            How Thickness Affects Feel, Sound & Installation
          </h3>
          <p className="mt-2 text-stone-600 text-xs sm:text-sm max-w-3xl">
            Thickness directly influences walking sound resonance, subfloor deflection tolerance, and clearance with existing doors, skirting, and threshold transitions.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-lg bg-stone-50 border border-stone-200">
              <div className="font-mono text-xl font-bold text-stone-900">8 mm Thickness</div>
              <div className="text-xs font-semibold text-amber-800 mt-1">Versatile Standard</div>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                The most popular thickness for Kathmandu residences. Fits under standard interior door leaves with minimal or zero trimming, offering dependable stability at attractive value.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-stone-50 border border-stone-200">
              <div className="font-mono text-xl font-bold text-stone-900">10 mm Thickness</div>
              <div className="text-xs font-semibold text-amber-800 mt-1">Enhanced Acoustic Comfort</div>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                Noticeably deeper sound dampening that eliminates hollow footstep tones. Deeper V-groove bevels provide pronounced individual plank definition and solid stability.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-stone-50 border border-stone-200">
              <div className="font-mono text-xl font-bold text-stone-900">12 mm Thickness</div>
              <div className="text-xs font-semibold text-amber-800 mt-1">Solid-Wood Footfall Feel</div>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                The heavyweight choice for luxury homes and high-end commercial properties. Replicates the solid, resonant feel of real hardwood parquet underfoot.
              </p>
            </div>
          </div>
        </div>

        {/* Room-Based Color Recommendation Guide (Section 17) */}
        <div className="mt-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <div className="text-xs uppercase font-semibold tracking-wider text-amber-700">
                Design & Color Recommendation
              </div>
              <h3 className="mt-1 font-serif-display text-2xl font-bold text-stone-900">
                Selecting the Right Color for Your Room Type
              </h3>
            </div>
            <div className="text-xs text-stone-500">
              Aesthetic suggestions based on spatial volume and natural lighting
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Room Selector Tabs */}
            <div className="lg:col-span-4 flex flex-col gap-2">
              {[
                { id: 'small', label: 'For Small Rooms & Apartments', subtitle: 'Compact bedrooms, low-ceiling spaces' },
                { id: 'large', label: 'For Large Living Rooms', subtitle: 'Spacious halls, family rooms, dining' },
                { id: 'modern', label: 'For Modern & Contemporary Interiors', subtitle: 'Minimalist, Scandinavian, Nordic styles' },
                { id: 'luxury', label: 'For Luxury & Executive Spaces', subtitle: 'Hotels, boardrooms, luxury villas' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveRoomGuide(tab.id as any)}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    activeRoomGuide === tab.id
                      ? 'bg-stone-900 text-white border-stone-900 shadow-sm'
                      : 'bg-white text-stone-800 border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <div className="font-semibold text-sm">{tab.label}</div>
                  <div className={`text-xs mt-0.5 ${activeRoomGuide === tab.id ? 'text-amber-300' : 'text-stone-500'}`}>
                    {tab.subtitle}
                  </div>
                </button>
              ))}
            </div>

            {/* Room Advice Card */}
            <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-2xs flex flex-col justify-between">
              {activeRoomGuide === 'small' && (
                <div className="space-y-4">
                  <span className="text-xs uppercase font-semibold tracking-wider text-amber-800">
                    Design Advice for Compact Rooms
                  </span>
                  <h4 className="font-serif-display text-xl font-bold text-stone-900">
                    Brighten and Visually Expand Spatial Depth
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Small spaces benefit immensely from pale wood tones that bounce ambient light across the room. Avoid heavy dark woods in small bedrooms with single windows, which can feel confining.
                  </p>
                  
                  <div className="pt-3 border-t border-stone-100">
                    <div className="text-xs font-semibold text-stone-700 mb-2">Recommended Shades:</div>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {['Natural Oak (SP-101)', 'Nordic Oak (SP-102)', 'White Oak (SP-501)', 'Light Grey (SP-401)', 'Natural Maple (SP-104)'].map((s) => (
                        <span key={s} className="px-3 py-1 bg-stone-100 text-stone-800 rounded font-medium">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeRoomGuide === 'large' && (
                <div className="space-y-4">
                  <span className="text-xs uppercase font-semibold tracking-wider text-amber-800">
                    Design Advice for Spacious Living Rooms
                  </span>
                  <h4 className="font-serif-display text-xl font-bold text-stone-900">
                    Warmth, Natural Grain Depth & Welcoming Character
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Large open-plan living rooms can easily handle rich medium tones with noticeable knots and natural wood character. These shades anchor expansive floorplates and harmonize with plush seating.
                  </p>
                  
                  <div className="pt-3 border-t border-stone-100">
                    <div className="text-xs font-semibold text-stone-700 mb-2">Recommended Shades:</div>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {['Classic Oak (SP-201)', 'Golden Teak (SP-202)', 'Rustic Warm Oak (SP-203)', 'American Walnut (SP-301)'].map((s) => (
                        <span key={s} className="px-3 py-1 bg-stone-100 text-stone-800 rounded font-medium">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeRoomGuide === 'modern' && (
                <div className="space-y-4">
                  <span className="text-xs uppercase font-semibold tracking-wider text-amber-800">
                    Design Advice for Modern & Contemporary Interiors
                  </span>
                  <h4 className="font-serif-display text-xl font-bold text-stone-900">
                    Clean Linear Tones & Cool Sophistication
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Modern aesthetics pair clean-lined furniture with grey and Scandinavian light oak. Cool mineral greys provide a stylish backdrop for metal accents, indoor greenery, and statement lighting.
                  </p>
                  
                  <div className="pt-3 border-t border-stone-100">
                    <div className="text-xs font-semibold text-stone-700 mb-2">Recommended Shades:</div>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {['Silver Oak (SP-401)', 'Light Ash (SP-103)', 'Charcoal Oak (SP-402)', 'Scandinavian Oak'].map((s) => (
                        <span key={s} className="px-3 py-1 bg-stone-100 text-stone-800 rounded font-medium">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeRoomGuide === 'luxury' && (
                <div className="space-y-4">
                  <span className="text-xs uppercase font-semibold tracking-wider text-amber-800">
                    Design Advice for Luxury Interiors
                  </span>
                  <h4 className="font-serif-display text-xl font-bold text-stone-900">
                    Rich Contrast, Stately Mood & Dramatic Presence
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Deep espresso and smoky walnut create an immediate sense of quiet prestige. When contrasted with crisp light walls, brushed brass trims, and tailored drapery, dark wood is unrivaled.
                  </p>
                  
                  <div className="pt-3 border-t border-stone-100">
                    <div className="text-xs font-semibold text-stone-700 mb-2">Recommended Shades:</div>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {['American Walnut (SP-301)', 'Smoked Espresso Oak (SP-302)', 'Wenge Luxury (SP-303)', 'Dark Oak'].map((s) => (
                        <span key={s} className="px-3 py-1 bg-stone-100 text-stone-800 rounded font-medium">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                <span>View full physical swatches at Surya Parquet Gongabu showroom</span>
                <a href="#collection" className="text-amber-800 hover:text-amber-900 font-semibold flex items-center gap-1">
                  <span>Browse Catalog</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Areas Requiring Special Attention (Section 14 in user prompt) */}
        <div className="mt-16 bg-amber-50/70 border border-amber-200/90 rounded-xl p-6 sm:p-8">
          <div className="flex items-center gap-2 text-amber-900">
            <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0" />
            <h3 className="font-serif-display text-xl font-bold">
              Honest Advice: Areas Requiring Special Attention
            </h3>
          </div>
          <p className="mt-2 text-xs sm:text-sm text-stone-700 leading-relaxed">
            At Surya Parquet, we do not make irresponsible claims like "100% waterproof anywhere." Certain moisture-prone areas require specific installation precautions:
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="bg-white p-4 rounded-lg border border-amber-200">
              <div className="font-bold text-stone-900 text-sm">Bathrooms & Wet Zones</div>
              <p className="text-stone-600 mt-1.5 leading-relaxed">
                Standard laminate parquet is <span className="font-semibold text-stone-900">not suitable</span> for standing shower areas. Only use specialized water-sealed systems if approved by manufacturer guidelines. We recommend pairing bathroom tile with a Floor-to-Tile threshold profile at the door.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-amber-200">
              <div className="font-bold text-stone-900 text-sm">Kitchens</div>
              <p className="text-stone-600 mt-1.5 leading-relaxed">
                Laminate can be successfully installed in kitchens when using moisture-resistant AC4/AC5 products with paraffin-waxed edge seals. Wipe up cooking spills and plumbing leaks promptly to prevent seam swelling.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-amber-200">
              <div className="font-bold text-stone-900 text-sm">Balconies & Outdoor Areas</div>
              <p className="text-stone-600 mt-1.5 leading-relaxed">
                Standard laminate parquet should <span className="font-semibold text-stone-900">never be installed outdoors</span> or on open, uncovered balconies exposed to direct rain and sunlight. Terminate the indoor parquet with an End Profile at the balcony sliding frame.
              </p>
            </div>
          </div>
        </div>

        {/* Cleaning & Maintenance Guide (Section 16 in user prompt) */}
        <div className="mt-16 pt-12 border-t border-stone-200">
          <div className="text-xs uppercase font-semibold tracking-wider text-amber-700">
            Care & Maintenance Protocol
          </div>
          <h3 className="mt-1 font-serif-display text-2xl font-bold text-stone-900">
            How to Maintain Your Surya Parquet Floor
          </h3>
          <p className="mt-2 text-stone-600 text-xs sm:text-sm max-w-2xl">
            Laminated parquet requires simple routine care to stay beautiful for decades without the sanding and waxing needed by raw timber.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div className="bg-white p-4 rounded-lg border border-stone-200">
              <div className="font-semibold text-stone-900">1. Regular Dry Sweep</div>
              <p className="text-stone-600 mt-1">
                Sweep or vacuum regularly using a soft brush attachment to remove abrasive dust and grit particles.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-stone-200">
              <div className="font-semibold text-stone-900">2. Prompt Spill Cleanup</div>
              <p className="text-stone-600 mt-1">
                Wipe up liquid spills immediately with an absorbent dry or slightly damp cloth; never let water sit in seams.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-stone-200">
              <div className="font-semibold text-stone-900">3. Avoid Excessive Water</div>
              <p className="text-stone-600 mt-1">
                Never use a dripping wet mop, steam cleaner, or aggressive chemical abrasive powder on laminate.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-stone-200">
              <div className="font-semibold text-stone-900">4. Furniture Felt Pads</div>
              <p className="text-stone-600 mt-1">
                Attach soft felt protective pads under table legs, sofas, and chair legs to prevent accidental dragging scratches.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
