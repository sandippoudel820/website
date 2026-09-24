export type ColorCategory = 'all' | 'light' | 'medium' | 'dark' | 'grey' | 'white';
export type WoodDesignType = 'all' | 'oak' | 'walnut' | 'teak' | 'ash' | 'maple' | 'rustic';
export type SurfaceFinishType = 'all' | 'matt' | 'natural' | 'embossed' | 'gloss';
export type ThicknessType = 'all' | '8mm' | '10mm' | '12mm';
export type WearRatingType = 'all' | 'AC3' | 'AC4' | 'AC5';

export interface FlooringProduct {
  id: string;
  code: string; // e.g. "SP-101"
  name: string;
  collection: string;
  colorCategory: ColorCategory;
  woodDesign: WoodDesignType;
  surfaceFinish: SurfaceFinishType;
  finishLabel: string;
  thickness: string; // "8 mm", "10 mm", "12 mm"
  thicknessValue: number; // 8, 10, 12
  wearClass: 'AC3 / Class 31' | 'AC4 / Class 32' | 'AC5 / Class 33';
  acRating: 'AC3' | 'AC4' | 'AC5';
  brand: string;
  flooringType: string;
  construction: string;
  core: string;
  plankDimensions: string;
  plankLengthMm: number;
  plankWidthMm: number;
  surface: string;
  installation: string;
  edge: string;
  waterResistance: string;
  warranty: string;
  origin: string;
  packCoverageSqM: number;
  packCoverageSqFt: number;
  planksPerBox: number;
  woodAppearance: string; // "Single-strip", "2-strip", "Wide plank"
  suitableFor: string[];
  toneHex: string;
  grainTextureUrl?: string;
  description: string;
  matchingAccessories: {
    skirting: boolean;
    tProfile: boolean;
    reducer: boolean;
    endProfile: boolean;
    beadingLysti: boolean;
    stairNose: boolean;
  };
}

export interface AccessoryItem {
  id: string;
  title: string;
  alias?: string; // e.g. "Lysti / Scotia / Beading"
  category: 'profile' | 'skirting' | 'beading' | 'underlay' | 'hardware';
  purpose: string;
  typicalApplication: string;
  keyMaterials: string;
  availableFinishes: string;
  dimensionsGuidance: string;
  details: string;
  iconType: 'skirting' | 'beading' | 't-profile' | 'reducer' | 'end-profile' | 'door' | 'stair' | 'expansion' | 'adapter' | 'tile' | 'underlay' | 'hardware';
}

export interface ServiceItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'technical' | 'installation' | 'accessories';
}

export interface CalculationResult {
  lengthFt: number;
  widthFt: number;
  netAreaSqFt: number;
  netAreaSqM: number;
  wastagePercent: number;
  wastageSqFt: number;
  totalFlooringSqFt: number;
  totalFlooringSqM: number;
  boxesRequired: number;
  estimatedSkirtingFt: number;
}
