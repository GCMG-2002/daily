-- 日常 · 腾讯云开发 CloudBase（PostgreSQL）建表与授权
-- 表已经建好的话，只执行最后的 grant 两行即可。
-- 在 CloudBase 控制台 → 数据库 → PostgreSQL → SQL 编辑器里执行。

create table if not exists public.states (
  id uuid primary key,
  rev bigint not null default 0,
  data jsonb,
  updated_at timestamptz not null default now()
);

-- 关闭 RLS（本应用只有一行数据，靠 space 生成的 UUID 定位）
alter table public.states disable row level security;

-- 前端用 Publishable Key，对应 anon 角色；必须授权才能写
grant usage on schema public to anon;
grant select, insert, update, delete on table public.states to anon;
