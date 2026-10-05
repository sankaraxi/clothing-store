import React, { useState } from 'react';
import { ShoppingBag, Heart, Search, X, Menu } from 'lucide-react';

export default function Navbar({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  currency,
  onSelectCurrency,
  onNavigateToSection
}) {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'All Pieces', category: 'All Collections' },
    { label: 'Outerwear', category: 'Outerwear' },
    { label: 'Knitwear', category: 'Knitwear' },
    { label: 'Trousers', category: 'Pants & Trousers' },
    { label: 'Lookbook', id: 'lookbook' },
    { label: 'Craft', id: 'sustainability' }
  ];

  const handleLinkClick = (item) => {
    if (item.category) {
      onSelectCategory(item.category);
      onNavigateToSection('catalog');
    } else if (item.id) {
      onNavigateToSection(item.id);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#E8E6DF] transition-colors">
      {/* Editorial Announcement Bar */}
      <div className="bg-[#1C1C1E] text-[#EDECE6] text-xs py-1.5 px-4 text-center tracking-wide font-medium flex items-center justify-center gap-3">
        <span>Complimentary worldwide carbon-neutral shipping on orders over $200</span>
        <span className="hidden md:inline text-white/40">·</span>
        <span className="hidden md:inline text-white/80">Code WELCOME10 for 10% off</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        {/* Zone 1: Single text element wordmark */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => {
              onSelectCategory('All Collections');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-[#191919] hover:opacity-80 transition-opacity uppercase text-left whitespace-nowrap"
          >
            ATELIER NOIR
          </button>
        </div>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#4A4A4A]">
          {navLinks.map((link) => {
            const isActive = link.category ? activeCategory === link.category : false;
            return (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link)}
                className={`transition-colors whitespace-nowrap relative py-1 text-[13.5px] tracking-wide ${
                  isActive
                    ? 'text-[#191919] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#191919]'
                    : 'hover:text-[#191919]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Currency Switcher */}
          <div className="hidden sm:flex items-center text-xs font-medium text-[#666] tracking-wider border border-[#E0DED7] rounded px-1.5 py-1">
            {['USD', 'EUR', 'GBP'].map((curr) => (
              <button
                key={curr}
                onClick={() => onSelectCurrency(curr)}
                className={`px-1.5 py-0.5 rounded transition-colors ${
                  currency === curr ? 'bg-[#191919] text-white' : 'hover:text-[#191919]'
                }`}
              >
                {curr}
              </button>
            ))}
          </div>

          {/* Search Toggle / Input */}
          <div className="relative flex items-center">
            {showSearchInput ? (
              <div className="flex items-center border border-[#191919] bg-white rounded px-2.5 py-1.5 w-44 sm:w-60 shadow-sm animate-fadeIn">
                <Search className="w-3.5 h-3.5 text-[#666] mr-1.5 shrink-0" />
                <input
                  type="text"
                  placeholder="Search silhouettes..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  autoFocus
                  className="w-full text-xs bg-transparent focus:outline-none text-[#191919]"
                />
                <button
                  onClick={() => {
                    onSearchChange('');
                    setShowSearchInput(false);
                  }}
                  className="text-[#888] hover:text-[#191919] p-0.5"
                  aria-label="Close search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowSearchInput(true)}
                className="p-2 text-[#4A4A4A] hover:text-[#191919] transition-colors"
                aria-label="Open search"
                title="Search garments"
              >
                <Search className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={onOpenWishlist}
            className="relative p-2 text-[#4A4A4A] hover:text-[#191919] transition-colors"
            aria-label="Wishlist"
            title="Saved Pieces"
          >
            <Heart className="w-4 h-4" />
            {wishlistCount > 0 && (
              <span className="absolute 0 top-1 right-0.5 w-4 h-4 bg-[#191919] text-white text-[10px] font-bold rounded-full flex items-center justify-center tabular-nums">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Bag Button */}
          <button
            onClick={onOpenCart}
            className="flex items-center gap-2 bg-[#191919] text-white hover:bg-[#333] transition-colors px-3.5 py-2 rounded text-xs font-medium tracking-wide whitespace-nowrap shadow-xs active:scale-[0.98]"
            aria-label="Open cart"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Bag</span>
            <span className="tabular-nums font-semibold px-1 bg-white/20 rounded text-[11px]">
              {cartCount}
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#4A4A4A] hover:text-[#191919]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E8E6DF] bg-[#FAF9F6] px-5 py-4 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link)}
                className="text-left text-sm py-1.5 font-medium text-[#222] hover:text-black border-b border-[#ECEAE3]"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 flex items-center justify-between text-xs text-[#555]">
            <span>Currency:</span>
            <div className="flex gap-1.5">
              {['USD', 'EUR', 'GBP'].map((curr) => (
                <button
                  key={curr}
                  onClick={() => onSelectCurrency(curr)}
                  className={`px-2 py-1 rounded text-xs ${currency === curr ? 'bg-[#191919] text-white font-semibold' : 'bg-[#EAE8E1]'}`}
                >
                  {curr}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
