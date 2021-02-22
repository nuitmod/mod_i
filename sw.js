const cacheName = 'mod_i-v1';
const staticAssets = [
  './',
  './index.html',
  './css/styles.css',
  './index.js',
  './app.js',
  './main.js'
];

self.addEventListener('install', async e => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
  return self.skipWaiting();
});

self.addEventListener('activate', e => {
  self.clients.claim();
});

self.addEventListener('fetch', async e => {
  const req = e.request;
  const url = new URL(req.url);

  if (url.origin === location.origin) {
    e.respondWith(cacheFirst(req));
  } else {
    e.respondWith(networkAndCache(req));
  }
});

async function cacheFirst(req) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(req);
  return cached || fetch(req);
}

async function networkAndCache(req) {
  const cache = await caches.open(cacheName);
  try {
    const fresh = await fetch(req);
    await cache.put(req, fresh.clone());
    return fresh;
  } catch (e) {
    const cached = await cache.match(req);
    return cached;
  }
}
//
// importScripts('https://cdn.ampproject.org/sw/amp-sw.js');
//
// AMP_SW.init({
//   assetCachingOptions: [{
//     regexp: /\.(png|jpg|woff2|woff|css|js)/,
//     cachingStrategy: 'CACHE_FIRST',
//   }],
//   offlinePageOptions: {
//     url: '/offline.html',
//     assets: [],
//   },
// });
