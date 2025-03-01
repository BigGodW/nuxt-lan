<template>
   <div class="block lg:flex lg:justify-between m-2">
      <!-- 轮播图 -->
      <div class=" aspect-video  max-w-[640px] sm:mx-auto">
         <div class="aspect-video lg:w-[640px] ">
            <UCarousel v-slot="{ item }" :items="items" :ui="{ item: 'basis-full' }" class="rounded-lg overflow-hidden"
               arrows indicators>
               <img :src="item" class="w-full" draggable="false">
            </UCarousel>
         </div>
      </div>
      <!-- 热门文章 -->
      <div class=" hidden lg:block min-w-72 ">
         <h1 class="p-2">最新动态</h1>
         <BaseArticleItem 
            v-for="i in 4" 
            title="兰花管护小贴士" 
            description="兰花管护中经常遇到的一些问题问题问题问题问题问题问题问题..."
            imgsrc="https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF" :articleId="i"
></BaseArticleItem>
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