<template>
    <UCarousel v-slot="{ item }" ref="carouselRef"
     :items="items" class="w-full h-56 overflow-hidden  rounded-xl" 
     arrows indicators>
      <img :src="item" class=" object-cover w-screen h-full p-2 rounded-xl" draggable="false">
    </UCarousel>
   <div>
    
   </div>
</template>

<script setup>
const carouselRef = ref()
const items = [
//   'https://img.wubug.cn/%E5%A4%A9%E5%BA%9C%E5%85%B0%E8%B0%B7.jpg',
  'https://img.wubug.cn/%E5%A4%A7%E5%AD%A6%E7%94%9F%E5%88%9B%E4%B8%9A',
  'https://img.wubug.cn/%E5%A4%A9%E5%BA%9C%E5%85%B0%E8%B0%B7.jpg'
]

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0)
    }

    carouselRef.value.next()
  }, 3000)
})
</script>