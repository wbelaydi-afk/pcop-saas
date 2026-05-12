-- PRIVATE COMMODITY OPERATIONS PLATFORM — Supabase/PostgreSQL schema
create extension if not exists "uuid-ossp";

create table if not exists organizations (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  plan text default 'enterprise',
  created_at timestamptz default now()
);

create table if not exists profiles (
  id uuid primary key default uuid_generate_v4(),
  organization_id uuid references organizations(id) on delete cascade,
  email text unique not null,
  full_name text,
  role text check (role in ('admin','director','operations','compliance','banking','broker','legal','viewer')) default 'viewer',
  created_at timestamptz default now()
);

create table if not exists counterparties (
  id uuid primary key default uuid_generate_v4(),
  organization_id uuid references organizations(id) on delete cascade,
  name text not null,
  type text check (type in ('buyer','seller','mandate','bank','logistics','intermediary')),
  jurisdiction text,
  kyc_status text default 'pending',
  risk_level text default 'medium',
  created_at timestamptz default now()
);

create table if not exists deals (
  id uuid primary key default uuid_generate_v4(),
  organization_id uuid references organizations(id) on delete cascade,
  deal_code text unique not null,
  commodity text not null,
  buyer_id uuid references counterparties(id),
  seller_id uuid references counterparties(id),
  value numeric default 0,
  volume text,
  status text default 'lead',
  risk_level text default 'medium',
  owner_id uuid references profiles(id),
  progress int default 0,
  created_at timestamptz default now()
);

create table if not exists tasks (
  id uuid primary key default uuid_generate_v4(),
  organization_id uuid references organizations(id) on delete cascade,
  deal_id uuid references deals(id) on delete cascade,
  assignee_id uuid references profiles(id),
  title text not null,
  status text default 'todo',
  due_date date,
  created_at timestamptz default now()
);

create table if not exists documents (
  id uuid primary key default uuid_generate_v4(),
  organization_id uuid references organizations(id) on delete cascade,
  deal_id uuid references deals(id) on delete cascade,
  type text not null,
  title text not null,
  file_url text,
  version int default 1,
  status text default 'draft',
  created_at timestamptz default now()
);

create table if not exists audit_logs (
  id uuid primary key default uuid_generate_v4(),
  organization_id uuid references organizations(id) on delete cascade,
  actor_id uuid references profiles(id),
  entity_type text,
  entity_id uuid,
  action text not null,
  metadata jsonb default '{}'::jsonb,
  created_at timestamptz default now()
);

alter table organizations enable row level security;
alter table profiles enable row level security;
alter table counterparties enable row level security;
alter table deals enable row level security;
alter table tasks enable row level security;
alter table documents enable row level security;
alter table audit_logs enable row level security;
