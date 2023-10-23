import createApp from './app.js'

import authService from './service.auth.js'
import firestoreService from './service.firestore.js'
import storageService from './service.storage.js'
import messagingService from './service.messaging.js'
import analyticsService from './service.analytics.js'

const appConfig = {"apiKey":"AIzaSyCFB3O8-QKkDwOq7gTNGa3GHX7YKimWUC8","authDomain":"fx1-development.firebaseapp.com","projectId":"fx1-development","storageBucket":"fx1-development.appspot.com","messagingSenderId":"24532261886","appId":"1:24532261886:web:2924c01844a78098127eaf","measurementId":"G-PTKDG9TC7B"}

export default async (ctx, inject) => {
  const { firebase, session } = await createApp(appConfig, ctx)

  let servicePromises = []

  if (process.server) {
    servicePromises = [
      authService(session, firebase, ctx, inject),
    firestoreService(session, firebase, ctx, inject),
    storageService(session, firebase, ctx, inject),

    ]
  }

  if (process.client) {
    servicePromises = [
      authService(session, firebase, ctx, inject),
      firestoreService(session, firebase, ctx, inject),
      storageService(session, firebase, ctx, inject),
      messagingService(session, firebase, ctx, inject),
      analyticsService(session, firebase, ctx, inject),

    ]
  }

  const [
    auth,
    firestore,
    storage,
    messaging,
    analytics
  ] = await Promise.all(servicePromises)

  const fire = {
    auth: auth,
    firestore: firestore,
    storage: storage,
    messaging: messaging,
    analytics: analytics
  }

    inject('fireModule', firebase)
    ctx.$fireModule = firebase

  inject('fire', fire)
  ctx.$fire = fire
}

function forceInject (ctx, inject, key, value) {
  inject(key, value)
  const injectKey = '$' + key
  ctx[injectKey] = value
  if (typeof window !== "undefined" && window.$nuxt) {
  // If clause makes sure it's only run when ready() is called in a component, not in a plugin.
    window.$nuxt.$options[injectKey] = value
  }
}