export const COLLECTIONS = [
  { id: 'all', name: 'All Creations', subtitle: 'The Complete High Joaillerie Portfolio' },
  { id: 'solitaires', name: 'Solitaires & Rings', subtitle: 'Architectural Cuts & Rare Diamonds' },
  { id: 'necklaces', name: 'Colliers & Pendants', subtitle: 'Luminous Sculptures for the Decolletage' },
  { id: 'bracelets', name: 'Cuffs & Bangles', subtitle: 'Articulated Gold & Continuous Pavé' },
  { id: 'earrings', name: 'Haute Earrings', subtitle: 'Weightless Cascades of Radiance' },
];

export const PRODUCTS = [
  {
    id: 'solitaire-celeste',
    name: 'The Solitaire Céleste',
    frenchName: 'Le Solitaire Céleste',
    collection: 'solitaires',
    price: 34500,
    tag: 'Haute Joaillerie Piece Unique',
    isNew: true,
    isFeatured: true,
    carat: '4.85 ct',
    clarity: 'FL / D Flawless',
    certification: 'GIA & Maison CHARLIE KANG Vendôme Archive #8892',
    shortDescription: 'An architectural four-prong high solitaire featuring an ultra-rare cushion-cut center stone encircled by a micro-pavé hidden halo.',
    longDescription: 'Cast from molten 18-karat Fairmined yellow gold, The Solitaire Céleste captures the essence of pure celestial light. Hand-faceted in our Place Vendôme atelier over 140 meticulous hours, the center stone exhibits exceptional fire and scintillation, engineered with a tapered knife-edge band that appears to float above the skin.',
    images: {
      yellow: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=85',
      rose: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1200&q=85',
      platinum: 'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=1200&q=85',
      gallery: [
        'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=85'
      ]
    },
    finishes: [
      { id: 'yellow', label: '18K Yellow Gold', hex: '#D4AF37' },
      { id: 'rose', label: '18K Rose Gold', hex: '#E8B4A6' },
      { id: 'platinum', label: '950 Platinum', hex: '#E2E8F0' },
    ],
    details: [
      { label: 'Origin', value: 'Place Vendôme, Paris' },
      { label: 'Cut', value: 'Cushion Modified Brilliant' },
      { label: 'Metal Weight', value: '7.8 grams' },
      { label: 'Setting', value: 'Hand-sculpted 4-claw with hidden gallery' }
    ]
  },
  {
    id: 'etoile-collier',
    name: 'Étoile Polaire Choker',
    frenchName: 'Collier Étoile Polaire',
    collection: 'necklaces',
    price: 68000,
    tag: 'Archive Masterpiece',
    isNew: false,
    isFeatured: true,
    carat: '12.40 ct Total',
    clarity: 'VVS1 / E Color',
    certification: 'GIA Certified Collection #904',
    shortDescription: 'A fluid diamond collar composed of graduating marquise and brilliant-cut diamonds culminating in a detachable pear-shaped drop.',
    longDescription: 'Inspired by the starry night sky over the Tuileries Gardens, this choker articulates fluidly against the neckline. Each diamond link is individually hand-hinged by master joailliers using invisible platinum pins to achieve supreme silk-like flexibility and weightless drape.',
    images: {
      yellow: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=85',
      rose: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=85',
      platinum: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=85',
      gallery: [
        'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=1200&q=85'
      ]
    },
    finishes: [
      { id: 'yellow', label: '18K Yellow Gold', hex: '#D4AF37' },
      { id: 'platinum', label: '950 Platinum', hex: '#E2E8F0' },
      { id: 'rose', label: '18K Rose Gold', hex: '#E8B4A6' }
    ],
    details: [
      { label: 'Origin', value: 'Place Vendôme, Paris' },
      { label: 'Artisan Hours', value: '260 hours' },
      { label: 'Closure', value: 'Double safety concealed tongue clasp' },
      { label: 'Length', value: '38 cm (Adjustable extension available)' }
    ]
  },
  {
    id: 'architectura-cuff',
    name: 'Architectura Vendôme Cuff',
    frenchName: 'Manchette Architectura Vendôme',
    collection: 'bracelets',
    price: 28900,
    tag: 'Limited Edition 18 Pieces',
    isNew: true,
    isFeatured: true,
    carat: '3.65 ct Diamonds',
    clarity: 'VVS2 / F Color',
    certification: 'Maison CHARLIE KANG Certified Hallmark',
    shortDescription: 'Bold fluted geometry hand-carved in heavy 18K gold, flanked by architectural parallel tracks of brilliant pavé.',
    longDescription: 'A tour de force of metalworking, the Architectura Vendôme Cuff pays homage to the neoclassical columns of the French classical era. Alternating mirrored polished ribs and satin hand-brushed facets create hypnotic light play that responds dynamically to every movement of the wrist.',
    images: {
      yellow: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=1200&q=85',
      rose: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1200&q=85',
      platinum: 'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=1200&q=85',
      gallery: [
        'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1200&q=85'
      ]
    },
    finishes: [
      { id: 'yellow', label: '18K Yellow Gold', hex: '#D4AF37' },
      { id: 'rose', label: '18K Rose Gold', hex: '#E8B4A6' },
      { id: 'platinum', label: '950 Platinum', hex: '#E2E8F0' },
    ],
    details: [
      { label: 'Gold Weight', value: '44.5 grams solid gold' },
      { label: 'Hinge', value: 'Concealed internal spring hinge' },
      { label: 'Width', value: '28 mm tapered profile' }
    ]
  },
  {
    id: 'cascade-versailles',
    name: 'Cascade de Versailles Earrings',
    frenchName: 'Boucles d’Oreilles Cascade',
    collection: 'earrings',
    price: 42000,
    tag: 'Red Carpet Selection',
    isNew: false,
    isFeatured: true,
    carat: '8.10 ct Pair',
    clarity: 'VVS1 / D Color',
    certification: 'Dual GIA Certification',
    shortDescription: 'Dramatic waterfall earrings cascading in delicate platinum threads, dancing with kinetic light at every step.',
    longDescription: 'Engineered for breathtaking red carpet radiance, each earring features eleven graduated bezel-set round and marquise diamonds designed to capture candlelight. The articulated drop design gives the diamonds perpetual kinetic movement, shimmering with even the gentlest breath.',
    images: {
      yellow: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1200&q=85',
      rose: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=85',
      platinum: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1200&q=85',
      gallery: [
        'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=85'
      ]
    },
    finishes: [
      { id: 'platinum', label: '950 Platinum', hex: '#E2E8F0' },
      { id: 'yellow', label: '18K Yellow Gold', hex: '#D4AF37' },
      { id: 'rose', label: '18K Rose Gold', hex: '#E8B4A6' }
    ],
    details: [
      { label: 'Drop Length', value: '62 mm' },
      { label: 'Backing', value: 'French secure lever-back with safety lock' },
      { label: 'Balance', value: 'Counter-weighted for all-evening comfort' }
    ]
  },
  {
    id: 'serpentine-bangle',
    name: 'Serpentine Éternelle Bangle',
    frenchName: 'Bracelet Serpentine Éternelle',
    collection: 'bracelets',
    price: 52000,
    tag: 'Haute Joaillerie Icon',
    isNew: true,
    isFeatured: false,
    carat: '6.45 ct Diamonds',
    clarity: 'VVS2 / E-F Color',
    certification: 'Maison CHARLIE KANG Gemological Dossier',
    shortDescription: 'A serpentine masterpiece that coils sensuously around the wrist, paved in graduating brilliant diamonds with cabochon emerald eyes.',
    longDescription: 'Symbol of eternal metamorphosis and strength, the Serpentine Éternelle is engineered with our proprietary French flex-core mechanism that gently expands over the hand before settling perfectly against the wrist contours without clasps.',
    images: {
      yellow: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1200&q=85',
      rose: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1200&q=85',
      platinum: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=1200&q=85',
      gallery: [
        'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=1200&q=85'
      ]
    },
    finishes: [
      { id: 'yellow', label: '18K Yellow Gold', hex: '#D4AF37' },
      { id: 'rose', label: '18K Rose Gold', hex: '#E8B4A6' },
      { id: 'platinum', label: '950 Platinum', hex: '#E2E8F0' },
    ],
    details: [
      { label: 'Gemstones', value: 'Colombian Emerald eyes (0.60 ct)' },
      { label: 'Core Mechanism', value: 'Memory-titanium spring coil' },
      { label: 'Pavé Count', value: '428 hand-set micro diamonds' }
    ]
  },
  {
    id: 'constellation-pendant',
    name: 'Constellation Vendôme Pendant',
    frenchName: 'Pendentif Constellation',
    collection: 'necklaces',
    price: 39500,
    tag: 'Haute Joaillerie Solitaire',
    isNew: false,
    isFeatured: false,
    carat: '5.12 ct Center',
    clarity: 'IF / D Flawless (Internally Flawless)',
    certification: 'GIA Type IIa Diamond Certificate',
    shortDescription: 'A monumental Type IIa cushion diamond suspended from a delicate openwork platinum chain with bezel-set star accents.',
    longDescription: 'Classified as Type IIa—the most chemically pure category of diamond, representing less than 2% of world gemstone discoveries—this extraordinary stone displays liquid-crystal transparency reminiscent of pure glacial water.',
    images: {
      yellow: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=1200&q=85',
      rose: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=85',
      platinum: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=1200&q=85',
      gallery: [
        'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=85'
      ]
    },
    finishes: [
      { id: 'platinum', label: '950 Platinum', hex: '#E2E8F0' },
      { id: 'yellow', label: '18K Yellow Gold', hex: '#D4AF37' },
      { id: 'rose', label: '18K Rose Gold', hex: '#E8B4A6' },
    ],
    details: [
      { label: 'Diamond Type', value: 'Type IIa Ultra-Pure Carbon' },
      { label: 'Chain Length', value: '45 cm with sliding gold ball regulator' },
      { label: 'Polish & Symmetry', value: 'Excellent / Excellent' }
    ]
  },
  {
    id: 'ombre-du-soleil',
    name: 'L’Ombre du Soleil Ring',
    frenchName: 'Bague L’Ombre du Soleil',
    collection: 'solitaires',
    price: 46000,
    tag: 'Colored Gemstone High Joaillerie',
    isNew: true,
    isFeatured: false,
    carat: '7.30 ct Unheated Sapphire',
    clarity: 'Royal Blue Vivid Velvet',
    certification: 'Gübelin & SSEF Swiss Gemmological Reports',
    shortDescription: 'A majestic royal blue unheated sapphire set in asymmetric ribbons of 18K rose gold and brilliant round-cut diamonds.',
    longDescription: 'Acquired through private estate provenance, this unheated sapphire displays the coveted deep cornflower blue glow. Sculptural gold ribs wrap around the stone like solar flares captured in freeze-frame perfection.',
    images: {
      yellow: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1200&q=85',
      rose: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1200&q=85',
      platinum: 'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=1200&q=85',
      gallery: [
        'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=85'
      ]
    },
    finishes: [
      { id: 'rose', label: '18K Rose Gold', hex: '#E8B4A6' },
      { id: 'yellow', label: '18K Yellow Gold', hex: '#D4AF37' },
      { id: 'platinum', label: '950 Platinum', hex: '#E2E8F0' },
    ],
    details: [
      { label: 'Sapphire Origin', value: 'Ratnapura, Sri Lanka (No Heat)' },
      { label: 'Accent Stones', value: '1.85 ct E-F VVS Diamonds' },
      { label: 'Setting Method', value: 'Invisible micro-prongs' }
    ]
  },
  {
    id: 'astree-earrings',
    name: 'Astrée Pavé Climbers',
    frenchName: 'Grimpeurs d’Oreilles Astrée',
    collection: 'earrings',
    price: 24500,
    tag: 'Modern Atelier Edition',
    isNew: false,
    isFeatured: false,
    carat: '4.20 ct Pair',
    clarity: 'VVS2 / E Color',
    certification: 'Maison CHARLIE KANG Certified Hallmark',
    shortDescription: 'Modern ear climbers that ascend the earlobe in a graceful crescent of graduated brilliant and emerald-cut stones.',
    longDescription: 'Created for the modern connoisseur, these climbers fit with anatomical precision along the ear’s natural curve. Specially engineered clip-pin attachments provide effortless security without pinching or weight distortion.',
    images: {
      yellow: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=85',
      rose: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=85',
      platinum: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1200&q=85',
      gallery: [
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1200&q=85'
      ]
    },
    finishes: [
      { id: 'yellow', label: '18K Yellow Gold', hex: '#D4AF37' },
      { id: 'platinum', label: '950 Platinum', hex: '#E2E8F0' },
      { id: 'rose', label: '18K Rose Gold', hex: '#E8B4A6' }
    ],
    details: [
      { label: 'Design', value: 'Mirror-sculpted Left & Right pieces' },
      { label: 'Grip', value: 'Comfort-cushion curved wire clip' },
      { label: 'Style', value: 'Can be worn vertically or as drops' }
    ]
  }
];

export const ATELIER_CRAFT_STEPS = [
  {
    step: '01',
    title: 'Ethical Gemological Sourcing',
    subtitle: '1 in 10,000 Precision',
    description: 'Our master gemologist travels personally to select diamonds and unheated colored gems that meet the rarest criteria of optical purity, carbon perfection, and ethical Fairmined certification.',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=85',
    spec: 'Fairmined Gold & Kimberley Certified'
  },
  {
    step: '02',
    title: 'Gouache Rendering & High Sculpture',
    subtitle: 'The Parisian Gouaché Tradition',
    description: 'Before a single millimeter of metal is cast, every piece is painted by hand in opaque watercolor gouache on dark board, calculating the precise refraction of light at 1:1 scale.',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=85',
    spec: 'Traditional 18th Century Atelier Technique'
  },
  {
    step: '03',
    title: 'Serti Parisien (Invisible Setting)',
    subtitle: 'Microscopic Tolerance',
    description: 'Under 40x magnification, our master joailliers cut custom grooves into solid gold galleries, locking each stone in place without visible metal between adjacent facets.',
    image: 'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=1200&q=85',
    spec: 'Tolerance under 0.02 millimeters'
  },
  {
    step: '04',
    title: 'Mirror & Satin Hand-Polishing',
    subtitle: 'Polissage Haute Parfumerie',
    description: 'Using fine Egyptian cotton cords and diamond paste, interior and exterior surfaces receive six progressive stages of hand polishing to achieve our hallmark liquid-gold luster.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=85',
    spec: 'Certified with French Eagle & Maison Hallmark'
  }
];

export const SALONS = [
  {
    city: 'Paris',
    address: '16 Place Vendôme, 75001 Paris',
    phone: '+33 1 42 68 00 12',
    hours: 'Mon – Sat: By Private Invitation',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80'
  },
  {
    city: 'New York',
    address: '740 Madison Avenue, New York, NY 10065',
    phone: '+1 212 555 0192',
    hours: 'Mon – Sat: Private Salon Booking',
    image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=800&q=80'
  },
  {
    city: 'Geneva',
    address: 'Rue du Rhône 42, 1204 Genève',
    phone: '+41 22 819 04 00',
    hours: 'Tue – Sat: VIP Concierge Appointment',
    image: 'https://images.unsplash.com/photo-1574958269340-fa927503f3dd?auto=format&fit=crop&w=800&q=80'
  }
];

