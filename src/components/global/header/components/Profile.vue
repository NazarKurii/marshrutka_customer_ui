<template>
  <div
    @click="route.name != 'profile' ? router.push({ name: 'profile' }) : ''"
    :class="{
      'bg-white/10': route.name == 'profile',
    }"
    class="flex gap-[10px] hover:bg-white/10 rounded-xl p-[10px] transition-all duration-200 select-none cursor-pointer"
  >
    <img src="/public/profile.svg" alt="profile" class="size-[25px]" />
    <p v-if="resolution.width > 470" class="text-white font-bold">{{ t('navbar.profile') }}</p>
  </div>
</template>

<script setup lang="ts">
import { useResolutionStore } from '@/stores/resolutionStore'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const { t } = useI18n()

const resolution = useResolutionStore()
const route = useRoute()
</script>

<style scoped></style>
