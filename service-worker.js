const CACHE_NAME = 'radio-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css', // Caso tenha algum CSS externo
  '/script.js',  // Caso tenha algum JS externo
  '/radio.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
