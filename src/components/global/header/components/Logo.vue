<template>
  <div
    @click="router.push({ name: 'connections' })"
    class="flex items-center cursor-pointer select-none opacity-90"
  >
    <img src="/public/logo.svg" alt="marshrutka" class="flex size-[40px]" />
    <p
      v-if="resolution.width > 550"
      class="text-white font-bold text-3xl font-stretch-50% hover:text-orange-500 trnasition-all duration-200"
    >
      Marshrutka
    </p>
  </div>
</template>

<script setup lang="ts">
import { useResolutionStore } from '@/stores/resolutionStore'
import { useRouter } from 'vue-router'

const router = useRouter()
const resolution = useResolutionStore()
</script>

<style scoped></style>
