<template>
  <div
    @click="active = !active"
    :class="{
      'bg-white/10': active,
    }"
    class="flex gap-[10px] relative hover:bg-white/10 rounded-xl p-[10px] transition-all duration-200 select-none cursor-pointer"
  >
    <img src="/public/language-currency.svg" alt="language&currency" class="size-[25px]" />
    <p v-if="resolution.width > 470" class="text-white font-bold">
      {{ app.currency.abbreviation + ' · ' + app.language.abbreviation }}
    </p>
    <div
      @click.stop
      v-if="active"
      class="flex flex-col p-[17px] gap-[20px] rounded-2xl bg-zinc-800 absolute top-[53px] right-[-10px]"
    >
      <div class="flex p-[5px] rounded-2xl bg-zinc-700 relative">
        <div
          :class="{
            'ml-[140px]': menue == 'Currency',
          }"
          class="bg-zinc-500/60 w-[140px] h-[60px] absolute rounded-xl z-0 transition-all duration-200"
        ></div>
        <LanguageCurrencyMenueButton
          class="z-10"
          :on-click="
            () => {
              menue = 'Language'
            }
          "
          :name="t('navbar.languageCurrency.languageButton')"
          :value="app.language.abbreviation"
        />
        <LanguageCurrencyMenueButton
          class="z-10"
          :on-click="
            () => {
              menue = 'Currency'
            }
          "
          :name="t('navbar.languageCurrency.currencyButton')"
          :value="app.currency.abbreviation"
        />
      </div>
      <LanguageMenue v-if="menue == 'Language'" />
      <CurrencyMenue v-if="menue == 'Currency'" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app'
import { ref, watch } from 'vue'
import LanguageCurrencyMenueButton from './LanguageCurrencyMenueButton.vue'
import LanguageMenue from './LanguageMenue.vue'
import { useI18n } from 'vue-i18n'
import CurrencyMenue from './CurrencyMenue.vue'
import { useResolutionStore } from '@/stores/resolutionStore'

const app = useAppStore()
const active = ref(false)
const menue = ref('Language')

const { t } = useI18n()

const resolution = useResolutionStore()
</script>

<style scoped></style>
