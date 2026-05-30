alter table public.lead_metadata
  add column if not exists application_id text;
