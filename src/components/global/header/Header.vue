<template>
  <div class="flex w-full h-[65px] py-[5px] items-center justify-between">
    <div>
      <Logo />
    </div>
    <div class="flex gap-[10px]">
      <Support />
      <LanguageCurrency />
    </div>
  </div>
</template>

<script setup lang="ts">
import LanguageCurrency from './components/LanguageCurrency.vue'
import Logo from './components/Logo.vue'
import Support from './components/Support.vue'
</script>

<style scoped></style>
