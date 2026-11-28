/* Service worker – offline uložení aplikace. Při změně souborů zvyšte VERZE. */
const VERZE = "v11";const CACHE="sprava-majetku-"+VERZE;
const SOUBORY=["./","index.html","manifest.webmanifest","ikony/ikona-192.png","ikony/ikona-512.png","ikony/apple-touch-icon.png","tisk/","tisk/index.html","tisk/manifest.webmanifest"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>Promise.all(SOUBORY.map(u=>fetch(new Request(u,{cache:"reload"})).then(r=>{if(!r.ok)throw new Error(u);return c.put(u,r)})))).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(n=>n.startsWith("sprava-majetku-")&&n!==CACHE).map(n=>caches.delete(n)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;
 e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request).then(res=>{if(res&&res.ok&&new URL(e.request.url).origin===location.origin){const k=res.clone();caches.open(CACHE).then(c=>c.put(e.request,k))}return res}).catch(()=>caches.match("index.html"))))});
