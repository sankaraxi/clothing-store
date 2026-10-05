import React, { useState } from 'react';
import { X, Trash2, ArrowRight, Tag, ShieldCheck, Check } from 'lucide-react';
import ProductVisual from './ProductVisual';

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  discountCode,
  discountPercent,
  onApplyDiscount,
  formatPrice
}) {
  const [promoInput, setPromoInput] = useState('');
  const [promoMessage, setPromoMessage] = useState(null);

  if (!isOpen) return null;

  const rawSubtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discountAmount = (rawSubtotal * discountPercent) / 100;
  const subtotal = Math.max(0, rawSubtotal - discountAmount);
  
  const FREE_SHIPPING_THRESHOLD = 200;
  const progressToFreeShipping = Math.min(100, (rawSubtotal / FREE_SHIPPING_THRESHOLD) * 100);
  const amountNeeded = Math.max(0, FREE_SHIPPING_THRESHOLD - rawSubtotal);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    const cleanCode = promoInput.trim().toUpperCase();
    if (cleanCode === 'WELCOME10') {
      onApplyDiscount(cleanCode, 10);
      setPromoMessage({ success: true, text: 'WELCOME10 applied: 10% Off Entire Bag!' });
    } else if (cleanCode === 'ATELIER15') {
      onApplyDiscount(cleanCode, 15);
      setPromoMessage({ success: true, text: 'ATELIER15 applied: 15% VIP Patron Discount!' });
    } else {
      setPromoMessage({ success: false, text: 'Invalid promotional code.' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-[#E8E6DF]">
          
          {/* Drawer Header */}
          <div className="p-6 border-b border-[#E8E6DF] flex items-center justify-between bg-[#FAF9F6]">
            <div>
              <h2 className="text-xl font-serif text-[#18181A] font-semibold">Shopping Bag</h2>
              <p className="text-xs text-[#6F6B60] mt-0.5 tabular-nums">
                {items.reduce((s, i) => s + i.quantity, 0)} {items.length === 1 ? 'item' : 'items'} curated
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#666] hover:text-[#18181A] rounded-full hover:bg-[#EFECE3] transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="bg-[#F4F3EE] px-6 py-3 border-b border-[#E8E6DF]">
            <div className="flex items-center justify-between text-xs mb-1.5 font-medium">
              {amountNeeded > 0 ? (
                <span className="text-[#555]">
                  Add <strong className="text-[#18181A] font-bold">{formatPrice(amountNeeded)}</strong> for Free Express Delivery
                </span>
              ) : (
                <span className="text-emerald-800 font-semibold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                  Unlocked Complimentary Express Delivery
                </span>
              )}
              <span className="text-[#888] tabular-nums text-[11px]">
                {Math.round(progressToFreeShipping)}%
              </span>
            </div>
            <div className="w-full bg-[#E0DED7] h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-[#18181A] h-full transition-all duration-300"
                style={{ width: `${progressToFreeShipping}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 divide-y divide-[#EFECE3]">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-16">
                <div className="w-16 h-16 rounded-full bg-[#F2F1ED] flex items-center justify-center text-[#888] font-serif text-2xl">
                  ∅
                </div>
                <p className="text-base font-serif text-[#18181A]">Your shopping bag is empty.</p>
                <p className="text-xs text-[#736F65] max-w-xs">
                  Discover timeless silhouettes crafted from natural European textiles.
                </p>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 bg-[#18181A] text-white text-xs font-semibold uppercase tracking-wider rounded"
                >
                  Start Exploring
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div key={`${item.product.id}-${item.color}-${item.size}`} className="py-4 first:pt-0 flex gap-4">
                  {/* Thumbnail */}
                  <div className="w-20 h-24 bg-[#F7F6F2] rounded p-1 shrink-0 flex items-center justify-center border border-[#E8E6DF]">
                    <ProductVisual
                      silhouette={item.product.silhouette}
                      colorHex={item.colorHex}
                      accentHex={item.product.colors.find((c) => c.name === item.color)?.accent}
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-serif text-sm font-medium text-[#18181A] line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.product.id, item.color, item.size)}
                          className="text-[#999] hover:text-rose-600 transition-colors p-1"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-[#6F6B60] mt-1">
                        <span>{item.color}</span>
                        <span>·</span>
                        <span>Size {item.size}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-[#D5D2C8] rounded">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.color, item.size, item.quantity - 1)}
                          className="px-2 py-0.5 text-xs text-[#555] hover:bg-[#F2F1ED]"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs font-semibold tabular-nums text-[#18181A]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.color, item.size, item.quantity + 1)}
                          className="px-2 py-0.5 text-xs text-[#555] hover:bg-[#F2F1ED]"
                        >
                          +
                        </button>
                      </div>

                      <span className="text-xs font-semibold text-[#18181A] tabular-nums">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer & Checkout Action */}
          {items.length > 0 && (
            <div className="p-6 border-t border-[#E8E6DF] bg-[#FAF9F6] space-y-4">
              
              {/* Promo Code Form */}
              <form onSubmit={handleApplyPromo} className="space-y-1.5">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="Promo Code (try WELCOME10)"
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value)}
                      className="w-full text-xs px-3 py-2 border border-[#D8D5CC] rounded uppercase tracking-wider bg-white focus:outline-none focus:border-black"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-3 py-2 bg-[#EAE8E0] hover:bg-[#DDD9CE] text-[#18181A] rounded text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    Apply
                  </button>
                </div>
                {promoMessage && (
                  <p className={`text-[11px] font-medium ${promoMessage.success ? 'text-emerald-700' : 'text-rose-600'}`}>
                    {promoMessage.text}
                  </p>
                )}
              </form>

              {/* Subtotal Calculation breakdown */}
              <div className="space-y-1.5 text-xs pt-2 border-t border-[#EAE8E0]">
                <div className="flex justify-between text-[#666]">
                  <span>Item Subtotal</span>
                  <span className="tabular-nums">{formatPrice(rawSubtotal)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-800 font-medium">
                    <span>Discount ({discountCode})</span>
                    <span className="tabular-nums">-{formatPrice(discountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between text-[#666]">
                  <span>Estimated Delivery</span>
                  <span>{amountNeeded === 0 ? 'Complimentary' : formatPrice(15)}</span>
                </div>
                <div className="flex justify-between text-sm font-serif font-bold text-[#18181A] pt-2 border-t border-[#EAE8E0]">
                  <span>Total</span>
                  <span className="tabular-nums">{formatPrice(subtotal + (amountNeeded === 0 ? 0 : 15))}</span>
                </div>
              </div>

              {/* Checkout Action Button */}
              <button
                onClick={onProceedToCheckout}
                className="w-full py-3.5 bg-[#18181A] hover:bg-[#333] text-white rounded text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-sm active:scale-[0.99]"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#888]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                <span>Encrypted 256-Bit SSL Checkout & Guaranteed Delivery</span>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
