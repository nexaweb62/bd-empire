-- BD Empires — schéma de base (Supabase / PostgreSQL)
-- Cette maquette utilise des données mockées côté front (src/data/products.ts).
-- Ce schéma est le livrable décrivant la structure réelle à mettre en place
-- pour brancher le site sur une vraie base Supabase.

create extension if not exists "pgcrypto";

create table customers (
  id uuid primary key default gen_random_uuid(),
  auth_user_id uuid references auth.users (id) on delete set null,
  email text unique not null,
  full_name text,
  phone text,
  created_at timestamptz not null default now()
);

create table addresses (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid not null references customers (id) on delete cascade,
  label text,
  full_name text not null,
  line1 text not null,
  line2 text,
  postal_code text not null,
  city text not null,
  country text not null default 'France',
  is_default boolean not null default false,
  created_at timestamptz not null default now()
);

create table products (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  category text not null check (category in ('Hauts', 'Bas', 'Vestes', 'Accessoires')),
  price_cents integer not null check (price_cents >= 0),
  material text,
  fit text,
  description text,
  is_limited boolean not null default false,
  limited_run integer,
  is_coming_soon boolean not null default false,
  published boolean not null default true,
  created_at timestamptz not null default now()
);

create table variants (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references products (id) on delete cascade,
  size text not null,
  sku text unique,
  unique (product_id, size)
);

create table stock (
  variant_id uuid primary key references variants (id) on delete cascade,
  quantity integer not null default 0 check (quantity >= 0),
  updated_at timestamptz not null default now()
);

create table orders (
  id uuid primary key default gen_random_uuid(),
  order_number text unique not null,
  customer_id uuid references customers (id) on delete set null,
  email text not null,
  status text not null default 'pending'
    check (status in ('pending', 'paid', 'shipped', 'delivered', 'cancelled', 'refunded')),
  shipping_address_id uuid references addresses (id),
  subtotal_cents integer not null,
  shipping_cents integer not null default 0,
  discount_cents integer not null default 0,
  total_cents integer not null,
  promo_code text,
  stripe_payment_intent_id text,
  created_at timestamptz not null default now()
);

create table order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references orders (id) on delete cascade,
  variant_id uuid not null references variants (id),
  product_name text not null,
  size text not null,
  unit_price_cents integer not null,
  quantity integer not null check (quantity > 0)
);

create table newsletter (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  subscribed_at timestamptz not null default now(),
  source text
);

create index idx_variants_product on variants (product_id);
create index idx_order_items_order on order_items (order_id);
create index idx_orders_customer on orders (customer_id);
create index idx_products_category on products (category) where published;
