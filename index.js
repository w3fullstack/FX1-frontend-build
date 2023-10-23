import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '..\\layouts\\error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_sentryserver_3759d2b1 from 'nuxt_plugin_sentryserver_3759d2b1' // Source: .\\sentry.server.js (mode: 'server')
import nuxt_plugin_sentryclient_5cbf3dae from 'nuxt_plugin_sentryclient_5cbf3dae' // Source: .\\sentry.client.js (mode: 'client')
import nuxt_plugin_vuesocialsharingplugin_0fa15b34 from 'nuxt_plugin_vuesocialsharingplugin_0fa15b34' // Source: .\\vue-social-sharing-plugin.js (mode: 'all')
import nuxt_plugin_image_4b596630 from 'nuxt_plugin_image_4b596630' // Source: .\\image.js (mode: 'all')
import nuxt_plugin_nuxtsocketio_37ac3215 from 'nuxt_plugin_nuxtsocketio_37ac3215' // Source: .\\nuxt-socket-io.js (mode: 'all')
import nuxt_plugin_toast_8906c6c8 from 'nuxt_plugin_toast_8906c6c8' // Source: .\\toast.js (mode: 'client')
import nuxt_plugin_serviceauthssrserver_8c47e596 from 'nuxt_plugin_serviceauthssrserver_8c47e596' // Source: .\\firebase\\service.auth.ssr-server.js (mode: 'server')
import nuxt_plugin_index_2a21f524 from 'nuxt_plugin_index_2a21f524' // Source: .\\firebase\\index.js (mode: 'all')
import nuxt_plugin_serviceauthinitialize_09f63fc3 from 'nuxt_plugin_serviceauthinitialize_09f63fc3' // Source: .\\firebase\\service.auth.initialize.js (mode: 'all')
import nuxt_plugin_pluginclient_8d2d2f00 from 'nuxt_plugin_pluginclient_8d2d2f00' // Source: .\\content\\plugin.client.js (mode: 'client')
import nuxt_plugin_pluginserver_1f22da08 from 'nuxt_plugin_pluginserver_1f22da08' // Source: .\\content\\plugin.server.js (mode: 'server')
import nuxt_plugin_workbox_616f046e from 'nuxt_plugin_workbox_616f046e' // Source: .\\workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_68219949 from 'nuxt_plugin_metaplugin_68219949' // Source: .\\pwa\\meta.plugin.js (mode: 'all')
import nuxt_plugin_iconplugin_6cc93ebd from 'nuxt_plugin_iconplugin_6cc93ebd' // Source: .\\pwa\\icon.plugin.js (mode: 'all')
import nuxt_plugin_axios_21676026 from 'nuxt_plugin_axios_21676026' // Source: .\\axios.js (mode: 'all')
import nuxt_plugin_buefy_9da96184 from 'nuxt_plugin_buefy_9da96184' // Source: .\\buefy.js (mode: 'all')
import nuxt_plugin_graphql_134fd29a from 'nuxt_plugin_graphql_134fd29a' // Source: ..\\plugins\\graphql.ts (mode: 'all')
import nuxt_plugin_app_784ba9a8 from 'nuxt_plugin_app_784ba9a8' // Source: ..\\plugins\\app.js (mode: 'all')
import nuxt_plugin_appclient_40273b09 from 'nuxt_plugin_appclient_40273b09' // Source: ..\\plugins\\app.client.js (mode: 'client')
import nuxt_plugin_facebookevents_7f903ded from 'nuxt_plugin_facebookevents_7f903ded' // Source: ..\\plugins\\facebook-events.js (mode: 'all')
import nuxt_plugin_featureflags_54edd7b3 from 'nuxt_plugin_featureflags_54edd7b3' // Source: ..\\plugins\\feature-flags.ts (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"FX1","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0"},{"hid":"description","name":"description","content":"Show the world who you support"},{"name":"format-detection","content":"telephone=no"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ficon.png"},{"type":"text\u002Fcss","href":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002F@mdi\u002Ffont@5.8.55\u002Fcss\u002Fmaterialdesignicons.min.css","rel":"preload","as":"style","onload":"this.rel='stylesheet'"}],"style":[],"script":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (process.server && typeof nuxt_plugin_sentryserver_3759d2b1 === 'function') {
    await nuxt_plugin_sentryserver_3759d2b1(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_sentryclient_5cbf3dae === 'function') {
    await nuxt_plugin_sentryclient_5cbf3dae(app.context, inject)
  }

  if (typeof nuxt_plugin_vuesocialsharingplugin_0fa15b34 === 'function') {
    await nuxt_plugin_vuesocialsharingplugin_0fa15b34(app.context, inject)
  }

  if (typeof nuxt_plugin_image_4b596630 === 'function') {
    await nuxt_plugin_image_4b596630(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxtsocketio_37ac3215 === 'function') {
    await nuxt_plugin_nuxtsocketio_37ac3215(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_toast_8906c6c8 === 'function') {
    await nuxt_plugin_toast_8906c6c8(app.context, inject)
  }

  if (process.server && typeof nuxt_plugin_serviceauthssrserver_8c47e596 === 'function') {
    await nuxt_plugin_serviceauthssrserver_8c47e596(app.context, inject)
  }

  if (typeof nuxt_plugin_index_2a21f524 === 'function') {
    await nuxt_plugin_index_2a21f524(app.context, inject)
  }

  if (typeof nuxt_plugin_serviceauthinitialize_09f63fc3 === 'function') {
    await nuxt_plugin_serviceauthinitialize_09f63fc3(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_pluginclient_8d2d2f00 === 'function') {
    await nuxt_plugin_pluginclient_8d2d2f00(app.context, inject)
  }

  if (process.server && typeof nuxt_plugin_pluginserver_1f22da08 === 'function') {
    await nuxt_plugin_pluginserver_1f22da08(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_616f046e === 'function') {
    await nuxt_plugin_workbox_616f046e(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_68219949 === 'function') {
    await nuxt_plugin_metaplugin_68219949(app.context, inject)
  }

  if (typeof nuxt_plugin_iconplugin_6cc93ebd === 'function') {
    await nuxt_plugin_iconplugin_6cc93ebd(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_21676026 === 'function') {
    await nuxt_plugin_axios_21676026(app.context, inject)
  }

  if (typeof nuxt_plugin_buefy_9da96184 === 'function') {
    await nuxt_plugin_buefy_9da96184(app.context, inject)
  }

  if (typeof nuxt_plugin_graphql_134fd29a === 'function') {
    await nuxt_plugin_graphql_134fd29a(app.context, inject)
  }

  if (typeof nuxt_plugin_app_784ba9a8 === 'function') {
    await nuxt_plugin_app_784ba9a8(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_appclient_40273b09 === 'function') {
    await nuxt_plugin_appclient_40273b09(app.context, inject)
  }

  if (typeof nuxt_plugin_facebookevents_7f903ded === 'function') {
    await nuxt_plugin_facebookevents_7f903ded(app.context, inject)
  }

  if (typeof nuxt_plugin_featureflags_54edd7b3 === 'function') {
    await nuxt_plugin_featureflags_54edd7b3(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
