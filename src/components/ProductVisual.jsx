import React from 'react';

/**
 * High-fidelity architectural garment visualizer.
 * Renders domain-authentic vector apparel illustrations with tactile weave
 * patterns, drape contours, and dynamic color shading.
 */
export default function ProductVisual({ silhouette, colorHex, accentHex, className = '' }) {
  const baseColor = colorHex || '#2A2A2E';
  const shadowColor = accentHex || '#1C1C1E';

  const renderSilhouette = () => {
    switch (silhouette) {
      case 'trench':
        return (
          <svg viewBox="0 0 320 420" className="w-full h-full drop-shadow-sm select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id={`trench-grad-${baseColor.replace('#', '')}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={accentHex || '#3d3d42'} />
                <stop offset="50%" stopColor={baseColor} />
                <stop offset="100%" stopColor={shadowColor} />
              </linearGradient>
              <pattern id="wool-weave" width="6" height="6" patternUnits="userSpaceOnUse">
                <path d="M 0 3 L 6 3 M 3 0 L 3 6" stroke="#000" strokeWidth="0.3" strokeOpacity="0.08" />
              </pattern>
            </defs>
            {/* Background Studio Pedestal Glow */}
            <ellipse cx="160" cy="385" rx="100" ry="16" fill="black" fillOpacity="0.06" />

            {/* Back Collar */}
            <path d="M 125 55 Q 160 52 195 55 L 190 70 Q 160 67 130 70 Z" fill={shadowColor} opacity="0.9" />

            {/* Left Sleeve */}
            <path d="M 105 85 L 65 190 Q 60 250 68 290 L 98 285 Q 92 230 115 150 Z" fill={`url(#trench-grad-${baseColor.replace('#', '')})`} />
            <path d="M 68 275 L 96 270" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />

            {/* Right Sleeve */}
            <path d="M 215 85 L 255 190 Q 260 250 252 290 L 222 285 Q 228 230 205 150 Z" fill={`url(#trench-grad-${baseColor.replace('#', '')})`} />
            <path d="M 224 270 L 252 275" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />

            {/* Main Trench Coat Body */}
            <path d="M 110 80 Q 160 85 210 80 L 228 210 L 245 370 Q 160 380 75 370 L 92 210 Z" fill={`url(#trench-grad-${baseColor.replace('#', '')})`} />
            <path d="M 110 80 Q 160 85 210 80 L 228 210 L 245 370 Q 160 380 75 370 L 92 210 Z" fill="url(#wool-weave)" />

            {/* Storm Flap & Chest overlay */}
            <path d="M 160 84 L 212 92 L 208 175 L 160 190 Z" fill={shadowColor} opacity="0.4" />

            {/* Left Lapel */}
            <path d="M 125 60 L 100 130 L 138 145 L 135 220 L 160 220 L 155 70 Z" fill={baseColor} />
            {/* Right Lapel (Crossed Over) */}
            <path d="M 195 60 L 220 130 L 175 155 L 180 230 L 158 230 L 165 70 Z" fill={accentHex || baseColor} />

            {/* Waist Belt & D-Ring Detailing */}
            <rect x="105" y="215" width="110" height="18" rx="2" fill={shadowColor} />
            <rect x="150" y="213" width="20" height="22" rx="2" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none" />
            <path d="M 160 213 L 160 235" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />

            {/* Horn Buttons */}
            <circle cx="140" cy="180" r="4.5" fill="#151515" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            <circle cx="180" cy="180" r="4.5" fill="#151515" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            <circle cx="142" cy="260" r="4.5" fill="#151515" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            <circle cx="178" cy="260" r="4.5" fill="#151515" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />

            {/* Clean Tailoring Vent & Hem fold */}
            <path d="M 160 290 L 160 375" stroke={shadowColor} strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
          </svg>
        );

      case 'knitwear':
        return (
          <svg viewBox="0 0 320 420" className="w-full h-full drop-shadow-sm select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id={`knit-grad-${baseColor.replace('#', '')}`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={accentHex || baseColor} />
                <stop offset="100%" stopColor={baseColor} />
              </linearGradient>
              <pattern id="rib-pattern" width="8" height="12" patternUnits="userSpaceOnUse">
                <line x1="2" y1="0" x2="2" y2="12" stroke="rgba(0,0,0,0.12)" strokeWidth="1.5" />
                <line x1="6" y1="0" x2="6" y2="12" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              </pattern>
            </defs>
            <ellipse cx="160" cy="380" rx="90" ry="14" fill="black" fillOpacity="0.05" />

            {/* Chunky Mockneck Collar */}
            <rect x="126" y="48" width="68" height="34" rx="6" fill={shadowColor} />
            <rect x="126" y="48" width="68" height="34" rx="6" fill="url(#rib-pattern)" />

            {/* Left Raglan Sleeve */}
            <path d="M 126 75 L 50 170 Q 42 240 55 295 L 90 290 Q 82 235 110 160 Z" fill={`url(#knit-grad-${baseColor.replace('#', '')})`} />
            {/* Right Raglan Sleeve */}
            <path d="M 194 75 L 270 170 Q 278 240 265 295 L 230 290 Q 238 235 210 160 Z" fill={`url(#knit-grad-${baseColor.replace('#', '')})`} />

            {/* Body */}
            <path d="M 112 80 L 208 80 L 225 320 Q 160 328 95 320 Z" fill={`url(#knit-grad-${baseColor.replace('#', '')})`} />
            <path d="M 112 80 L 208 80 L 225 320 Q 160 328 95 320 Z" fill="url(#rib-pattern)" />

            {/* Ribbed Bottom Hem */}
            <path d="M 94 316 Q 160 324 226 316 L 228 340 Q 160 348 92 340 Z" fill={shadowColor} />
            <path d="M 94 316 Q 160 324 226 316 L 228 340 Q 160 348 92 340 Z" fill="url(#rib-pattern)" />

            {/* Ribbed Cuffs */}
            <rect x="52" y="285" width="38" height="22" rx="3" transform="rotate(-10 52 285)" fill={shadowColor} />
            <rect x="230" y="280" width="38" height="22" rx="3" transform="rotate(10 230 280)" fill={shadowColor} />

            {/* Raglan Seam lines */}
            <line x1="126" y1="75" x2="108" y2="140" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5" strokeDasharray="2 2" />
            <line x1="194" y1="75" x2="212" y2="140" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5" strokeDasharray="2 2" />
          </svg>
        );

      case 'blazer':
        return (
          <svg viewBox="0 0 320 420" className="w-full h-full drop-shadow-sm select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id={`blazer-grad-${baseColor.replace('#', '')}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={accentHex || baseColor} />
                <stop offset="100%" stopColor={shadowColor} />
              </linearGradient>
            </defs>
            <ellipse cx="160" cy="380" rx="95" ry="14" fill="black" fillOpacity="0.05" />

            {/* Inner Shirt peek */}
            <polygon points="145,70 175,70 160,110" fill="#FAF9F6" />
            <polygon points="145,70 160,78 152,90" fill="#E8E6DF" />
            <polygon points="175,70 160,78 168,90" fill="#E8E6DF" />

            {/* Sleeves */}
            <path d="M 95 85 L 55 210 Q 52 260 62 300 L 96 295 Q 90 250 110 160 Z" fill={`url(#blazer-grad-${baseColor.replace('#', '')})`} />
            <path d="M 225 85 L 265 210 Q 268 260 258 300 L 224 295 Q 230 250 210 160 Z" fill={`url(#blazer-grad-${baseColor.replace('#', '')})`} />

            {/* Blazer Torso */}
            <path d="M 105 82 L 215 82 L 230 330 Q 160 338 90 330 Z" fill={`url(#blazer-grad-${baseColor.replace('#', '')})`} />

            {/* Notched Lapels */}
            <path d="M 115 82 L 105 145 L 140 185 L 138 245 L 160 250 L 155 90 Z" fill={baseColor} />
            <path d="M 205 82 L 215 145 L 180 185 L 182 245 L 160 250 L 165 90 Z" fill={accentHex || baseColor} />

            {/* Breast Pocket & Handcrafted Pocket Square */}
            <rect x="180" y="145" width="28" height="8" rx="1" fill={shadowColor} />
            <polygon points="188,144 195,134 200,144" fill="#FAF9F6" />

            {/* Patch Hip Pockets */}
            <rect x="105" y="250" width="38" height="42" rx="4" fill={shadowColor} opacity="0.6" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <rect x="177" y="250" width="38" height="42" rx="4" fill={shadowColor} opacity="0.6" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

            {/* Mother of pearl button */}
            <circle cx="160" cy="245" r="4" fill="#EAE6DA" stroke="#999" strokeWidth="0.8" />
            <circle cx="160" cy="275" r="4" fill="#EAE6DA" stroke="#999" strokeWidth="0.8" />
          </svg>
        );

      case 'trouser':
        return (
          <svg viewBox="0 0 320 420" className="w-full h-full drop-shadow-sm select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id={`trouser-grad-${baseColor.replace('#', '')}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={shadowColor} />
                <stop offset="30%" stopColor={baseColor} />
                <stop offset="70%" stopColor={accentHex || baseColor} />
                <stop offset="100%" stopColor={shadowColor} />
              </linearGradient>
            </defs>
            <ellipse cx="160" cy="390" rx="90" ry="12" fill="black" fillOpacity="0.05" />

            {/* Extended Tab Waistband */}
            <rect x="100" y="60" width="120" height="22" rx="2" fill={shadowColor} />
            <rect x="150" y="66" width="14" height="10" rx="1" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />

            {/* Left Leg */}
            <path d="M 100 82 L 158 140 L 140 375 L 85 370 L 100 82 Z" fill={`url(#trouser-grad-${baseColor.replace('#', '')})`} />
            {/* Right Leg */}
            <path d="M 220 82 L 162 140 L 180 375 L 235 370 L 220 82 Z" fill={`url(#trouser-grad-${baseColor.replace('#', '')})`} />

            {/* Crotch & Drape Shadows */}
            <polygon points="155,138 165,138 160,165" fill={shadowColor} opacity="0.6" />

            {/* Crisp Forward Pleats */}
            <line x1="120" y1="82" x2="114" y2="368" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" />
            <line x1="132" y1="82" x2="128" y2="240" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
            <line x1="200" y1="82" x2="206" y2="368" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" />
            <line x1="188" y1="82" x2="192" y2="240" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />

            {/* Clean Cuffed Hem */}
            <rect x="85" y="362" width="55" height="12" rx="1" fill={shadowColor} opacity="0.8" />
            <rect x="180" y="362" width="55" height="12" rx="1" fill={shadowColor} opacity="0.8" />
          </svg>
        );

      case 'shirt':
        return (
          <svg viewBox="0 0 320 420" className="w-full h-full drop-shadow-sm select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id={`shirt-grad-${baseColor.replace('#', '')}`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={accentHex || baseColor} />
                <stop offset="100%" stopColor={baseColor} />
              </linearGradient>
            </defs>
            <ellipse cx="160" cy="375" rx="85" ry="12" fill="black" fillOpacity="0.05" />

            {/* Band / Mandarin Collar */}
            <rect x="132" y="55" width="56" height="18" rx="4" fill={shadowColor} />
            <circle cx="160" cy="64" r="2.5" fill="#FFF" opacity="0.8" />

            {/* Sleeves */}
            <path d="M 100 78 L 52 185 Q 46 230 58 270 L 92 265 Q 86 220 108 150 Z" fill={`url(#shirt-grad-${baseColor.replace('#', '')})`} />
            <path d="M 220 78 L 268 185 Q 274 230 262 270 L 228 265 Q 234 220 212 150 Z" fill={`url(#shirt-grad-${baseColor.replace('#', '')})`} />

            {/* Main Shirt Body */}
            <path d="M 110 75 L 210 75 L 222 310 Q 160 330 98 310 Z" fill={`url(#shirt-grad-${baseColor.replace('#', '')})`} />

            {/* Placket */}
            <rect x="154" y="65" width="12" height="250" fill={shadowColor} opacity="0.35" />

            {/* Subtle Pearl Buttons */}
            <circle cx="160" cy="95" r="3" fill="#FAF9F6" stroke="rgba(0,0,0,0.15)" strokeWidth="0.8" />
            <circle cx="160" cy="135" r="3" fill="#FAF9F6" stroke="rgba(0,0,0,0.15)" strokeWidth="0.8" />
            <circle cx="160" cy="175" r="3" fill="#FAF9F6" stroke="rgba(0,0,0,0.15)" strokeWidth="0.8" />
            <circle cx="160" cy="215" r="3" fill="#FAF9F6" stroke="rgba(0,0,0,0.15)" strokeWidth="0.8" />
            <circle cx="160" cy="255" r="3" fill="#FAF9F6" stroke="rgba(0,0,0,0.15)" strokeWidth="0.8" />

            {/* Minimalist Chest Pocket */}
            <rect x="120" y="125" width="30" height="34" rx="2" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="1" strokeDasharray="3 2" />

            {/* Sleeve Cuffs */}
            <rect x="58" y="260" width="34" height="14" rx="2" transform="rotate(-8 58 260)" fill={shadowColor} />
            <rect x="228" y="255" width="34" height="14" rx="2" transform="rotate(8 228 255)" fill={shadowColor} />
          </svg>
        );

      case 'dress':
        return (
          <svg viewBox="0 0 320 420" className="w-full h-full drop-shadow-sm select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id={`dress-grad-${baseColor.replace('#', '')}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={accentHex || baseColor} />
                <stop offset="60%" stopColor={baseColor} />
                <stop offset="100%" stopColor={shadowColor} />
              </linearGradient>
            </defs>
            <ellipse cx="160" cy="390" rx="80" ry="12" fill="black" fillOpacity="0.05" />

            {/* Delicate Spaghetti Straps */}
            <line x1="135" y1="45" x2="142" y2="90" stroke={shadowColor} strokeWidth="1.5" />
            <line x1="185" y1="45" x2="178" y2="90" stroke={shadowColor} strokeWidth="1.5" />

            {/* Fluid Bias Slip Silhouette */}
            <path d="M 138 90 Q 160 102 182 90 L 195 160 Q 185 220 205 310 Q 220 370 230 380 Q 160 395 90 380 Q 105 370 115 310 Q 135 220 125 160 Z" fill={`url(#dress-grad-${baseColor.replace('#', '')})`} />

            {/* Subtle Silk Drape Contours */}
            <path d="M 135 150 Q 160 180 185 150" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" fill="none" />
            <path d="M 120 230 Q 155 265 198 240" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none" />
            <path d="M 110 320 Q 165 355 210 330" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" fill="none" />
          </svg>
        );

      case 'tote':
        return (
          <svg viewBox="0 0 320 420" className="w-full h-full drop-shadow-sm select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id={`tote-grad-${baseColor.replace('#', '')}`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={accentHex || baseColor} />
                <stop offset="100%" stopColor={shadowColor} />
              </linearGradient>
            </defs>
            <ellipse cx="160" cy="375" rx="85" ry="14" fill="black" fillOpacity="0.06" />

            {/* Tubular Handles */}
            <path d="M 125 160 C 125 70, 195 70, 195 160" stroke={shadowColor} strokeWidth="9" strokeLinecap="round" fill="none" />
            <path d="M 125 160 C 125 70, 195 70, 195 160" stroke={accentHex || baseColor} strokeWidth="6" strokeLinecap="round" fill="none" />

            {/* Main Leather Tote Body */}
            <path d="M 85 155 L 235 155 L 225 355 Q 160 365 95 355 Z" fill={`url(#tote-grad-${baseColor.replace('#', '')})`} />

            {/* Top Burnished Edge Collar */}
            <rect x="83" y="152" width="154" height="14" rx="2" fill={shadowColor} />

            {/* Handle Anchors with Brass Studs */}
            <rect x="120" y="160" width="12" height="34" rx="3" fill={shadowColor} />
            <circle cx="126" cy="184" r="2.5" fill="#D4AF37" stroke="#7A5C1E" strokeWidth="0.8" />
            <rect x="188" y="160" width="12" height="34" rx="3" fill={shadowColor} />
            <circle cx="194" cy="184" r="2.5" fill="#D4AF37" stroke="#7A5C1E" strokeWidth="0.8" />

            {/* Hand-Stitched Saddle Seams */}
            <line x1="96" y1="170" x2="102" y2="345" stroke="#E2D4B7" strokeWidth="1.2" strokeDasharray="4 3" opacity="0.6" />
            <line x1="224" y1="170" x2="218" y2="345" stroke="#E2D4B7" strokeWidth="1.2" strokeDasharray="4 3" opacity="0.6" />
          </svg>
        );

      case 'overcoat':
      default:
        return (
          <svg viewBox="0 0 320 420" className="w-full h-full drop-shadow-sm select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id={`coat-grad-${baseColor.replace('#', '')}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={accentHex || baseColor} />
                <stop offset="100%" stopColor={shadowColor} />
              </linearGradient>
            </defs>
            <ellipse cx="160" cy="385" rx="90" ry="14" fill="black" fillOpacity="0.05" />

            {/* Funnel Stand Collar */}
            <path d="M 128 58 Q 160 52 192 58 L 196 82 Q 160 76 124 82 Z" fill={shadowColor} />

            {/* Cocoon Sleeves */}
            <path d="M 112 85 L 60 195 Q 52 250 64 290 L 98 285 Q 88 230 115 160 Z" fill={`url(#coat-grad-${baseColor.replace('#', '')})`} />
            <path d="M 208 85 L 260 195 Q 268 250 256 290 L 222 285 Q 232 230 205 160 Z" fill={`url(#coat-grad-${baseColor.replace('#', '')})`} />

            {/* Cocoon Coat Body */}
            <path d="M 120 80 L 200 80 Q 230 210 236 360 Q 160 375 84 360 Q 90 210 120 80 Z" fill={`url(#coat-grad-${baseColor.replace('#', '')})`} />

            {/* Concealed Placket */}
            <line x1="160" y1="80" x2="160" y2="368" stroke={shadowColor} strokeWidth="2" opacity="0.6" />

            {/* Deep Slanted Welt Pockets */}
            <line x1="108" y1="230" x2="134" y2="252" stroke={shadowColor} strokeWidth="3" strokeLinecap="round" />
            <line x1="212" y1="230" x2="186" y2="252" stroke={shadowColor} strokeWidth="3" strokeLinecap="round" />
          </svg>
        );
    }
  };

  return (
    <div className={`relative flex items-center justify-center bg-[#F7F6F2] overflow-hidden rounded-md transition-all duration-300 ${className}`}>
      {/* Studio Lighting Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-black/[0.04] pointer-events-none" />
      <div className="relative w-full h-full max-w-[280px] max-h-[380px] p-4 flex items-center justify-center">
        {renderSilhouette()}
      </div>
    </div>
  );
}
