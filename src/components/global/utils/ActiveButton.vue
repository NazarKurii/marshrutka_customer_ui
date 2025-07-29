<template>
  <button
    @click.stop=""
    :type="type"
    :class="{
      ' bg-amber-600 cursor-pointer hover:bg-amber-700 transition-all duration-200': active,
      'bg-zinc-600/70': !active,
    }"
    class="flex w-full text-white h-[55px] justify-center items-center rounded-xl text-xl font-bold"
  >
    {{ name }}
  </button>
</template>

<script setup lang="ts">
defineProps<{
  active: boolean
  name: string
  type: 'button' | 'submit' | 'reset' | undefined
}>()
</script>

<style scoped></style>
