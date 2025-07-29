<template>
  <!-- From Uiverse.io by ozgeozkaraa01 -->
  <div class="group flex-col w-full">
    <img
    v-if="imagePath "
     :src="imagePath"
      class="icon"
    >
      <path
        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
        stroke-linejoin="round"
        stroke-linecap="round"
      ></path>
    </img>
    <input
    :class="{
      'pl-[3rem] pr-[15px]':imagePath,
      'px-[15px]':!imagePath

    }"
      v-model="model"
      class="input bg-zinc-800"
      :type="isPassword? showPassword?'text' :type:type"
      :placeholder="name"
      :autocomplete="'off'"
    />
    <div v-if="isPassword" class="flex gap-[15px] mr-auto ml-[20px] mt-[6px]">
      <div class="flex relative">
        <label for="cbx" class="cbx">
  <div class="checkmark">
  <input v-model="showPassword" type="checkbox" id="cbx">
  <div class="flip">
    <div class="front"></div>
      <div class="back">
        <svg viewBox="0 0 16 14" height="14" width="16">
          <path d="M2 8.5L6 12.5L14 1.5"></path>
        </svg>
      </div>
    </div>
  </div>
</label>
      </div>
      <h1 class="text-white tex-lgg mb-[1px]">{{ t("authentication.showPassword") }}</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n';

withDefaults(
  defineProps<{
    imagePath?: string
    name: string
    type: string
    isPassword?: boolean
  }>(),
  {
    imagePath: '',
    isPassword: false
  }
)

const model = ref('')
const showPassword = ref(false)

const emit = defineEmits(['model'])

watch(model, () => {
  emit('model', model.value)
})

const { t } = useI18n()
</script>

<style scoped>
/* From Uiverse.io by ozgeozkaraa01 */
.group {
  display: flex;
  line-height: 30px;
  align-items: center;
  position: relative;
  max-width: 100%;
}

.input {
  width: 100%;
  height: 55px;
  line-height: 30px;
  
  border: 2px solid transparent;
  border-radius: 10px;
  outline: none;
 
  color:white;
  transition: 0.5s ease;
}

.input::placeholder {
  color: #94a3b8;
}

.input:focus,
input:hover {
  outline: none;
  border-color: rgba(129, 140, 248);

  box-shadow: 0 0 0 5px rgb(129 140 248 / 30%);
}

.icon {
  position: absolute;
  top: 12px;
  left: 9px;
  fill: none;
  width: 30px;
  height: 30px;
}
/* From Uiverse.io by SharpTH */ 
.cbx {
  -webkit-perspective: 20;
  perspective: 20;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -12px;
  background: #e8e8eb;
  border-radius: 4px;
  transform: translate3d(0, 0, 0);
  cursor: pointer;
  transition: all 0.3s ease;
}

.cbx:hover {
  border-color: #0b76ef;
}

.flip {
  display: block;
  transition: all 0.4s ease;
  transform-style: preserve-3d;
  position: relative;
  width: 20px;
  height: 20px;
}

#cbx {
  display: none;
}

#cbx:checked + .cbx {
  border-color: #0b76ef;
}

#cbx:checked + .flip {
  transform: rotateY(180deg);
}

.front,
.back {
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  border-radius: 2px;
}

.front {
  background: #fff;
  z-index: 1;
}

.back {
  transform: rotateY(180deg);
  background: #0b76ef;
  text-align: center;
  color: #fff;
  line-height: 20px;
  box-shadow: 0 0 0 1px #0b76ef;
}

.back svg {
  margin-top: 3px;
  margin-left: 2px;
  fill: none;
}

.back svg path {
  stroke: #fff;
  stroke-width: 2.5;
  stroke-linecap: round;
  stroke-linejoin: round;
}



</style>