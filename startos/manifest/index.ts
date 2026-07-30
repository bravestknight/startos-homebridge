import { setupManifest } from '@start9labs/start-sdk'
import { long, short } from './i18n'

export const manifest = setupManifest({
  id: 'homebridge',
  title: 'Homebridge',
  license: 'GPL-3.0-or-later',
  packageRepo: 'https://github.com/bravestknight/startos-homebridge',
  upstreamRepo: 'https://github.com/homebridge/homebridge',
  marketingUrl: 'https://homebridge.io/',
  donationUrl: 'https://github.com/homebridge/homebridge?sponsor=1',
  description: { short, long },
  volumes: ['main'],
  images: {
    homebridge: {
      source: { dockerTag: 'homebridge/homebridge:latest' },
      arch: ['x86_64', 'aarch64'],
    },
  },
  dependencies: {},
})
