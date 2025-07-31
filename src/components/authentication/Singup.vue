<template>
  <p class="text-3xl text-white mt-[40px] font-bold text-center">
    {{ t('authentication.singup.message') }}
  </p>
  <p class="text-gray-500 text-lg mt-[10px] text-center">{{ t('authentication.description') }}</p>
  <RouterView />
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style lang="scss" scoped></style>
