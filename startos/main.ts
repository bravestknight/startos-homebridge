import { i18n } from './i18n'
import { sdk } from './sdk'
import { uiPort } from './utils'

export const main = sdk.setupMain(async ({ effects }) => {
  console.info(i18n('Starting Homebridge'))

  return sdk.Daemons.of(effects).addDaemon('primary', {
    subcontainer: sdk.SubContainer.of(
      effects,
      { imageId: 'homebridge' },
      sdk.Mounts.of().mountVolume({
        volumeId: 'main',
        subpath: null,
        mountpoint: '/homebridge',
        readonly: false,
      }),
      'homebridge-sub',
    ),
    // The official image owns its startup sequence through its ENTRYPOINT.
    // runAsInit keeps its bundled init/supervisor in the PID 1 position it expects.
    exec: { command: sdk.useEntrypoint(), runAsInit: true },
    ready: {
      display: i18n('Homebridge UI'),
      fn: () =>
        sdk.healthCheck.checkPortListening(effects, uiPort, {
          successMessage: i18n('The Homebridge web interface is ready'),
          errorMessage: i18n('The Homebridge web interface is not ready'),
        }),
      gracePeriod: 300_000,
    },
    requires: [],
  })
})
