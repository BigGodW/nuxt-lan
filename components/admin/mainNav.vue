<template>
    <div class="flex flex-col">
        <NuxtLink v-for="item in pathChild" :to="item.url" 
        class="flex items-center py-2 rounded-r-lg"
        activeClass=" bg-blue-400 text-white"
        >
            <!-- {{ item.name }} -->
            <svg class="icon text-2xl m-1 " aria-hidden="true">
                <use v-bind:xlink:href="'#'+item.icon"></use>
            </svg>
            {{ item.name }}
        </NuxtLink>
    </div>
</template>

<script setup>
const pathChild = ref([
    {name:"兰花",url:'/admin/orchid',icon:'icon-qiuzhu'},
    {name:"文章",url:'/admin/article',icon:'icon-xinwen'},
    {name:"分类",url:'/admin/orchidclass',icon:'icon-fuhao-tuceng'},
    {name:"类型",url:'/admin/orchidtype',icon:'icon-fuhao-dagangshu'},
    {name:"轮播",url:'/admin/slide',icon:'icon-lunbotu'},
    {name:"图片",url:'/admin/img',icon:'icon-tupian'},
    {name:"信息",url:'/admin/website',icon:'icon-shouye'},

])
</script>