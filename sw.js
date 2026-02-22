const CACHE_NAME = "bbs-steel-v1";
const ASSETS = [
  "/",
  "/index.html",
  "/products.html",
  "/calculator.html",
  "/quote.html",
  "/tracking.html",
  "/about.html",
  "/contact.html",
  "/blog.html",
  "/blog-tmt-grade.html",
  "/blog-hr-vs-cr.html",
  "/styles.css",
  "/manifest.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)).catch(() => null)
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});

