export const CATEGORIES = [
  'All Collections',
  'Outerwear',
  'Knitwear',
  'Pants & Trousers',
  'Linen & Shirts',
  'Dresses',
  'Accessories'
];

export const PRODUCTS = [
  {
    id: 'prod-1',
    name: 'Architectural Cashmere-Wool Trench',
    category: 'Outerwear',
    gender: 'Unisex',
    price: 380,
    originalPrice: 420,
    badge: 'Limited Batch',
    rating: 4.9,
    reviewsCount: 42,
    shortDesc: 'Double-breasted trench with dropped shoulders and storm flap in heavy felted wool-cashmere blend.',
    description: 'Constructed from a dense, temperature-regulating blend of 70% virgin wool and 30% Mongolian cashmere. Features generous notched lapels, horn buttons, a removable structured waist belt, and deep raglan sleeve construction that layers effortlessly over heavyweight knitwear.',
    fabric: '70% Virgin Wool, 30% Mongolian Cashmere (520 GSM)',
    origin: 'Hand-tailored in Porto, Portugal',
    care: 'Specialist dry clean only. Steam gently.',
    fit: 'Generous relaxed drape. Take your regular size for an oversized look, or size down for tailored fit.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Obsidian Black', hex: '#1C1C1E', accent: '#2A2A2E' },
      { name: 'Warm Charcoal', hex: '#373737', accent: '#464646' },
      { name: 'Raw Camel', hex: '#9E8569', accent: '#B39777' }
    ],
    silhouette: 'trench',
    reviews: [
      { id: 'r1', author: 'Elena V.', rating: 5, date: 'October 2026', comment: 'The weight and drape of this coat are remarkable. It feels like bespoke couture without the four-figure tag.', verified: true, size: 'M' },
      { id: 'r2', author: 'Marcus K.', rating: 5, date: 'September 2026', comment: 'Impeccable construction. The horn buttons and clean storm flap make it an instant wardrobe heirloom.', verified: true, size: 'L' }
    ]
  },
  {
    id: 'prod-2',
    name: 'Heavyweight Ribbed Merino Mockneck',
    category: 'Knitwear',
    gender: 'Unisex',
    price: 195,
    badge: 'Atelier Essential',
    rating: 4.8,
    reviewsCount: 78,
    shortDesc: '7-gauge chunky fishermen rib knit spun from certified extra-fine merino wool.',
    description: 'Spun from 19.5-micron extra-fine Merino wool from non-mulesed flocks in Victoria, Australia. Knitted in a tactile 7-gauge fisherman rib that retains heat while remaining breathable and soft against the neck with zero prickle factor.',
    fabric: '100% Extra-Fine Australian Merino Wool',
    origin: 'Spun in Biella, Italy; Knitted in Hawick, Scotland',
    care: 'Hand wash cold with wool wash. Lay flat on dry towel to dry.',
    fit: 'Regular boxy silhouette with reinforced rib cuffs and hem.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Chalk Cream', hex: '#EDECE6', accent: '#D8D5CA' },
      { name: 'Deep Navy', hex: '#1E2530', accent: '#2D3748' },
      { name: 'Forest Moss', hex: '#3B443B', accent: '#4E5B4E' }
    ],
    silhouette: 'knitwear',
    reviews: [
      { id: 'r3', author: 'Sophie T.', rating: 5, date: 'October 2026', comment: 'So buttery soft and heavy! The mock collar stands upright without choking or sagging.', verified: true, size: 'S' },
      { id: 'r4', author: 'Daniel B.', rating: 4, date: 'August 2026', comment: 'Substantial yarn weight, beautiful cream color. Perfect for chilly mornings.', verified: true, size: 'L' }
    ]
  },
  {
    id: 'prod-3',
    name: 'Unstructured French Linen Blazer',
    category: 'Outerwear',
    gender: 'Men',
    price: 260,
    originalPrice: 295,
    badge: 'Bestseller',
    rating: 4.9,
    reviewsCount: 56,
    shortDesc: 'Breathable washed European linen with unlined interior and soft natural shoulder slope.',
    description: 'Tailored with zero shoulder padding and half-canvas chest construction for an airy, relaxed silhouette. Features patch pockets, double back vent, and mother-of-pearl buttons. Pre-washed for a supple, organic texture that softens with each wear.',
    fabric: '100% Normandy Flax Linen (260 GSM)',
    origin: 'Crafted in Naples, Italy',
    care: 'Dry clean or cold delicate cycle, line dry in shade.',
    fit: 'True to size, soft unstructured shoulder.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Sand Taupe', hex: '#C2B69D', accent: '#D4C9B2' },
      { name: 'Olive Drab', hex: '#484B3F', accent: '#5C6051' },
      { name: 'Ink Noir', hex: '#212124', accent: '#333338' }
    ],
    silhouette: 'blazer',
    reviews: [
      { id: 'r5', author: 'Julian H.', rating: 5, date: 'September 2026', comment: 'The linen has incredible character. Breathable in warmth yet structured enough for dinners.', verified: true, size: 'M' }
    ]
  },
  {
    id: 'prod-4',
    name: 'Double-Pleated Wide Leg Trousers',
    category: 'Pants & Trousers',
    gender: 'Unisex',
    price: 185,
    badge: 'New Arrival',
    rating: 4.7,
    reviewsCount: 39,
    shortDesc: 'High-waisted tailored trousers with forward deep double pleats and full drape.',
    description: 'Designed with a high rise and dramatic wide-leg profile that breaks gracefully over loafers or minimalist sneakers. Constructed from a fluid tropical wool-viscose blend with an internal extended tab waistband and deep slash side pockets.',
    fabric: '55% Recycled Wool, 45% ECOVERO™ Viscose',
    origin: 'Ethically made in Izmir, Turkey',
    care: 'Dry clean or cold gentle wool wash.',
    fit: 'High-rise waist, voluminous relaxed leg drape.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Charcoal Mélange', hex: '#3A3B3C', accent: '#4E5052' },
      { name: 'Oatmeal', hex: '#DBD5C8', accent: '#EDE8DD' },
      { name: 'Pitch Black', hex: '#18181A', accent: '#262629' }
    ],
    silhouette: 'trouser',
    reviews: [
      { id: 'r6', author: 'Liam S.', rating: 5, date: 'October 2026', comment: 'The pleats hold crisp lines and the drape while walking is unmatched.', verified: true, size: 'M' }
    ]
  },
  {
    id: 'prod-5',
    name: 'Relaxed Band-Collar Silk-Linen Shirt',
    category: 'Linen & Shirts',
    gender: 'Unisex',
    price: 165,
    badge: 'Atelier Essential',
    rating: 4.8,
    reviewsCount: 64,
    shortDesc: 'Poplin woven with subtle slub texture, clean grandad collar, and curved hem.',
    description: 'A blend of raw mulberry silk and Belgian flax linen creates a lustrous, matte handfeel with natural thermal regulation. Cut with a relaxed dropped shoulder, mother-of-pearl buttons, and split back yoke with box pleat for full mobility.',
    fabric: '65% Belgian Linen, 35% Raw Mulberry Silk',
    origin: 'Woven in Ghent, Belgium',
    care: 'Cold hand wash with neutral detergent, hang dry.',
    fit: 'Fluid relaxed fit with longer tail hem.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Off-White Ivory', hex: '#F4F2EB', accent: '#DFDCCF' },
      { name: 'Smoky Sage', hex: '#7A8478', accent: '#8F998D' },
      { name: 'Dusk Slate', hex: '#414850', accent: '#535B65' }
    ],
    silhouette: 'shirt',
    reviews: [
      { id: 'r7', author: 'Nadia R.', rating: 5, date: 'September 2026', comment: 'The silk-linen blend is magic against the skin. Wore it all weekend.', verified: true, size: 'S' }
    ]
  },
  {
    id: 'prod-6',
    name: 'Bias-Cut Silk Crepe Slip Dress',
    category: 'Dresses',
    gender: 'Women',
    price: 245,
    badge: 'Limited Batch',
    rating: 4.9,
    reviewsCount: 31,
    shortDesc: 'Heavyweight 22-momme silk crepe de chine cut on the true 45-degree diagonal bias.',
    description: 'Glides across the body without clinging, creating an effortless liquid movement. Features delicate rouleau straps, subtle cowl neckline, and French-seamed internal construction for heirloom longevity.',
    fabric: '100% Grade 6A Mulberry Silk Crepe (22 Momme)',
    origin: 'Artisanal atelier in Lyon, France',
    care: 'Dry clean or hand wash cold with silk wash. Steam inside out.',
    fit: 'Bias drape conforms softly to curves. Midi length.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Liquid Champagne', hex: '#D6C8B2', accent: '#E8DCB8' },
      { name: 'Midnight Onyx', hex: '#161619', accent: '#26262B' },
      { name: 'Deep Terracotta', hex: '#874B3C', accent: '#9C5847' }
    ],
    silhouette: 'dress',
    reviews: [
      { id: 'r8', author: 'Chloe M.', rating: 5, date: 'October 2026', comment: 'The bias drape is extraordinary. The silk weight is dense and completely opaque.', verified: true, size: 'M' }
    ]
  },
  {
    id: 'prod-7',
    name: 'Structured Full-Grain Leather Tote',
    category: 'Accessories',
    gender: 'Unisex',
    price: 310,
    originalPrice: 350,
    badge: 'Handcrafted',
    rating: 5.0,
    reviewsCount: 45,
    shortDesc: 'Vegetable-tanned Tuscan saddle leather with raw burnished edges and brass hardware.',
    description: 'Constructed from 2.4mm thick vegetable-tanned bovine leather that develops a deep golden patina with time. Features reinforced tubular handles, an interior magnetic brass key lanyard, and a dedicated 16" laptop sleeve compartment.',
    fabric: '100% Full-Grain Vegetable-Tanned Italian Leather',
    origin: 'Scandicci, Florence, Italy',
    care: 'Condition biannually with natural beeswax leather balm.',
    fit: 'Dimensions: 42cm W x 36cm H x 14cm D. Weight: 980g.',
    sizes: ['One Size'],
    colors: [
      { name: 'Saddle Tan', hex: '#8B5A2B', accent: '#A06834' },
      { name: 'Espresso Brown', hex: '#3B2F2F', accent: '#4E3E3E' },
      { name: 'Matte Nero', hex: '#1B1B1C', accent: '#2B2B2C' }
    ],
    silhouette: 'tote',
    reviews: [
      { id: 'r9', author: 'Arthur P.', rating: 5, date: 'August 2026', comment: 'The smell of the vegetable-tanned leather is magnificent. Fits my laptop and daily essentials comfortably.', verified: true, size: 'One Size' }
    ]
  },
  {
    id: 'prod-8',
    name: 'Boiled Wool Raglan Overcoat',
    category: 'Outerwear',
    gender: 'Women',
    price: 340,
    badge: 'New Arrival',
    rating: 4.8,
    reviewsCount: 22,
    shortDesc: 'Structured boiled wool with raw cut edge detailing and concealed horn button placket.',
    description: 'Dense felted boiled wool naturally resists wind and light rain. Features rounded raglan shoulder seams, deep wool fleece-lined slash pockets, and a clean minimalist collar that can be buttoned tall during biting winds.',
    fabric: '100% Austrian Alpine Boiled Wool (480 GSM)',
    origin: 'Tyrol, Austria',
    care: 'Dry clean only. Brush with natural bristle brush.',
    fit: 'Cocoon relaxed silhouette that hits below the knee.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Mineral Stone', hex: '#908F88', accent: '#A3A29B' },
      { name: 'Forest Dark', hex: '#2A332B', accent: '#374238' },
      { name: 'Deep Espresso', hex: '#2D2522', accent: '#3D332E' }
    ],
    silhouette: 'overcoat',
    reviews: [
      { id: 'r10', author: 'Hannah L.', rating: 5, date: 'October 2026', comment: 'Keeps out biting wind completely. The raw edge seams give it modern architectural finesse.', verified: true, size: 'S' }
    ]
  }
];

export const LOOKBOOK_STORIES = [
  {
    id: 'story-1',
    season: 'Autumn / Winter Atelier Archive',
    title: 'The Discipline of Natural Fibers',
    summary: 'Explorations in un-dyed virgin wool, French flax linen, and Scottish mill craftsmanship.',
    quote: 'Garments designed not for the season, but for the decade.',
    details: 'Every textile is traced to verified non-mulesed pastures and European master mills. Our patterns prioritize zero-waste cuts, reinforced French seams, and horn buttons sourced from sustainable domestic herds.'
  },
  {
    id: 'story-2',
    season: 'Edition 04 — Modern Silhouettes',
    title: 'Architectural Volumes & Fluid Drape',
    summary: 'A study on balancing structural tailoring with relaxed day-to-evening versatility.',
    quote: 'Structure should never come at the expense of movement.',
    details: 'By removing rigid shoulder pads and embracing soft canvas constructions, each jacket and overcoat moves harmoniously with the wearer while holding a clean, sculptural silhouette.'
  }
];

export const SIZE_CHART = {
  mens: [
    { size: 'XS', chest: '34-36"', waist: '28-30"', hips: '35-37"', sleeve: '32"' },
    { size: 'S', chest: '36-38"', waist: '30-32"', hips: '37-39"', sleeve: '33"' },
    { size: 'M', chest: '38-40"', waist: '32-34"', hips: '39-41"', sleeve: '34"' },
    { size: 'L', chest: '41-43"', waist: '35-37"', hips: '42-44"', sleeve: '35"' },
    { size: 'XL', chest: '44-46"', waist: '38-40"', hips: '45-47"', sleeve: '35.5"' }
  ],
  womens: [
    { size: 'XS', bust: '32-33"', waist: '24-25"', hips: '34-35"', length: '46"' },
    { size: 'S', bust: '34-35"', waist: '26-27"', hips: '36-37"', length: '47"' },
    { size: 'M', bust: '36-37"', waist: '28-29"', hips: '38-39"', length: '48"' },
    { size: 'L', bust: '38-40"', waist: '30-32"', hips: '40-42"', length: '48.5"' },
    { size: 'XL', bust: '41-43"', waist: '33-35"', hips: '43-45"', length: '49"' }
  ]
};
