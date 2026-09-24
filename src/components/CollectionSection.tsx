import React, { useState, useMemo } from 'react';
import { 
  Check, 
  MessageSquare, 
  Phone, 
  Search, 
  SlidersHorizontal, 
  Layers, 
  Ruler, 
  Info, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { PRODUCTS, COMPANY_INFO } from '../data/flooringData';
import { FlooringProduct, ColorCategory, WoodDesignType, ThicknessType, WearRatingType } from '../types/flooring';
import { ProductDetailModal } from './ProductDetailModal';

export const CollectionSection: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<ColorCategory>('all');
  const [selectedWood, setSelectedWood] = useState<WoodDesignType>('all');
  const [selectedThickness, setSelectedThickness] = useState<ThicknessType>('all');
  const [selectedWear, setSelectedWear] = useState<WearRatingType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProduct, setActiveModalProduct] = useState<FlooringProduct | null>(null);

  // Filter products based on active criteria
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Color
      if (selectedColor !== 'all' && item.colorCategory !== selectedColor) return false;
      // Wood
      if (selectedWood !== 'all' && item.woodDesign !== selectedWood) return false;
      // Thickness
      if (selectedThickness !== 'all') {
        if (selectedThickness === '8mm' && item.thicknessValue !== 8) return false;
        if (selectedThickness === '10mm' && item.thicknessValue !== 10) return false;
        if (selectedThickness === '12mm' && item.thicknessValue !== 12) return false;
      }
      // Wear class
      if (selectedWear !== 'all' && item.acRating !== selectedWear) return false;
      // Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(q);
        const matchCode = item.code.toLowerCase().includes(q);
        const matchWood = item.woodDesign.toLowerCase().includes(q);
        const matchDesc = item.description.toLowerCase().includes(q);
        if (!matchName && !matchCode && !matchWood && !matchDesc) return false;
      }
      return true;
    });
  }, [selectedColor, selectedWood, selectedThickness, selectedWear, searchQuery]);

  const handleClearFilters = () => {
    setSelectedColor('all');
    setSelectedWood('all');
    setSelectedThickness('all');
    setSelectedWear('all');
    setSearchQuery('');
  };

  const getDirectWhatsAppUrl = (product: FlooringProduct) => {
    const text = `Namaste Surya Parquet! I would like to inquire about:
Model: ${product.name} (${product.code})
Thickness: ${product.thickness} (${product.wearClass})
Finish: ${product.finishLabel}

Please share current stock availability in Gongabu and price per sq.ft.`;
    return `https://wa.me/9779851070645?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="collection" className="py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-stone-200">
          <div>
            <div className="text-xs uppercase font-semibold tracking-wider text-amber-700">
              Surya Parquet Color & Finish Catalog
            </div>
            <h2 className="mt-1 font-serif-display text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
              Our Laminate Collection
            </h2>
            <p className="mt-2 text-stone-600 text-sm sm:text-base max-w-2xl">
              Carefully curated timber species, finishes, and wear classes imported for residential homes, executive offices, and luxury commercial interiors in Nepal.
            </p>
          </div>

          {/* Quick search input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search oak, walnut, SP-101..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-stone-300 rounded-lg shadow-2xs focus:outline-none focus:ring-1 focus:ring-amber-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 text-xs font-bold"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="mt-8 space-y-4">
          
          {/* Color Tabs */}
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-wider text-stone-500 mb-2">
              Color Palette
            </div>
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-200/80 rounded-lg max-w-full overflow-x-auto">
              {[
                { id: 'all', label: 'All Tones' },
                { id: 'light', label: 'Light Wood (Oak / Ash / Maple)' },
                { id: 'medium', label: 'Medium Wood (Classic Oak / Teak)' },
                { id: 'dark', label: 'Dark Wood (Walnut / Espresso)' },
                { id: 'grey', label: 'Grey Wood (Silver / Charcoal)' },
                { id: 'white', label: 'White / Cream (Bleached / Ivory)' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedColor(tab.id as ColorCategory)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                    selectedColor === tab.id
                      ? 'bg-white text-stone-900 shadow-xs font-semibold'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Sub-Filters: Wood Pattern, Thickness, Wear Class */}
          <div className="flex flex-wrap items-center gap-4 text-xs pt-1">
            
            {/* Wood Species */}
            <div className="flex items-center gap-2">
              <span className="text-stone-500 font-medium">Wood Pattern:</span>
              <select
                value={selectedWood}
                onChange={(e) => setSelectedWood(e.target.value as WoodDesignType)}
                className="px-2.5 py-1 bg-white border border-stone-300 rounded text-stone-800 focus:outline-none focus:ring-1 focus:ring-amber-500"
              >
                <option value="all">All Species</option>
                <option value="oak">Oak Collection</option>
                <option value="walnut">Walnut Collection</option>
                <option value="teak">Teak Collection</option>
                <option value="ash">Ash</option>
                <option value="maple">Maple</option>
                <option value="rustic">Rustic Wood</option>
              </select>
            </div>

            {/* Thickness */}
            <div className="flex items-center gap-2">
              <span className="text-stone-500 font-medium">Thickness:</span>
              <select
                value={selectedThickness}
                onChange={(e) => setSelectedThickness(e.target.value as ThicknessType)}
                className="px-2.5 py-1 bg-white border border-stone-300 rounded text-stone-800 focus:outline-none focus:ring-1 focus:ring-amber-500"
              >
                <option value="all">All Thicknesses</option>
                <option value="8mm">8 mm (Residential standard)</option>
                <option value="10mm">10 mm (Heavy residential / acoustic)</option>
                <option value="12mm">12 mm (Heavy commercial / solid feel)</option>
              </select>
            </div>

            {/* Wear Class */}
            <div className="flex items-center gap-2">
              <span className="text-stone-500 font-medium">Wear Class:</span>
              <select
                value={selectedWear}
                onChange={(e) => setSelectedWear(e.target.value as WearRatingType)}
                className="px-2.5 py-1 bg-white border border-stone-300 rounded text-stone-800 focus:outline-none focus:ring-1 focus:ring-amber-500"
              >
                <option value="all">All AC Ratings</option>
                <option value="AC3">AC3 (Moderate Residential)</option>
                <option value="AC4">AC4 (Heavy Residential / General Commercial)</option>
                <option value="AC5">AC5 (Demanding Heavy Commercial)</option>
              </select>
            </div>

            {/* Reset Filters button if any filter is active */}
            {(selectedColor !== 'all' || selectedWood !== 'all' || selectedThickness !== 'all' || selectedWear !== 'all' || searchQuery) && (
              <button
                onClick={handleClearFilters}
                className="text-amber-800 hover:text-amber-900 underline font-medium ml-auto"
              >
                Reset All Filters
              </button>
            )}
          </div>

        </div>

        {/* Results Counter */}
        <div className="mt-6 flex items-center justify-between text-xs text-stone-500 pb-2">
          <div>
            Showing <span className="font-semibold text-stone-900">{filteredProducts.length}</span> verified laminate designs in Gongabu stock
          </div>
          <div className="text-stone-400">
            Click any product for full technical table & WhatsApp quotation
          </div>
        </div>

        {/* Product Cards Grid - Section 18 in User Prompt */}
        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center bg-white rounded-xl border border-stone-200 p-8">
            <p className="text-stone-600 text-sm">No products found matching your current filter criteria.</p>
            <button
              onClick={handleClearFilters}
              className="mt-4 px-4 py-2 text-xs font-semibold text-amber-900 bg-amber-100 rounded-md hover:bg-amber-200 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl border border-stone-200/90 shadow-2xs hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Swatch & Visual Header */}
                  <div
                    onClick={() => setActiveModalProduct(product)}
                    className="cursor-pointer relative aspect-[16/10] p-4 flex flex-col justify-between overflow-hidden group border-b border-stone-200"
                    style={{
                      background: `linear-gradient(135deg, ${product.toneHex} 0%, #FAF8F5 160%)`,
                    }}
                  >
                    <div className="flex items-center justify-between z-10">
                      <span className="font-mono text-xs font-bold text-stone-900 bg-white/90 backdrop-blur-xs px-2.5 py-0.5 rounded shadow-2xs">
                        {product.code}
                      </span>
                      <span className="text-[11px] font-semibold text-stone-900 bg-amber-300/90 px-2 py-0.5 rounded">
                        {product.acRating}
                      </span>
                    </div>

                    <div className="z-10 bg-white/90 backdrop-blur-sm p-2.5 rounded-lg border border-stone-200/70 shadow-2xs">
                      <div className="text-xs font-semibold text-stone-900">
                        {product.woodAppearance}
                      </div>
                      <div className="text-[11px] text-stone-600 truncate">
                        {product.surface}
                      </div>
                    </div>

                    {/* Subtle hover prompt */}
                    <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-stone-900 text-white text-xs font-semibold px-3 py-1.5 rounded-md shadow-md flex items-center gap-1.5">
                        <Info className="w-3.5 h-3.5" />
                        <span>View Technical Specs</span>
                      </span>
                    </div>
                  </div>

                  {/* Product Details Content */}
                  <div className="p-5">
                    
                    {/* Header */}
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 
                          onClick={() => setActiveModalProduct(product)}
                          className="font-serif-display text-lg font-bold text-stone-900 hover:text-amber-800 cursor-pointer transition-colors"
                        >
                          {product.name}
                        </h3>
                        <div className="text-xs text-stone-500 font-medium">
                          {product.flooringType} · {product.collection}
                        </div>
                      </div>
                      <span className="font-mono text-xs font-semibold text-stone-800 bg-stone-100 px-2 py-1 rounded shrink-0">
                        {product.thickness}
                      </span>
                    </div>

                    {/* Specifications List */}
                    <div className="mt-4 space-y-1.5 text-xs text-stone-600 pt-3 border-t border-stone-100">
                      <div className="flex justify-between">
                        <span className="text-stone-500">Color:</span>
                        <span className="font-medium text-stone-800">{product.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">Pattern:</span>
                        <span className="font-medium text-stone-800 capitalize">{product.woodDesign} Grain</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">Finish:</span>
                        <span className="font-medium text-stone-800">{product.finishLabel}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">Wear Class:</span>
                        <span className="font-medium text-amber-900">{product.wearClass}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">Installation:</span>
                        <span className="font-medium text-stone-800">{product.installation}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">Coverage:</span>
                        <span className="font-mono text-stone-800">~{product.packCoverageSqFt} sq.ft / pack</span>
                      </div>
                    </div>

                    {/* Available Accessories Checklist (Section 18) */}
                    <div className="mt-4 pt-3 border-t border-stone-100">
                      <div className="text-[11px] font-semibold text-stone-700 uppercase tracking-wider mb-2">
                        Available Matching Accessories
                      </div>
                      <div className="grid grid-cols-2 gap-1 text-[11px] text-stone-600">
                        <div className="flex items-center gap-1">
                          <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                          <span>Matching Skirting</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                          <span>T-Profile</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                          <span>Reducer Profile</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                          <span>End Profile</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                          <span>Beading / Lysti</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                          <span>Underlay Roll</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Price & Action Footer (Section 18) */}
                <div className="p-5 pt-0">
                  <div className="flex items-center justify-between pb-3 pt-2 text-xs">
                    <span className="text-stone-500 font-medium">Price:</span>
                    <span className="font-semibold text-stone-900 bg-amber-50 text-amber-900 px-2 py-0.5 rounded border border-amber-200">
                      Contact for Wholesale / Retail Price
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-stone-100">
                    <button
                      onClick={() => setActiveModalProduct(product)}
                      className="px-2 py-2 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-md transition-colors text-center"
                    >
                      Get Price
                    </button>

                    <a
                      href={getDirectWhatsAppUrl(product)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-md transition-colors flex items-center justify-center gap-1 text-center"
                    >
                      <MessageSquare className="w-3 h-3" />
                      <span>WhatsApp</span>
                    </a>

                    <a
                      href={COMPANY_INFO.telUrl}
                      className="px-2 py-2 text-xs font-semibold text-stone-800 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors flex items-center justify-center gap-1 text-center"
                    >
                      <Phone className="w-3 h-3" />
                      <span>Call Now</span>
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      {/* Technical Spec & Quote Modal */}
      <ProductDetailModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
      />
    </section>
  );
};
