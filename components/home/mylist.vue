<template>
    <div class=" grid grid-cols-2 p-1">
        <div class=" m-1 shadow  rounded-xl" v-for="i in 10">
            <div class="w-full ">
                <img src="https://img.wubug.cn/%E6%A2%85%E7%93%A3.jpg" alt="" class="w-full aspect-square object-cover rounded-xl">
            </div>
            <h1 class="text-center">name {{ '《' +i +"》" }}</h1>
            
        </div>
    </div>
</template>