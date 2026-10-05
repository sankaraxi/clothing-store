import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import ProductDetailModal from './components/ProductDetailModal';
import CartDrawer from './components/CartDrawer';
import WishlistDrawer from './components/WishlistDrawer';
import CheckoutModal from './components/CheckoutModal';
import SizeGuideModal from './components/SizeGuideModal';
import LookbookSection from './components/LookbookSection';
import SustainabilitySection from './components/SustainabilitySection';
import Footer from './components/Footer';
import { PRODUCTS } from './data/products';
import { Check, Heart } from 'lucide-react';

const CURRENCY_RATES = {
  USD: { symbol: '$', rate: 1.0 },
  EUR: { symbol: '€', rate: 0.92 },
  GBP: { symbol: '£', rate: 0.79 }
};

export default function App() {
  // Cart State with LocalStorage Persistence
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('atelier_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Wishlist State with LocalStorage Persistence
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('atelier_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Currency
  const [currency, setCurrency] = useState('USD');

  // Filtering & Search
  const [activeCategory, setActiveCategory] = useState('All Collections');
  const [searchQuery, setSearchQuery] = useState('');

  // Modals & Drawers
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);

  // Quick View Modal
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [quickViewColorIdx, setQuickViewColorIdx] = useState(0);

  // Discount
  const [discountCode, setDiscountCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);

  // Toast Notification
  const [toast, setToast] = useState(null);

  // Save to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('atelier_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('atelier_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  // Show Toast
  const showToast = (message, icon = 'check') => {
    setToast({ message, icon });
    setTimeout(() => setToast(null), 3000);
  };

  // Price formatter with Currency
  const formatPrice = (amountInUsd) => {
    const { symbol, rate } = CURRENCY_RATES[currency] || CURRENCY_RATES.USD;
    const converted = Math.round(amountInUsd * rate);
    return `${symbol}${converted}`;
  };

  // Cart operations
  const handleAddToCart = ({ product, color, colorHex, size, quantity }) => {
    setCart((prev) => {
      const existingIdx = prev.findIndex(
        (item) => item.product.id === product.id && item.color === color && item.size === size
      );
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += quantity;
        return updated;
      }
      return [...prev, { product, color, colorHex, size, quantity }];
    });
    showToast(`Added ${product.name} (${color}, Size ${size}) to Bag`);
  };

  const handleUpdateQuantity = (productId, color, size, newQty) => {
    if (newQty <= 0) {
      handleRemoveFromCart(productId, color, size);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId && item.color === color && item.size === size
          ? { ...item, quantity: newQty }
          : item
      )
    );
  };

  const handleRemoveFromCart = (productId, color, size) => {
    setCart((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && item.color === color && item.size === size)
      )
    );
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Wishlist operations
  const handleToggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some((w) => w.id === product.id);
      if (exists) {
        showToast(`Removed from your Wishlist`);
        return prev.filter((w) => w.id !== product.id);
      } else {
        showToast(`Saved ${product.name} to Wishlist`, 'heart');
        return [...prev, product];
      }
    });
  };

  const handleRemoveFromWishlist = (productId) => {
    setWishlist((prev) => prev.filter((w) => w.id !== productId));
  };

  const handleMoveToCart = (product) => {
    handleAddToCart({
      product,
      color: product.colors[0].name,
      colorHex: product.colors[0].hex,
      size: product.sizes[0],
      quantity: 1
    });
    handleRemoveFromWishlist(product.id);
  };

  // Quick View
  const handleOpenQuickView = (product, colorIdx = 0) => {
    setQuickViewProduct(product);
    setQuickViewColorIdx(colorIdx);
  };

  // Direct Buy Now
  const handleBuyNow = ({ product, color, colorHex, size, quantity }) => {
    handleAddToCart({ product, color, colorHex, size, quantity });
    setQuickViewProduct(null);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  // Scroll to section
  const handleNavigateToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#191919] font-sans">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#18181A] text-white px-4 py-3 rounded-lg shadow-xl flex items-center gap-2.5 text-xs font-medium animate-fadeIn border border-white/10">
          {toast.icon === 'heart' ? (
            <Heart className="w-4 h-4 fill-white text-white shrink-0" />
          ) : (
            <Check className="w-4 h-4 text-emerald-400 shrink-0" />
          )}
          <span>{toast.message}</span>
        </div>
      )}

      {/* Top Bar Navigation */}
      <Navbar
        cartCount={totalCartCount}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        currency={currency}
        onSelectCurrency={setCurrency}
        onNavigateToSection={handleNavigateToSection}
      />

      {/* Hero Campaign */}
      <Hero
        onExploreClick={() => handleNavigateToSection('catalog')}
        onViewLookbook={() => handleNavigateToSection('lookbook')}
      />

      {/* Main Catalog & Filtered Collection Grid */}
      <main className="flex-1">
        <ProductGrid
          products={PRODUCTS}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          searchQuery={searchQuery}
          onClearSearch={() => setSearchQuery('')}
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
          onQuickView={handleOpenQuickView}
          onAddToCart={handleAddToCart}
          formatPrice={formatPrice}
        />

        {/* Lookbook Section */}
        <LookbookSection onBrowseCollection={() => handleNavigateToSection('catalog')} />

        {/* Slow Production / Sustainability Section */}
        <SustainabilitySection />
      </main>

      {/* Footer */}
      <Footer onNavigateSection={handleNavigateToSection} />

      {/* Product Detail Modal */}
      {quickViewProduct && (
        <ProductDetailModal
          product={quickViewProduct}
          initialColorIdx={quickViewColorIdx}
          onClose={() => setQuickViewProduct(null)}
          onAddToCart={handleAddToCart}
          onBuyNow={handleBuyNow}
          isWishlisted={Boolean(wishlist.find((w) => w.id === quickViewProduct.id))}
          onToggleWishlist={handleToggleWishlist}
          onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
          formatPrice={formatPrice}
        />
      )}

      {/* Shopping Bag Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        discountCode={discountCode}
        discountPercent={discountPercent}
        onApplyDiscount={(code, percent) => {
          setDiscountCode(code);
          setDiscountPercent(percent);
        }}
        formatPrice={formatPrice}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        items={wishlist}
        onRemoveFromWishlist={handleRemoveFromWishlist}
        onMoveToCart={handleMoveToCart}
        formatPrice={formatPrice}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cart}
        onClearCart={handleClearCart}
        discountCode={discountCode}
        discountPercent={discountPercent}
        formatPrice={formatPrice}
      />

      {/* Size Guide Modal */}
      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />
    </div>
  );
}
