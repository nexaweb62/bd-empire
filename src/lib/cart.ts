export interface CartLine {
  slug: string;
  name: string;
  size: string;
  price: number;
  qty: number;
}

const KEY = 'bdEmpiresCart';

export function getCart(): CartLine[] {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function save(cart: CartLine[]) {
  localStorage.setItem(KEY, JSON.stringify(cart));
  window.dispatchEvent(new CustomEvent('cart:change', { detail: cart }));
}

export function addToCart(line: Omit<CartLine, 'qty'>, qty = 1) {
  const cart = getCart();
  const existing = cart.find((l) => l.slug === line.slug && l.size === line.size);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ ...line, qty });
  }
  save(cart);
}

export function updateQty(slug: string, size: string, qty: number) {
  let cart = getCart();
  if (qty <= 0) {
    cart = cart.filter((l) => !(l.slug === slug && l.size === size));
  } else {
    const line = cart.find((l) => l.slug === slug && l.size === size);
    if (line) line.qty = qty;
  }
  save(cart);
}

export function removeFromCart(slug: string, size: string) {
  updateQty(slug, size, 0);
}

export function cartCount(cart = getCart()): number {
  return cart.reduce((sum, l) => sum + l.qty, 0);
}

export function cartSubtotal(cart = getCart()): number {
  return cart.reduce((sum, l) => sum + l.qty * l.price, 0);
}
