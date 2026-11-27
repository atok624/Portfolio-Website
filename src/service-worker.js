const CACHE_PREFIX = 'nicholas-portfolio-';
const CACHE_NAME = CACHE_PREFIX + '__BUILD_ID__';
const PRECACHE_URLS = __PRECACHE_URLS__;
const PRECACHE_PATHS = new Set(PRECACHE_URLS);

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    try {
      const cache = await caches.open(CACHE_NAME);
      await cache.addAll(PRECACHE_URLS.map(url => new Request(url, { cache: 'reload' })));
    } catch (error) { await caches.delete(CACHE_NAME); throw error; }
  })());
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});
self.addEventListener('message', event => {
  if (event.data?.type === 'SKIP_WAITING') self.skipWaiting();
});
self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  // Form submissions, analytics and external links always use the network.
  if (request.method !== 'GET' || url.origin !== self.location.origin) return;
  if (request.mode === 'navigate') {
    const isAppRoute = url.pathname === '/' || url.pathname === '/thanks' || /^\/work\/[^/]+\/?$/.test(url.pathname);
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      // Keep the document and hashed assets on one build until an update is accepted.
      if (isAppRoute) return (await cache.match('/index.html')) || fetch(request);
      try { return await fetch(request); }
      catch { return (await cache.match('/offline.html')) || Response.error(); }
    })());
    return;
  }
  if (PRECACHE_PATHS.has(url.pathname)) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      return (await cache.match(url.pathname)) || fetch(request);
    })());
  }
});
