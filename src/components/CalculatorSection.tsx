import React, { useState, useMemo } from 'react';
import { Calculator, ArrowRight, MessageSquare, Phone, Info, Check, RefreshCw } from 'lucide-react';
import { COMPANY_INFO } from '../data/flooringData';

export const CalculatorSection: React.FC = () => {
  const [unit, setUnit] = useState<'feet' | 'meters'>('feet');
  const [length, setLength] = useState<number>(15);
  const [width, setWidth] = useState<number>(12);
  const [wastageRate, setWastageRate] = useState<number>(7); // Default 7%
  const [roomCount, setRoomCount] = useState<number>(1);
  const [roomName, setRoomName] = useState<string>('Living Room');
  const [doorwayCount, setDoorwayCount] = useState<number>(1);

  // Calculations
  const results = useMemo(() => {
    // Normalise to feet
    const lengthFt = unit === 'feet' ? length : length * 3.28084;
    const widthFt = unit === 'feet' ? width : width * 3.28084;

    const singleNetSqFt = lengthFt * widthFt;
    const totalNetSqFt = singleNetSqFt * roomCount;
    const totalNetSqM = totalNetSqFt * 0.092903;

    const wastageSqFt = totalNetSqFt * (wastageRate / 100);
    const totalFlooringSqFt = totalNetSqFt + wastageSqFt;
    const totalFlooringSqM = totalFlooringSqFt * 0.092903;

    // Standard pack coverage: ~22.9 sq.ft per box (2.13 m²)
    const sqFtPerBox = 22.9;
    const boxesRequired = Math.ceil(totalFlooringSqFt / sqFtPerBox);

    // Perimeter for skirting: 2 * (L + W) * rooms minus door openings (approx 3 ft per door)
    const rawPerimeterFt = 2 * (lengthFt + widthFt) * roomCount;
    const netSkirtingFt = Math.max(0, Math.round(rawPerimeterFt - (doorwayCount * 3)));
    // Skirting pieces (standard 8 ft / 2.4m length)
    const skirtingSticks = Math.ceil(netSkirtingFt / 7.8);

    return {
      totalNetSqFt: Math.round(totalNetSqFt * 10) / 10,
      totalNetSqM: Math.round(totalNetSqM * 10) / 10,
      wastageSqFt: Math.round(wastageSqFt * 10) / 10,
      totalFlooringSqFt: Math.round(totalFlooringSqFt * 10) / 10,
      totalFlooringSqM: Math.round(totalFlooringSqM * 10) / 10,
      boxesRequired,
      netSkirtingFt,
      skirtingSticks,
    };
  }, [length, width, unit, wastageRate, roomCount, doorwayCount]);

  const handleSendWhatsAppQuote = () => {
    const text = `Namaste Surya Parquet! I used your Flooring Calculator for my project:
*Room Type:* ${roomName} (${roomCount} room${roomCount > 1 ? 's' : ''})
*Dimensions:* ${length} ${unit} × ${width} ${unit}
*Net Area:* ${results.totalNetSqFt} sq.ft (${results.totalNetSqM} m²)
*Installation Wastage Added:* ${wastageRate}% (+${results.wastageSqFt} sq.ft)
*Total Flooring Required:* ${results.totalFlooringSqFt} sq.ft
*Estimated Boxes:* ~${results.boxesRequired} boxes (~22.9 sq.ft/box)
*Matching Skirting Perimeter:* ~${results.netSkirtingFt} linear feet (~${results.skirtingSticks} sticks)

Please send me the current price estimate and recommended laminate designs in stock at Gongabu.`;

    window.open(`https://wa.me/9779851070645?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="calculator" className="py-20 bg-stone-100 text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="text-xs uppercase font-semibold tracking-wider text-amber-700">
            Interactive Project Estimator
          </div>
          <h2 className="mt-1 font-serif-display text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
            Flooring & Accessory Measurement Calculator
          </h2>
          <p className="mt-2 text-stone-600 text-sm sm:text-base leading-relaxed">
            Estimate your required laminate parquet square footage, box quantities, and perimeter skirting length with adjustable installation allowances.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Input Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-2xs space-y-6">
            
            {/* Unit Switch & Room Name */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-200">
              <div>
                <label className="block text-xs font-semibold uppercase text-stone-500">Room Identifier</label>
                <input
                  type="text"
                  value={roomName}
                  onChange={(e) => setRoomName(e.target.value)}
                  className="mt-1 px-3 py-1.5 text-xs font-semibold text-stone-900 bg-stone-50 border border-stone-300 rounded focus:outline-none focus:ring-1 focus:ring-amber-500 w-48"
                  placeholder="e.g. Master Bedroom"
                />
              </div>

              {/* Feet / Meters Switch */}
              <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-lg self-start sm:self-auto">
                <button
                  type="button"
                  onClick={() => setUnit('feet')}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                    unit === 'feet' ? 'bg-white text-stone-900 shadow-2xs' : 'text-stone-500 hover:text-stone-900'
                  }`}
                >
                  Feet (ft)
                </button>
                <button
                  type="button"
                  onClick={() => setUnit('meters')}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                    unit === 'meters' ? 'bg-white text-stone-900 shadow-2xs' : 'text-stone-500 hover:text-stone-900'
                  }`}
                >
                  Meters (m)
                </button>
              </div>
            </div>

            {/* Room Dimensions Sliders / Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <div className="flex justify-between items-center text-xs font-medium text-stone-700 mb-1.5">
                  <span>Room Length</span>
                  <span className="font-mono font-bold text-stone-900">{length} {unit}</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="60"
                  step="0.5"
                  value={length}
                  onChange={(e) => setLength(parseFloat(e.target.value))}
                  className="w-full accent-amber-600"
                />
                <input
                  type="number"
                  min="1"
                  value={length}
                  onChange={(e) => setLength(parseFloat(e.target.value) || 0)}
                  className="mt-2 w-full px-3 py-1.5 text-xs font-mono bg-stone-50 border border-stone-300 rounded focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>

              <div>
                <div className="flex justify-between items-center text-xs font-medium text-stone-700 mb-1.5">
                  <span>Room Width</span>
                  <span className="font-mono font-bold text-stone-900">{width} {unit}</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="60"
                  step="0.5"
                  value={width}
                  onChange={(e) => setWidth(parseFloat(e.target.value))}
                  className="w-full accent-amber-600"
                />
                <input
                  type="number"
                  min="1"
                  value={width}
                  onChange={(e) => setWidth(parseFloat(e.target.value) || 0)}
                  className="mt-2 w-full px-3 py-1.5 text-xs font-mono bg-stone-50 border border-stone-300 rounded focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>
            </div>

            {/* Wastage Allowance Selection (Section 24 in User Prompt) */}
            <div className="pt-2">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-stone-700">
                  Installation Cutting & Wastage Allowance
                </label>
                <span className="text-xs font-mono font-bold text-amber-900">
                  +{wastageRate}%
                </span>
              </div>
              <p className="text-xs text-stone-500 mb-3">
                Wastage allowance varies by layout geometry, angle cuts, and installer practices. We never apply a single fixed percentage.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  {
                    rate: 5,
                    title: '5% Standard',
                    desc: 'Straight rectangular room with few obstructions.',
                  },
                  {
                    rate: 8,
                    title: '8% Recommended',
                    desc: 'Rooms with pillars, bay windows, or closets.',
                  },
                  {
                    rate: 15,
                    title: '15% Complex',
                    desc: 'Diagonal patterns, hallways, or herringbone.',
                  },
                ].map((tier) => (
                  <button
                    key={tier.rate}
                    type="button"
                    onClick={() => setWastageRate(tier.rate)}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      wastageRate === tier.rate
                        ? 'border-amber-600 bg-amber-50/70 shadow-2xs'
                        : 'border-stone-200 hover:border-stone-300 bg-stone-50/50'
                    }`}
                  >
                    <div className="text-xs font-bold text-stone-900">{tier.title}</div>
                    <div className="text-[11px] text-stone-600 mt-0.5">{tier.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Room Count & Doorways */}
            <div className="grid grid-cols-2 gap-4 pt-2 border-t border-stone-200">
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">Identical Rooms</label>
                <select
                  value={roomCount}
                  onChange={(e) => setRoomCount(parseInt(e.target.value))}
                  className="w-full text-xs px-3 py-1.5 bg-stone-50 border border-stone-300 rounded focus:outline-none focus:ring-1 focus:ring-amber-500"
                >
                  <option value={1}>1 Room</option>
                  <option value={2}>2 Rooms</option>
                  <option value={3}>3 Rooms</option>
                  <option value={4}>4 Rooms</option>
                  <option value={5}>5 Rooms</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">Doorway Openings</label>
                <select
                  value={doorwayCount}
                  onChange={(e) => setDoorwayCount(parseInt(e.target.value))}
                  className="w-full text-xs px-3 py-1.5 bg-stone-50 border border-stone-300 rounded focus:outline-none focus:ring-1 focus:ring-amber-500"
                >
                  <option value={1}>1 Doorway</option>
                  <option value={2}>2 Doorways</option>
                  <option value={3}>3 Doorways</option>
                  <option value={4}>4 Doorways</option>
                </select>
              </div>
            </div>

          </div>

          {/* Real-time Calculation Summary Card */}
          <div className="lg:col-span-5 bg-stone-900 text-stone-100 p-6 sm:p-8 rounded-xl border border-stone-800 shadow-md">
            
            <div className="flex items-center justify-between pb-4 border-b border-stone-800">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                Material Estimation Summary
              </span>
              <span className="text-xs text-stone-400 font-mono">
                {roomName}
              </span>
            </div>

            <div className="mt-6 space-y-4">
              
              {/* Primary Metric: Total Flooring Required */}
              <div className="bg-stone-800/90 p-4 rounded-lg border border-stone-700">
                <div className="text-xs text-stone-400">Estimated Flooring Requirement</div>
                <div className="text-3xl font-serif-display font-bold text-amber-300 mt-1">
                  {results.totalFlooringSqFt} <span className="text-lg font-sans font-normal text-stone-300">sq.ft</span>
                </div>
                <div className="text-xs text-stone-400 mt-0.5 font-mono">
                  ≈ {results.totalFlooringSqM} m² (including +{wastageRate}% allowance)
                </div>
              </div>

              {/* Secondary Details */}
              <div className="space-y-2.5 text-xs text-stone-300 pt-1">
                <div className="flex justify-between py-1 border-b border-stone-800">
                  <span className="text-stone-400">Net Floor Area:</span>
                  <span className="font-mono font-medium text-stone-200">
                    {results.totalNetSqFt} sq.ft ({results.totalNetSqM} m²)
                  </span>
                </div>

                <div className="flex justify-between py-1 border-b border-stone-800">
                  <span className="text-stone-400">Cutting Wastage (+{wastageRate}%):</span>
                  <span className="font-mono font-medium text-amber-400">
                    +{results.wastageSqFt} sq.ft
                  </span>
                </div>

                <div className="flex justify-between py-1 border-b border-stone-800">
                  <span className="text-stone-400">Estimated Boxes (~22.9 sq.ft/box):</span>
                  <span className="font-mono font-bold text-white bg-stone-800 px-2 py-0.5 rounded">
                    ~{results.boxesRequired} Boxes
                  </span>
                </div>

                <div className="flex justify-between py-1 border-b border-stone-800">
                  <span className="text-stone-400">Matching Skirting Perimeter:</span>
                  <span className="font-mono font-medium text-stone-200">
                    ~{results.netSkirtingFt} linear ft (~{results.skirtingSticks} sticks @ 2.4m)
                  </span>
                </div>

                <div className="flex justify-between py-1 border-b border-stone-800">
                  <span className="text-stone-400">Underlay Damp-Proof Roll:</span>
                  <span className="font-mono font-medium text-stone-200">
                    {results.totalFlooringSqFt} sq.ft coverage
                  </span>
                </div>
              </div>

              {/* Notice */}
              <div className="bg-stone-800/50 p-3 rounded text-[11px] text-stone-400 border border-stone-700/60 leading-relaxed">
                <span className="text-amber-300 font-semibold">Note: </span>
                This calculator provides an engineering estimate based on standard 8-plank box packing. Contact Surya Parquet for on-site measurement verification before placing final orders.
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-2">
                <button
                  type="button"
                  onClick={handleSendWhatsAppQuote}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send to Surya Parquet on WhatsApp</span>
                </button>

                <a
                  href={COMPANY_INFO.telUrl}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-medium text-stone-300 hover:text-white bg-stone-800 hover:bg-stone-750 border border-stone-700 rounded-lg transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call 9851070645 for Quick Price</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
