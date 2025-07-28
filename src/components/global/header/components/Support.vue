<template>
  <div
    @click="router.push({ name: 'support' })"
    class="flex gap-[10px] hover:bg-white/10 rounded-xl p-[10px] transition-all duration-200 select-none cursor-pointer"
  >
    <img src="/public/support.svg" alt="support" class="size-[25px]" />
    <p v-if="resolution.width > 470" class="text-white font-bold">{{ t('navbar.support') }}</p>
  </div>
</template>

<script setup lang="ts">
import { useResolutionStore } from '@/stores/resolutionStore'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
const router = useRouter()
const { t } = useI18n()

const resolution = useResolutionStore()
</script>

<style scoped></style>
