<template>
  <div class=" bg-white text-black">
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
</template>
<script setup>
import { useOrchidStore } from '#imports'

useHead({
    script: [{ src: "https://at.alicdn.com/t/c/font_4842723_w9whaduuft.js" }]
})
const useOtypes = useOrchidType()
const useOclass = useOrchidClass()
useOtypes.getOrchidTypeList()
useOclass.getOrchidClassList()

const useSlide = useSlideStore()
useSlide.getHomeSlide()


const useOrchid = useOrchidStore()


</script>
