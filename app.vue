<template>
  <div class=" bg-white text-black">
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
</template>
<script setup>
useHead({
    script: [{ src: "https://at.alicdn.com/t/c/font_4842723_w9whaduuft.js" }]

    //at.alicdn.com/t/c/font_4842723_p284edhvg2s.js
})
const useOtypes = useOrchidType()
const useOclass = useOrchidClass()
useOtypes.getOrchidTypeList()
useOclass.getOrchidClassList()
</script>
