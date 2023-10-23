import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1bd06564 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _01f1c4a4 = () => interopDefault(import('..\\pages\\account.vue' /* webpackChunkName: "pages/account" */))
const _d7a4ba48 = () => interopDefault(import('..\\pages\\account\\linked-accounts.vue' /* webpackChunkName: "pages/account/linked-accounts" */))
const _77e17851 = () => interopDefault(import('..\\pages\\account\\settings.vue' /* webpackChunkName: "pages/account/settings" */))
const _6a1c3037 = () => interopDefault(import('..\\pages\\boss-membership.vue' /* webpackChunkName: "pages/boss-membership" */))
const _6452f3be = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _d4a2a54c = () => interopDefault(import('..\\pages\\create-new-password.vue' /* webpackChunkName: "pages/create-new-password" */))
const _5595c649 = () => interopDefault(import('..\\pages\\error.vue' /* webpackChunkName: "pages/error" */))
const _7510eb14 = () => interopDefault(import('..\\pages\\explore.vue' /* webpackChunkName: "pages/explore" */))
const _7b39a086 = () => interopDefault(import('..\\pages\\forgot-password.vue' /* webpackChunkName: "pages/forgot-password" */))
const _a7a0fdd2 = () => interopDefault(import('..\\pages\\jackpot.vue' /* webpackChunkName: "pages/jackpot" */))
const _47cf005f = () => interopDefault(import('..\\pages\\leagues-and-clubs.vue' /* webpackChunkName: "pages/leagues-and-clubs" */))
const _f104911e = () => interopDefault(import('..\\pages\\locker-room\\index.vue' /* webpackChunkName: "pages/locker-room/index" */))
const _192f25ea = () => interopDefault(import('..\\pages\\mentions\\index.vue' /* webpackChunkName: "pages/mentions/index" */))
const _57d25b9b = () => interopDefault(import('..\\pages\\messages.vue' /* webpackChunkName: "pages/messages" */))
const _9eb0bdc2 = () => interopDefault(import('..\\pages\\messages\\_channel.vue' /* webpackChunkName: "pages/messages/_channel" */))
const _25029189 = () => interopDefault(import('..\\pages\\privacy.vue' /* webpackChunkName: "pages/privacy" */))
const _69949e9e = () => interopDefault(import('..\\pages\\signin.vue' /* webpackChunkName: "pages/signin" */))
const _4067f1b2 = () => interopDefault(import('..\\pages\\signup.vue' /* webpackChunkName: "pages/signup" */))
const _2c8f990d = () => interopDefault(import('..\\pages\\terms-conditions.vue' /* webpackChunkName: "pages/terms-conditions" */))
const _4a604dba = () => interopDefault(import('..\\pages\\token.vue' /* webpackChunkName: "pages/token" */))
const _273f7db0 = () => interopDefault(import('..\\pages\\user\\index.vue' /* webpackChunkName: "pages/user/index" */))
const _c8963560 = () => interopDefault(import('..\\pages\\locker-room\\explore\\index.vue' /* webpackChunkName: "pages/locker-room/explore/index" */))
const _85ae23ba = () => interopDefault(import('..\\pages\\user\\invite.vue' /* webpackChunkName: "pages/user/invite" */))
const _88d2a38e = () => interopDefault(import('..\\pages\\locker-room\\_slug\\index.vue' /* webpackChunkName: "pages/locker-room/_slug/index" */))
const _00b36d20 = () => interopDefault(import('..\\pages\\mentions\\_id\\index.vue' /* webpackChunkName: "pages/mentions/_id/index" */))
const _e60f64ee = () => interopDefault(import('..\\pages\\locker-room\\_slug\\live\\_channel\\index.vue' /* webpackChunkName: "pages/locker-room/_slug/live/_channel/index" */))
const _6dec1496 = () => interopDefault(import('..\\pages\\locker-room\\_slug\\_channel\\index.vue' /* webpackChunkName: "pages/locker-room/_slug/_channel/index" */))
const _11cfa813 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _84d5b200 = () => interopDefault(import('..\\pages\\_Sport\\_leagueCode\\_game\\_slug.vue' /* webpackChunkName: "pages/_Sport/_leagueCode/_game/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _1bd06564,
    name: "about"
  }, {
    path: "/account",
    component: _01f1c4a4,
    name: "account",
    children: [{
      path: "linked-accounts",
      component: _d7a4ba48,
      name: "account-linked-accounts"
    }, {
      path: "settings",
      component: _77e17851,
      name: "account-settings"
    }]
  }, {
    path: "/boss-membership",
    component: _6a1c3037,
    name: "boss-membership"
  }, {
    path: "/contact",
    component: _6452f3be,
    name: "contact"
  }, {
    path: "/create-new-password",
    component: _d4a2a54c,
    name: "create-new-password"
  }, {
    path: "/error",
    component: _5595c649,
    name: "error"
  }, {
    path: "/explore",
    component: _7510eb14,
    name: "explore"
  }, {
    path: "/forgot-password",
    component: _7b39a086,
    name: "forgot-password"
  }, {
    path: "/jackpot",
    component: _a7a0fdd2,
    name: "jackpot"
  }, {
    path: "/leagues-and-clubs",
    component: _47cf005f,
    name: "leagues-and-clubs"
  }, {
    path: "/locker-room",
    component: _f104911e,
    name: "locker-room"
  }, {
    path: "/mentions",
    component: _192f25ea,
    name: "mentions"
  }, {
    path: "/messages",
    component: _57d25b9b,
    name: "messages",
    children: [{
      path: ":channel?",
      component: _9eb0bdc2,
      name: "messages-channel"
    }]
  }, {
    path: "/privacy",
    component: _25029189,
    name: "privacy"
  }, {
    path: "/signin",
    component: _69949e9e,
    name: "signin"
  }, {
    path: "/signup",
    component: _4067f1b2,
    name: "signup"
  }, {
    path: "/terms-conditions",
    component: _2c8f990d,
    name: "terms-conditions"
  }, {
    path: "/token",
    component: _4a604dba,
    name: "token"
  }, {
    path: "/user",
    component: _273f7db0,
    name: "user"
  }, {
    path: "/locker-room/explore",
    component: _c8963560,
    name: "locker-room-explore"
  }, {
    path: "/user/invite",
    component: _85ae23ba,
    name: "user-invite"
  }, {
    path: "/locker-room/:slug",
    component: _88d2a38e,
    name: "locker-room-slug"
  }, {
    path: "/mentions/:id",
    component: _00b36d20,
    name: "mentions-id"
  }, {
    path: "/locker-room/:slug?/live/:channel",
    component: _e60f64ee,
    name: "locker-room-slug-live-channel"
  }, {
    path: "/locker-room/:slug?/:channel",
    component: _6dec1496,
    name: "locker-room-slug-channel"
  }, {
    path: "/",
    component: _11cfa813,
    name: "index"
  }, {
    path: "/:Sport/:leagueCode?/:game?/:slug?",
    component: _84d5b200,
    name: "Sport-leagueCode-game-slug"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
