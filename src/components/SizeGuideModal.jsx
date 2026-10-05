import React, { useState } from 'react';
import { X, Ruler } from 'lucide-react';
import { SIZE_CHART } from '../data/products';

export default function SizeGuideModal({ isOpen, onClose }) {
  const [tab, setTab] = useState('mens');
  const [unit, setUnit] = useState('in'); // 'in' or 'cm'

  if (!isOpen) return null;

  const toCm = (inchStr) => {
    if (!inchStr) return '-';
    // e.g. '34-36"' or '32"'
    const cleaned = inchStr.replace('"', '');
    if (cleaned.includes('-')) {
      const [min, max] = cleaned.split('-').map(Number);
      return `${Math.round(min * 2.54)}-${Math.round(max * 2.54)} cm`;
    }
    return `${Math.round(Number(cleaned) * 2.54)} cm`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden border border-[#E8E6DF] z-10 p-6 sm:p-8 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#ECEAE3] pb-4">
          <div className="flex items-center gap-2">
            <Ruler className="w-5 h-5 text-[#18181A]" />
            <h2 className="text-xl font-serif text-[#18181A] font-semibold">Atelier Fit & Size Guide</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#666] hover:text-[#18181A] hover:bg-[#EFECE3] rounded-full"
            aria-label="Close size guide"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Controls: Tab + Unit Switcher */}
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2 bg-[#F2F1EC] p-1 rounded-md text-xs">
            <button
              onClick={() => setTab('mens')}
              className={`px-3 py-1.5 rounded transition-colors font-medium ${
                tab === 'mens' ? 'bg-white text-black shadow-xs font-semibold' : 'text-[#666] hover:text-black'
              }`}
            >
              Men's & Unisex Silhouettes
            </button>
            <button
              onClick={() => setTab('womens')}
              className={`px-3 py-1.5 rounded transition-colors font-medium ${
                tab === 'womens' ? 'bg-white text-black shadow-xs font-semibold' : 'text-[#666] hover:text-black'
              }`}
            >
              Women's Silhouettes
            </button>
          </div>

          <div className="flex items-center gap-1 text-xs border border-[#D5D2C8] rounded p-0.5">
            <button
              onClick={() => setUnit('in')}
              className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                unit === 'in' ? 'bg-[#18181A] text-white' : 'text-[#666] hover:text-black'
              }`}
            >
              INCHES
            </button>
            <button
              onClick={() => setUnit('cm')}
              className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                unit === 'cm' ? 'bg-[#18181A] text-white' : 'text-[#666] hover:text-black'
              }`}
            >
              CENTIMETERS
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto border border-[#ECEAE3] rounded-lg">
          <table className="w-full text-xs text-left">
            <thead className="bg-[#FAF9F6] text-[#555] uppercase tracking-wider text-[10.5px] border-b border-[#ECEAE3]">
              {tab === 'mens' ? (
                <tr>
                  <th className="py-3 px-4 font-semibold">Standard Size</th>
                  <th className="py-3 px-4 font-semibold">Chest / Bust</th>
                  <th className="py-3 px-4 font-semibold">Natural Waist</th>
                  <th className="py-3 px-4 font-semibold">Seat / Hips</th>
                  <th className="py-3 px-4 font-semibold">Sleeve Length</th>
                </tr>
              ) : (
                <tr>
                  <th className="py-3 px-4 font-semibold">Standard Size</th>
                  <th className="py-3 px-4 font-semibold">Bust</th>
                  <th className="py-3 px-4 font-semibold">Waist</th>
                  <th className="py-3 px-4 font-semibold">Hips</th>
                  <th className="py-3 px-4 font-semibold">Garment Length</th>
                </tr>
              )}
            </thead>
            <tbody className="divide-y divide-[#F0EFEA] tabular-nums">
              {SIZE_CHART[tab].map((row) => (
                <tr key={row.size} className="hover:bg-[#FAF9F6]">
                  <td className="py-3 px-4 font-bold text-[#18181A]">{row.size}</td>
                  <td className="py-3 px-4 text-[#444]">
                    {unit === 'in' ? (row.chest || row.bust) : toCm(row.chest || row.bust)}
                  </td>
                  <td className="py-3 px-4 text-[#444]">
                    {unit === 'in' ? row.waist : toCm(row.waist)}
                  </td>
                  <td className="py-3 px-4 text-[#444]">
                    {unit === 'in' ? row.hips : toCm(row.hips)}
                  </td>
                  <td className="py-3 px-4 text-[#444]">
                    {unit === 'in' ? (row.sleeve || row.length) : toCm(row.sleeve || row.length)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Measuring Advice */}
        <div className="bg-[#F7F5EE] p-4 rounded-lg text-xs text-[#525049] space-y-1.5 border border-[#E5E2D8]">
          <p className="font-semibold text-[#18181A]">Atelier Drape Philosophy:</p>
          <p>
            Our outerwear and overshirts are tailored with an intentionally relaxed shoulder slope to accommodate layering. If you prefer a closer bespoke fit, we recommend selecting one size smaller than your standard measurement.
          </p>
        </div>

      </div>
    </div>
  );
}
