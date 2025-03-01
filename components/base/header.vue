<template>
    <div class="flex justify-between bg-slate-50 p-2 h-12 sm:h-16 lg:h-24 ">
        <!-- 顶部导航 -->
        <div class="shrink-0 w-48 flex items-center">
            <h1 class="">
                <nuxt-link to="/" style="font-family: '阿里妈妈东方大楷 Regular';"
                    class="btn btn-ghost text-2xl font-bold">中国兰花博览园</nuxt-link>
            </h1>
        </div>
        <!-- 右侧导航栏信息 -->
        <div class="items-center flex">
            <div class=" justify-around *:m-2 hidden sm:flex md:text-2xl">
                <NuxtLink to="/" class="flex flex-col items-center">
                    <span class="">首页</span>
                </NuxtLink>
                <NuxtLink to="/blank" class="flex flex-col items-center"> 
                    <span class="">兰文化</span>
                </NuxtLink>
                <NuxtLink to="/fenlei" class="flex flex-col items-center">
                    <span class="">分类</span>
                </NuxtLink>
                <NuxtLink to="/new" class="flex flex-col items-center">
                    <span class="">新闻</span>
                </NuxtLink>
                <NuxtLink to="/about" class="flex flex-col items-center">
                    <span class="">公司</span>
                </NuxtLink>
            </div>
            <div class="flex items-center">
                <!-- 搜索框 -->
                <NuxtLink to="/search">
                    <input type="search" name="" class="border rounded-full w-24" id="">
                </NuxtLink>
                <svg class="icon text-[30px] sm:hidden" aria-hidden="true">
                    <use xlink:href="#icon-more"></use>
                </svg>
            </div>
        </div>
    </div>
</template>