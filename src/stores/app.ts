import { english, type Language } from '@/scripts/languages'
import { usd, type Currency } from '@/scripts/currencies'
import { defineStore } from 'pinia'
import { useI18n } from 'vue-i18n'
import type { WritableComputedRef } from 'vue'

export const useAppStore = defineStore('app', {
  state: () => ({
    loggedIn: false,
    currency: usd,
    language: english,
  }),

  actions: {
    login() {
      this.loggedIn = true
    },
    logout() {
      this.loggedIn = false
    },
    setLanguage(language: Language, locale: WritableComputedRef<string, string>) {
      this.language = language
      localStorage.setItem('language', language.value)
      locale.value = language.value
    },

    setCurrency(currency: Currency) {
      this.currency = currency
      localStorage.setItem('currency', currency.value)
    },
  },
})
