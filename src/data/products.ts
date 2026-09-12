export interface Variant {
  size: string;
  stock: number;
}

export interface Product {
  slug: string;
  name: string;
  category: 'Hauts' | 'Bas' | 'Vestes' | 'Accessoires';
  price: number;
  material: string;
  fit: string;
  description: string;
  variants: Variant[];
  limited?: boolean;
  limitedRun?: number;
  comingSoon?: boolean;
}

export const products: Product[] = [
  {
    slug: 'hoodie-empire-400',
    name: 'Hoodie Empire 400',
    category: 'Hauts',
    price: 89,
    material: 'Coton gratté 400 g/m²',
    fit: 'Coupe oversize, épaule tombante',
    description: "Molleton lourd brossé à l'intérieur, broderie poitrine ton sur ton. Poche kangourou renforcée, capuche doublée.",
    variants: [
      { size: 'S', stock: 4 },
      { size: 'M', stock: 9 },
      { size: 'L', stock: 6 },
      { size: 'XL', stock: 0 },
      { size: 'XXL', stock: 2 },
    ],
  },
  {
    slug: 'tee-discipline',
    name: 'Tee Discipline',
    category: 'Hauts',
    price: 39,
    material: 'Jersey 220 g/m²',
    fit: 'Coupe boxy',
    description: "Jersey épais résistant au lavage, coupe boxy droite. Sérigraphie mate sur la poitrine.",
    variants: [
      { size: 'S', stock: 12 },
      { size: 'M', stock: 15 },
      { size: 'L', stock: 10 },
      { size: 'XL', stock: 7 },
      { size: 'XXL', stock: 3 },
    ],
  },
  {
    slug: 'crewneck-orbit',
    name: 'Crewneck Orbit',
    category: 'Hauts',
    price: 75,
    material: 'Molleton 380 g/m²',
    fit: 'Coupe droite',
    description: "Sérigraphie dos grand format représentant la cage orbitale de la marque. Bord-côtes renforcés aux poignets.",
    variants: [
      { size: 'S', stock: 0 },
      { size: 'M', stock: 5 },
      { size: 'L', stock: 8 },
      { size: 'XL', stock: 4 },
      { size: 'XXL', stock: 0 },
    ],
  },
  {
    slug: 'cargo-respect',
    name: 'Cargo Respect',
    category: 'Bas',
    price: 110,
    material: 'Twill lourd',
    fit: 'Coupe droite, chevilles resserrées',
    description: "Twill épais 6 poches, ceinture ajustable, cordon de cheville. Renforts aux genoux.",
    variants: [
      { size: 'S', stock: 3 },
      { size: 'M', stock: 6 },
      { size: 'L', stock: 6 },
      { size: 'XL', stock: 2 },
      { size: 'XXL', stock: 1 },
    ],
  },
  {
    slug: 'bomber-360',
    name: 'Bomber 360',
    category: 'Vestes',
    price: 185,
    material: 'Nylon mat, doublure matelassée',
    fit: 'Coupe ajustée',
    description: "Pièce signature en série limitée de 80 exemplaires numérotés. Nylon déperlant, doublure matelassée, broderie manche.",
    variants: [
      { size: 'S', stock: 2 },
      { size: 'M', stock: 3 },
      { size: 'L', stock: 1 },
      { size: 'XL', stock: 0 },
      { size: 'XXL', stock: 0 },
    ],
    limited: true,
    limitedRun: 80,
  },
  {
    slug: 'casquette-mentale',
    name: 'Casquette Mentale',
    category: 'Accessoires',
    price: 35,
    material: 'Coton 5 panneaux',
    fit: 'Taille unique, ajustable',
    description: "5 panneaux structurés, broderie 3D sur le devant, sangle arrière ajustable.",
    variants: [
      { size: 'Unique', stock: 18 },
    ],
  },
  {
    slug: 'short-discipline',
    name: 'Short Discipline',
    category: 'Bas',
    price: 65,
    material: 'Twill léger',
    fit: 'Coupe droite, longueur genou',
    description: "Twill léger respirant, poches zippées, ceinture élastiquée à cordon.",
    variants: [
      { size: 'S', stock: 5 },
      { size: 'M', stock: 7 },
      { size: 'L', stock: 4 },
      { size: 'XL', stock: 0 },
      { size: 'XXL', stock: 2 },
    ],
  },
  {
    slug: 'work-jacket',
    name: 'Work Jacket',
    category: 'Vestes',
    price: 145,
    material: 'Canvas 12oz, doublure chaude',
    fit: 'Coupe droite',
    description: "Canvas robuste 12oz, doublure sherpa amovible. Série limitée de 60 pièces.",
    variants: [
      { size: 'S', stock: 0 },
      { size: 'M', stock: 2 },
      { size: 'L', stock: 3 },
      { size: 'XL', stock: 1 },
      { size: 'XXL', stock: 0 },
    ],
    limited: true,
    limitedRun: 60,
  },
  {
    slug: 'pull-respect',
    name: 'Pull Respect',
    category: 'Hauts',
    price: 79,
    material: 'Maille côtelée',
    fit: 'Coupe ajustée, col montant',
    description: "Maille côtelée épaisse, col montant, ourlets renforcés. Broderie discrète sur la manche.",
    variants: [
      { size: 'S', stock: 6 },
      { size: 'M', stock: 8 },
      { size: 'L', stock: 5 },
      { size: 'XL', stock: 3 },
      { size: 'XXL', stock: 1 },
    ],
  },
  {
    slug: 'sac-utility',
    name: 'Sac Utility BD',
    category: 'Accessoires',
    price: 95,
    material: 'Toile balistique',
    fit: 'Format unique, bandoulière réglable',
    description: "Toile balistique résistante à l'abrasion, compartiment principal et poche technique, bandoulière réglable.",
    variants: [
      { size: 'Unique', stock: 9 },
    ],
  },
  {
    slug: 'chaussettes-triptyque',
    name: 'Chaussettes Triptyque',
    category: 'Accessoires',
    price: 22,
    material: 'Coton peigné',
    fit: 'Lot de 3 paires',
    description: "Coton peigné renforcé talon et pointe, logo tissé sur la tige. Lot de 3 paires.",
    variants: [
      { size: '39-42', stock: 14 },
      { size: '43-46', stock: 11 },
    ],
  },
  {
    slug: 'tee-manifeste',
    name: 'Tee Manifeste',
    category: 'Hauts',
    price: 42,
    material: 'Jersey 220 g/m²',
    fit: 'Coupe boxy',
    description: "Texte dos complet — la devise de la marque imprimée en grand format. Disponible au prochain drop.",
    variants: [
      { size: 'S', stock: 0 },
      { size: 'M', stock: 0 },
      { size: 'L', stock: 0 },
      { size: 'XL', stock: 0 },
      { size: 'XXL', stock: 0 },
    ],
    comingSoon: true,
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function totalStock(p: Product): number {
  return p.variants.reduce((sum, v) => sum + v.stock, 0);
}
