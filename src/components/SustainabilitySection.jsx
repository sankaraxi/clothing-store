import React from 'react';
import { Compass, Sparkles, Feather, ShieldCheck } from 'lucide-react';

export default function SustainabilitySection() {
  const pillars = [
    {
      num: '01',
      title: 'Monofilament Natural Fibers',
      desc: 'We strictly reject synthetic elastane blends and microplastics. By formulating mono-material virgin wool, silk, and linen, every Atelier piece can naturally biodegrade or be re-spun at end of lifecycle.'
    },
    {
      num: '02',
      title: 'Artisanal Guild Production',
      desc: 'Small batch runs limited to 150 pieces per cut, constructed by veteran tailors across Porto, Biella, and Scandicci receiving over 140% of national living wage standards.'
    },
    {
      num: '03',
      title: 'Lifetime Seam Guarantee',
      desc: 'Every garment is backed by complimentary lifetime repairs. Send your piece back to our atelier at any time for pocket lining reinforcement, button re-anchoring, or wool re-blocking.'
    }
  ];

  return (
    <section id="sustainability" className="bg-[#F7F5EE] py-16 sm:py-24 border-t border-[#E8E6DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8C7A6B]">
            Environmental Integrity
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#18181A] mt-1 font-normal">
            The Philosophy of Slow Production
          </h2>
          <p className="text-sm text-[#666258] mt-2 font-light">
            Fast fashion depends on planned obsolescence and polyester waste. We build clothing with historical resilience, honoring the farmer, the weaver, and the wearer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {pillars.map((pillar) => (
            <div key={pillar.num} className="border-t border-[#DCD7C9] pt-6 space-y-3">
              <span className="font-serif italic text-lg text-[#8C7A6B]">
                {pillar.num}.
              </span>
              <h3 className="font-serif text-xl font-medium text-[#18181A]">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#555] leading-relaxed font-light">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
