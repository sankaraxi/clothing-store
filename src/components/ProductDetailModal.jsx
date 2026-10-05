import React, { useState } from 'react';
import { X, Heart, ShieldCheck, Ruler, Truck, RefreshCw, Check, Star } from 'lucide-react';
import ProductVisual from './ProductVisual';

export default function ProductDetailModal({
  product,
  initialColorIdx = 0,
  onClose,
  onAddToCart,
  onBuyNow,
  isWishlisted,
  onToggleWishlist,
  onOpenSizeGuide,
  formatPrice
}) {
  const [selectedColorIdx, setSelectedColorIdx] = useState(initialColorIdx);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || 'M');
  const [quantity, setQuantity] = useState(1);
  const [addedAnimation, setAddedAnimation] = useState(false);
  const [activeTab, setActiveTab] = useState('details'); // details, fabric, reviews

  if (!product) return null;

  const currentColor = product.colors[selectedColorIdx] || product.colors[0];

  const handleAdd = () => {
    onAddToCart({
      product,
      color: currentColor.name,
      colorHex: currentColor.hex,
      size: selectedSize,
      quantity
    });
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1800);
  };

  const handleDirectBuy = () => {
    onBuyNow({
      product,
      color: currentColor.name,
      colorHex: currentColor.hex,
      size: selectedSize,
      quantity
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-xl shadow-2xl overflow-y-auto border border-[#E8E6DF] z-10">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-[#666] hover:text-[#18181A] hover:bg-[#F2F1ED] rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 min-h-[560px]">
          
          {/* Left Column: Visual Showcase Gallery */}
          <div className="md:col-span-6 bg-[#F7F6F2] p-6 sm:p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#ECEAE3]">
            {/* Visual Header Note */}
            <div className="flex items-center justify-between text-xs text-[#736F65]">
              <span className="uppercase tracking-widest font-medium">{product.category}</span>
              <span className="font-serif italic">{product.origin}</span>
            </div>

            {/* Large Interactive Garment Visual */}
            <div className="py-6 flex items-center justify-center">
              <div className="w-64 h-80 sm:w-72 sm:h-96">
                <ProductVisual
                  silhouette={product.silhouette}
                  colorHex={currentColor.hex}
                  accentHex={currentColor.accent}
                />
              </div>
            </div>

            {/* Provenance Footer */}
            <div className="bg-white/80 backdrop-blur-xs rounded p-3 text-xs text-[#555] border border-[#E8E6DF] space-y-1">
              <p className="font-semibold text-[#18181A]">Textile Provenance</p>
              <p className="text-[11px] leading-tight text-[#666]">{product.fabric}</p>
            </div>
          </div>

          {/* Right Column: Contiguous Purchase Module */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              
              {/* Top rating and badge line */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-[#444]">
                  <div className="flex text-[#B38734]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#B38734]" />
                    ))}
                  </div>
                  <span className="font-semibold tabular-nums">{product.rating}</span>
                  <span className="text-[#888]">({product.reviewsCount} reviews)</span>
                </div>

                {product.badge && (
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#18181A] bg-[#EFECE3] px-2.5 py-0.5 rounded">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Title & Price */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-serif text-[#18181A] font-medium leading-snug">
                  {product.name}
                </h2>
                <div className="mt-2 flex items-baseline gap-3">
                  <span className="text-2xl font-bold text-[#18181A] tabular-nums">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-[#999] line-through tabular-nums">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                  <span className="text-xs text-emerald-800 font-medium">
                    · In Stock & Ready to Ship
                  </span>
                </div>
              </div>

              {/* Color Swatch Picker */}
              <div className="space-y-2 pt-2 border-t border-[#ECEAE3]">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#666]">
                    Color: <strong className="text-[#18181A]">{currentColor.name}</strong>
                  </span>
                  <span className="text-[#888] text-[11px]">Hand-dyed palette</span>
                </div>
                <div className="flex items-center gap-2">
                  {product.colors.map((c, i) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColorIdx(i)}
                      className={`relative w-7 h-7 rounded-full transition-all flex items-center justify-center ${
                        selectedColorIdx === i
                          ? 'ring-2 ring-[#18181A] ring-offset-2 scale-105'
                          : 'border border-black/20 hover:scale-105'
                      }`}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    >
                      {selectedColorIdx === i && (
                        <Check className={`w-3 h-3 ${c.hex === '#EDECE6' || c.hex === '#F4F2EB' || c.hex === '#DBD5C8' ? 'text-black' : 'text-white'}`} />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selector with Size Guide Link */}
              <div className="space-y-2 pt-2 border-t border-[#ECEAE3]">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#666]">
                    Select Size: <strong className="text-[#18181A]">{selectedSize}</strong>
                  </span>
                  <button
                    onClick={onOpenSizeGuide}
                    className="inline-flex items-center gap-1 text-[#18181A] underline font-medium hover:opacity-80"
                  >
                    <Ruler className="w-3.5 h-3.5" />
                    <span>Size Guide & Fit</span>
                  </button>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`py-2 rounded text-xs font-semibold uppercase tracking-wider transition-all border ${
                        selectedSize === sz
                          ? 'bg-[#18181A] text-white border-[#18181A]'
                          : 'bg-white text-[#333] border-[#D8D5CC] hover:border-black'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
                <p className="text-[11px] text-[#736F65] italic">
                  {product.fit}
                </p>
              </div>

              {/* Quantity Stepper & Actions */}
              <div className="pt-2 border-t border-[#ECEAE3] space-y-3">
                <div className="flex items-center gap-3">
                  {/* Quantity Stepper */}
                  <div className="flex items-center border border-[#D5D2C8] rounded">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 text-sm text-[#555] hover:bg-[#F2F1ED] transition-colors"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="px-3 text-xs font-semibold tabular-nums text-[#18181A]">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 text-sm text-[#555] hover:bg-[#F2F1ED] transition-colors"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  {/* Add to Bag CTA */}
                  <button
                    onClick={handleAdd}
                    className={`flex-1 py-3 px-4 rounded text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xs active:scale-[0.98] ${
                      addedAnimation
                        ? 'bg-emerald-700 text-white'
                        : 'bg-[#18181A] hover:bg-[#333] text-white'
                    }`}
                  >
                    {addedAnimation ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Added to Bag</span>
                      </>
                    ) : (
                      <span>Add to Bag · {formatPrice(product.price * quantity)}</span>
                    )}
                  </button>

                  {/* Wishlist Toggle */}
                  <button
                    onClick={() => onToggleWishlist(product)}
                    className={`p-3 border rounded transition-colors ${
                      isWishlisted
                        ? 'border-[#18181A] bg-[#18181A] text-white'
                        : 'border-[#D5D2C8] text-[#555] hover:border-black hover:text-black'
                    }`}
                    aria-label="Wishlist toggle"
                  >
                    <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-white' : ''}`} />
                  </button>
                </div>

                {/* Instant Buy Now Button */}
                <button
                  onClick={handleDirectBuy}
                  className="w-full py-2.5 px-4 bg-[#EFECE3] hover:bg-[#E2DFD4] text-[#18181A] rounded text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  Buy Now with 1-Click Checkout
                </button>
              </div>

              {/* Shipping & Return guarantees */}
              <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] text-[#666]">
                <div className="flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-[#18181A]" />
                  <span>Complimentary Shipping over $200</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <RefreshCw className="w-3.5 h-3.5 text-[#18181A]" />
                  <span>30-Day Hassle-Free Returns</span>
                </div>
              </div>

            </div>

            {/* Product Tabs (Details / Care / Reviews) */}
            <div className="pt-4 border-t border-[#ECEAE3]">
              <div className="flex items-center gap-4 text-xs font-medium border-b border-[#ECEAE3] pb-2">
                <button
                  onClick={() => setActiveTab('details')}
                  className={`pb-1 ${activeTab === 'details' ? 'border-b-2 border-black font-semibold text-black' : 'text-[#666] hover:text-black'}`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab('fabric')}
                  className={`pb-1 ${activeTab === 'fabric' ? 'border-b-2 border-black font-semibold text-black' : 'text-[#666] hover:text-black'}`}
                >
                  Fabric & Care
                </button>
                <button
                  onClick={() => setActiveTab('reviews')}
                  className={`pb-1 ${activeTab === 'reviews' ? 'border-b-2 border-black font-semibold text-black' : 'text-[#666] hover:text-black'}`}
                >
                  Reviews ({product.reviews?.length || 0})
                </button>
              </div>

              <div className="pt-3 text-xs leading-relaxed text-[#555]">
                {activeTab === 'details' && (
                  <p>{product.description}</p>
                )}
                {activeTab === 'fabric' && (
                  <div className="space-y-1.5">
                    <p><strong>Composition:</strong> {product.fabric}</p>
                    <p><strong>Origin:</strong> {product.origin}</p>
                    <p><strong>Care:</strong> {product.care}</p>
                  </div>
                )}
                {activeTab === 'reviews' && (
                  <div className="space-y-3 max-h-40 overflow-y-auto pr-1">
                    {product.reviews?.map((rev) => (
                      <div key={rev.id} className="border-b border-[#F0EFEA] pb-2 last:border-0">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="font-semibold text-[#18181A]">{rev.author}</span>
                          <span className="text-[#888]">{rev.date} · Size {rev.size}</span>
                        </div>
                        <p className="text-[11.5px] text-[#444] mt-1">"{rev.comment}"</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
