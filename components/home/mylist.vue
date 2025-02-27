<template>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        <div v-for="i in 5" class=" bg-base-100 shadow-sm m-1 sm:p-2 sm:m-2 ">
            <figure>
                <img class="aspect-square object-cover" src="https://img.wubug.cn/%E6%A2%85-%E6%96%B9%E5%BD%A2.jpg" alt="Shoes" />
            </figure>
            <div class=" p-2">
                <h2 class="text-center font-bold text-xl">春兰 宋梅</h2>
                
            </div>
            <p class="line-clamp-1 sm:line-clamp-2 gap-1 absolute bottom-12 *:btn-info *:bg-green-500">
                    <span class="badge mx-1 first-of-type:ml-0">梅瓣</span>
                    <span class="badge">素花</span>
                </p>
        </div>
    </div>
</template>