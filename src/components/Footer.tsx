import React from 'react';
import { Phone, MessageSquare, MapPin } from 'lucide-react';
import { COMPANY_INFO, KATHMANDU_AREAS } from '../data/flooringData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <span className="font-serif-display text-2xl font-bold tracking-tight text-white">
                Surya Parquet
              </span>
              <div className="text-[11px] uppercase tracking-wider text-amber-400 font-semibold mt-1">
                Importer & Supplier of Laminated Parquet Flooring
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed">
              Surya Parquet is an importer and supplier based in Gongabu, Kathmandu, Nepal, specializing in laminated parquet and interior flooring solutions. Supplying wood-look flooring designs, matching skirting, transition profiles, reducers, and professional installation solutions.
            </p>

            <div className="pt-2 text-xs text-stone-300 space-y-1.5 font-medium">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Gongabu, Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={COMPANY_INFO.telUrl} className="hover:text-white transition-colors">
                  +977 9851070645 / 9851070645
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a 
                  href={COMPANY_INFO.whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  WhatsApp & Viber: 9851070645
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links: Products */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-semibold tracking-wider text-white">
              Flooring Collections
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#collection" className="hover:text-amber-300 transition-colors">Light Wood Collection (Oak, Ash, Maple)</a></li>
              <li><a href="#collection" className="hover:text-amber-300 transition-colors">Medium Wood Collection (Classic Oak, Teak)</a></li>
              <li><a href="#collection" className="hover:text-amber-300 transition-colors">Dark Wood Collection (Walnut, Espresso, Wenge)</a></li>
              <li><a href="#collection" className="hover:text-amber-300 transition-colors">Grey Wood Collection (Silver, Charcoal Oak)</a></li>
              <li><a href="#collection" className="hover:text-amber-300 transition-colors">White / Cream Collection (Ivory, Bleached)</a></li>
              <li><a href="#collection" className="hover:text-amber-300 transition-colors">8 mm, 10 mm & 12 mm Thicknesses</a></li>
              <li><a href="#collection" className="hover:text-amber-300 transition-colors">AC3, AC4 & AC5 Wear Classes</a></li>
            </ul>
          </div>

          {/* Quick Links: Accessories & Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-semibold tracking-wider text-white">
              Accessories & Services
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#accessories" className="hover:text-amber-300 transition-colors">Color-Matched Skirting Boards</a></li>
              <li><a href="#accessories" className="hover:text-amber-300 transition-colors">Lysti / Scotia / Beading</a></li>
              <li><a href="#accessories" className="hover:text-amber-300 transition-colors">T-Profiles (Same Level Transitions)</a></li>
              <li><a href="#accessories" className="hover:text-amber-300 transition-colors">Reducer & Height Adaptation Profiles</a></li>
              <li><a href="#accessories" className="hover:text-amber-300 transition-colors">End Profiles & Doorway Trims</a></li>
              <li><a href="#accessories" className="hover:text-amber-300 transition-colors">Stair Noses & Step Edges</a></li>
              <li><a href="#calculator" className="hover:text-amber-300 transition-colors">Room Measurement & Box Calculator</a></li>
              <li><a href="#services" className="hover:text-amber-300 transition-colors">Professional Fitting & Installation</a></li>
            </ul>
          </div>

          {/* Business & Local Service */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase font-semibold tracking-wider text-white">
              Areas Served
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Supplying Gongabu, Balaju, Maharajgunj, Samakhusi, Tokha, Lazimpat, Thamel, New Baneshwor, Koteshwor, Kalanki, Lalitpur, Bhaktapur, and across Nepal.
            </p>
            <div className="pt-2 text-xs text-stone-400">
              <span className="font-semibold text-white">Store Hours:</span>
              <div className="text-[11px] mt-0.5">Sun – Fri: 9:30 AM – 7:00 PM</div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-stone-850 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} Surya Parquet (Surya Export Import). All rights reserved. Gongabu, Kathmandu, Nepal.
          </div>
          <div className="flex items-center gap-4 text-stone-400 text-xs">
            <span>Natural wood appearance. Practical laminate flooring.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
