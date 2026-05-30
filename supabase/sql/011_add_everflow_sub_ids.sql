alter table public.leads
  add column if not exists sub1 text,
  add column if not exists sub2 text;
