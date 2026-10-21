/* ============================================================
   日常 · 云端配置（腾讯云开发 CloudBase）

   cloudbaseEnv    : 云开发环境 ID
   cloudbaseRegion : 环境地域（必须和环境所在地域一致）
   accessKey       : Publishable Key，可以公开在前端；能读写哪些数据由数据库授权控制
   space           : 你的“保险箱编号”，相当于密码，手机和电脑靠它找到同一份数据
   table           : PostgreSQL 里的表名

   这个文件会被公开发布到 GitHub Pages，不要往里面放服务端密钥。
   ============================================================ */

window.DAILY_CONFIG = {
  cloudbaseEnv: 'daily-d1gmzocti21fcec0b',
  cloudbaseRegion: 'ap-shanghai',
  accessKey: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjJlYTllMjg0LTNlYmItNDllYS1iNDYyLTYwMDhiZmFmODQwNiJ9.eyJpc3MiOiJodHRwczovL2RhaWx5LWQxZ216b2N0aTIxZmNlYzBiLmFwLXNoYW5naGFpLnRjYi1hcGkudGVuY2VudGNsb3VkYXBpLmNvbSIsInN1YiI6ImFub24iLCJhdWQiOiJkYWlseS1kMWdtem9jdGkyMWZjZWMwYiIsImV4cCI6NDA5NjI1NDEyNywiaWF0IjoxNzkyNTcwOTI3LCJub25jZSI6Im53YUR6WkdMVDlDTUMyNkpud1dqQnciLCJhdF9oYXNoIjoibndhRHpaR0xUOUNNQzI2Sm53V2pCdyIsIm5hbWUiOiJBbm9ueW1vdXMiLCJzY29wZSI6ImFub255bW91cyIsInByb2plY3RfaWQiOiJkYWlseS1kMWdtem9jdGkyMWZjZWMwYiIsIm1ldGEiOnsicGxhdGZvcm0iOiJQdWJsaXNoYWJsZUtleSJ9LCJyb2xlIjoiYW5vbiIsImlzX2Fub255bW91cyI6dHJ1ZSwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiYW5vbnltb3VzIiwicHJvdmlkZXJzIjpbImFub255bW91cyJdfSwidXNlcl9tZXRhZGF0YSI6eyJuYW1lIjoiQW5vbnltb3VzIn0sInVzZXJfdHlwZSI6IiIsImNsaWVudF90eXBlIjoiY2xpZW50X3VzZXIiLCJpc19zeXN0ZW1fYWRtaW4iOmZhbHNlfQ.A3GEQ-s4-K5PaOsQeMD3zD6d4MRcz8S6rV78V8PNxUskagOe-1tNCzHvSyUcDRem5dX0dmVOHmId1IsNFPuj7nSYx5AIqAgr2mWZ7D1gfK5_d-3DjQsHCzENog7ZVDjLfq_u-B6L9HSHoKzla_UfceI2yi_ARL84ogeSxXxL_EfGsn5e3PnNDzpek3wsL_sfgtNYkmZw7sjHdJ12ykswxPAlwPhEH2D3ePMB7XS1PjGKC3h-fOnOPXSMhNFlI0zIZ6ZJmTvMnJTVwHRsKk8Ynv4IENkmm2zMWcHQfjjaTcQTQ7hxcWR804XnwZImF7k5ZtDuSfD1bgOYxj8q8lmAtQ',
  space: 'daily-bktd75b5kc',
  table: 'states'
};
