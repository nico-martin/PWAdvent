import { skipWaiting, clientsClaim } from 'workbox-core';
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute, NavigationRoute } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';

skipWaiting();
clientsClaim();

registerRoute(
  new RegExp(/\.(?:png|gif|jpg|svg|ico|webp)$/),
  new CacheFirst({
    cacheName: 'image-cache',
  }),
  'GET'
);

// The precache routes for workbox-webpack-plugin
precacheAndRoute(self.__WB_MANIFEST);
const handler = createHandlerBoundToURL('/index-serve.html');
const navigationRoute = new NavigationRoute(handler);
registerRoute(navigationRoute);

self.addEventListener('push', event => {
  const payload = JSON.parse(event.data.text());
  self.registration.showNotification(payload.title, {
    body: payload.body, // content of the push notification
    badge: './assets/static/notification-snowflake.png',
    icon: './assets/static/notification-badge.png',
    data: {
      ...payload,
      origin: event.target.origin,
    },
  });
});

self.addEventListener('notificationclick', event => {
  const notification = event.notification;
  const url = notification.data.origin + notification.data.url; // get the url passed from the app
  const eventWaitUntilFullfilled = self.clients.matchAll().then(clients => {
    let windowToFocus = false;
    clients.forEach(windowClient => {
      if (windowClient.url === url) {
        windowClient.focus(); // focus if url match
        windowToFocus = windowClient;
      }
    });

    if (!windowToFocus) {
      self.clients.openWindow(notification.data.url);
    }

    return notification.close();
  });
  event.waitUntil(eventWaitUntilFullfilled);
});
