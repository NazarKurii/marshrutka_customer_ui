<template>
  <div
    class="flex flex-col w-full gap-[60px] max-w-[1600px] border-gray-500 border-t pt-[60px] pb-[35px] px-[10px] xl:px-0]"
  >
    <div
      class="flex flex-col xl:flex-row justify-between w-full xl:h-[90px] gap-[30px] xl:gap-[0px]"
    >
      <div
        class="flex flex-col md:flex-row gap-[35px] items-center justify-between w-full xl:w-[60%]"
      >
        <Logo />
        <FooterButton :name="t('footer.aboutButton')" route-name="about" />
        <FooterButton :name="t('footer.newsButton')" route-name="news" />
      </div>
      <MobileAppButton />
    </div>
    <p class="text-gray-300 text-lg mx-auto text-center">{{ t('footer.message') }}</p>
    <FooterButton :name="t('footer.legalDocuments')" route-name="news" />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Logo from './components/Logo.vue'
import FooterButton from './components/FooterButton.vue'
import MobileAppButton from './components/MobileAppButton.vue'

const { t } = useI18n()
</script>

<style scoped></style>
