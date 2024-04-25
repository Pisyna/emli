// Имя кеша
var CACHE_NAME = 'random-color-button-cache';

// Список файлов для кеширования
var urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js'
];

// Установка сервисного работника и кеширование необходимых файлов
self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Очистка старых кешей
self.addEventListener('activate', function(event) {

  var cacheWhitelist = ['random-color-button-cache'];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Получение запросов и возврат кеша, если он доступен
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Кеш найден - возвращаем его
        if (response) {
          return response;
        }

        // Иначе делаем запрос
        return fetch(event.request);
      }
    )
  );
});
