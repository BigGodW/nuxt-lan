<template>
   <div class="block lg:flex lg:justify-between m-2">
      <!-- 轮播图 -->
      <div class=" aspect-video  max-w-[640px] sm:mx-auto">
         <div class="aspect-video lg:w-[640px] ">
            <UCarousel v-slot="{ item }" :items="items" :ui="{ item: 'basis-full' }" class="rounded-lg overflow-hidden"
               arrows indicators>
               <img :src="item" class="w-full object-cover" draggable="false">
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
const items = ref([])
const useSlide = useSlideStore()
const slidelist = useSlide.homeSlide.map((item)=>{
   return {
      imgurl:'https://server.orchids.com.cn'+item.img.url,
      title:item.title,
      href:item.href,
      id:item.id
   }
})
items.value = slidelist.map(item => item.imgurl)


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