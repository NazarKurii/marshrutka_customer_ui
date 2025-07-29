<template>
  <form
    @submit.prevent="sinup"
    class="flex flex-col py-[20px] mt-[40px] max-w-[470px] w-full items-center gap-[20px]"
  >
    <GoogleButton type="singup" />
    <p class="text-white text-lg">{{ t('authentication.or') }}</p>
    <div class="flex gap-[20px]">
      <Input
        :name="t('authentication.singup.firstName')"
        type="text"
        @model="
          (firstName: string) => {
            user.firstName = firstName
          }
        "
      />
      <Input
        :name="t('authentication.singup.lastName')"
        type="text"
        @model="
          (lastName: string) => {
            user.lastName = lastName
          }
        "
      />
    </div>
    <div class="flex flex-col sm:flex-row gap-[20px] w-full">
      <PhoneNumberInput
        @model="
          (phoneNumber: string) => {
            user.phoneNumber = phoneNumber
          }
        "
      />
      <input
        v-model="user.dateOfBirth"
        type="date"
        class="flex input bg-zinc-800 h-[45px] mx-auto sm:mx-0"
      />
    </div>
    <Input
      image-path="/public/email.svg"
      name="Email"
      type="email"
      @model="
        (email: string) => {
          user.email = email
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
          user.password = password
        }
      "
    />

    <ActiveButton :active="isDataValid" type="submit" :name="t('authentication.singup.name')" />
    <div class="flex gap-[5px]">
      <p class="text-white">{{ t('authentication.singup.changeFormMessage') }}</p>
      <a
        class="text-blue-500 underline hover:text-blue-600 cursor-pointer"
        @click="router.push({ name: 'login' })"
        >{{ t('authentication.login.name') }}</a
      >
    </div>
  </form>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import GoogleButton from './general/GoogleButton.vue'
import Input from '../global/utils/Input.vue'
import ActiveButton from '../global/utils/ActiveButton.vue'
import { computed, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { type NewUser, newUserTemplate } from '@/scripts/authentication'
import PhoneNumberInput from './singup_form/PhoneNumberInput.vue'
defineProps<{
  changeForm: () => void
}>()

const { t } = useI18n()
const router = useRouter()

const user = reactive<NewUser>(newUserTemplate)

const isDataValid = computed(() => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/

  const emailValid = emailRegex.test(user.email)
  const passwordValid = passwordRegex.test(user.password)
  const firstNameValid = user.firstName.trim().length > 0
  const lastNameValid = user.lastName.trim().length > 0
  const dateOfBirthValid = user.dateOfBirth.trim().length > 0
  const phoneNumberValid = user.phoneNumber.trim().length > 0

  return (
    emailValid &&
    passwordValid &&
    firstNameValid &&
    lastNameValid &&
    dateOfBirthValid &&
    phoneNumberValid
  )
})

function sinup() {
  if (isDataValid) {
    return
  }
}
</script>

<style scoped>
.input {
  width: 150px;
  height: 45px;
  line-height: 30px;
  padding-left: 8px;
  padding-right: 8px;

  border: 2px solid transparent;
  border-radius: 10px;
  outline: none;
  color: white;
  transition: 0.5s ease;
}

.input:focus,
input:hover {
  outline: none;
  border-color: rgba(129, 140, 248);

  box-shadow: 0 0 0 5px rgb(129 140 248 / 30%);
}
</style>
