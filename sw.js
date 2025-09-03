// Define um nome e versão para o cache
const CACHE_NAME = 'meu-site-cache-v1';

// Lista de arquivos que devem ser armazenados em cache
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/menu.js',
  '/images/logo.jpg'
  // Adicione aqui outros arquivos importantes (ícones, etc.)
];

// Evento 'install' - é disparado quando o Service Worker é instalado
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache aberto');
        return cache.addAll(urlsToCache);
      })
  );
});

// Evento 'fetch' - é disparado para cada requisição que a página faz
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Se a requisição estiver no cache, retorna a resposta do cache
        if (response) {
          return response;
        }
        // Se não, faz a requisição à rede
        return fetch(event.request);
      })
  );
});