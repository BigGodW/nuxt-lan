<template>
    <div>
        <div class="flex m-1 *:shadow-sm">
            <div class=" w-24 h-32 text-white
             bg-gradient-to-b from-indigo-500
            bg-red-100 flex-none relative rounded-md m-1 p-2""
            >
                <h1>在线直播</h1>
                <p class=" text-[12px]">19:00-23:00</p>
                <a href="https://live.douyin.com/215450079114"
                    class="border rounded-full px-2 bg-blue-400 text-[14px] text-white absolute bottom-2 right-2 mx-auto">去看直播</a>
            </div>
            <div class="flex flex-col justify-center overflow-scroll relative bg-blue-100 p-2 m-1 rounded-md">
                <h1 class="text-xl m-1">官方社交平台</h1>
                <p class=" absolute text-2xl text-slate-300 font-bold top-0 right-0">兰花博览园</p>
                <div class=" flex *:w-20  text-[14px] *:text-center
                *:flex *:flex-col *:items-center
                ">
                    <NuxtLink to="https://v.douyin.com/i5k1aWEw/" >
                        <p>抖音</p>
                        <svg class="icon text-[50px]" aria-hidden="true">
                            <use xlink:href="#icon-douyin-01"></use>
                        </svg>
                    </NuxtLink>
                    <NuxtLink to="https://v.kuaishou.com/m5TPfX">
                        <p>快手</p>
                        <svg class="icon text-[50px]" aria-hidden="true">
                            <use xlink:href="#icon-kuaishou"></use>
                        </svg>
                    </NuxtLink>
                    <div>
                        <p>微信</p>
                        <svg class="icon text-[50px]" aria-hidden="true">
                            <use xlink:href="#icon-weixin"></use>
                        </svg>
                    </div>
                    <div>
                        <p>小红书</p>
                        <svg class="icon text-[50px]" aria-hidden="true">
                            <use xlink:href="#icon-xiaohongshu-01"></use>
                        </svg>
                    </div>
                    <div>
                        <p>微博</p>
                        <svg class="icon text-[50px]" aria-hidden="true">
                            <use xlink:href="#icon-weibo"></use>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
useHead({
    script: [{ src: "https://at.alicdn.com/t/c/font_4842723_ns7lqycbrtp.js?spm=a313x.manage_type_myprojects.i1.10.1d843a81MqSCwd&file=font_4842723_ns7lqycbrtp.js" }]
})
definePageMeta({
    layout: 'blankpage'
})
</script>
<style type="text/css">
.icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>