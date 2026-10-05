import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, Truck, CreditCard, Banknote, ArrowRight, Package } from 'lucide-react';
import ProductVisual from './ProductVisual';

export default function CheckoutModal({
  isOpen,
  onClose,
  cartItems,
  onClearCart,
  discountCode,
  discountPercent,
  formatPrice
}) {
  const [step, setStep] = useState('details'); // 'details' | 'success'
  const [paymentMethod, setPaymentMethod] = useState('card'); // 'card' | 'cod' | 'applepay'
  const [formData, setFormData] = useState({
    firstName: 'Eleanor',
    lastName: 'Vance',
    email: 'eleanor.vance@example.com',
    phone: '+1 (555) 234-8901',
    address: '452 Mercer Street, Apt 4B',
    city: 'New York',
    state: 'NY',
    postalCode: '10013',
    country: 'United States',
    cardNumber: '•••• •••• •••• 4242',
    cardExp: '08/29',
    cardCvc: '•••'
  });
  const [orderSummary, setOrderSummary] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const rawSubtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discountAmount = (rawSubtotal * discountPercent) / 100;
  const subtotal = Math.max(0, rawSubtotal - discountAmount);
  const shippingFee = subtotal >= 200 ? 0 : 15;
  const orderTotal = subtotal + shippingFee;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      const orderId = `AT-${Math.floor(10000 + Math.random() * 90000)}`;
      setOrderSummary({
        orderId,
        date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        items: [...cartItems],
        total: orderTotal,
        paymentMethod,
        customer: { ...formData }
      });
      setIsProcessing(false);
      setStep('success');
      onClearCart();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-3xl bg-white rounded-xl shadow-2xl overflow-hidden border border-[#E8E6DF] z-10">
        
        {/* Top Header */}
        <div className="px-6 py-4 border-b border-[#ECEAE3] flex items-center justify-between bg-[#FAF9F6]">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-lg text-[#18181A] tracking-tight">ATELIER NOIR</span>
            <span className="text-xs text-[#888]">·</span>
            <span className="text-xs uppercase tracking-wider text-[#666] font-medium">
              {step === 'details' ? 'Secure Checkout' : 'Order Receipt'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#666] hover:text-[#18181A] hover:bg-[#EFECE3] rounded-full"
            aria-label="Close checkout"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'details' ? (
          <form onSubmit={handleSubmitOrder} className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-[#ECEAE3]">
            
            {/* Left Column: Contact & Shipping Form */}
            <div className="md:col-span-7 p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
              
              {/* Shipping Address */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#18181A]">
                  1. Delivery Details
                </h3>
                
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-medium text-[#555] mb-1">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full text-xs px-3 py-2 border border-[#D5D2C8] rounded focus:outline-none focus:border-black"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-[#555] mb-1">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full text-xs px-3 py-2 border border-[#D5D2C8] rounded focus:outline-none focus:border-black"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-medium text-[#555] mb-1">Email for Receipt</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full text-xs px-3 py-2 border border-[#D5D2C8] rounded focus:outline-none focus:border-black"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-[#555] mb-1">Mobile (Courier SMS)</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full text-xs px-3 py-2 border border-[#D5D2C8] rounded focus:outline-none focus:border-black"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-[#555] mb-1">Delivery Address</label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full text-xs px-3 py-2 border border-[#D5D2C8] rounded focus:outline-none focus:border-black"
                  />
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="block text-[11px] font-medium text-[#555] mb-1">City</label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full text-xs px-3 py-2 border border-[#D5D2C8] rounded focus:outline-none focus:border-black"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-[#555] mb-1">State / Prov</label>
                    <input
                      type="text"
                      name="state"
                      required
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full text-xs px-3 py-2 border border-[#D5D2C8] rounded focus:outline-none focus:border-black"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-[#555] mb-1">Postal Code</label>
                    <input
                      type="text"
                      name="postalCode"
                      required
                      value={formData.postalCode}
                      onChange={handleChange}
                      className="w-full text-xs px-3 py-2 border border-[#D5D2C8] rounded focus:outline-none focus:border-black"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="space-y-3 pt-4 border-t border-[#ECEAE3]">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#18181A]">
                  2. Payment Method
                </h3>

                <div className="grid grid-cols-3 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded border text-left flex flex-col justify-between h-20 transition-all ${
                      paymentMethod === 'card'
                        ? 'border-[#18181A] bg-[#FAF9F6] ring-1 ring-[#18181A]'
                        : 'border-[#D5D2C8] hover:border-black'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 text-[#18181A]" />
                    <div>
                      <p className="font-semibold text-[#18181A]">Credit Card</p>
                      <p className="text-[10px] text-[#777]">Visa / Master / Amex</p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('applepay')}
                    className={`p-3 rounded border text-left flex flex-col justify-between h-20 transition-all ${
                      paymentMethod === 'applepay'
                        ? 'border-[#18181A] bg-[#FAF9F6] ring-1 ring-[#18181A]'
                        : 'border-[#D5D2C8] hover:border-black'
                    }`}
                  >
                    <span className="font-semibold text-sm"> Pay</span>
                    <div>
                      <p className="font-semibold text-[#18181A]">Apple Pay</p>
                      <p className="text-[10px] text-[#777]">1-Touch Instant</p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cod')}
                    className={`p-3 rounded border text-left flex flex-col justify-between h-20 transition-all ${
                      paymentMethod === 'cod'
                        ? 'border-[#18181A] bg-[#FAF9F6] ring-1 ring-[#18181A]'
                        : 'border-[#D5D2C8] hover:border-black'
                    }`}
                  >
                    <Banknote className="w-4 h-4 text-[#18181A]" />
                    <div>
                      <p className="font-semibold text-[#18181A]">Cash on Delivery</p>
                      <p className="text-[10px] text-[#777]">Pay upon receipt</p>
                    </div>
                  </button>
                </div>

                {paymentMethod === 'card' && (
                  <div className="bg-[#FAF9F6] p-3 rounded border border-[#E8E6DF] space-y-2 text-xs">
                    <div>
                      <label className="block text-[11px] text-[#555] mb-1">Card Number</label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        className="w-full text-xs px-3 py-1.5 border border-[#D5D2C8] rounded bg-white"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[11px] text-[#555] mb-1">Exp Date</label>
                        <input
                          type="text"
                          name="cardExp"
                          value={formData.cardExp}
                          onChange={handleChange}
                          className="w-full text-xs px-3 py-1.5 border border-[#D5D2C8] rounded bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] text-[#555] mb-1">CVC Security</label>
                        <input
                          type="text"
                          name="cardCvc"
                          value={formData.cardCvc}
                          onChange={handleChange}
                          className="w-full text-xs px-3 py-1.5 border border-[#D5D2C8] rounded bg-white"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === 'cod' && (
                  <div className="bg-amber-50/70 border border-amber-200 p-3 rounded text-xs text-amber-900 leading-relaxed">
                    <strong>Cash on Delivery (COD) Selected:</strong> You will pay the courier exact cash upon delivery of your wrapped parcel. Please keep {formatPrice(orderTotal)} ready upon delivery.
                  </div>
                )}
              </div>

            </div>

            {/* Right Column: Order Review & Confirmation Action */}
            <div className="md:col-span-5 p-6 sm:p-8 bg-[#FAF9F6] flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#18181A]">
                  Order Summary
                </h3>

                {/* Bag preview list */}
                <div className="space-y-3 max-h-48 overflow-y-auto divide-y divide-[#ECEAE3]">
                  {cartItems.map((item) => (
                    <div key={`${item.product.id}-${item.color}-${item.size}`} className="pt-2 first:pt-0 flex items-center justify-between text-xs">
                      <div>
                        <p className="font-serif font-medium text-[#18181A] line-clamp-1">{item.product.name}</p>
                        <p className="text-[11px] text-[#777]">{item.color} · Size {item.size} × {item.quantity}</p>
                      </div>
                      <span className="font-medium text-[#18181A] tabular-nums">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Calculation */}
                <div className="space-y-1.5 pt-4 border-t border-[#ECEAE3] text-xs">
                  <div className="flex justify-between text-[#666]">
                    <span>Subtotal</span>
                    <span className="tabular-nums">{formatPrice(rawSubtotal)}</span>
                  </div>
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-emerald-800 font-medium">
                      <span>Discount ({discountCode})</span>
                      <span className="tabular-nums">-{formatPrice(discountAmount)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-[#666]">
                    <span>Insured Carbon-Neutral Delivery</span>
                    <span>{shippingFee === 0 ? 'Free' : formatPrice(shippingFee)}</span>
                  </div>
                  <div className="flex justify-between text-sm font-serif font-bold text-[#18181A] pt-2 border-t border-[#ECEAE3]">
                    <span>Total Due</span>
                    <span className="tabular-nums text-base">{formatPrice(orderTotal)}</span>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="space-y-3">
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-3.5 bg-[#18181A] hover:bg-[#333] text-white rounded text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.99] disabled:opacity-50"
                >
                  {isProcessing ? (
                    <span>Verifying & Securing Order...</span>
                  ) : (
                    <>
                      <span>Authorize Order · {formatPrice(orderTotal)}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-[#777]">
                  By placing this order you agree to the Atelier slow fashion guarantees and 30-day exchange policy.
                </p>
              </div>

            </div>

          </form>
        ) : (
          /* Order Confirmation Screen */
          <div className="p-8 sm:p-12 text-center space-y-6 max-w-xl mx-auto">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-emerald-800">
                Order Confirmed — Preparing Shipment
              </span>
              <h2 className="text-3xl font-serif text-[#18181A] font-medium">
                Thank You, {orderSummary.customer.firstName}.
              </h2>
              <p className="text-sm text-[#666] max-w-md mx-auto">
                Your order <strong className="text-[#18181A]">{orderSummary.orderId}</strong> has been logged into our Porto atelier. A confirmation email and tracking docket have been dispatched to {orderSummary.customer.email}.
              </p>
            </div>

            {/* Receipt Summary Box */}
            <div className="bg-[#FAF9F6] border border-[#ECEAE3] rounded-lg p-5 text-left text-xs space-y-3">
              <div className="flex justify-between border-b border-[#E8E6DF] pb-2 font-medium">
                <span>Shipping Destination:</span>
                <span className="text-right text-[#18181A]">{orderSummary.customer.address}, {orderSummary.customer.city}</span>
              </div>
              <div className="flex justify-between border-b border-[#E8E6DF] pb-2 font-medium">
                <span>Payment Method:</span>
                <span className="uppercase text-[#18181A]">{orderSummary.paymentMethod === 'cod' ? 'Cash on Delivery' : orderSummary.paymentMethod}</span>
              </div>
              <div className="flex justify-between border-b border-[#E8E6DF] pb-2 font-medium">
                <span>Total Amount Paid:</span>
                <span className="text-sm font-bold text-[#18181A] tabular-nums">{formatPrice(orderSummary.total)}</span>
              </div>

              {/* Items summary */}
              <div className="pt-1 space-y-1">
                <span className="text-[#888] font-semibold text-[11px] uppercase tracking-wider">Garments in Batch:</span>
                {orderSummary.items.map((it, idx) => (
                  <div key={idx} className="flex justify-between text-[#444]">
                    <span>{it.product.name} ({it.color}, {it.size}) × {it.quantity}</span>
                    <span className="tabular-nums">{formatPrice(it.product.price * it.quantity)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tracking timeline */}
            <div className="pt-2 flex items-center justify-between text-xs text-[#777] border-t border-[#ECEAE3]">
              <div className="flex items-center gap-1.5 text-emerald-800 font-semibold">
                <Package className="w-4 h-4" />
                <span>1. Atelier Assembly</span>
              </div>
              <span>→</span>
              <div className="flex items-center gap-1.5 text-[#888]">
                <Truck className="w-4 h-4" />
                <span>2. Courier Transit</span>
              </div>
              <span>→</span>
              <div className="text-[#888]">
                <span>3. Doorstep Arrival (3-5 Days)</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3 bg-[#18181A] text-white hover:bg-[#333] text-xs font-semibold uppercase tracking-wider rounded transition-colors"
            >
              Return to Storefront
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
