<template>
    <div>
        <NuxtLink :to="'/article/' + articleId" class=" rounded-2xl shadow-md mx-2 flex items-center p-1">
            <div class="w-36 flex-none mr-2">
                <img :src="imgsrc" class="w-full object-cover aspect-video rounded-lg" alt="">
            </div>
            <div>
                <h1 class="text-[16px]">{{ title }}</h1>
                <p class="text-[14px] line-clamp-1">{{ description }}</p>
                <p>查看 点赞 分享</p>
            </div>
        </NuxtLink>
    </div>
</template>
<script setup>
const props = defineProps(['title', 'description', 'imgsrc', 'articleId'])
</script>