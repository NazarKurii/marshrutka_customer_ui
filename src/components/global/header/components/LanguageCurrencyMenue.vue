<template>
  <div
    ref="dropdownRef"
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
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app'
import { onMounted, onUnmounted, ref, watch, type Ref } from 'vue'
import LanguageCurrencyMenueButton from './LanguageCurrencyMenueButton.vue'
import LanguageMenue from './LanguageMenue.vue'
import { useI18n } from 'vue-i18n'
import CurrencyMenue from './CurrencyMenue.vue'

const props = defineProps<{
  active: boolean
}>()

const app = useAppStore()
const menue = ref('Language')
const emit = defineEmits(['close'])
const { t } = useI18n()

const dropdownRef = ref<HTMLElement | null>(null)
let allowClose = ref(false)

function handleClickOutside(event: MouseEvent) {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node) && allowClose.value) {
    emit('close')
  }
  allowClose.value = !allowClose.value
}

onMounted(() => {
  window.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped></style>
