self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;
e.respondWith(caches.open('wed2').then(async c=>{const m=await c.match(e.request);
const f=fetch(e.request).then(r=>{if(r.ok)c.put(e.request,r.clone());return r}).catch(()=>m);return m||f}))});
