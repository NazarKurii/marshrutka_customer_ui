<template>
  <p class="text-3xl text-white mt-[40px] font-bold text-center">
    {{ t('authentication.login.message') }}
  </p>
  <p class="text-gray-500 text-lg mt-[10px] text-center">{{ t('authentication.description') }}</p>
  <form
    @submit.prevent="login"
    class="flex flex-col py-[20px] mt-[40px] max-w-[470px] w-full items-center gap-[20px]"
  >
    <GoogleButton type="login" />
    <p class="text-white text-lg">{{ t('authentication.or') }}</p>
    <Input
      image-path="/public/email.svg"
      name="Email"
      type="email"
      @model="
        (email: string) => {
          credentials.email = email
        }
      "
    />
    <Input
      image-path="/public/password.svg"
      :is-password="true"
      :name="t('authentication.password')"
      type="password"
      @model="
        (password: string) => {
          credentials.password = password
        }
      "
    />

    <ActiveButton
      :is-loading="false"
      type="submit"
      :active="isDataValid"
      :name="t('authentication.login.name')"
    />
    <div class="flex gap-[5px]">
      <p class="text-white">{{ t('authentication.login.changeFormMessage') }}</p>
      <a
        class="text-blue-500 underline hover:text-blue-600 cursor-pointer"
        @click="router.push({ name: 'singup' })"
        >{{ t('authentication.singup.name') }}</a
      >
    </div>
  </form>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import GoogleButton from './general/GoogleButton.vue'
import Input from '../global/utils/Input.vue'
import ActiveButton from '../global/utils/ActiveButton.vue'
import { computed, reactive, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
defineProps<{
  changeForm: () => void
}>()

const { t } = useI18n()
const router = useRouter()

const credentials = reactive({
  password: '',
  email: '',
})

const isDataValid = computed(() => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  // Explanation: At least 6 characters, with at least one letter and one number

  const emailValid = emailRegex.test(credentials.email)

  return emailValid && credentials.password.length > 0
})

function login() {
  if (!isDataValid) {
    return
  }
}

watch(credentials, () => {
  console.log(credentials)
})
</script>

<style scoped></style>
