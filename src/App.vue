<template>
  <div
    class="flex flex-col justify-between w-screen h-screen bg-neutral-900 items-center px-[30px] overflow-y-scroll"
  >
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import Header from './components/global/header/Header.vue'
import Footer from './components/global/footer/Footer.vue'
</script>

<style scoped></style>
