self.addEventListener('install', event => {
  console.log('I am installing.');
});

self.addEventListener('activate', event => {
  console.log('I am alive!');
});

self.addEventListener('fetch', event => {
  console.log('Someone tried to fetch something. ☺️', event.request.url);
});