<template>
  <GoBack />
  <div class="fixed top-[13px] right-[20px]">
    <LanguageCurrency />
  </div>
  <div class="flex flex-col gap-[3-px] m-auto">
    <p class="text-white text-2xl">{{ t('internalServerError') }}</p>

    <div class="container mx-auto">
      <div class="cloud front">
        <span class="left-front"></span>
        <span class="right-front"></span>
      </div>
      <span class="sun sunshine"></span>
      <span class="sun"></span>
      <div class="cloud back">
        <span class="left-back"></span>
        <span class="right-back"></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import GoBack from '@/components/global/go_back/GoBack.vue'
import LanguageCurrency from '@/components/global/header/components/LanguageCurrency.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
/* From Uiverse.io by zanina-yassine */
.container {
  width: 250px;
  height: 250px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cloud {
  width: 250px;
}

.front {
  padding-top: 45px;
  margin-left: 25px;
  display: inline;
  position: absolute;
  z-index: 11;
  animation: clouds 8s infinite;
  animation-timing-function: ease-in-out;
}

.back {
  margin-top: -30px;
  margin-left: 150px;
  z-index: 12;
  animation: clouds 12s infinite;
  animation-timing-function: ease-in-out;
}

.right-front {
  width: 45px;
  height: 45px;
  border-radius: 50% 50% 50% 0%;
  background-color: #4c9beb;
  display: inline-block;
  margin-left: -25px;
  z-index: 5;
}

.left-front {
  width: 65px;
  height: 65px;
  border-radius: 50% 50% 0% 50%;
  background-color: #4c9beb;
  display: inline-block;
  z-index: 5;
}

.right-back {
  width: 50px;
  height: 50px;
  border-radius: 50% 50% 50% 0%;
  background-color: #4c9beb;
  display: inline-block;
  margin-left: -20px;
  z-index: 5;
}

.left-back {
  width: 30px;
  height: 30px;
  border-radius: 50% 50% 0% 50%;
  background-color: #4c9beb;
  display: inline-block;
  z-index: 5;
}

.sun {
  width: 120px;
  height: 120px;
  background: -webkit-linear-gradient(to right, #fcbb04, #fffc00);
  background: linear-gradient(to right, #fcbb04, #fffc00);
  border-radius: 60px;
  display: inline;
  position: absolute;
}

.sunshine {
  animation: sunshines 2s infinite;
}

@keyframes sunshines {
  0% {
    transform: scale(1);
    opacity: 0.6;
  }

  100% {
    transform: scale(1.4);
    opacity: 0;
  }
}

@keyframes clouds {
  0% {
    transform: translateX(15px);
  }

  50% {
    transform: translateX(0px);
  }

  100% {
    transform: translateX(15px);
  }
}
</style>
