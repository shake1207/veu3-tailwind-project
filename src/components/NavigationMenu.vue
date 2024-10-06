<template>
  <div :class="[
    'w-full lg:max-w-[345px] bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] lg:z-10',
  ]">
    <div :class="[
      'pt-[19.61px] lg:pt-[78.33px] pl-[26.38px] pr-[18.84px] pb-[19.61px] lg:px-0',
      ,
    ]">
      <div class="flex justify-between lg:justify-center items-center relative">
        <button @click="handleToggleMenu" class="lg:hidden w-6 h-[21px]">
          <img :src="props.isMenuOpen ? closeIcon : hamburgurIcon" alt="menuIcon" />
        </button>
        <h2 :class="['text-xl lg:text-3xl font-bold']">白頭翁不吃小米</h2>
        <span
          class="w-[48.78px] lg:w-[97.56px] h-[48.52px] lg:h-[97.04px] rounded-full shadow-[0_0_6px_0_rgba(0,0,0,0.25)] bg-white z-10 flex items-center justify-center cursor-pointer lg:absolute lg:right-[-47.78px]">
          <Logo />
        </span>
      </div>
      <transition enter-active-class=" transition-all duration-500 ease-in"
        leave-active-class="transition-all duration-500 ease-out" enter-from-class="opacity-0 max-h-0"
        enter-to-class="opacity-100 max-h-[500px]" leave-from-class="opacity-100 max-h-[500px]"
        leave-to-class="opacity-0 max-h-0">
        <ul v-if="props.isMenuOpen" class="flex flex-col gap-y-[17.53px]">
          <li v-for="(item, index) in props.menuItems" :key="item.path"
            :class="['flex justify-center', { 'pt-[23.87px] lg:pt-[75.67px]': props.isMenuOpen && index === 0 }]">
            <router-link :to="item.path" :class="[
              'text-lg font-normal cursor-pointer border-b-2 border-transparent leading-[24.52px] hover:text-[#AA6666] hover:border-solid hover:border-[#AA6666]',
              {
                'text-[#AA6666] border-b-2 border-solid !border-[#AA6666]':
                  item.name === props.isActive,
              },
            ]" @click="handleActive(item.name)">
              {{ item.text }}
            </router-link>
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import Logo from '@/components/LogoC.vue'
import hamburgurIcon from "@/assets/images/hamburgur.png";
import closeIcon from "@/assets/images/close.png";

const props = defineProps({
  menuItems: Array,
  isActive: Boolean,
  isMenuOpen: Boolean,
});

const emits = defineEmits(["toggleMenu", "handleActive"]);

const handleToggleMenu = () => {
  emits("toggleMenu");
};

const handleActive = (name) => {
  emits("handleActive", name);
};
</script>