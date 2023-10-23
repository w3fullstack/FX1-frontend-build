import VueLib from 'vue'
import merge from 'lodash.mergewith'
import * as Sentry from '@sentry/browser'
import { Dedupe, ExtraErrorData, ReportingObserver, RewriteFrames, Vue } from '@sentry/integrations'

import { Integrations as TracingIntegrations } from '@sentry/tracing'

export default function (ctx, inject) {
  /* eslint-disable object-curly-spacing, quote-props, quotes, key-spacing, comma-spacing */
  const config = {
    dsn:"https:\u002F\u002Fa4c6c32f6cf34fb186726dfa6aed16d2@o1262511.ingest.sentry.io\u002F6441517",
    environment:"Develop",
    release:"8d7a895dc7df49572a5cb8789fc90500934af057",
    tracesSampleRate:1
  }

  const runtimeConfigKey = "sentry"
  if (ctx.$config && runtimeConfigKey && ctx.$config[runtimeConfigKey]) {
    merge(config, ctx.$config[runtimeConfigKey].config, ctx.$config[runtimeConfigKey].clientConfig)
  }

  config.integrations = [
    new Dedupe(),
    new ExtraErrorData(),
    new ReportingObserver(),
    new RewriteFrames(),
    new Vue({ Vue: VueLib, ...{"attachProps":true,"logErrors":false,"tracing":true,"tracingOptions":{"hooks":["mount","update"],"timeout":2000,"trackComponents":true}}})
  ]

    config.integrations.push(new TracingIntegrations.BrowserTracing({}))

  /* eslint-enable object-curly-spacing, quote-props, quotes, key-spacing, comma-spacing */
  Sentry.init(config)

  inject('sentry', Sentry)
  ctx.$sentry = Sentry
}
