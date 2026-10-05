import React, { useState } from 'react';
import { LOOKBOOK_STORIES } from '../data/products';
import { Sparkles, ArrowRight } from 'lucide-react';
import ProductVisual from './ProductVisual';

export default function LookbookSection({ onBrowseCollection }) {
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);
  const story = LOOKBOOK_STORIES[activeStoryIdx] || LOOKBOOK_STORIES[0];

  return (
    <section id="lookbook" className="bg-[#FAF9F6] py-16 sm:py-24 border-t border-[#E8E6DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8C7A6B]">
              Seasonal Editorial
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#18181A] mt-1 font-normal">
              The Lookbook Archive
            </h2>
          </div>

          {/* Story Switcher Tabs */}
          <div className="flex items-center gap-2 border-b border-[#E0DED7] pb-1">
            {LOOKBOOK_STORIES.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setActiveStoryIdx(idx)}
                className={`text-xs font-semibold uppercase tracking-wider py-1 px-2 transition-colors relative ${
                  activeStoryIdx === idx
                    ? 'text-[#18181A] after:content-[""] after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-[2px] after:bg-[#18181A]'
                    : 'text-[#888] hover:text-black'
                }`}
              >
                Story 0{idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Feature Editorial Canvas */}
        <div className="bg-[#F4F3EE] rounded-xl border border-[#E5E2D8] overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Visual Side */}
          <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between bg-gradient-to-br from-[#EDEBE4] to-[#E5E1D8] border-b lg:border-b-0 lg:border-r border-[#DFDBD0]">
            <div className="flex items-center justify-between text-xs text-[#736F65]">
              <span className="uppercase tracking-widest">{story.season}</span>
              <span className="font-serif italic">Edition Archive</span>
            </div>

            {/* Visual presentation */}
            <div className="py-8 flex items-center justify-center">
              <div className="w-56 h-72 sm:w-64 sm:h-80 drop-shadow-md">
                <ProductVisual
                  silhouette={activeStoryIdx === 0 ? 'overcoat' : 'dress'}
                  colorHex={activeStoryIdx === 0 ? '#2A332B' : '#874B3C'}
                  accentHex={activeStoryIdx === 0 ? '#374238' : '#9C5847'}
                />
              </div>
            </div>

            <p className="text-xs text-[#6F6B60] text-center italic font-serif">
              Photographed under natural diffuse skylight in Porto, Portugal.
            </p>
          </div>

          {/* Text & Manifesto Side */}
          <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-serif italic text-[#8C7A6B]">
                Curator's Statement
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#18181A] leading-snug">
                {story.title}
              </h3>
              
              <blockquote className="border-l-2 border-[#18181A] pl-4 italic text-base sm:text-lg font-serif text-[#333]">
                "{story.quote}"
              </blockquote>

              <p className="text-xs sm:text-sm text-[#555] leading-relaxed font-light">
                {story.details}
              </p>
            </div>

            <div className="pt-6 border-t border-[#DFDBD0] flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-[#18181A]">Zero Seasonal Markdown</p>
                <p className="text-[11px] text-[#777]">Fair atelier wages, non-toxic vegetable dyes</p>
              </div>

              <button
                onClick={onBrowseCollection}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#18181A] hover:bg-[#333] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors"
              >
                <span>Browse Collection</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
