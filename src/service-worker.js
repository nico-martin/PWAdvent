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
//precacheAndRoute(self.__WB_MANIFEST);
//console.log(self.__WB_MANIFEST);

//const handler = createHandlerBoundToURL('/index.html');
//const navigationRoute = new NavigationRoute(handler);
//registerRoute(navigationRoute);

// listen to the install event
//self.addEventListener('install', event => console.log('SW installed', event));

const sendNotificationDoneMessage = (notification, action = 'clicked') =>
  self.clients.matchAll().then(clients => {
    // Send the event to the client(s)
    clients.forEach(client => {
      client.postMessage({
        type: 'notification-' + action,
        messageId: notification.tag,
      });
    });
  });

const getEndpoint = () => {
  return self.registration.pushManager
    .getSubscription()
    .then(function(subscription) {
      if (subscription) {
        return subscription.endpoint;
      }

      throw new Error('User not subscribed');
    });
};

self.addEventListener('push', event => {
  const payload = JSON.parse(event.data.text());
  self.registration.showNotification(payload.title, {
    body: payload.body, // content of the push notification
    badge: './assets/static/icon/pwa-logo.svg',
    icon: './assets/static/icon/pwa-logo.svg',
  });
});

// listen to a notification click
self.addEventListener('notificationclick', event =>
  self.clients.openWindow('/')
);

self.addEventListener('notificationclick', event => {
  self.clients.openWindow('/');
  const notification = event.notification;
  const url = notification.data.url; // get the url passed from the app
  const eventWaitUntilFullfilled = self.clients.matchAll().then(clients => {
    let windowToFocus = false;
    clients.forEach(windowClient => {
      if (windowClient.url === url) {
        windowClient.focus(); // focus if url match
        windowToFocus = windowClient;
      }
    });
    if (!windowToFocus) {
      self.clients
        .openWindow(url)
        .then(windowClient => (windowClient ? windowClient.focus() : null));
    }
    notification.close();
    return sendNotificationDoneMessage(notification);
  });
  event.waitUntil(eventWaitUntilFullfilled);
});

// listen to the notification close
self.addEventListener('notificationclose', event => {
  event.waitUntil(sendNotificationDoneMessage(event.notification, 'closed'));
});
