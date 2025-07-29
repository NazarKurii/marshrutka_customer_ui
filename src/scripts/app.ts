import { useAppStore } from '@/stores/app'
import { useRouter, type Router } from 'vue-router'
import { getSavedCurrency } from './currencies'
import { getSavedLanguage } from './languages'
import { useI18n } from 'vue-i18n'
import { useResolutionStore } from '@/stores/resolutionStore'

export function startApp(router: Router) {
  const app = useAppStore()
  app.currency = getSavedCurrency()
  app.language = getSavedLanguage()
  useResolutionStore().init()
}

export const appUrl = import.meta.env.APP_URL
