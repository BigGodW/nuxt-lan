<template>
    <div class=" shadow-md rounded-2xl m-1">
        <NuxtLink :to="'/orchid/'+orchidId">
            <div class="m-1 relative rounded-xl overflow-hidden">
                <img :src="imgSrc" class=" aspect-square w-full  " alt="">
               
                <span class="
                    absolute -top-1 -right-1 
                     font-bold bg-amber-500 p-2 rounded-xl 
                ">{{ ltype }}</span>
            </div>
            <h1 class="text-center py-2 text-[16px] font-bold">{{ title }}  《{{ lclass }}》</h1>
            
        </NuxtLink>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps(['orchidId','imgSrc','title','ltype','lclass'])
</script>