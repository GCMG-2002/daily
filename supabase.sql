-- Daily: cloud sync schema (v1)

create table if not exists public.spaces (
  id text primary key,
  rev bigint not null default 0,
  data jsonb,
  updated_at timestamptz not null default now()
);

alter table public.spaces enable row level security;

create or replace function public.space_load(p_id text) returns jsonb as $fn$
declare r record;
begin
  select rev, data into r from spaces where id = p_id;
  if not found then
    return jsonb_build_object('rev', 0, 'data', null);
  end if;
  return jsonb_build_object('rev', r.rev, 'data', r.data);
end;
$fn$ language plpgsql security definer set search_path = public;

create or replace function public.space_save(p_id text, p_base_rev bigint, p_data jsonb) returns jsonb as $fn$
declare cur spaces%rowtype;
begin
  select * into cur from spaces where id = p_id for update;
  if not found then
    begin
      insert into spaces (id, rev, data) values (p_id, 1, p_data);
    exception when unique_violation then
      return jsonb_build_object('ok', false, 'conflict', true, 'rev', 0, 'data', null);
    end;
    return jsonb_build_object('ok', true, 'rev', 1);
  end if;
  if cur.rev <> p_base_rev then
    return jsonb_build_object('ok', false, 'conflict', true, 'rev', cur.rev, 'data', cur.data);
  end if;
  update spaces set rev = cur.rev + 1, data = p_data, updated_at = now() where id = p_id;
  return jsonb_build_object('ok', true, 'rev', cur.rev + 1);
end;
$fn$ language plpgsql security definer set search_path = public;

grant execute on function public.space_load(text) to anon, authenticated;
grant execute on function public.space_save(text, bigint, jsonb) to anon, authenticated;
