import React from 'react';
import { ArrowRight, Compass, ShieldCheck, Feather } from 'lucide-react';
import ProductVisual from './ProductVisual';

export default function Hero({ onExploreClick, onViewLookbook }) {
  return (
    <section className="relative overflow-hidden border-b border-[#E8E6DF] bg-[#F7F5EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Campaign Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#736F65]">
              <span>Autumn / Winter 2026</span>
              <span aria-hidden="true">·</span>
              <span>Edition 04</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#18181A] leading-[1.08] tracking-tight text-balance">
              The Architecture of Quiet Tailoring.
            </h1>

            <p className="text-base sm:text-lg text-[#525049] leading-relaxed max-w-xl font-light">
              Essential silhouettes sculpted from dense Mongolian cashmere, Normandy flax linen, and Austrian boiled wool. Crafted for decade-long wear without concession to fleeting cycles.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#191919] text-white hover:bg-[#333] transition-all text-xs font-semibold uppercase tracking-wider rounded group shadow-xs active:scale-[0.98]"
              >
                <span>Explore Silhouettes</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onViewLookbook}
                className="inline-flex items-center justify-center px-6 py-3.5 border border-[#191919] text-[#191919] hover:bg-[#191919] hover:text-white transition-colors text-xs font-semibold uppercase tracking-wider rounded"
              >
                View Lookbook
              </button>
            </div>

            {/* Quiet Craft Trust Footnotes */}
            <div className="pt-8 border-t border-[#E5E2D8] grid grid-cols-3 gap-4 text-[#666258]">
              <div>
                <p className="text-xs font-semibold text-[#18181A]">100% Traceable</p>
                <p className="text-[11px] leading-tight mt-0.5">Non-mulesed wool & certified flax</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-[#18181A]">Heritage Guilds</p>
                <p className="text-[11px] leading-tight mt-0.5">Crafted in Portugal & Italy</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-[#18181A]">Carbon-Neutral</p>
                <p className="text-[11px] leading-tight mt-0.5">Eco-dyed & plastic-free boxing</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Showcase Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md bg-[#EDEBE1] rounded-lg p-6 sm:p-8 shadow-sm border border-[#E0DCCE]">
              
              {/* Seasonal badge kicker */}
              <div className="flex items-center justify-between pb-4 border-b border-[#DFD9CD] text-xs">
                <span className="font-serif italic text-sm text-[#3A3832]">Featured Silhouette</span>
                <span className="text-[#6D695F] tabular-nums tracking-wide">Ref. 01 // 520 GSM</span>
              </div>

              {/* Vector Artwork */}
              <div className="py-6 flex items-center justify-center">
                <div className="w-64 h-80">
                  <ProductVisual silhouette="trench" colorHex="#202022" accentHex="#3A3A40" />
                </div>
              </div>

              {/* Garment Details summary */}
              <div className="pt-4 border-t border-[#DFD9CD] flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-serif text-base text-[#18181A] font-medium">Architectural Cashmere Trench</h4>
                  <p className="text-[#6D695F] text-[11px] mt-0.5">Virgin Wool · Horn Buttons · Raglan Cut</p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-semibold text-[#18181A] tabular-nums">$380</span>
                  <span className="block text-[10px] text-emerald-800 font-medium">In Stock</span>
                </div>
              </div>
            </div>

            {/* Subtle decorative stamp */}
            <div className="hidden sm:flex absolute -bottom-4 -left-4 bg-[#FAF9F6] border border-[#DCD7C9] rounded-full p-3 shadow-md items-center gap-2 text-xs text-[#444]">
              <Feather className="w-4 h-4 text-[#8C6D46]" />
              <span className="font-serif italic pr-1">Slow Tailoring Standard</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
