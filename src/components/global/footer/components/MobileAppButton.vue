<template>
  <div
    class="flex opacity-85 mx-auto xl:mx-0 transition-all duration-200 select-none cursor-pointer hover:opacity-100 gap-[20px] py-[10px] px-[15px] items-center bg-zinc-700 rounded-xl w-fit"
  >
    <div class="flex flex-col mb-[3px]">
      <p class="text-white text-lg font-bold">{{ t('footer.mobileApp.message') }}</p>
      <p class="text-gray-400">{{ t('footer.mobileApp.description') }}</p>
    </div>
    <img class="size-[70px]" src="/public/mobile-app.svg" alt="mobile-app" />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped></style>
