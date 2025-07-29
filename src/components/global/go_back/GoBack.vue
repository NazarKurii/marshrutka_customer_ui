<template>
  <div
    @click="router.back()"
    class="cursor-pointer fixed top-[20px] left-[20px]"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <img v-if="isHovered" class="h-[31px]" src="/public/arrow-back-orange.svg" alt="" />
    <img v-else class="h-[31px]" src="/public/arrow-back-white.svg" alt="" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const isHovered = ref(false)
const router = useRouter()
</script>

<style scoped></style>
