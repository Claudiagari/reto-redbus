"use strict";var precacheConfig=[["/reto-redbus/index.html","ade9d245be9ffb595f8e9a149bec67e5"],["/reto-redbus/static/css/main.f32b63ac.css","b4c70b5fe670089a845834e4b662fb11"],["/reto-redbus/static/js/main.aef81b9e.js","d8bcc8e3e1c923f02728d4bba9d7a635"],["/reto-redbus/static/media/bcp.9714800d.png","9714800d569fc7026a3e908aced860b0"],["/reto-redbus/static/media/clock.039e2d98.png","039e2d98b92c83042dad92a9ea44e412"],["/reto-redbus/static/media/full-carga.671e7fc5.jpg","671e7fc5829893c0d059c655de1a2bfe"],["/reto-redbus/static/media/icomoon.088d4f7f.svg","088d4f7fe5317b408bd281360184a85f"],["/reto-redbus/static/media/icomoon.36f73e4d.eot","36f73e4d14b91b7ce56e67493a9d322e"],["/reto-redbus/static/media/icomoon.6041d733.woff","6041d733cea5e9188e7cc10f820218a6"],["/reto-redbus/static/media/icomoon.c3823b18.ttf","c3823b18914e6ffba631a109b036275d"],["/reto-redbus/static/media/interbank2.5c887f61.jpg","5c887f6112e7bd1b88440ad0b9a8cc3f"],["/reto-redbus/static/media/kasnet.c41aca90.png","c41aca90b47306a2a84802528fc310e3"],["/reto-redbus/static/media/western-union.3bfaebfc.png","3bfaebfcb99ed0dcc3625b285e427396"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var r=new URL(e);return"/"===r.pathname.slice(-1)&&(r.pathname+=t),r.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,r,n){var a=new URL(e);return n&&a.pathname.match(n)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(r)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var r=new URL(t).pathname;return e.some(function(e){return r.match(e)})},stripIgnoredUrlParameters=function(e,r){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return r.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],r=e[1],n=new URL(t,self.location),a=createCacheKey(n,hashParamName,r,/\.\w{8}\./);return[n.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(r){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!r.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var r=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!r.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,r=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(r))||(r=addDirectoryIndex(r,n),e=urlsToCacheKeys.has(r));var a="/reto-redbus/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(r=new URL(a,self.location).toString(),e=urlsToCacheKeys.has(r)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(r)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});