import React from 'react';
import { X, Trash2, ShoppingBag, Heart } from 'lucide-react';
import ProductVisual from './ProductVisual';

export default function WishlistDrawer({
  isOpen,
  onClose,
  items,
  onRemoveFromWishlist,
  onMoveToCart,
  formatPrice
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-[#E8E6DF]">
          
          {/* Header */}
          <div className="p-6 border-b border-[#E8E6DF] flex items-center justify-between bg-[#FAF9F6]">
            <div>
              <h2 className="text-xl font-serif text-[#18181A] font-semibold">Saved Silhouettes</h2>
              <p className="text-xs text-[#6F6B60] mt-0.5 tabular-nums">
                {items.length} {items.length === 1 ? 'piece' : 'pieces'} in your private archive
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#666] hover:text-[#18181A] rounded-full hover:bg-[#EFECE3] transition-colors"
              aria-label="Close wishlist"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-6 divide-y divide-[#EFECE3]">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-16">
                <div className="w-16 h-16 rounded-full bg-[#F2F1ED] flex items-center justify-center text-[#888]">
                  <Heart className="w-6 h-6 stroke-[1.5]" />
                </div>
                <p className="text-base font-serif text-[#18181A]">Your wishlist is currently empty.</p>
                <p className="text-xs text-[#736F65] max-w-xs">
                  Tap the heart icon on any piece to save it for your seasonal rotation.
                </p>
              </div>
            ) : (
              items.map((product) => (
                <div key={product.id} className="py-4 first:pt-0 flex gap-4">
                  <div className="w-20 h-24 bg-[#F7F6F2] rounded p-1 shrink-0 flex items-center justify-center border border-[#E8E6DF]">
                    <ProductVisual
                      silhouette={product.silhouette}
                      colorHex={product.colors[0]?.hex}
                      accentHex={product.colors[0]?.accent}
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-serif text-sm font-medium text-[#18181A] line-clamp-1">
                          {product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveFromWishlist(product.id)}
                          className="text-[#999] hover:text-rose-600 transition-colors p-1"
                          aria-label="Remove from wishlist"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-xs text-[#6F6B60] mt-0.5">
                        {product.fabric}
                      </p>
                      <p className="text-xs font-semibold text-[#18181A] mt-1 tabular-nums">
                        {formatPrice(product.price)}
                      </p>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => {
                          onMoveToCart(product);
                        }}
                        className="w-full py-1.5 px-3 bg-[#18181A] hover:bg-[#333] text-white rounded text-[11px] font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        <span>Move to Bag</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-[#E8E6DF] bg-[#FAF9F6]">
            <button
              onClick={onClose}
              className="w-full py-2.5 border border-[#18181A] text-[#18181A] hover:bg-[#18181A] hover:text-white rounded text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              Continue Browsing
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
