<template>
  <div class=" lg:flex lg:justify-between">
    <div class=" aspect-video w-full max-w-4xl m-auto">
      <UCarousel v-slot="{ item }" :items="items" :ui="{ item: 'basis-full' }" class="rounded-lg overflow-hidden" arrows indicators>
    <img :src="item" class="w-full" draggable="false">
  </UCarousel>
    </div>
    <div class="hidden lg:block m-auto">
      <!-- 热门文章 -->
      <h1>热门文章</h1>
      <ul>
        <li><h1>热门文章推荐11111111</h1></li>
        <li><h1>热门文章推荐11111111</h1></li>
        <li><h1>热门文章推荐11111111</h1></li>
        <li><h1>热门文章推荐11111111</h1></li>
        <li><h1>热门文章推荐11111111</h1></li>
        <li><h1>热门文章推荐11111111</h1></li>
      </ul>
    </div>
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