<template>
    <div class="">
        <myheader></myheader>
        <!-- 顶部空余 -->
        <div class="h-12 w-full"></div>
        <slot></slot>
        <myfooter></myfooter>
        <ul class="flex justify-around bg-blue-600 fixed left-0
       bottom-0 w-full h-10 text-xl font-bold text-white  rounded-xl
       *:align-middle *:leading-10
      ">
            <li>
                <NuxtLink to="/">首页</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/fenlei">分类</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/new">文章</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/about">我们</NuxtLink>
            </li>
        </ul>
    </div>
</template>