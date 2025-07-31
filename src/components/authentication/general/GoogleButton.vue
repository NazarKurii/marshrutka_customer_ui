<template>
  <button
    type="button"
    @click="signInWithGoogle"
    class="flex w-full bg relative rounded-xl justify-center h-[60px] sm:h-[55px] items-center transition-all duration-200 cursor-pointer"
  >
    <img
      src="/public/google.webp"
      alt="google"
      class="size-[40px] left-[6px] top-[75.px] bg-white p-[3px] rounded-full absolute"
    />
    <p class="text-white text-lg ml-[40px] sm:mx-auto">
      {{ getName() }}
    </p>
  </button>
</template>

<script setup lang="ts">
import { Problem } from '@/scripts/errors'
import axios from 'axios'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const props = defineProps<{
  type: string
}>()

function getName(): string {
  const { t } = useI18n()
  if (props.type == 'login') {
    return t('authentication.login.google')
  } else if (props.type == 'singup') {
    return t('authentication.singup.google')
  }
  return 'error'
}

import { googleSdkLoaded } from 'vue3-google-login'

const clientId = '953257087625-dm82cn9b20a19526g33cmu1di1q34nju.apps.googleusercontent.com'
const router = useRouter()
const signInWithGoogle = async () => {
  try {
    googleSdkLoaded((google) => {
      if (!google?.accounts?.oauth2?.initCodeClient) {
        console.error('Google Identity Services SDK not loaded')
        return
      }

      google.accounts.oauth2
        .initCodeClient({
          client_id: clientId,
          scope: 'email profile openid',
          callback: async (response) => {
            if (response) {
              try {
                const { data }: { data: { token: string } } = await axios.post('/googleAuth', {
                  code: response.code,
                })
              } catch (error) {
                const err = new Problem(error)
              }
            }
          },
        })
        .requestCode()
    })
  } catch (error) {
    console.error('Error during Google Sign-In:', error)
  }
}
</script>

<style scoped>
.bg {
  background: #1668e3;
}

.bg:hover {
  background: #0d4eaf;
}
</style>
