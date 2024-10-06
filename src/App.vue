<template>
  <div class="flex flex-col lg:flex-row min-h-screen bg-gray-100">
    <!-- 左側選單 -->
    <NavigationMenu :menuItems="menuItems" :isActive="isActive" :isMenuOpen="isMenuOpen" @toggleMenu="toggleMenu"
      @handleActive="handleActive" />

    <!-- 主要內容區 -->
    <transition name="fade">
      <RouterView />
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import NavigationMenu from '@/components/NavigationMenu.vue'
import { RouterView } from 'vue-router'

const isMenuOpen = ref(false)
const isActive = ref('characteristic')
const menuItems = [
  { path: '/characteristic', name: 'characteristic', text: '白頭翁的特性' },
  { path: '/story', name: 'story', text: '白頭翁的故事' },
  { path: '/photos', name: 'photos', text: '白頭翁的美照' },
  { path: '/crisis', name: 'crisis', text: '白頭翁的危機' },
]

const windowSize = () => {
  if (window.innerWidth >= 1024) {
    isMenuOpen.value = true
  }
}

const toggleMenu = () => {
  if (window.innerWidth < 1024) {
    isMenuOpen.value = !isMenuOpen.value
  }
}

const handleActive = (name) => {
  isActive.value = name
}

onMounted(() => {
  windowSize()
  window.addEventListener('resize', windowSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', windowSize)
})
</script>
