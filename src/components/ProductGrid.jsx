import React, { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import { SlidersHorizontal, ArrowUpDown, X } from 'lucide-react';
import { CATEGORIES } from '../data/products';

export default function ProductGrid({
  products,
  activeCategory,
  onSelectCategory,
  searchQuery,
  onClearSearch,
  wishlist,
  onToggleWishlist,
  onQuickView,
  onAddToCart,
  formatPrice
}) {
  const [selectedGender, setSelectedGender] = useState('All');
  const [selectedSize, setSelectedSize] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        // Category filter
        if (activeCategory !== 'All Collections' && p.category !== activeCategory) {
          return false;
        }
        // Gender filter
        if (selectedGender !== 'All') {
          if (selectedGender === 'Unisex' && p.gender !== 'Unisex') return false;
          if (selectedGender === 'Women' && p.gender !== 'Women' && p.gender !== 'Unisex') return false;
          if (selectedGender === 'Men' && p.gender !== 'Men' && p.gender !== 'Unisex') return false;
        }
        // Size filter
        if (selectedSize !== 'All' && !p.sizes.includes(selectedSize)) {
          return false;
        }
        // Search query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchName = p.name.toLowerCase().includes(q);
          const matchCategory = p.category.toLowerCase().includes(q);
          const matchFabric = p.fabric.toLowerCase().includes(q);
          const matchDesc = p.description.toLowerCase().includes(q);
          if (!matchName && !matchCategory && !matchFabric && !matchDesc) return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        // Default featured: badge priority + id
        return (b.badge ? 1 : 0) - (a.badge ? 1 : 0);
      });
  }, [products, activeCategory, selectedGender, selectedSize, searchQuery, sortBy]);

  return (
    <section id="catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-[#E8E6DF]">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8C7A6B]">
            Permanent & Seasonal Offerings
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#18181A] mt-1">
            {activeCategory === 'All Collections' ? 'The Complete Wardrobe' : activeCategory}
          </h2>
          <p className="text-sm text-[#666258] mt-1 max-w-xl font-light">
            Every garment is constructed in limited artisanal editions with full fiber provenance and finished French seams.
          </p>
        </div>

        {/* Product Count & Sort Selection */}
        <div className="flex items-center gap-3">
          <span className="text-xs text-[#736F65] tabular-nums whitespace-nowrap">
            Showing <strong className="text-[#18181A]">{filteredProducts.length}</strong> {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </span>

          <div className="flex items-center gap-1.5 border border-[#DCD7CE] bg-white rounded px-2.5 py-1.5 text-xs text-[#333]">
            <ArrowUpDown className="w-3.5 h-3.5 text-[#888]" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent focus:outline-none cursor-pointer pr-1 text-xs"
            >
              <option value="featured">Featured Curations</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          <button
            onClick={() => setShowFiltersMobile(!showFiltersMobile)}
            className="md:hidden flex items-center gap-1.5 border border-[#DCD7CE] bg-white rounded px-2.5 py-1.5 text-xs font-medium"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Filters</span>
          </button>
        </div>
      </div>

      {/* Category Pills & Sub-Filter Bar */}
      <div className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Categories Horizontal Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-[#18181A] text-white shadow-xs'
                  : 'bg-[#EFECE3] text-[#555] hover:bg-[#E2DFD4] hover:text-[#18181A]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gender & Size Granular Filters (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          {/* Gender Filter */}
          <div className="flex items-center gap-1 bg-[#EFECE3] p-0.5 rounded-md text-xs">
            {['All', 'Women', 'Men', 'Unisex'].map((g) => (
              <button
                key={g}
                onClick={() => setSelectedGender(g)}
                className={`px-2.5 py-1 rounded transition-colors text-[11.5px] font-medium ${
                  selectedGender === g ? 'bg-white text-[#18181A] shadow-xs' : 'text-[#666] hover:text-black'
                }`}
              >
                {g}
              </button>
            ))}
          </div>

          {/* Size Filter */}
          <div className="flex items-center gap-1 bg-[#EFECE3] p-0.5 rounded-md text-xs">
            {['All', 'XS', 'S', 'M', 'L', 'XL'].map((s) => (
              <button
                key={s}
                onClick={() => setSelectedSize(s)}
                className={`px-2 py-1 rounded transition-colors text-[11px] font-medium ${
                  selectedSize === s ? 'bg-white text-[#18181A] shadow-xs' : 'text-[#666] hover:text-black'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Active Search & Filter Indicators */}
      {(searchQuery || selectedGender !== 'All' || selectedSize !== 'All') && (
        <div className="pb-6 flex items-center flex-wrap gap-2 text-xs text-[#555]">
          <span className="text-[#888]">Active filters:</span>
          {searchQuery && (
            <span className="inline-flex items-center gap-1 bg-[#E8E5DC] text-[#222] px-2.5 py-1 rounded-full">
              Search: "{searchQuery}"
              <button onClick={onClearSearch} className="hover:text-black">
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
          {selectedGender !== 'All' && (
            <span className="inline-flex items-center gap-1 bg-[#E8E5DC] text-[#222] px-2.5 py-1 rounded-full">
              Fit: {selectedGender}
              <button onClick={() => setSelectedGender('All')} className="hover:text-black">
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
          {selectedSize !== 'All' && (
            <span className="inline-flex items-center gap-1 bg-[#E8E5DC] text-[#222] px-2.5 py-1 rounded-full">
              Size: {selectedSize}
              <button onClick={() => setSelectedSize('All')} className="hover:text-black">
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
          <button
            onClick={() => {
              onClearSearch();
              setSelectedGender('All');
              setSelectedSize('All');
            }}
            className="text-xs text-[#18181A] underline hover:opacity-70 ml-2"
          >
            Reset all
          </button>
        </div>
      )}

      {/* Empty State */}
      {filteredProducts.length === 0 ? (
        <div className="py-20 text-center bg-white rounded-lg border border-[#E8E6DF] max-w-lg mx-auto p-8 space-y-4">
          <p className="text-lg font-serif text-[#18181A]">No silhouettes match your current criteria.</p>
          <p className="text-xs text-[#736F65]">
            Try adjusting your category, sizing, or search term to discover available pieces.
          </p>
          <button
            onClick={() => {
              onSelectCategory('All Collections');
              onClearSearch();
              setSelectedGender('All');
              setSelectedSize('All');
            }}
            className="px-4 py-2 bg-[#18181A] text-white text-xs font-semibold uppercase tracking-wider rounded"
          >
            View All Pieces
          </button>
        </div>
      ) : (
        /* 3-Column Desktop / 2-Column Tablet Grid with generous whitespace (gap-6 to gap-8) */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isWishlisted={Boolean(wishlist.find((w) => w.id === product.id))}
              onToggleWishlist={onToggleWishlist}
              onQuickView={onQuickView}
              onAddToCart={onAddToCart}
              formatPrice={formatPrice}
            />
          ))}
        </div>
      )}
    </section>
  );
}
