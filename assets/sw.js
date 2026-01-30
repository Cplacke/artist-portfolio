const CACHE_NAME = 'assets-cache-v1';

self.addEventListener('install', event => {
  // Activate immediately
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);

  console.info('fetch url', url.pathname);

  // Only cache same-origin /assets/*
  if (
    url.origin === self.location.origin &&
    url.pathname.startsWith('/assets/')
  ) {
    event.respondWith(cacheFirst(request));
  }
});

async function cacheFirst(request) {
  const cache = await caches.open(CACHE_NAME);

  const cached = await cache.match(request);
  console.info('cached matched', cached);
  if (cached) return cached;

  const response = await fetch(request);

  // Only store successful, basic responses
  if (response.ok && response.type === 'basic') {
    cache.put(request, response.clone());
  }

  return response;
}
