<template>
    <div class="">
        <myheader></myheader>
        <!-- 顶部空余 -->
        <div class="h-12 w-full"></div>
        <slot></slot>
        <myfooter></myfooter>
        <ul class="flex justify-around bg-amber-100 fixed 
       bottom-0 w-full h-10 
       *:align-middle *:leading-10
      ">
            <li>
                <NuxtLink to="/">首页</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/fenlei">分类</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/new">新闻</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/about">我们</NuxtLink>
            </li>
        </ul>
    </div>
</template>