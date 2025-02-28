<template>
    <NuxtLink to="/article/1">
        <div class="flex m-1">
        <div class=" w-36 shrink-0" >
            <img class="rounded-md w-full h-full aspect-video object-cover" src="http://img.wubug.cn/%E5%85%BB%E5%85%B0.jpg" alt="">
        </div>
        <div class="flex flex-col justify-center bg-red-100 p-1">
            <h1 class="text-md font-medium">文章标题</h1>
            <p class=" line-clamp-2 text-sm">文章内容文章内容文章内容文章内容文章内容... ...文章内容... ...</p>
            <div class=" flex justify-between">
                <div class="flex items-center"><UIcon name="streamline:fastforward-clock-solid mr-1" class="w-4 h-4" /><span class="text-[12px]">2025年2月11日</span></div>
                <span>
                    <UIcon name="streamline:mail-send-forward-email-email-send-message-envelope-actions-action-forward-arrow" class="w-4 h-4 mr-1" />
                </span>
            </div>
        </div>
    </div>
    </NuxtLink>
</template>