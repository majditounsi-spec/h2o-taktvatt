-- Kör detta i Supabase SQL Editor (Dashboard > SQL Editor > New Query)

-- 1. Tabell för kontaktförfrågningar
create table public.inquiries (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now() not null,
  name text not null,
  phone text not null,
  email text,
  address text,
  service text,
  message text,
  status text default 'ny' not null check (status in ('ny', 'kontaktad', 'offert_skickad', 'klar', 'avböjd')),
  notes text
);

-- 2. RLS: bara autentiserade användare kan läsa/uppdatera
alter table public.inquiries enable row level security;

-- Alla kan INSERTa (från kontaktformuläret)
create policy "Anyone can insert inquiries"
  on public.inquiries for insert
  to anon, authenticated
  with check (true);

-- Bara inloggade kan läsa
create policy "Authenticated users can read inquiries"
  on public.inquiries for select
  to authenticated
  using (true);

-- Bara inloggade kan uppdatera
create policy "Authenticated users can update inquiries"
  on public.inquiries for update
  to authenticated
  using (true);

-- 3. Index för snabb sortering
create index inquiries_created_at_idx on public.inquiries (created_at desc);
create index inquiries_status_idx on public.inquiries (status);
