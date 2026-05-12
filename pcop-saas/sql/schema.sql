-- Private Commodity Operations Platform — Supabase/PostgreSQL starter schema
create table if not exists organizations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  plan text default 'enterprise',
  created_at timestamptz default now()
);

create table if not exists profiles (
  id uuid primary key,
  organization_id uuid references organizations(id),
  full_name text,
  role text check (role in ('admin','managing_director','operations','compliance','banking','broker','viewer')) default 'viewer',
  created_at timestamptz default now()
);

create table if not exists counterparties (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references organizations(id),
  type text check (type in ('buyer','seller','broker','bank','logistics','inspector')) not null,
  legal_name text not null,
  jurisdiction text,
  kyc_status text default 'pending',
  risk_level text default 'medium',
  created_at timestamptz default now()
);

create table if not exists deals (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references organizations(id),
  deal_code text unique not null,
  commodity text not null,
  buyer_id uuid references counterparties(id),
  seller_id uuid references counterparties(id),
  status text default 'lead',
  value_usd numeric default 0,
  volume text,
  risk_level text default 'medium',
  created_at timestamptz default now()
);

create table if not exists documents (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references organizations(id),
  deal_id uuid references deals(id),
  document_type text not null,
  title text not null,
  storage_path text,
  status text default 'draft',
  created_at timestamptz default now()
);

create table if not exists audit_logs (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references organizations(id),
  actor_id uuid references profiles(id),
  action text not null,
  entity_type text,
  entity_id uuid,
  metadata jsonb default '{}'::jsonb,
  created_at timestamptz default now()
);

alter table organizations enable row level security;
alter table profiles enable row level security;
alter table counterparties enable row level security;
alter table deals enable row level security;
alter table documents enable row level security;
alter table audit_logs enable row level security;
