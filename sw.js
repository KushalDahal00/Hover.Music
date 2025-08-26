self.addEventListener('install', event => {
  console.log('Service Worker installing...');
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', event => {
  console.log('Service Worker activating...');
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  // Basic caching for offline support (optional enhancement)
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
