<template>
    <ul class="flex justify-around bg-blue-600 fixed left-0
       bottom-0 w-full h-10 text-sm font-bold text-white  rounded-xl
       *:align-middle 
      ">
        <li>
            <NuxtLink to="/" class="flex flex-col items-center">
                <UIcon name="streamline:bank-solid" class="w-5 h-5" />
                <span>首页</span>
            </NuxtLink>
        </li>
        <li>
            <NuxtLink to="/fenlei" class="flex flex-col items-center">
                <UIcon name="streamline:travel-hotel-spa-spa-flower-lotus-lily" class="w-5 h-5" />
                <span>分类</span>
            </NuxtLink>
        </li>
        <li>

            <NuxtLink to="/new" class="flex flex-col items-center">
                <UIcon name="streamline:annoncement-megaphone" class="w-5 h-5" />
                <span>新闻</span>
            </NuxtLink>

        </li>
        <li>

            <NuxtLink to="/about" class="flex flex-col items-center">
                <UIcon name="streamline:backpack" class="w-5 h-5" />
                <span>我们</span>
            </NuxtLink>

        </li>
    </ul>
    
</template>
