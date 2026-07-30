import { sdk } from './sdk'

// The full persistent /homebridge tree (configuration, plugins and pairing data)
// is included in every encrypted StartOS backup and restored before startup.
export const { createBackup, restoreInit } = sdk.setupBackups(async () =>
  sdk.Backups.ofVolumes('main'),
)
