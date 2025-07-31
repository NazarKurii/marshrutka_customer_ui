<template>
  <GoBack />
  <div class="fixed top-[20px] right-[20px] z-10">
    <LanguageCurrency />
  </div>
  <div class="flex py-[20px] max-w-[550px] w-full items-center flex-col px-[10px]">
    <Logo />

    <RouterView></RouterView>
    <div class="flex flex-col gap-[5px] items-center">
      <p class="text-gray-400 text-center">{{ t('authentication.legalMessage') }}</p>
      <a
        class="text-blue-500 underline hover:text-blue-600 cursor-pointer"
        @click="router.push({ name: 'legalPolicy' })"
      >
        {{ t('authentication.termsLink') }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import GoBack from '@/components/global/go_back/GoBack.vue'
import LanguageCurrency from '@/components/global/header/components/LanguageCurrency.vue'
import Logo from '@/components/global/header/components/Logo.vue'
import LoginForm from '@/components/authentication/LoginForm.vue'
import SingUpForm from '@/components/authentication/singup/SingUpForm.vue'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { appUrl } from '@/scripts/app'
import { useRouter } from 'vue-router'

const { t } = useI18n()

const formType = ref('login')
const router = useRouter()

function changeForm() {
  if (formType.value == 'login') {
    formType.value = 'singup'
  } else {
    formType.value = 'login'
  }
}
</script>

<style scoped></style>
