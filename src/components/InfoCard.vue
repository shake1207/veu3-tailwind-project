<template>
  <span class="relative max-h-fit">
    <h3 class="text-4xl font-bold">{{ props.title }}</h3>
    <span
      class="w-[25px] h-[25px] absolute bottom-[-10.58px] right-[-16.94px] border-[#AA666699] border-8 border-solid rounded-full" />
  </span>
  <p class="font-normal text-base leading-[21.79px] tracking-wider">{{ props.content }}</p>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  title: String,
  content: String
})
</script>