import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.0:0',
  releaseNotes: {
    en_US: 'Initial StartOS package for Homebridge.',
    es_ES: 'Paquete inicial de StartOS para Homebridge.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
