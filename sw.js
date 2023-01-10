self.addEventListener("install", e => {
    console.log("Install!");
    e.waitUntil(
        caches.open('static').then( cache => {
            return cache.addAll([
                './',
                './css/styles.css',
				'./assets/img/me.jpg',
				'./assets/img/me2.jpg',
				'./images/logo32.png',
                './images/logo192.png',
				'./images/logo512.png',
                './js/index.js'
            ])
        })
    );
});

self.addEventListener("fetch", e => {
    //console.log(`Intercepting fetch ${e.request.url}`);
    e.respondWith( 
        caches.match(e.request).then( response => {
            return response || fetch(e.request);
        })
    );
});