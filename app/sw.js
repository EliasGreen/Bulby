const filesToCache = [
  '/',
  'index.html',
  'app.jsx',
  'styles/Main.css',
  'bundle.js'
];

const staticCacheName = 'pages-cache-v1';

self.addEventListener('install', (event) => {
  console.log('Attempting to install service worker and cache static assets');
  event.waitUntil(
    caches.open(staticCacheName)
    .then(cache => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', event => {
  console.log('I am alive!');
});

self.addEventListener('fetch', event => {
  console.log('Fetch event for ', event.request.url);
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        console.log('Found ', event.request.url, ' in cache');
        return response;
      }
      console.log('Network request for ', event.request.url);
      return fetch(event.request)

      .then(response => {
      return caches.open(staticCacheName).then(function(cache) {
        if (event.request.url.indexOf('test') < 0) {
          cache.put(event.request.url, response.clone());
        }
        return response;
      });
});
    }).catch(function(error) {
        caches.match(event.request).then(response => {
      if (response) {
        return response; 
        }
      });
    })
  );
});