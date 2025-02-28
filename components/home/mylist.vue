<template>
    <div class=" grid grid-cols-2 p-1 sm:grid-cols-3 lg:grid-cols-4">
        <template class=" m-1 md:m-2 shadow  rounded-xl" v-for="i in 10">
           <NuxtLink :to="'/orchid/'+i">
            <div class="m-1  " style="aspect-ratio: 1/1;">
                <img src="https://img.wubug.cn/%E6%A2%85-%E6%96%B9%E5%BD%A2.jpg" alt="" class=" w-full
                h-full object-cover rounded-xl">
            </div>
            <h1 class="text-center">name {{ '《' +i +"》" }}</h1>
           </NuxtLink>
            
        </template>
    </div>
</template>