<template>
  <div class="flex flex-col flex-1 z-0">
    <div class="relative">
      <picture>
        <source media="(min-width: 1024px)" srcset="@/assets/images/bg-pc.png">
        <img src="@/assets/images/bg-mb.png" alt="白頭翁" class="w-full h-auto">
      </picture>
      <div
        class="w-full text-white absolute bottom-[24.07px] right-0 px-[22.67px] lg:px-[44.75px] flex flex-col items-end justify-end">
        <h1 class="text-5xl text-right font-bold leading-[50px] lg:leading-[65.38px] max-w-[285.28px] lg:max-w-full">
          白頭翁 (Chinese bulbul)
        </h1>
        <p class="mt-[9.35px] lg:mt-1 font-normal text-lg leading-[24.52px] text-center">
          又名白頭鵯。以果實、昆蟲為主食，無法消化小米、穀類。平均壽命約 8-10
          年。
        </p>
      </div>
    </div>
    <div
      class="flex flex-col flex-1 lg:flex-row bg-[#DCCCBC] pt-[50.86px] px-[36.38px] lg:px-[50.74px] pb-[71.91px] lg:pb-[84px] gap-y-[50.5px] lg:gap-x-[79px] lg:flex-wrap">
      <div class="flex flex-row gap-x-[37.84px] lg:flex-1 lg:min-w-[278.51px] " v-for="(infoItem, index) in infos"
        :key="`${index}${infoItem.title}`">
        <InfoCard :title="infoItem.title" :content="infoItem.content" />
      </div>
    </div>
  </div>
</template>
<script setup>

import InfoCard from '@/components/InfoCard.vue'

const infos = [{
  title: '外觀',
  content: '白頭鵯體長約17到22公分，額至頭頂純黑色而富有光澤，兩眼上方至後枕白色，形成一白色枕環。耳羽後部有一白斑，此白環與白斑在黑色的頭部均極為醒目，老鳥的枕羽(後頭部)更潔白，所以又叫「白頭翁」。'
},
{
  title: '棲地',
  content: '白頭翁和麻雀、綠繡眼合稱「城市三寶」，常成群出現在平原區灌木叢、丘陵樹林地帶，以及校園、公園、庭院、行道中的各種高高的電線與樹上。'
},
{
  title: '食性',
  content: '以果樹的漿果和種子為主食，並時常飛入果園偷吃果實，還會吃嫩葉嫩芽，尤其是胡蝶蘭的嫩葉嫩芽葉，偶爾啄食昆蟲。'
},
]
</script>