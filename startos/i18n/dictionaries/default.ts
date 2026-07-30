export const DEFAULT_LANG = 'en_US'

const dict = {
  'Starting Homebridge': 0,
  'Homebridge UI': 1,
  'The Homebridge web interface is ready': 2,
  'The Homebridge web interface is not ready': 3,
  'Manage Homebridge, plugins, and accessories': 4,
} as const

export type I18nKey = keyof typeof dict
export type LangDict = Record<(typeof dict)[I18nKey], string>
export default dict
