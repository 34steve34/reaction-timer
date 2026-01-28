const CACHE_NAME = 'timer-cache-v1';
const ASSETS = [
  './index.html',
  './manifest.json',
  './cat-icon.png',
  './cat-icon-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
