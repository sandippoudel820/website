import React, { useState } from 'react';
import { X, Check, MessageSquare, Phone, ShieldCheck, Ruler, Layers, Sparkles } from 'lucide-react';
import { FlooringProduct } from '../types/flooring';
import { COMPANY_INFO } from '../data/flooringData';

interface ProductDetailModalProps {
  product: FlooringProduct | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  const [customerName, setCustomerName] = useState('');
  const [roomArea, setRoomArea] = useState('');
  const [locationArea, setLocationArea] = useState('Kathmandu');
  const [accessoryNotes, setAccessoryNotes] = useState(true);

  if (!product) return null;

  const handleWhatsAppInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Namaste Surya Parquet! I am interested in getting a price quotation and product availability for:
*Model:* ${product.name} (${product.code})
*Collection:* ${product.collection}
*Thickness:* ${product.thickness} (${product.wearClass})
*Estimated Area:* ${roomArea ? roomArea + ' sq.ft' : 'Not measured yet'}
*Project Location:* ${locationArea}
*Client Name:* ${customerName || 'Inquirer'}
*Matching Accessories Needed:* ${accessoryNotes ? 'Yes (Skirting & Profiles)' : 'Flooring only'}

Please share the latest wholesale/retail price per sq.ft and stock availability in Gongabu.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/9779851070645?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div 
        className="bg-white text-stone-900 rounded-xl shadow-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto border border-stone-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-10 bg-white border-b border-stone-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span 
              className="w-4 h-4 rounded-full border border-stone-300 shadow-inner shrink-0" 
              style={{ backgroundColor: product.toneHex }}
            />
            <div>
              <h2 id="modal-title" className="font-serif-display text-xl sm:text-2xl font-bold text-stone-900">
                {product.name} — {product.code}
              </h2>
              <div className="text-xs text-stone-500 font-medium">
                {product.collection} · {product.wearClass}
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          
          {/* Top Overview Split */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            
            {/* Swatch & Visual Board */}
            <div className="md:col-span-5 space-y-4">
              <div 
                className="w-full aspect-[4/3] rounded-lg border border-stone-300 shadow-inner relative flex flex-col justify-between p-4 text-stone-900 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${product.toneHex} 0%, #ffffff 150%)`,
                }}
              >
                <div className="flex justify-between items-start">
                  <span className="bg-stone-900/80 text-white font-mono text-xs px-2.5 py-1 rounded">
                    {product.code}
                  </span>
                  <span className="bg-white/90 text-stone-800 text-xs font-semibold px-2 py-1 rounded shadow-xs">
                    {product.acRating} Grade
                  </span>
                </div>

                <div className="bg-white/90 backdrop-blur-sm p-3 rounded-md border border-stone-200/80 text-xs">
                  <div className="font-semibold text-stone-900">{product.name}</div>
                  <div className="text-stone-600">{product.surface}</div>
                  <div className="text-stone-500 mt-1 font-mono">{product.plankDimensions}</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-stone-600 leading-relaxed">
                {product.description}
              </p>

              {/* Available Accessories Checklist */}
              <div className="bg-stone-50 p-4 rounded-lg border border-stone-200">
                <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
                  Color-Matched Finishing Accessories
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-stone-700">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Matching Skirting</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>T-Profile Bar</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Reducer Profile</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>End Terminal Profile</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Beading / Lysti</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Stair Nose Cap</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Quotation Form */}
            <div className="md:col-span-7 bg-amber-50/50 p-5 rounded-xl border border-amber-200/80">
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-900">
                Direct Pricing & Availability
              </div>
              <h3 className="font-serif-display text-lg font-bold text-stone-900 mt-1">
                Inquire About {product.name}
              </h3>
              <p className="text-xs text-stone-600 mt-1">
                Stock is physically stored in our Gongabu warehouse. Send your room dimensions for instant rate confirmation on WhatsApp.
              </p>

              <form onSubmit={handleWhatsAppInquiry} className="mt-4 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-stone-700">Your Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Ramesh Sharma"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="mt-1 w-full text-xs px-3 py-2 bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-700">Estimated Area (sq.ft)</label>
                    <input
                      type="number"
                      placeholder="e.g. 240"
                      value={roomArea}
                      onChange={(e) => setRoomArea(e.target.value)}
                      className="mt-1 w-full text-xs px-3 py-2 bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700">Location in Kathmandu Valley</label>
                  <input
                    type="text"
                    placeholder="e.g. Gongabu, Balaju, Maharajgunj, Patan"
                    value={locationArea}
                    onChange={(e) => setLocationArea(e.target.value)}
                    className="mt-1 w-full text-xs px-3 py-2 bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="acc-check"
                    checked={accessoryNotes}
                    onChange={(e) => setAccessoryNotes(e.target.checked)}
                    className="rounded text-amber-600 focus:ring-amber-500"
                  />
                  <label htmlFor="acc-check" className="text-xs text-stone-700">
                    Include quote for matching skirting, underlay, and profiles
                  </label>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-2">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-600 rounded-md transition-colors shadow-xs"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Inquiry on WhatsApp</span>
                  </button>

                  <a
                    href={COMPANY_INFO.telUrl}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-stone-800 bg-white border border-stone-300 hover:bg-stone-50 rounded-md transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-700" />
                    <span>Call 9851070645</span>
                  </a>
                </div>
              </form>
            </div>

          </div>

          {/* Complete Technical Specification Table (Section 7 in user prompt) */}
          <div className="border-t border-stone-200 pt-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-serif-display text-lg font-bold text-stone-900">
                  Technical Specifications
                </h3>
                <p className="text-xs text-stone-500">
                  Verified parameters for Surya Parquet model {product.code}
                </p>
              </div>
              <span className="text-xs font-mono text-stone-500">
                Grade: {product.acRating} · {product.wearClass}
              </span>
            </div>

            <div className="overflow-x-auto rounded-lg border border-stone-200">
              <table className="w-full text-xs text-left">
                <thead className="bg-stone-100 text-stone-700 uppercase font-semibold border-b border-stone-200">
                  <tr>
                    <th className="py-2.5 px-4 w-1/3">Specification</th>
                    <th className="py-2.5 px-4 w-2/3">Product Information</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 text-stone-700">
                  <tr className="hover:bg-stone-50">
                    <td className="py-2.5 px-4 font-medium text-stone-900">Product</td>
                    <td className="py-2.5 px-4">{product.flooringType} ({product.name})</td>
                  </tr>
                  <tr className="hover:bg-stone-50">
                    <td className="py-2.5 px-4 font-medium text-stone-900">Brand / Supply</td>
                    <td className="py-2.5 px-4">{product.brand}</td>
                  </tr>
                  <tr className="hover:bg-stone-50">
                    <td className="py-2.5 px-4 font-medium text-stone-900">Flooring Type</td>
                    <td className="py-2.5 px-4">{product.flooringType}</td>
                  </tr>
                  <tr className="hover:bg-stone-50">
                    <td className="py-2.5 px-4 font-medium text-stone-900">Construction</td>
                    <td className="py-2.5 px-4">{product.construction}</td>
                  </tr>
                  <tr className="hover:bg-stone-50">
                    <td className="py-2.5 px-4 font-medium text-stone-900">Core Board</td>
                    <td className="py-2.5 px-4">{product.core}</td>
                  </tr>
                  <tr className="hover:bg-stone-50">
                    <td className="py-2.5 px-4 font-medium text-stone-900">Thickness</td>
                    <td className="py-2.5 px-4 font-semibold text-stone-900">{product.thickness}</td>
                  </tr>
                  <tr className="hover:bg-stone-50">
                    <td className="py-2.5 px-4 font-medium text-stone-900">Plank Dimensions</td>
                    <td className="py-2.5 px-4 font-mono">{product.plankDimensions}</td>
                  </tr>
                  <tr className="hover:bg-stone-50">
                    <td className="py-2.5 px-4 font-medium text-stone-900">Surface Texture</td>
                    <td className="py-2.5 px-4">{product.surface}</td>
                  </tr>
                  <tr className="hover:bg-stone-50">
                    <td className="py-2.5 px-4 font-medium text-stone-900">Finish</td>
                    <td className="py-2.5 px-4">{product.finishLabel}</td>
                  </tr>
                  <tr className="hover:bg-stone-50">
                    <td className="py-2.5 px-4 font-medium text-stone-900">AC Rating / Wear Class</td>
                    <td className="py-2.5 px-4 font-semibold text-amber-900">{product.wearClass}</td>
                  </tr>
                  <tr className="hover:bg-stone-50">
                    <td className="py-2.5 px-4 font-medium text-stone-900">Installation System</td>
                    <td className="py-2.5 px-4">{product.installation}</td>
                  </tr>
                  <tr className="hover:bg-stone-50">
                    <td className="py-2.5 px-4 font-medium text-stone-900">Edge Profile</td>
                    <td className="py-2.5 px-4">{product.edge}</td>
                  </tr>
                  <tr className="hover:bg-stone-50">
                    <td className="py-2.5 px-4 font-medium text-stone-900">Water & Moisture Resistance</td>
                    <td className="py-2.5 px-4">{product.waterResistance}</td>
                  </tr>
                  <tr className="hover:bg-stone-50">
                    <td className="py-2.5 px-4 font-medium text-stone-900">Warranty</td>
                    <td className="py-2.5 px-4">{product.warranty}</td>
                  </tr>
                  <tr className="hover:bg-stone-50">
                    <td className="py-2.5 px-4 font-medium text-stone-900">Country of Origin</td>
                    <td className="py-2.5 px-4">{product.origin}</td>
                  </tr>
                  <tr className="hover:bg-stone-50">
                    <td className="py-2.5 px-4 font-medium text-stone-900">Pack Coverage</td>
                    <td className="py-2.5 px-4 font-mono font-semibold">
                      {product.packCoverageSqM} m² / ~{product.packCoverageSqFt} sq.ft per box ({product.planksPerBox} planks)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-stone-50 border-t border-stone-200 px-6 py-3 flex items-center justify-between text-xs text-stone-500">
          <div>
            Surya Parquet · Gongabu, Kathmandu · Phone: {COMPANY_INFO.phone}
          </div>
          <button
            onClick={onClose}
            className="px-3 py-1.5 bg-stone-200 hover:bg-stone-300 text-stone-800 font-medium rounded transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
