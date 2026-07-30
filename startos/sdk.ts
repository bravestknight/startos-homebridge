import { StartSdk } from '@start9labs/start-sdk'
import { manifest } from './manifest'

/** Plumbing: the package-specific SDK used by all StartOS modules. */
export const sdk = StartSdk.of().withManifest(manifest).build(true)
