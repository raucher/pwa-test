importScripts("/precache-manifest.3e0f216a84a4faa1bc65b4bf54f75ebf.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.__precacheManifest = [].concat(self.__precacheManifest || [])

workbox.setConfig({ debug: true })

workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

self.addEventListener('push', event => {
  // console.log(event)
  // console.log(event.data.text())

  console.log(event.data.text())

  const notificationOptions = {
    body: event.data.text(),
    icon: '/img/icons/apple-touch-icon-76x76.png'
    // tag: 'sample-push-message'
  }

  event.waitUntil(
    self.registration.showNotification(
      'Sample Push Notification',
      notificationOptions
    )
  )
})

