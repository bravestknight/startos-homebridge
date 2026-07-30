import { i18n } from './i18n'
import { sdk } from './sdk'
import { hapPort, uiPort } from './utils'

export const setInterfaces = sdk.setupInterfaces(async ({ effects }) => {
  const receipts = []

  const uiMulti = sdk.MultiHost.of(effects, 'ui-multi')
  const uiOrigin = await uiMulti.bindPort(uiPort, {
    protocol: 'http',
    preferredExternalPort: uiPort,
  })

  const ui = sdk.createInterface(effects, {
    name: i18n('Homebridge UI'),
    id: 'ui',
    description: i18n('Manage Homebridge, plugins, and accessories'),
    type: 'ui',
    masked: false,
    schemeOverride: null,
    username: null,
    path: '',
    query: {},
  })
  receipts.push(await uiOrigin.export([ui]))

  const hapMulti = sdk.MultiHost.of(effects, 'hap')
  const hapOrigin = await hapMulti.bindPort(hapPort, {
    protocol: null,
    addSsl: null,
    preferredExternalPort: hapPort,
    secure: { ssl: false },
  })

  const hap = sdk.createInterface(effects, {
    name: 'HomeKit Pairing',
    id: 'hap',
    description: 'HomeKit Accessory Protocol connection for pairing',
    type: 'p2p',
    masked: true,
    schemeOverride: null,
    username: null,
    path: '',
    query: {},
  })
  receipts.push(await hapOrigin.export([hap]))

  return receipts
})
