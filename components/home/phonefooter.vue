<template>
    <div class="py-1 ">
        <div class="flex justify-around">
            <NuxtLink to="/" class="flex flex-col items-center  "
            activeClass="text-blue-600 font-black scale-110"
            >
                <svg class="icon text-[30px]" aria-hidden="true">
                    <use xlink:href="#icon-home"></use>
                </svg>
                <span class="text-[14px]">首页</span>
            </NuxtLink>
            <NuxtLink to="/blank" class="flex flex-col items-center" activeClass="text-blue-600 font-black scale-110">
                <svg class="icon text-[30px]" aria-hidden="true">
                    <use xlink:href="#icon-bihualanhua"></use>
                </svg>
                <span class="text-[14px]">兰文化</span>
            </NuxtLink>
            <NuxtLink to="/fenlei" class="flex flex-col items-center" activeClass="text-blue-600 font-black scale-110">
                <svg class="icon text-[30px]" aria-hidden="true">
                    <use xlink:href="#icon-all-fill"></use>
                </svg>
                <span class="text-[14px]">分类</span>
            </NuxtLink>
            <NuxtLink to="/new" class="flex flex-col items-center" activeClass="text-blue-600 font-black scale-110">
                <svg class="icon text-[30px]" aria-hidden="true">
                    <use xlink:href="#icon-a-New-outline3"></use>
                </svg>
                <span class="text-[14px]">新闻</span>
            </NuxtLink>
            <NuxtLink to="/about" class="flex flex-col items-center" activeClass="text-blue-600 font-black scale-110">
                <svg class="icon text-[30px]" aria-hidden="true">
                    <use xlink:href="#icon-qiye"></use>
                </svg>
                <span class="text-[14px]">公司</span>
            </NuxtLink>
        </div>
    </div>
</template>