import { useAppStore } from '@/stores/app'
import { useRouter, type Router } from 'vue-router'
import { getSavedCurrency } from './currencies'
import { getSavedLanguage } from './languages'
import { useI18n } from 'vue-i18n'
import { useResolutionStore } from '@/stores/resolutionStore'

export function startApp(router: Router) {
  router.push({ name: 'connections' })
  const app = useAppStore()
  app.currency = getSavedCurrency()
  app.language = getSavedLanguage()
  useResolutionStore().init()
}
