import React, { useState } from 'react';
import { Heart, Eye, Plus, Check } from 'lucide-react';
import ProductVisual from './ProductVisual';

export default function ProductCard({
  product,
  isWishlisted,
  onToggleWishlist,
  onQuickView,
  onAddToCart,
  formatPrice
}) {
  const [selectedColorIdx, setSelectedColorIdx] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [isHovered, setIsHovered] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const currentColor = product.colors[selectedColorIdx] || product.colors[0];

  const handleQuickAdd = (e) => {
    e.stopPropagation();
    onAddToCart({
      product,
      color: currentColor.name,
      colorHex: currentColor.hex,
      size: selectedSize,
      quantity: 1
    });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1600);
  };

  return (
    <div
      className="group relative flex flex-col bg-white rounded-lg border border-[#ECEAE3] overflow-hidden transition-all duration-300 hover:shadow-md hover:border-[#D5D2C8] cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onQuickView(product, selectedColorIdx)}
    >
      {/* Visual Canvas Area (65%-75% visual dominance) */}
      <div className="relative aspect-[3/4] bg-[#F7F6F2] overflow-hidden flex items-center justify-center p-3">
        {/* Subtle badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span className="text-[11px] uppercase tracking-wider font-semibold text-[#18181A] bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded shadow-2xs border border-[#ECEAE3]">
              {product.badge}
            </span>
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className={`absolute top-3 right-3 z-10 p-2 rounded-full backdrop-blur-xs transition-colors ${
            isWishlisted
              ? 'bg-[#18181A] text-white'
              : 'bg-white/80 text-[#555] hover:text-[#18181A] hover:bg-white'
          }`}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
        >
          <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-white' : ''}`} />
        </button>

        {/* Vector Garment Visual with dynamic color swatch state */}
        <div className="w-full h-full transform group-hover:scale-[1.03] transition-transform duration-300">
          <ProductVisual
            silhouette={product.silhouette}
            colorHex={currentColor.hex}
            accentHex={currentColor.accent}
          />
        </div>

        {/* Quick View Overlay Button on Hover */}
        <div className="absolute inset-x-3 bottom-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product, selectedColorIdx);
            }}
            className="flex-1 py-2.5 bg-white/95 hover:bg-white text-[#191919] border border-[#DDD] rounded text-xs font-semibold tracking-wide flex items-center justify-center gap-1.5 shadow-sm transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>

          <button
            onClick={handleQuickAdd}
            className={`px-3 py-2.5 rounded text-xs font-semibold tracking-wide flex items-center justify-center gap-1 shadow-sm transition-all ${
              justAdded
                ? 'bg-emerald-700 text-white'
                : 'bg-[#191919] hover:bg-[#333] text-white'
            }`}
            title="Quick Add to Bag"
          >
            {justAdded ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Added</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Bag</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Product Metadata & Action Bar */}
      <div className="p-4 flex flex-col flex-1 justify-between gap-3">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-xs text-[#736F65] mb-1">
            <span className="uppercase tracking-wider text-[11px] font-medium">{product.category}</span>
            <div className="flex items-center gap-1 tabular-nums text-[11.5px]">
              <span className="text-[#B38734]">★</span>
              <span className="font-medium text-[#222]">{product.rating}</span>
              <span className="text-[#999]">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="font-serif text-lg font-medium text-[#18181A] line-clamp-1 group-hover:text-[#444] transition-colors">
            {product.name}
          </h3>

          {/* Fabric Line */}
          <p className="text-xs text-[#6F6B60] mt-1 line-clamp-1 font-light">
            {product.shortDesc}
          </p>
        </div>

        {/* Color Swatches and Price */}
        <div className="pt-2 border-t border-[#F0EFEA] flex items-center justify-between">
          {/* Swatches */}
          <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
            {product.colors.map((c, i) => (
              <button
                key={c.name}
                onClick={() => setSelectedColorIdx(i)}
                className={`w-4 h-4 rounded-full border transition-all ${
                  selectedColorIdx === i
                    ? 'ring-2 ring-[#191919] ring-offset-1 scale-110'
                    : 'border-black/20 hover:scale-105'
                }`}
                style={{ backgroundColor: c.hex }}
                title={c.name}
                aria-label={`Select color ${c.name}`}
              />
            ))}
            <span className="text-[10.5px] text-[#888] ml-1 hidden sm:inline">
              {product.colors.length} shades
            </span>
          </div>

          {/* Price */}
          <div className="text-right">
            {product.originalPrice && (
              <span className="text-xs text-[#999] line-through mr-1.5 tabular-nums">
                {formatPrice(product.originalPrice)}
              </span>
            )}
            <span className="text-sm font-semibold text-[#18181A] tabular-nums">
              {formatPrice(product.price)}
            </span>
          </div>
        </div>

        {/* Interactive Size Selector Row */}
        <div
          className="flex items-center gap-1 text-[11px] text-[#555] pt-1"
          onClick={(e) => e.stopPropagation()}
        >
          <span className="text-[#888] mr-1 text-[10px] uppercase tracking-wider">Size:</span>
          {product.sizes.map((sz) => (
            <button
              key={sz}
              onClick={() => setSelectedSize(sz)}
              className={`px-1.5 py-0.5 rounded text-[10.5px] font-medium transition-colors ${
                selectedSize === sz
                  ? 'bg-[#191919] text-white'
                  : 'bg-[#F2F1EC] text-[#555] hover:bg-[#E5E4DC]'
              }`}
            >
              {sz}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
