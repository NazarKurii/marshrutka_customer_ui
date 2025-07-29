<template>
  <div class="flex flex-col max-w-[1530px] w-full">
    <Header />
    <router-view></router-view>
  </div>
  <Footer />
</template>

<script setup lang="ts">
import Footer from '@/components/global/footer/Footer.vue'
import Header from '@/components/global/header/Header.vue'
</script>

<style scoped></style>
