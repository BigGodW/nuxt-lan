<template>
    <div class="">
        <BaseHeader class="fixed z-20 top-0 w-full"></BaseHeader>
        <!-- 顶部空余 -->
        <div class="h-12 w-full  sm:h-16 lg:h-24 "></div>
        <slot></slot>
        
        <myfooter></myfooter>
        <div class="h-18 w-full"> &nbsp;</div>
        <HomePhonefooter class="fixed bottom-0 w-full md:hidden  bg-slate-100 "></HomePhonefooter>
    </div>
</template>